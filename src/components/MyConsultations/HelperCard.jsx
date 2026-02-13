import { HiOutlineSupport, HiOutlineX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const HelperCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl bg-gradient-to-br from-primary to-blue-700 p-7 text-white shadow-xl relative overflow-hidden group"
        >
            {/* Background patterns */}
            <div className="absolute -right-4 -top-4 size-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>

            <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="size-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md shadow-inner">
                    <HiOutlineSupport size={24} className="text-white" />
                </div>
                <button className="text-white/60 hover:text-white transition-colors">
                    <HiOutlineX size={20} />
                </button>
            </div>

            <div className="text-left relative z-10">
                <h3 className="text-xl font-black mb-2 leading-tight tracking-tight">Need help preparing?</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed font-medium">
                    Check out our guide on how to prepare documents for your first legal consultation.
                </p>
                <button className="w-full bg-white text-primary font-black py-3 rounded-xl text-sm hover:bg-slate-50 transition-all shadow-lg active:scale-[0.98]">
                    Read Guide
                </button>
            </div>
        </motion.div>
    );
};

export default HelperCard;
