import { HiSearch, HiExclamation, HiHome, HiSupport } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundState = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-50 dark:border-slate-800 overflow-hidden"
        >
            <div className="flex flex-col items-center py-16 px-10 text-center">
                {/* Error Visual */}
                <div className="relative w-full max-w-[540px] aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoI7OfejRw1bKxdeZkt954LSrsouPl6hk1Jj38KG4vznVnhQH3W7d8jhJPtxcm4_v9cwYR7IL9ekPC8n3Efj9g5QX5MZ10T8amNULZBMzLnmg6Wh17D-Kb5N2mYkD-NE3mLjsoV_edHp2Vi41T1aVL0BWbFwp3ns7sOH9kwkhAzNYfbtOpkviuUm0b0W2_Saqf0uln3bNtODfNmhc4xbySC5JF3w2l0_Kw1T2tSkfWGqJ0_dYTidJagvkhxNOMlX7YXvOONLQJR8bJ")',
                            filter: 'brightness(0.8)'
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", damping: 12 }}
                            className="bg-white/10 backdrop-blur-xl p-8 rounded-full border border-white/20"
                        >
                            <HiSearch className="text-white text-8xl opacity-60" />
                        </motion.div>
                    </div>
                </div>

                <div className="flex max-w-[540px] flex-col items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-red-100 dark:border-red-900/20">
                        <HiExclamation className="text-base" />
                        Case Reference Error
                    </div>
                    <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-none tracking-tighter">Case Not Found (404)</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-bold leading-relaxed mt-2 uppercase tracking-wide text-xs">
                        The legal resource, brief, or consultation session you are trying to access has been archived, moved, or no longer exists in our active registry.
                    </p>
                </div>

                {/* Button Group */}
                <div className="flex flex-col sm:flex-row gap-6 mt-12 w-full max-w-[540px]">
                    <Link to="/my-consultations" className="flex-1">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-center gap-3 rounded-2xl h-16 bg-primary text-white text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 transition-all"
                        >
                            <HiHome className="text-xl" />
                            Return Home
                        </motion.button>
                    </Link>
                    <Link to="/help-center" className="flex-1">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-center gap-3 rounded-2xl h-16 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-black uppercase tracking-[0.2em] border border-slate-100 dark:border-slate-700 transition-all"
                        >
                            <HiSupport className="text-xl" />
                            Contact Support
                        </motion.button>
                    </Link>
                </div>

                {/* Status Indicator */}
                <div className="mt-12 flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 px-6 py-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <span className="flex size-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/20"></span>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none">All other systems are operational</p>
                    <div className="w-px h-3 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                    <button
                        onClick={() => toast.success("System status: All systems operational.")}
                        className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline cursor-pointer"
                    >
                        View Status
                    </button>
                </div>
            </div>

            {/* Bottom Action Row */}
            <div className="border-t border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 px-8 py-6 flex justify-center">
                <button className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest">
                    <HiExclamation className="text-base" />
                    Report a technical issue with this session
                </button>
            </div>
        </motion.div>
    );
};

export default NotFoundState;
