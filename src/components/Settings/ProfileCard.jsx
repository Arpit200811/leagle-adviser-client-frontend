import { HiOutlinePencilAlt, HiOutlineCheck, HiOutlineCloudUpload } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ProfileCard = ({ user }) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm transition-all hover:shadow-md">
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:justify-between text-left">
                <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
                    <div className="relative group cursor-pointer">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-28 w-28 ring-4 ring-slate-50 dark:ring-slate-950 shadow-xl transition-transform group-hover:scale-105"
                            style={{ backgroundImage: `url("${user.image}")` }}
                        ></div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute bottom-1 right-1 bg-white dark:bg-slate-800 rounded-full p-2 border border-slate-200 dark:border-slate-700 shadow-xl text-primary"
                        >
                            <HiOutlinePencilAlt className="text-lg" />
                        </motion.div>
                    </div>
                    <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
                        <h3 className="text-slate-900 dark:text-white text-2xl font-black leading-none tracking-tighter">{user.name}</h3>
                        <p className="text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest">Member since {user.joinedDate}</p>
                        <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-900/30">
                            <HiOutlineCheck className="text-sm" /> Verified Client
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto">
                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 bg-slate-50/50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-sm"
                    >
                        <HiOutlineCloudUpload className="text-lg text-primary" />
                        Change Avatar
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
