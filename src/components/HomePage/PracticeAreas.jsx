import { HiOutlineUsers, HiOutlineBriefcase, HiOutlineHome, HiOutlinePaperAirplane, HiOutlineKey } from 'react-icons/hi';
import { FaGavel } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const categories = [
    { icon: HiOutlineUsers, label: 'Family Law', color: 'text-pink-500' },
    { icon: FaGavel, label: 'Criminal Defense', color: 'text-red-500' },
    { icon: HiOutlineBriefcase, label: 'Business', color: 'text-blue-500' },
    { icon: HiOutlineHome, label: 'Real Estate', color: 'text-amber-500' },
    { icon: HiOutlinePaperAirplane, label: 'Immigration', color: 'text-emerald-500' },
    { icon: HiOutlineKey, label: 'Intellectual Prop.', color: 'text-violet-500' }
];

const PracticeAreas = () => {
    const navigate = useNavigate();
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
                            key={index}
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
