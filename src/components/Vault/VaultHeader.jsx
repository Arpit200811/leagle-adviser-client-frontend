import { Link } from 'react-router-dom';
import { HiSearch, HiLockClosed, HiFolderAdd, HiDocumentAdd } from 'react-icons/hi';

import { motion } from 'framer-motion';

const VaultHeader = () => {
    return (
        <div className="flex-shrink-0 px-6 pt-8 pb-4">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 items-center mb-6 text-sm font-bold text-left">
                <Link className="text-slate-400 hover:text-primary transition-colors" to="/">Home</Link>
                <span className="text-slate-300">/</span>
                <span className="text-slate-900 dark:text-white">Document Vault</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-8 text-left">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">My Document Vault</h1>
                        <div className="p-1 px-2.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/30 flex items-center gap-1.5" title="Secure & Encrypted">
                            <HiLockClosed className="text-emerald-500 text-lg" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Secure</span>
                        </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Securely store and share legal evidence with your counsel.</p>
                </div>

                <div className="flex gap-4">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 text-sm font-black shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all uppercase tracking-widest"
                    >
                        <HiFolderAdd className="text-xl text-primary" />
                        New Folder
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-black transition-all shadow-xl shadow-primary/20 uppercase tracking-widest"
                    >
                        <HiDocumentAdd className="text-xl" />
                        Upload Files
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default VaultHeader;
