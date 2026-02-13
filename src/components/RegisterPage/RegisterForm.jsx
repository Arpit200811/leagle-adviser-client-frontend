import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputField, Button } from '../common';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiLockClosed } from 'react-icons/hi';
import toast from 'react-hot-toast';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        terms: false
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Full name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }
        if (!formData.terms) newErrors.terms = "You must accept the terms";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
        toast.success('Account created successfully!');
        setTimeout(() => navigate('/my-consultations'), 1000);
        console.log('Form submitted:', formData);
    };



    return (
        <div className="w-full max-w-sm lg:w-96">
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Create your account</h2>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Join thousands of users getting professional legal advice.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <InputField
                    label="Full Name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    icon={HiOutlineUser}
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                />

                <InputField
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    icon={HiOutlineMail}
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />

                <InputField
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    placeholder="(555) 000-0000"
                    icon={HiOutlinePhone}
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <InputField
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Create a password (min. 8 chars)"
                    icon={HiLockClosed}
                    required
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                />

                <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            className={`mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800 ${errors.terms ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                        />
                        <label htmlFor="terms" className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                            I agree to the <Link to="/terms" className="font-semibold text-primary hover:text-primary-dark">Terms & Conditions</Link> and <Link to="/privacy" className="font-semibold text-primary hover:text-primary-dark">Privacy Policy</Link>.
                        </label>
                    </div>
                    {errors.terms && <p className="text-[10px] font-black uppercase tracking-widest text-red-500">{errors.terms}</p>}
                </div>


                <Button type="submit" variant="primary" loading={loading} className="w-full h-12" loadingText="Creating Account...">
                    Create Account
                </Button>
            </form>
        </div>
    );
};

export default RegisterForm;
