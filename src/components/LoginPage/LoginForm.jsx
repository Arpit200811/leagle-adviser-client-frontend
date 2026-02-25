import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputField, Button } from '../common';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLockClosed, HiOutlineArrowRight } from 'react-icons/hi';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const LoginForm = ({ loginMethod }) => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: '',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (loginMethod === 'otp') {
                // OTP logic placeholder - would call a sendOTP API
                navigate('/otp-verification');
                return;
            }

            await login({
                email: formData.email,
                password: formData.password
            });

            MySwal.fire({
                title: <p className="text-slate-900">Success!</p>,
                text: 'You have logged in successfully.',
                icon: 'success',
                confirmButtonColor: '#135bec',
            }).then(() => {
                navigate('/my-consultations');
            });
        } catch (error) {
            MySwal.fire({
                title: 'Login Failed',
                text: error.response?.data?.message || 'Invalid credentials. Please try again.',
                icon: 'error',
                confirmButtonColor: '#ef4444',
            });
        } finally {
            setLoading(false);
        }
    };

    if (loginMethod === 'otp') {
        return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <InputField
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    placeholder="(555) 000-0000"
                    icon={HiOutlinePhone}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" variant="primary" loading={loading} className="h-12 w-full group" icon={<HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />}>
                    Get OTP
                </Button>
            </form>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <InputField
                label="Email Address"
                type="email"
                name="email"
                placeholder="name@example.com"
                icon={HiOutlineMail}
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
            />
            <div>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</span>
                    <Link to="/forgot-password" size="sm" className="text-sm font-semibold text-primary hover:text-primary-dark">Forgot Password?</Link>
                </div>
                <InputField
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    icon={HiOutlineLockClosed}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
                />
            </div>
            <Button type="submit" variant="primary" loading={loading} className="h-12 w-full group" icon={<HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />}>
                Log In
            </Button>
        </form>
    );
};

export default LoginForm;
