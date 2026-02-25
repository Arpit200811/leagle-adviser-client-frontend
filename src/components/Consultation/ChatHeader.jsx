import { HiOutlineVideoCamera } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ChatHeader = ({ lawyer, onStartVideoCall }) => {
    return (
        <div className="flex items-center justify-between px-6 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 z-10 shadow-sm transition-colors">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <div
                        className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-slate-100 dark:ring-slate-800"
                        style={{ backgroundImage: `url("${lawyer.image}")` }}
                    ></div>
                    <span className="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 border-2 border-white dark:border-slate-900 shadow-sm"></span>
                </div>
                <div className="text-left">
                    <h3 className="font-bold text-base leading-tight text-slate-900 dark:text-white">{lawyer.name}</h3>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">Online</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{lawyer.specialty}</span>
                    </div>
                </div>
            </div>

            {/* Live Timer */}
            <div className="hidden sm:flex items-center gap-2 bg-red-50 dark:bg-red-900/10 px-3 py-1.5 rounded-full border border-red-100 dark:border-red-900/30">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-sm font-mono font-medium text-red-600 dark:text-red-400 tabular-nums">00:14:32</span>
            </div>

            {/* Video Call Action */}
            <button
                onClick={onStartVideoCall}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all text-sm font-bold text-primary"
            >
                <HiOutlineVideoCamera className="text-xl" />
                <span className="hidden lg:inline">Switch to Video</span>
            </button>
        </div>
    );
};

export default ChatHeader;
