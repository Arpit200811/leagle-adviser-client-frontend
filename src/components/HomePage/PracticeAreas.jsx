import { useState, useEffect } from 'react';
import { HiOutlineUsers, HiOutlineBriefcase, HiOutlineHome, HiOutlinePaperAirplane, HiOutlineKey } from 'react-icons/hi';
import { FaGavel, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const backendIconMap = {
    'Family Law': HiOutlineUsers,
    'Criminal Defense': FaGavel,
    'Business': HiOutlineBriefcase,
    'Real Estate': HiOutlineHome,
    'Immigration': HiOutlinePaperAirplane,
    'Intellectual Property': HiOutlineKey,
};

const backendColorMap = {
    'Family Law': 'text-pink-500',
    'Criminal Defense': 'text-red-500',
    'Business': 'text-blue-500',
    'Real Estate': 'text-amber-500',
    'Immigration': 'text-emerald-500',
    'Intellectual Property': 'text-violet-500',
};

const defaultIcons = [FaLightbulb, FaShieldAlt, HiOutlineBriefcase, HiOutlineKey, HiOutlineUsers];
const defaultColors = ['text-teal-500', 'text-cyan-500', 'text-fuchsia-500', 'text-indigo-500', 'text-rose-500'];

const PracticeAreas = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get('/categories');
                if (response.data && response.data.length > 0) {
                    const mapped = response.data.map((cat, i) => ({
                        id: cat.id,
                        label: cat.name,
                        icon: backendIconMap[cat.name] || defaultIcons[i % defaultIcons.length],
                        color: backendColorMap[cat.name] || defaultColors[i % defaultColors.length]
                    }));
                    setCategories(mapped);
                } else {
                    throw new Error("No data");
                }
            } catch (err) {
                console.warn("Backend unavailable, using default categories fallback", err);
                const defaults = [
                    'Family Law', 'Criminal Defense', 'Business',
                    'Real Estate', 'Immigration', 'Intellectual Property'
                ].map((name, i) => ({
                    id: i + 1,
                    label: name,
                    icon: backendIconMap[name] || defaultIcons[i % defaultIcons.length],
                    color: backendColorMap[name] || defaultColors[i % defaultColors.length]
                }));
                setCategories(defaults);
            }
        };
        fetchCategories();
    }, []);

    return (
        <section className="py-12 bg-white dark:bg-slate-950 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Browse by Category</h2>
                    <p className="text-slate-600 dark:text-slate-400">Find specialized legal help for your specific situation.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cat, index) => (
                        <motion.button
                            key={cat.id || index}
                            onClick={() => navigate(`/find-lawyer?category=${cat.label}`)}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary hover:bg-primary/5 transition-all bg-white dark:bg-slate-900 shadow-sm hover:shadow-md w-full cursor-pointer"
                        >
                            <cat.icon size={40} className={`mb-4 transition-colors ${cat.color} group-hover:text-primary opacity-80 group-hover:opacity-100`} />
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors text-center">
                                {cat.label}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
