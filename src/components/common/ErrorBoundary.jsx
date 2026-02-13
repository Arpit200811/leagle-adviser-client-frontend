import React from 'react';
import { HiOutlineExclamationCircle, HiOutlineRefresh } from 'react-icons/hi';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error caught by ErrorBoundary:", error, errorInfo);
    }

    handleRestart = () => {
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-800 p-12 shadow-2xl flex flex-col items-center gap-8">
                        <div className="size-24 rounded-3xl bg-red-50 dark:bg-red-900/10 flex items-center justify-center text-red-500 shadow-inner">
                            <HiOutlineExclamationCircle size={48} />
                        </div>

                        <div className="flex flex-col gap-3">
                            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Oops! Something went wrong.</h1>
                            <p className="text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                                An unexpected error occurred. Don't worry, your data is safe. Let's get you back on track.
                            </p>
                        </div>

                        <button
                            onClick={this.handleRestart}
                            className="group flex items-center justify-center gap-3 w-full h-16 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
                        >
                            <HiOutlineRefresh className="text-xl group-hover:rotate-180 transition-transform duration-500" />
                            Restart Application
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
