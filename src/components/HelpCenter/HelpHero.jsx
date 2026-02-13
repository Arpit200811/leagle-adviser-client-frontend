import { HiSearch } from 'react-icons/hi';
import { motion } from 'framer-motion';

const HelpHero = () => {
    return (
        <div className="w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
            <div className="mx-auto flex max-w-[960px] flex-col items-center justify-center px-4 py-8 md:py-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10 flex flex-col gap-4"
                >
                    <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter text-slate-900 dark:text-white">
                        How can we help you today?
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                        Search our knowledge base for answers regarding your legal consultations, payments, and account security.
                    </p>
                </motion.div>

                {/* Search Input */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="w-full max-w-[640px]"
                >
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-6 flex items-center text-slate-400 group-focus-within:text-primary transition-colors">
                            <HiSearch className="text-2xl" />
                        </div>
                        <input
                            className="h-18 w-full rounded-[2rem] border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950/20 dark:text-white pl-16 pr-40 text-lg font-medium focus:border-primary focus:ring-4 focus:ring-primary/5 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all placeholder:text-slate-300"
                            placeholder="Search for help topics..."
                            type="text"
                        />
                        <div className="absolute inset-y-2 right-2 flex items-center">
                            <button className="h-full px-8 rounded-[1.5rem] bg-primary text-sm font-black uppercase tracking-widest text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Trending Topics */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Trending:</span>
                        {['Refund Policy', 'Booking Fees', 'Video Quality'].map((tag) => (
                            <button key={tag} className="text-xs font-bold text-slate-500 hover:text-primary transition-all bg-slate-50 dark:bg-slate-800 px-4 py-1.5 rounded-full border border-slate-100 dark:border-slate-700">
                                {tag}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HelpHero;
