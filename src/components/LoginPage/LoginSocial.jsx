import { Link } from 'react-router-dom';
import { Button } from '../common';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';

const LoginSocial = () => {
    return (
        <div className="mt-8 space-y-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-medium">Or continue with</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Button
                    variant="outline"
                    className="h-12 bg-white dark:bg-slate-900"
                    icon={<FcGoogle size={20} />}
                >
                    Google
                </Button>
                <Button
                    variant="outline"
                    className="h-12 bg-white dark:bg-slate-900"
                    icon={<FaLinkedin size={20} className="text-[#0077b5]" />}
                >
                    LinkedIn
                </Button>
            </div>

            <div className="text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-primary hover:text-primary-dark font-semibold transition-colors">Sign up</Link>
                </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-6 text-xs text-slate-400">
                <Link to="/terms" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Terms of Service</Link>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                <Link to="/privacy" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Privacy Policy</Link>
            </div>
        </div>
    );
};

export default LoginSocial;
