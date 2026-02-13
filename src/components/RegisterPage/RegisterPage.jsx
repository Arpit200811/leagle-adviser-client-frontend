import Logo from './Logo';
import RegisterForm from './RegisterForm';
import SocialLogin from './SocialLogin';
import HeroSection from './HeroSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';


const RegisterPage = () => {
    return (
        <div className="flex min-h-screen bg-background-light dark:bg-background-dark transition-colors font-sans">
            {/* Left Side: Registration Form */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white dark:bg-slate-900 w-full lg:w-[600px] xl:w-[700px] border-r border-slate-100 dark:border-slate-800 relative z-10"
            >
                <div className="absolute top-10 left-10 lg:left-20 xl:left-24">
                    <Link to="/" className="flex items-center gap-2 group text-slate-500 hover:text-primary transition-colors">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-primary/10 transition-colors">
                            <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest">Home</span>
                    </Link>
                </div>
                <Logo />

                <div className="mx-auto w-full max-w-sm lg:w-96 mt-10">
                    <RegisterForm />
                    <p className="mt-8 text-center text-sm font-bold text-slate-500">
                        Already have an account?{' '}
                        <Link to="/login" className="text-primary hover:underline underline-offset-4">Sign in here</Link>
                    </p>
                    <SocialLogin />
                </div>
            </motion.div>

            {/* Right Side: Hero Image */}
            <HeroSection />
        </div>
    );
};

export default RegisterPage;
