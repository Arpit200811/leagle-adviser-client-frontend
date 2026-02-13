import { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

const InputField = ({
    label,
    type = 'text',
    name,
    id,
    placeholder,
    icon: Icon,
    required = false,
    autoComplete,
    value,
    onChange,
    className = '',
    error,
}) => {

    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <label htmlFor={id || name} className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {label}
                </label>
            )}
            <div className="relative group">
                <input
                    type={inputType}
                    name={name}
                    id={id || name}
                    placeholder={placeholder}
                    required={required}
                    autoComplete={autoComplete}
                    value={value}
                    onChange={onChange}
                    className={`w-full h-11 px-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 ${Icon ? 'pr-11' : ''
                        } ${isPassword ? 'pr-11' : ''}`}
                />

                {isPassword ? (
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
                    </button>
                ) : Icon ? (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                        <Icon size={20} />
                    </div>
                ) : null}
            </div>
            {error && <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mt-1">{error}</p>}
        </div>
    );
};


export default InputField;
