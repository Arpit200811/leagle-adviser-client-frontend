import SettingsSidebar from './SettingsSidebar';
import ProfileCard from './ProfileCard';
import BasicDetailsForm from './BasicDetailsForm';
import SecurityQuickAccess from './SecurityQuickAccess';
import { motion } from 'framer-motion';

const SettingsPage = () => {
    // Mock user data
    const user = {
        name: "Jane Doe",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGSEdYY5BsjtbJa4qeAs9iW0K6XGoTkxz5Z-GU1BxqjiGIfqnN9lcq0RTfOc-hbn_du_sFl5cxZxzjhmiv3ua6Zhm3Ku7LFHFl5wAlwUcGcO1r5mlpCWL-terAVQBi7K7xsfx4tgp2pQFtOps_Y_SWyWwdS0uCTSrEakYDPjPSjpSVa0temZtSwb1d1c6hiGLoplC_4lNkYey5tJ46HfsY14URAYYnod1_O4eZq0EYnLSYxibFgjC3ARckgCMQkpGIDpUWMTCH4mA",
        joinedDate: "Nov 2021"
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
                        <ProfileCard user={user} />
                        <BasicDetailsForm />
                        <SecurityQuickAccess />
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

export default SettingsPage;
