import SettingsSidebar from './SettingsSidebar';
import ProfileCard from './ProfileCard';
import BasicDetailsForm from './BasicDetailsForm';
import SecurityQuickAccess from './SecurityQuickAccess';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const SettingsPage = () => {
    const { user } = useAuth();

    // Use actual user data or fallbacks
    const userData = {
        name: user?.name || "Anonymous User",
        email: user?.email || "No email provided",
        image: user?.image || "https://via.placeholder.com/150",
        joinedDate: user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Recently Joined"
    };

    return (
        <div className="bg-background-light dark:bg-background-dark transition-colors font-sans overflow-x-hidden">
            <div className="flex w-full max-w-7xl mx-auto">
                <SettingsSidebar />

                <main className="flex-1 py-10 px-4 md:px-12 flex flex-col gap-10">
                    {/* Header */}
                    <div className="flex flex-col gap-3 text-left">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-none tracking-tighter">Personal Information</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-2xl leading-relaxed">
                            Manage your personal details, contact info, and public profile.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-10"
                    >
                        <ProfileCard user={userData} />
                        <BasicDetailsForm user={userData} />
                        <SecurityQuickAccess />
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

export default SettingsPage;
