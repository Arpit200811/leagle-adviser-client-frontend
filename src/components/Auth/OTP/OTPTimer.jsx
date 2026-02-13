import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OTPTimer = () => {
    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [seconds]);

    const formatTime = (time) => time.toString().padStart(2, '0');

    return (
        <div className="flex flex-col items-center justify-center py-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Code expires in</p>
            <div className="flex items-center gap-4">
                <TimeBox value="00" label="Minutes" />
                <div className="text-2xl font-black text-slate-200 dark:text-slate-800 self-start mt-2">:</div>
                <TimeBox value={formatTime(seconds)} label="Seconds" />
            </div>
        </div>
    );
};

const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center gap-3">
        <div className="flex h-16 w-20 items-center justify-center rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 shadow-sm overflow-hidden relative">
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
            <p className="text-primary text-2xl font-black leading-none tracking-tighter tabular-nums relative z-10">{value}</p>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest">{label}</p>
    </div>
);

export default OTPTimer;
