const LoginToggle = ({ activeMethod, onChange }) => {
    return (
        <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex mb-8">
            <label className="flex-1 relative cursor-pointer group">
                <input
                    checked={activeMethod === 'email'}
                    className="peer sr-only"
                    name="login_method"
                    type="radio"
                    value="email"
                    onChange={() => onChange('email')}
                />
                <div className="py-2.5 text-center text-sm font-medium text-slate-500 dark:text-slate-400 rounded-lg transition-all peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-primary dark:peer-checked:text-white peer-checked:shadow-sm">
                    Email & Password
                </div>
            </label>
            <label className="flex-1 relative cursor-pointer group">
                <input
                    checked={activeMethod === 'otp'}
                    className="peer sr-only"
                    name="login_method"
                    type="radio"
                    value="otp"
                    onChange={() => onChange('otp')}
                />
                <div className="py-2.5 text-center text-sm font-medium text-slate-500 dark:text-slate-400 rounded-lg transition-all peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-primary dark:peer-checked:text-white peer-checked:shadow-sm">
                    OTP via Phone
                </div>
            </label>
        </div>
    );
};

export default LoginToggle;
