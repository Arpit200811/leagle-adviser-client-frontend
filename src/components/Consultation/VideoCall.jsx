import { useState, useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { HiOutlinePhoneXMark, HiOutlineMicrophone, HiOutlineVideoCamera, HiOutlineVideoCameraSlash } from 'react-icons/hi2';
import api from '../../services/api';

const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

const VideoCall = ({ channelName, onLeave, lawyer }) => {
    const [localTracks, setLocalTracks] = useState([]);
    const [remoteUsers, setRemoteUsers] = useState([]);
    const [muted, setMuted] = useState(false);
    const [videoOff, setVideoOff] = useState(false);
    const [callStartTime, setCallStartTime] = useState(null);

    useEffect(() => {
        const init = async () => {
            try {
                const res = await api.get(`/calls/token?channelName=${channelName}`);

                if (res.data.isMock) {
                    console.warn("Using Mock Call Mode - Real Video won't be available");
                    return;
                }

                const { token, uid, appId } = res.data;

                const tracks = await AgoraRTC.createMicrophoneAndCameraTracks().catch(e => {
                    console.error("Device Access Error:", e);
                    return null;
                });

                if (!tracks) return;
                setLocalTracks(tracks);

                await client.join(appId, channelName, token, uid);
                await client.publish(tracks);

                client.on('user-published', async (user, mediaType) => {
                    await client.subscribe(user, mediaType);
                    if (mediaType === 'video') {
                        setRemoteUsers((prev) => {
                            if (prev.find(u => u.uid === user.uid)) return prev;

                            // If first remote user joins, mark call start time
                            if (prev.length === 0) {
                                setCallStartTime(Date.now());
                            }

                            return [...prev, user];
                        });
                    }
                    if (mediaType === 'audio') {
                        user.audioTrack?.play();
                    }
                });

                client.on('user-unpublished', (user) => {
                    setRemoteUsers((prev) => prev.filter((u) => u.uid !== user.uid));
                });
            } catch (err) {
                console.error('Agora Init Error:', err);
            }
        };

        init();

        return () => {
            localTracks.forEach((t) => {
                t.stop();
                t.close();
            });
            client.leave();
        };
    }, []);

    const toggleMute = () => {
        localTracks[0].setEnabled(muted);
        setMuted(!muted);
    };

    const toggleVideo = () => {
        localTracks[1].setEnabled(videoOff);
        setVideoOff(!videoOff);
    };

    const handleEndCall = async () => {
        try {
            // Calculate call duration
            let durationInSeconds = 0;
            if (callStartTime) {
                durationInSeconds = Math.floor((Date.now() - callStartTime) / 1000);
            }

            // Notify backend to end call and deduct balance
            await api.post('/calls/end', {
                channelName,
                durationInSeconds,
                lawyerId: lawyer.id
            });

        } catch (error) {
            console.error('Failed to end call properly:', error);
        } finally {
            onLeave();
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-4">
            <div className="relative w-full max-w-5xl aspect-video bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-800">
                {/* Remote Video */}
                {remoteUsers.length > 0 ? (
                    <div className="w-full h-full" id="remote-player">
                        {remoteUsers.map((user) => (
                            <RemotePlayer key={user.uid} user={user} />
                        ))}
                    </div>
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                        <div className="size-24 rounded-full bg-slate-800 animate-pulse border-4 border-slate-700 overflow-hidden">
                            <img src={lawyer.image} alt="" className="w-full h-full object-cover opacity-50" />
                        </div>
                        <p className="text-slate-400 font-medium animate-pulse">Waiting for {lawyer.name} to join...</p>
                    </div>
                )}

                {/* Local Video Placeholder (Small Draggable-like PiP) */}
                <div className="absolute top-6 right-6 w-48 aspect-video bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl z-10">
                    <LocalPlayer track={localTracks[1]} />
                    {videoOff && (
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                            <HiOutlineVideoCameraSlash className="text-slate-400 text-2xl" />
                        </div>
                    )}
                </div>

                {/* Controls Overlay */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-slate-900/80 backdrop-blur-xl px-10 py-6 rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <button
                        onClick={toggleMute}
                        className={`size-14 rounded-full flex items-center justify-center transition-all ${muted ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'}`}
                    >
                        <HiOutlineMicrophone className="text-2xl" />
                    </button>

                    <button
                        onClick={handleEndCall}
                        className="size-16 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-all shadow-xl shadow-red-600/40 hover:scale-110 active:scale-95"
                    >
                        <HiOutlinePhoneXMark className="text-3xl" />
                    </button>

                    <button
                        onClick={toggleVideo}
                        className={`size-14 rounded-full flex items-center justify-center transition-all ${videoOff ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'}`}
                    >
                        <HiOutlineVideoCamera className="text-2xl" />
                    </button>
                </div>

                {/* Info Bar */}
                <div className="absolute top-6 left-6 flex items-center gap-4 bg-slate-900/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/5">
                    <div className="size-8 rounded-full bg-green-500 animate-pulse"></div>
                    <div>
                        <p className="text-white font-bold text-sm tracking-tight">{lawyer.name}</p>
                        <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest leading-none mt-0.5">Live Secure Session</p>
                    </div>
                </div>
            </div>

            <p className="mt-8 text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">End-to-End Encrypted HD Video Call</p>
        </div>
    );
};

const LocalPlayer = ({ track }) => {
    const elId = 'local-player';
    useEffect(() => {
        if (track) track.play(elId);
        return () => track && track.stop();
    }, [track]);
    return <div id={elId} className="w-full h-full bg-black"></div>;
};

const RemotePlayer = ({ user }) => {
    const elId = `remote-player-${user.uid}`;
    useEffect(() => {
        user.videoTrack.play(elId);
    }, [user]);
    return <div id={elId} className="w-full h-full bg-black"></div>;
};

export default VideoCall;
