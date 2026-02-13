import { useState } from 'react';
import LoginToggle from './LoginToggle';
import LoginForm from './LoginForm';
import LoginSocial from './LoginSocial';
import { motion } from 'framer-motion';

const LoginRight = () => {
    const [loginMethod, setLoginMethod] = useState('email');

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-20 bg-white dark:bg-slate-900 overflow-y-auto"
        >
            <div className="w-full max-w-md mx-auto">
                <div className="text-center lg:text-left space-y-2 mb-8">
                    <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">Welcome Back</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Securely access your legal consultations.</p>
                </div>

                <LoginToggle
                    activeMethod={loginMethod}
                    onChange={setLoginMethod}
                />

                <LoginForm loginMethod={loginMethod} />

                <LoginSocial />
            </div>
        </motion.div>
    );
};

export default LoginRight;
