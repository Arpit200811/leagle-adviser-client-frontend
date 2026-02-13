import { HiShieldCheck } from 'react-icons/hi';
import { motion } from 'framer-motion';

const OTPHeader = () => {
    return (
        <div className="flex flex-col items-center text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-8"
            >
                <div className="bg-primary/10 p-6 rounded-[2rem] inline-flex items-center justify-center text-primary shadow-inner">
                    <HiShieldCheck size={56} />
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col gap-2"
            >
                <h1 className="text-slate-900 dark:text-white text-4xl font-black tracking-tighter leading-none">Security Verification</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base font-bold leading-relaxed max-w-[360px] mx-auto mt-4 px-4 uppercase tracking-widest text-[11px]">
                    To protect your legal data, we've sent a 6-digit verification code to your registered device.
                </p>
            </motion.div>
        </div>
    );
};

export default OTPHeader;
