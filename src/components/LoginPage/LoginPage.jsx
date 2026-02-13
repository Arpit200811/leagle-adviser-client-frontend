import { Navbar } from '../layout/Navbar';
import LoginLeft from './LoginLeft';
import LoginRight from './LoginRight';

const LoginPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors font-sans pt-16">
            <Navbar />
            <main className="flex-1 flex items-center justify-center p-4 lg:p-8">
                <div className="w-full max-w-[1100px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px] border border-slate-100 dark:border-slate-800">
                    <LoginLeft />
                    <LoginRight />
                </div>
            </main>
        </div>
    );
};

export default LoginPage;
