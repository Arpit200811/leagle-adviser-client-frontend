import { HiOutlineFolder, HiOutlineFolderOpen, HiOutlineClock, HiOutlineStar, HiOutlineTrash, HiOutlineChevronRight, HiOutlineChevronDown } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';


const VaultSidebar = () => {
    return (
        <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full transition-colors">
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
                {/* Navigation Links */}
                <div className="flex flex-col gap-1">
                    <h3 className="px-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">My Vault</h3>
                    <nav className="flex flex-col gap-1">
                        <SidebarLink icon={<HiOutlineFolder />} label="My Files" active />
                        <SidebarLink icon={<HiOutlineFolderOpen />} label="Shared with Counsel" />
                        <SidebarLink icon={<HiOutlineClock />} label="Recent Uploads" />
                        <SidebarLink icon={<HiOutlineStar />} label="Important" />
                        <SidebarLink icon={<HiOutlineTrash />} label="Trash" />
                    </nav>
                </div>

                {/* Folders Tree Mockup */}
                <div className="flex flex-col gap-1">
                    <h3 className="px-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Folders</h3>
                    <div className="flex flex-col gap-1">
                        <FolderItem label="Contracts" hasChildren />
                        <FolderItem label="Evidence" isOpen hasChildren>
                            <div className="pl-6 pt-1 flex flex-col gap-1">
                                <button className="text-left text-sm font-bold text-primary py-1.5 px-3 rounded-lg bg-primary/5 border border-primary/10">Photos</button>
                                <button className="text-left text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 py-1.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Documents</button>
                            </div>
                        </FolderItem>
                        <FolderItem label="Personal ID" hasChildren />
                    </div>
                </div>
            </div>

            {/* Storage Widget */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-end">
                        <p className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-wider">Storage</p>
                        <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black">4.5 GB / 10 GB</p>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '45%' }}
                            className="h-full bg-primary rounded-full shadow-sm"
                        ></motion.div>
                    </div>
                    <button className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline text-left">Upgrade Plan</button>
                </div>
            </div>
        </aside>
    );
};

const SidebarLink = ({ icon, label, active = false }) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (!active) {
            toast('Feature coming soon!', {
                icon: '🚀',
                style: {
                    borderRadius: '1rem',
                    background: '#0f172a',
                    color: '#fff',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em'
                }
            });
        }
    };

    return (
        <a
            onClick={handleClick}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all border-l-4 cursor-pointer active:scale-95 ${active
                ? 'bg-primary/5 text-primary border-primary shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 border-transparent'
                }`}
        >
            <span className="text-lg">{icon}</span>
            <p className="text-sm font-bold tracking-tight">{label}</p>
        </a>
    );
};


const FolderItem = ({ label, hasChildren, isOpen, children }) => (
    <div className="flex flex-col">
        <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-bold group">
            {hasChildren && (
                <span className="text-slate-400 group-hover:text-primary transition-colors">
                    {isOpen ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
                </span>
            )}
            <span className="flex-1 text-left">{label}</span>
        </button>
        {isOpen && children}
    </div>
);

export default VaultSidebar;
