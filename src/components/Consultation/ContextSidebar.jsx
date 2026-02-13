import { HiStar, HiOutlineCreditCard, HiOutlinePencilAlt, HiOutlinePhone } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ContextSidebar = ({ lawyer }) => {
    return (
        <aside className="hidden lg:flex w-96 flex-col border-l border-slate-400 dark:border-slate-800 bg-white dark:bg-slate-950 h-full overflow-y-auto transition-colors">
            {/* Lawyer Profile Widget */}
            <div className="p-4 border-b border-slate-400 dark:border-slate-800 flex flex-col items-center text-center">
                <div className="size-24 rounded-full p-1 bg-gradient-to-tr from-primary to-transparent mb-3 shadow-lg">
                    <div
                        className="bg-center bg-no-repeat bg-cover rounded-full w-full h-full border-2 border-white dark:border-slate-900"
                        style={{ backgroundImage: `url("${lawyer.image}")` }}
                    ></div>
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white leading-tight">{lawyer.name}</h2>
                <p className="text-sm text-slate-500 font-medium mb-3">{lawyer.firm || 'Pearson Specter Litt LLC'}</p>
                <div className="flex items-center gap-1.5 bg-yellow-50 dark:bg-yellow-900/10 px-3 py-1 rounded-full text-xs font-bold text-yellow-700 dark:text-yellow-500 border border-yellow-100 dark:border-yellow-900/20 shadow-sm">
                    <HiStar className="text-[16px] text-yellow-500 fill-current" />
                    {lawyer.rating} ({lawyer.reviews} Reviews)
                </div>
            </div>

            {/* Billing Widget */}
            <div className="p-4">
                <div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4 border border-slate-400 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Current Session Cost</span>
                        <HiOutlineCreditCard className="text-slate-400 text-lg" />
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-primary tracking-tighter tabular-nums">$75.00</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase">USD</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-400 dark:border-slate-800 flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>Rate: $5.00/m</span>
                        <span>Duration: 15m</span>
                    </div>
                </div>
            </div>

            {/* Notes Widget */}
            <div className="px-4 flex-1 flex flex-col min-h-[200px] text-left">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
                    <HiOutlinePencilAlt className="text-lg text-primary" />
                    Private Notes
                </label>
                <textarea
                    className="flex-1 w-full bg-yellow-50/30 dark:bg-slate-900/20 border border-slate-400 dark:border-slate-800 rounded-xl p-4 text-sm resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder-slate-400 text-slate-700 dark:text-slate-300 transition-all font-medium"
                    placeholder="Jot down key points (visible only to you)..."
                ></textarea>
            </div>

            {/* Actions Area */}
            <div className="p-4 mt-auto">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 bg-red-50 dark:bg-red-900/10 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 transition-all text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/30 font-black py-4 px-4 rounded-xl shadow-sm text-sm"
                >
                    <HiOutlinePhone className="text-xl rotate-[135deg]" />
                    End Consultation
                </motion.button>
                <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-4">
                    Billing stops immediately upon ending.
                </p>
            </div>
        </aside>
    );
};

export default ContextSidebar;
