import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineArrowLeft, HiOutlineCheckCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { InputField, Button } from '../common';
import { Navbar } from '../layout/Navbar';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email.trim()) {
            setError('Please enter your email address');
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setLoading(true);
        try {
            const api_url = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            await (await import('axios')).default.post(`${api_url}/auth/forgot-password`, { email });
            setIsSubmitted(true);
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="bg-background-light dark:bg-background-dark transition-colors font-sans flex flex-col pt-16">
            <Navbar />

            <main className="flex-1 flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-[480px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-50 dark:border-slate-800 p-8 md:p-12 text-center"
                >
                    {!isSubmitted ? (
                        <>
                            <div className="mb-8">
                                <div className="size-20 bg-primary/10 rounded-[1.75rem] flex items-center justify-center text-primary mx-auto mb-6">
                                    <HiOutlineMail size={40} />
                                </div>
                                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-3">Forgot Password?</h1>
                                <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest leading-relaxed">
                                    Enter your email and we'll send you a link to reset your password.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <InputField
                                    label="Email Address"
                                    type="email"
                                    placeholder="name@example.com"
                                    icon={HiOutlineMail}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={error}
                                    required
                                />
                                <Button
                                    type="submit"
                                    variant="primary"
                                    loading={loading}
                                    className="h-14 w-full shadow-xl shadow-primary/20"
                                    loadingText="Sending..."
                                >
                                    Send Reset Link
                                </Button>
                            </form>
                        </>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="py-4"
                        >
                            <div className="size-20 bg-emerald-500/10 rounded-[1.75rem] flex items-center justify-center text-emerald-500 mx-auto mb-6">
                                <HiOutlineCheckCircle size={48} />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter mb-3">Check your email</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest leading-relaxed mb-8">
                                We've sent a password reset link to <br />
                                <span className="text-slate-900 dark:text-white lowercase font-black">{email}</span>
                            </p>
                            <Button
                                variant="outline"
                                className="h-14 w-full"
                                onClick={() => setIsSubmitted(false)}
                            >
                                Re-enter email
                            </Button>
                        </motion.div>
                    )}

                    <div className="mt-10 pt-8 border-t border-slate-50 dark:border-slate-800">
                        <Link
                            to="/login"
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors group"
                        >
                            <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            Back to Login
                        </Link>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default ForgotPasswordPage;
