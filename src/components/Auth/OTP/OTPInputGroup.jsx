import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const OTPInputGroup = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    return (
        <div className="flex justify-center py-10">
            <div className="flex gap-3 md:gap-5">
                {otp.map((digit, index) => (
                    <motion.input
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        ref={inputRefs[index]}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        autoFocus={index === 0}
                        className="w-12 h-16 md:w-16 md:h-20 text-center text-3xl font-black bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl text-primary focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none shadow-sm placeholder:text-slate-300"
                    />
                ))}
            </div>
        </div>
    );
};

export default OTPInputGroup;
