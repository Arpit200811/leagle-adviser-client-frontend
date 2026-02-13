import { Link } from 'react-router-dom';
import { Button } from '../common';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const handleGoogleLogin = () => {
        console.log('Google login clicked');
        // TODO: Implement Google OAuth
    };

    return (
        <div className="mt-8">
            <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white dark:bg-slate-900 px-6 text-slate-500 dark:text-slate-400">Or continue with</span>
                </div>
            </div>

            <div className="mt-6">
                <Button
                    variant="outline"
                    onClick={handleGoogleLogin}
                    className="w-full h-12 flex items-center justify-center gap-3 bg-white dark:bg-slate-800"
                    icon={<FcGoogle size={20} />}
                >
                    Google
                </Button>
            </div>

            <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-primary hover:text-primary-dark">Login here</Link>
            </p>
        </div>
    );
};

export default SocialLogin;
