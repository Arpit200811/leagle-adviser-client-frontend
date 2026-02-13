import { HiRefresh } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ConnectionInterrupted = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-50 dark:border-slate-800 p-8 md:p-12"
        >
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-shrink-0">
                    <div className="relative size-24 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-4 border-slate-100 dark:border-slate-800"></div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent"
                        ></motion.div>
                        <HiRefresh className="text-primary text-4xl" />
                    </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4">
                            <h3 className="text-slate-900 dark:text-white text-2xl font-black tracking-tighter">Connection Interrupted</h3>
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/10"
                            >
                                <span className="text-primary text-[10px] font-black uppercase tracking-widest">Retrying in 4s</span>
                            </motion.div>
                        </div>

                        {/* Progress Bar */}
                        <div className="flex flex-col gap-3 py-2">
                            <div className="rounded-full bg-slate-100 dark:bg-slate-800 h-2.5 overflow-hidden shadow-inner">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "75%" }}
                                    transition={{ duration: 1 }}
                                    className="h-full bg-primary"
                                ></motion.div>
                            </div>
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                <p className="text-slate-400">Re-establishing secure video channel...</p>
                                <p className="text-slate-900 dark:text-white">Attempt 2/3</p>
                            </div>
                        </div>

                        <p className="text-slate-500 dark:text-slate-400 text-sm font-bold leading-relaxed">
                            We've lost the encrypted link to your legal consultation session. Please do not refresh the page; we are attempting to reconnect you to your attorney automatically.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ConnectionInterrupted;
