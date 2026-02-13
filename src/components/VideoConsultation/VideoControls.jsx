import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { HiOutlineMicrophone, HiOutlineVideoCamera, HiOutlineDesktopComputer, HiOutlineCog, HiOutlinePhone } from 'react-icons/hi';

import { motion } from 'framer-motion';

const VideoControls = () => {
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(false);
    const [isCamOff, setIsCamOff] = useState(false);

    const handleEndCall = () => {
        toast.success("Consultation ended. Redirecting to dashboard...", {
            style: {
                borderRadius: '1rem',
                background: '#0f172a',
                color: '#fff',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                fontWeight: '900',
            }
        });
        setTimeout(() => navigate('/my-consultations'), 1500);
    };

    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 p-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all">
            <ControlBtn
                icon={<HiOutlineMicrophone className={isMuted ? 'text-red-500' : ''} />}
                label={isMuted ? "Unmute" : "Mute"}
                onClick={() => setIsMuted(!isMuted)}
                active={isMuted}
            />
            <ControlBtn
                icon={<HiOutlineVideoCamera className={isCamOff ? 'text-red-500' : ''} />}
                label={isCamOff ? "Start Camera" : "Stop Camera"}
                onClick={() => setIsCamOff(!isCamOff)}
                active={isCamOff}
            />
            <ControlBtn icon={<HiOutlineDesktopComputer />} label="Share Screen" variant="primary" />
            <ControlBtn icon={<HiOutlineCog />} label="Settings" />

            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 mx-1"></div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleEndCall}
                className="w-14 h-12 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/40 transition-all cursor-pointer"
            >
                <HiOutlinePhone size={24} className="rotate-[135deg]" />
            </motion.button>
        </div>
    );
};


const ControlBtn = ({ icon, label, variant = 'default', onClick, active = false }) => {
    const isPrimary = variant === 'primary';
    return (
        <motion.button
            whileHover={{ y: -2 }}
            onClick={onClick}
            className={`w-12 h-12 flex items-center justify-center rounded-full transition-all group relative cursor-pointer active:scale-90 ${isPrimary
                ? 'bg-primary/10 text-primary hover:bg-primary/20'
                : active
                    ? 'bg-red-50 dark:bg-red-950/20 text-red-500 shadow-inner'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
        >
            <span className="text-xl">{icon}</span>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                {label}
            </span>
        </motion.button>
    );
};


export default VideoControls;
