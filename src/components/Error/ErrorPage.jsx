import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Navbar } from '../layout/Navbar';

import ConnectionInterrupted from './ConnectionInterrupted';
import NotFoundState from './NotFoundState';
import { motion } from 'framer-motion';

const ErrorPage = ({ type = '404' }) => {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors font-sans overflow-x-hidden">
            <Navbar />

            <main className="flex-1 flex flex-col items-center justify-center px-4 py-20">
                <div className="w-full max-w-[960px] flex flex-col gap-12">
                    {/* Conditional Rendering based on Error Type */}
                    {type === 'connection' ? (
                        <ConnectionInterrupted />
                    ) : (
                        <NotFoundState />
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full flex justify-center bg-white dark:bg-slate-900 border-t border-slate-50 dark:border-slate-800 py-16 px-6">
                <div className="max-w-[960px] w-full flex flex-col gap-10 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-10">
                        <Link to="/terms" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">Terms of Service</Link>
                        <Link to="/privacy" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link>
                        <button onClick={() => toast.success("Trust & Security standards coming soon!")} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">Compliance & Trust</button>
                        <button onClick={() => toast.success("Security Standards documentation coming soon!")} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">Security Standards</button>

                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            © 2024 LegalConnect Platform. All communications are end-to-end encrypted.
                        </p>
                        <p className="text-[9px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">
                            Registered Legal Entity ID: LC-992-004-X
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ErrorPage;
