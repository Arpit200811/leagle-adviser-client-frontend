import { HiArrowSmUp, HiShieldCheck, HiTicket } from 'react-icons/hi';
import { motion } from 'framer-motion';

const BalanceCard = ({ balance }) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group transition-all hover:shadow-xl hover:shadow-primary/5">
            {/* Decorative background blob */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>

            <div className="relative z-10 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-slate-400 dark:text-slate-500 font-black text-[10px] uppercase tracking-[0.2em]">Current Balance</span>
                    <div className="size-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>

                <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-2xl font-black text-slate-400">$</span>
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl font-black text-primary tracking-tighter"
                    >
                        {Number(balance).toFixed(2)}
                    </motion.span>
                </div>

                <div className="flex flex-col gap-3">
                    <button className="w-full flex items-center justify-center gap-3 rounded-2xl h-14 px-6 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-all text-xs font-black uppercase tracking-widest border border-slate-100 dark:border-slate-700">
                        <HiTicket className="text-xl text-primary" />
                        Transaction History
                    </button>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/50 to-primary"></div>
        </div>
    );
};

export const SecurityBadge = () => (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 flex items-start gap-4 transition-all">
        <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-emerald-600 dark:text-emerald-400 shadow-inner">
            <HiShieldCheck size={24} />
        </div>
        <div className="text-left">
            <h4 className="font-black text-xs uppercase tracking-widest text-slate-900 dark:text-white mb-2">Secure Payments</h4>
            <p className="text-[11px] font-bold text-slate-400 leading-relaxed uppercase tracking-wider">
                Your payment information is encrypted and processed securely. We do not store your full card details.
            </p>
        </div>
    </div>
);

export default BalanceCard;
