import { HiOutlineChatAlt2, HiOutlineX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const LiveChatFAB = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="bg-slate-900 text-white rounded-[1.5rem] px-6 py-4 shadow-2xl flex items-center gap-3 border border-slate-800 mb-2"
                    >
                        <div className="size-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap">Live Support Online</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="size-18 flex items-center justify-center rounded-3xl bg-primary text-white shadow-2xl shadow-primary/40 hover:bg-primary-dark transition-all group relative overflow-hidden"
            >
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>

                <HiOutlineChatAlt2 className={`text-4xl absolute transition-all duration-300 ${isHovered ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`} />
                <HiOutlineX className={`text-4xl absolute transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
            </motion.button>
        </div>
    );
};

export default LiveChatFAB;
