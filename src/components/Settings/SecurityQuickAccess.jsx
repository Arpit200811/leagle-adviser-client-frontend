import { HiOutlineLockClosed, HiOutlineChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

const SecurityQuickAccess = () => {
    return (
        <motion.div
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm transition-all"
        >
            <div className="flex items-center justify-between">
                <div className="flex gap-6 items-center">
                    <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                        <HiOutlineLockClosed size={28} />
                    </div>
                    <div className="flex flex-col text-left gap-0.5">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight leading-none">Password & Security</h3>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Last changed 3 months ago</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline decoration-primary/30 underline-offset-8 transition-all group">
                    Manage <HiOutlineChevronRight className="text-base group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
};

export default SecurityQuickAccess;
