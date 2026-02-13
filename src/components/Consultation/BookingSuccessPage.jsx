import { Link } from 'react-router-dom';
import { HiOutlineCheckCircle, HiOutlineClock, HiOutlineCalendar, HiOutlineArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
const BookingSuccessPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark transition-colors font-sans px-4">


            <main className="flex-1 flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-[560px] bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-50 dark:border-slate-800 p-12 text-center"
                >
                    <div className="mb-10">
                        <div className="size-24 bg-emerald-500/10 rounded-[2rem] flex items-center justify-center text-emerald-500 mx-auto mb-8 relative">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', damping: 10, delay: 0.2 }}
                            >
                                <HiOutlineCheckCircle size={64} />
                            </motion.div>
                        </div>
                        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">Session Confirmed!</h1>
                        <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest leading-relaxed px-6">
                            Your consultation with Atty. Sarah Jenkins has been successfully scheduled.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-10">
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-2">
                            <HiOutlineCalendar className="text-primary text-2xl" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Date</span>
                            <span className="text-sm font-black text-slate-900 dark:text-white tracking-tight">Monday, Oct 24</span>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-2">
                            <HiOutlineClock className="text-primary text-2xl" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Time</span>
                            <span className="text-sm font-black text-slate-900 dark:text-white tracking-tight">2:00 PM EST</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Link to="/my-consultations" className="w-full">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full h-16 bg-primary hover:bg-primary-dark text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                            >
                                Go to Dashboard
                                <HiOutlineArrowRight size={18} />
                            </motion.button>
                        </Link>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">
                            A calendar invite has been sent to your email.
                        </p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default BookingSuccessPage;
