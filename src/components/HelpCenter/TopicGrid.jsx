import { HiCreditCard, HiVideoCamera, HiShieldCheck, HiUser } from 'react-icons/hi';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TopicGrid = () => {
    const navigate = useNavigate(); // Add useNavigate hook

    const topics = [
        {
            title: "Wallet & Payments",
            desc: "Balance, invoices, and automated refund policies.",
            icon: <HiCreditCard />,
            color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
        },
        {
            title: "Consultations",
            desc: "Booking, video call quality, and rescheduling.",
            icon: <HiVideoCamera />,
            color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
        },
        {
            title: "Privacy & Security",
            desc: "Attorney-client privilege and data anonymity.",
            icon: <HiShieldCheck />,
            color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
        },
        {
            title: "Account Settings",
            desc: "Profile management, passwords, and data export.",
            icon: <HiUser />,
            color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20"
        }
    ];

    return (
        <div className="w-full max-w-[960px] mx-auto px-4 py-20">
            <div className="mb-12 text-left">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Browse by Topic</h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-[0.2em] text-[10px] mt-2">Select a category to find detailed guides</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {topics.map((topic, index) => (
                    <motion.a
                        key={topic.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, borderColor: 'var(--primary)' }}
                        className="group flex flex-col gap-5 rounded-3xl border-2 border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 transition-all hover:shadow-2xl hover:shadow-primary/5 cursor-pointer text-left"
                        onClick={() => toast.success(`${topic.title} guide coming soon!`)}
                    >
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 ${topic.color}`}>
                            {topic.icon}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">{topic.title}</h3>
                            <p className="text-sm font-bold text-slate-400 dark:text-slate-500 leading-relaxed">{topic.desc}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default TopicGrid;
