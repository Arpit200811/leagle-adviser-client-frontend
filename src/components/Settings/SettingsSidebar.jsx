import { HiOutlineUser, HiOutlineLockClosed, HiOutlineBell, HiOutlineGlobeAlt, HiOutlineLogout } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SettingsSidebar = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        toast.promise(
            new Promise(resolve => setTimeout(resolve, 1000)),
            {
                loading: 'Signing out...',
                success: 'Successfully signed out',
                error: 'Error signing out',
            },
            {
                style: {
                    borderRadius: '1rem',
                    background: '#0f172a',
                    color: '#fff',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em'
                }
            }
        ).then(() => {
            navigate('/login');
        });
    };

    return (
        <aside className="hidden lg:flex w-72 flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 h-[calc(100vh-65px)] sticky top-[65px] transition-colors">
            <div className="flex flex-col gap-2">
                <h3 className="px-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Settings</h3>

                <SidebarItem icon={<HiOutlineUser />} label="Personal Information" active />
                <SidebarItem icon={<HiOutlineLockClosed />} label="Login & Security" />
                <SidebarItem icon={<HiOutlineBell />} label="Notifications" />
                <SidebarItem icon={<HiOutlineGlobeAlt />} label="Language & Region" />

                <div className="my-4 border-t border-slate-100 dark:border-slate-800"></div>

                <button
                    onClick={handleSignOut}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 cursor-pointer text-slate-500 transition-all mt-auto group active:scale-95"
                >
                    <HiOutlineLogout className="text-xl text-red-500 group-hover:scale-110 transition-transform" />
                    <p className="text-red-500 text-sm font-black uppercase tracking-widest">Sign Out</p>
                </button>
            </div>
        </aside>
    );
};


const SidebarItem = ({ icon, label, active = false }) => (
    <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer transition-all border-l-4 ${active
        ? 'bg-primary/5 border-primary text-primary shadow-sm'
        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 border-transparent'
        }`}>
        <span className="text-xl">{icon}</span>
        <p className="text-sm font-black tracking-tight">{label}</p>
    </div>
);

export default SettingsSidebar;
