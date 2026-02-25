import { useState, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import ContextSidebar from './ContextSidebar';
import { motion } from 'framer-motion';
import io from 'socket.io-client';
import { useAuth } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';

import VideoCall from './VideoCall';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';

const ConsultationPage = () => {
    const { user } = useAuth();
    const location = useLocation();
    const session = location.state?.session || {};

    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isVideoCallActive, setIsVideoCallActive] = useState(false);

    const lawyer = {
        name: session.lawyerName || "Unknown Attorney",
        id: session.lawyerId || "lawyer123",
        specialty: session.specialty || "General Practice",
        image: session.lawyerImage || "https://via.placeholder.com/150",
        rating: 5.0,
        reviews: 0,
        firm: "Independent Practice"
    };

    useEffect(() => {
        if (!user || !lawyer.id) return;

        const fetchChatHistory = async () => {
            // In a real application, make sure `api` is imported, but assuming it's available or we can use fetch/axios
            try {
                // dynamic import so I don't need to change imports at the top
                const apiModule = await import('../../services/api');
                const res = await apiModule.default.get(`/messages/${lawyer.id}`);

                const history = res.data.map(msg => ({
                    sender: msg.senderId === user.id ? 'user' : 'lawyer',
                    senderName: msg.senderId === user.id ? 'You' : lawyer.name,
                    time: new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    type: 'text',
                    content: msg.text
                }));
                setMessages(history);
            } catch (err) {
                console.error("Failed to fetch chat history:", err);
            }
        };

        fetchChatHistory();

        const newSocket = io(SOCKET_URL);
        setSocket(newSocket);

        newSocket.on('connect', () => {
            newSocket.emit('register', user.id);
        });

        newSocket.on('receive_message', (messageData) => {
            const incomingMsg = {
                sender: 'lawyer',
                senderName: lawyer.name,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                type: 'text',
                content: messageData.text
            };
            setMessages(prev => [...prev, incomingMsg]);
            setIsTyping(false);
        });

        newSocket.on('user_typing', ({ senderId, isTyping }) => {
            setIsTyping(isTyping);
        });

        // Listen for incoming video call signals
        newSocket.on('incoming_call', (data) => {
            if (data.callType === 'video') {
                // In a real app, show an accept/reject UI
                // For now, auto-accept or just toggle state if it matches the current session
                if (data.callerId === lawyer.id) {
                    setIsVideoCallActive(true);
                }
            }
        });

        return () => newSocket.close();
    }, [user, lawyer.id]);

    const handleSendMessage = (content) => {
        const newMessage = {
            sender: 'user',
            senderName: 'You',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'text',
            content: content
        };
        setMessages([...messages, newMessage]);

        if (socket) {
            socket.emit('send_message', {
                senderId: user?.id,
                receiverId: lawyer.id,
                text: content
            });
        }
    };

    const startVideoCall = () => {
        if (socket) {
            socket.emit('initiate_call', {
                callerId: user.id,
                callerName: user.name || 'A Client',
                receiverId: lawyer.id,
                callType: 'video',
                channelName: `session_${session.id || 'test'}`
            });
        }
        setIsVideoCallActive(true);
    };

    return (
        <div className="flex flex-1 h-[calc(100vh-4rem)] overflow-hidden relative bg-background-light dark:bg-background-dark transition-colors font-sans">
            {isVideoCallActive && (
                <VideoCall
                    channelName={`session_${session.id || 'test'}`}
                    lawyer={lawyer}
                    onLeave={() => setIsVideoCallActive(false)}
                />
            )}
            <main className="flex-1 flex flex-col h-full bg-white dark:bg-slate-950 relative overflow-hidden transition-colors">
                <ChatHeader lawyer={lawyer} onStartVideoCall={startVideoCall} />
                <MessageList messages={messages} lawyer={lawyer} />
                <ChatInput onSendMessage={handleSendMessage} />
            </main>

            <ContextSidebar lawyer={lawyer} />
        </div>
    );
};

export default ConsultationPage;
