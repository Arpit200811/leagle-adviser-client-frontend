import { motion } from 'framer-motion';
import { RingLoader } from 'react-spinners';

const Button = ({
    children,
    type = 'button',
    variant = 'primary',
    onClick,
    className = '',
    icon,
    disabled = false,
    loading = false,
    loadingText = 'Processing...',
}) => {
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-dark shadow-md',
        outline: 'bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800',
        secondary: 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700',
        link: 'bg-transparent text-primary hover:text-primary-dark p-0 h-auto',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    const baseStyles = 'inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-lg font-bold transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed text-sm';

    return (
        <motion.button
            whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
            whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {loading ? (
                <>
                    <RingLoader size={18} color="currentColor" />
                    <span>{loadingText}</span>
                </>
            ) : (
                <>
                    {icon && <span className="flex items-center">{icon}</span>}
                    {children}
                </>
            )}
        </motion.button>
    );
};

export default Button;
