import { useState } from 'react';
import { Navbar } from '../../layout/Navbar';
import { toast } from 'react-hot-toast';
import { Button } from '../../common';

import OTPHeader from './OTPHeader';
import OTPInputGroup from './OTPInputGroup';
import OTPTimer from './OTPTimer';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const OTPVerificationPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleVerify = async () => {
        setLoading(true);
        // Simulate verification
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        toast.success('OTP verified successfully!');
        navigate('/my-consultations');
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors font-sans overflow-x-hidden pt-16">
            <Navbar />

            <main className="flex-1 flex items-center justify-center px-4 py-12 md:py-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-[560px] bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-50 dark:border-slate-800 p-8 md:p-16 relative overflow-hidden"
                >
                    {/* Background Decorative Element */}
                    <div className="absolute -top-40 -right-40 size-80 bg-primary/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <OTPHeader />

                        <div className="h-px bg-slate-50 dark:bg-slate-800 w-full my-8 opacity-50"></div>

                        <OTPInputGroup />
                        <OTPTimer />

                        <div className="flex flex-col gap-6 mt-10">
                            <Button
                                onClick={handleVerify}
                                loading={loading}
                                variant="primary"
                                className="w-full h-16 rounded-[1.25rem] shadow-2xl shadow-primary/20 tracking-[0.25em]"
                                icon={<HiArrowRight className="text-lg" />}
                                loadingText="Verifying..."
                            >
                                Verify & Continue
                            </Button>

                            <div className="text-center">
                                <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                                    Didn't receive the code?
                                    <button className="text-primary font-black hover:underline ml-2 uppercase tracking-widest text-[10px]">Resend Code</button>
                                </p>
                            </div>
                        </div>

                        {/* Back Link */}
                        <div className="mt-12 pt-8 border-t border-slate-50 dark:border-slate-800 text-center">
                            <Link
                                to="/login"
                                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors group"
                            >
                                <HiArrowLeft className="text-base transition-transform group-hover:-translate-x-1" />
                                Back to Login
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Simple Footer */}
            <footer className="py-10 text-center">
                <div className="flex justify-center gap-8 mb-4">
                    <Link to="/terms" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Terms</Link>
                    <Link to="/privacy" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Privacy</Link>
                    <button onClick={() => toast.success("Security Policy coming soon!")} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Security</button>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 dark:text-slate-600">© 2024 LegalConnect Inc. All legal interactions are encrypted.</p>
            </footer>
        </div>
    );
};

export default OTPVerificationPage;
