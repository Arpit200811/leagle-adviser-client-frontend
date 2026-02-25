import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HiOutlineLockClosed, HiOutlineArrowLeft, HiOutlineCheckCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { InputField, Button } from '../common';
import { Navbar } from '../layout/Navbar';
import axios from 'axios';

const ResetPasswordPage = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);
        try {
            const api_url = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            await axios.post(`${api_url}/auth/reset-password/${token}`, { password });
            navigate('/login', { state: { message: 'Password reset successfully. Please login.' } });
        } catch (err) {
            setError(err.response?.data?.message || 'Token invalid or expired');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark transition-colors font-sans flex flex-col pt-16">
            <Navbar />

            <main className="flex-1 flex items-center justify-center p-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-[480px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 md:p-12"
                >
                    <div className="mb-8">
                        <div className="size-20 bg-primary/10 rounded-[1.75rem] flex items-center justify-center text-primary mx-auto mb-6">
                            <HiOutlineLockClosed size={40} />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-3">Reset Password</h1>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest leading-relaxed">
                            Create a new password for your account.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <InputField
                            label="New Password"
                            type="password"
                            placeholder="••••••••"
                            icon={HiOutlineLockClosed}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <InputField
                            label="Confirm New Password"
                            type="password"
                            placeholder="••••••••"
                            icon={HiOutlineLockClosed}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={error}
                            required
                        />
                        <Button
                            type="submit"
                            variant="primary"
                            loading={loading}
                            className="h-14 w-full shadow-xl shadow-primary/20"
                        >
                            Update Password
                        </Button>
                    </form>

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

export default ResetPasswordPage;
