import { HiOutlineArrowLeft, HiOutlineLockClosed, HiOutlineClock } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ConsultationHeader = ({ lawyerName }) => {
    return (
        <header className="flex-none h-16 bg-white dark:bg-slate-900 border-b border-slate-400 dark:border-slate-800 px-6 flex items-center justify-between z-20 shadow-sm relative transition-colors">
            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
                    <HiOutlineArrowLeft size={20} />
                </button>
                <div className="flex flex-col text-left">
                    <h2 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">Consultation with {lawyerName}</h2>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[11px] text-green-600 dark:text-green-400 font-bold uppercase tracking-wider">Live & Secure</span>
                    </div>
                </div>
            </div>

            {/* Centered Timer */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 bg-primary/5 dark:bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full shadow-sm">
                <HiOutlineClock className="text-primary text-xl" />
                <span className="text-sm font-mono font-black tabular-nums text-primary">14:32</span>
            </div>

            {/* Right Side Info */}
            <div className="flex items-center gap-4">
                <div className="hidden sm:flex h-8 items-center justify-center gap-x-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30 px-3">
                    <HiOutlineLockClosed className="text-green-600 dark:text-green-400 text-[16px]" />
                    <p className="text-green-700 dark:text-green-300 text-[10px] font-black uppercase tracking-widest">Encrypted</p>
                </div>
                <div className="flex gap-1">
                    <div className="h-3.5 w-1.5 bg-green-500 rounded-full"></div>
                    <div className="h-3.5 w-1.5 bg-green-500 rounded-full"></div>
                    <div className="h-3.5 w-1.5 bg-green-500 rounded-full"></div>
                    <div className="h-3.5 w-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                </div>
            </div>
        </header>
    );
};

export default ConsultationHeader;
