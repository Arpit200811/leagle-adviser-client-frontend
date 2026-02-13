import { useState } from 'react';
import { HiOutlineChatAlt2, HiOutlineFolderOpen, HiOutlineDocumentText, HiOutlineDownload, HiOutlinePaperAirplane, HiOutlineHashtag } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const ConsultationSidebar = ({ lawyer }) => {
    const [activeTab, setActiveTab] = useState('chat');

    return (
        <aside className="w-96 hidden lg:flex flex-col bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 z-10 shadow-2xl transition-colors">
            {/* Tabs */}
            <div className="flex items-center p-4 gap-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <TabButton
                    active={activeTab === 'chat'}
                    onClick={() => setActiveTab('chat')}
                    icon={<HiOutlineChatAlt2 />}
                    label="Chat"
                />
                <TabButton
                    active={activeTab === 'docs'}
                    onClick={() => setActiveTab('docs')}
                    icon={<HiOutlineFolderOpen />}
                    label="Documents"
                />
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden relative">
                <AnimatePresence mode="wait">
                    {activeTab === 'chat' ? (
                        <ChatTab lawyer={lawyer} key="chat" />
                    ) : (
                        <DocsTab key="docs" />
                    )}
                </AnimatePresence>
            </div>

            {/* Chat Input (Only show if chat tab active) */}
            {activeTab === 'chat' && (
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="relative flex items-center group">
                        <input
                            className="w-full bg-slate-100 dark:bg-slate-800 border-none text-slate-900 dark:text-white text-sm rounded-xl pl-4 pr-12 py-3.5 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-800 transition-all placeholder-slate-400 font-medium"
                            placeholder="Type a message..."
                            type="text"
                        />
                        <button className="absolute right-2 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all shadow-md active:scale-95">
                            <HiOutlinePaperAirplane className="rotate-45" size={18} />
                        </button>
                    </div>
                </div>
            )}
        </aside>
    );
};

const TabButton = ({ active, onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-bold rounded-xl transition-all ${active
            ? 'bg-primary/10 text-primary shadow-inner shadow-primary/5'
            : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 dark:text-slate-500'
            }`}
    >
        <span className="text-lg">{icon}</span>
        {label}
    </button>
);

const ChatTab = ({ lawyer }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="h-full flex flex-col p-4 space-y-4 overflow-y-auto scrollbar-hide bg-slate-50/30 dark:bg-slate-950/20"
    >
        <div className="flex justify-center my-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">Today, 10:00 AM</span>
        </div>

        {/* Messages */}
        <SystemMessage content="Session started securely. All conversations are encrypted." />
        <UserMessage content="Hi Sarah, I just uploaded the updated contract draft we discussed." time="10:05 AM" />
        <LawyerMessage
            image={lawyer.image}
            content="Thanks, I see it. Let me just pull that up on my screen real quick. Are there any specific clauses you're worried about?"
            time="10:06 AM"
        />

        {/* Document Preview */}
        <div className="bg-blue-50 dark:bg-primary/5 border border-primary/10 dark:border-primary/20 rounded-xl p-3.5 flex items-center justify-between shadow-sm group cursor-pointer hover:bg-blue-100 dark:hover:bg-primary/10 transition-colors">
            <div className="flex items-center gap-3 overflow-hidden">
                <div className="size-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-red-500 flex-shrink-0 shadow-sm border border-slate-100 dark:border-slate-700">
                    <HiOutlineDocumentText size={24} />
                </div>
                <div className="flex flex-col min-w-0 text-left">
                    <p className="text-xs font-bold text-slate-900 dark:text-white truncate">Contract_v2_Final.pdf</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase">2.4 MB • Shared now</p>
                </div>
            </div>
            <HiOutlineDownload className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" size={18} />
        </div>

        <UserMessage content="Yes, mainly the indemnity clause on page 3. It seems a bit broad." time="10:08 AM" />
    </motion.div>
);

const DocsTab = () => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="h-full p-4 space-y-3"
    >
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-4 px-2">
            <HiOutlineHashtag /> Files in this session
        </div>
        <DocItem name="Identity_Verification.pdf" size="1.2 MB" />
        <DocItem name="Contract_v2_Final.pdf" size="2.4 MB" isNew />
        <DocItem name="Summary_Notes.docx" size="45 KB" />
    </motion.div>
);

const DocItem = ({ name, size, isNew }) => (
    <div className="p-3 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl flex items-center justify-between hover:border-primary/30 transition-colors group">
        <div className="flex items-center gap-3">
            <div className="size-9 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors font-bold">
                {name.split('.').pop().toUpperCase()}
            </div>
            <div className="text-left">
                <p className="text-xs font-bold dark:text-white">{name}</p>
                <p className="text-[10px] text-slate-400">{size}</p>
            </div>
        </div>
        {isNew && <span className="size-2 bg-primary rounded-full"></span>}
    </div>
);

const SystemMessage = ({ content }) => (
    <div className="flex items-start gap-3 opacity-80">
        <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-500 font-bold">SYS</div>
        <div className="bg-slate-100 dark:bg-slate-800/80 p-3 rounded-2xl rounded-tl-none text-xs text-slate-600 dark:text-slate-400 text-left font-medium">
            {content}
        </div>
    </div>
);

const UserMessage = ({ content, time }) => (
    <div className="flex flex-row-reverse items-end gap-2">
        <div className="flex flex-col gap-1 items-end max-w-[85%]">
            <div className="bg-primary text-white p-3.5 rounded-2xl rounded-tr-none text-sm shadow-md text-left leading-relaxed">
                {content}
            </div>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{time}</span>
        </div>
    </div>
);

const LawyerMessage = ({ content, time, image }) => (
    <div className="flex items-end gap-2">
        <img alt="Lawyer" className="size-8 rounded-full object-cover mb-4 ring-2 ring-white dark:ring-slate-800 shadow-sm" src={image} />
        <div className="flex flex-col gap-1 max-w-[85%]">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3.5 rounded-2xl rounded-tl-none text-sm text-slate-800 dark:text-slate-200 shadow-sm text-left leading-relaxed">
                {content}
            </div>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{time}</span>
        </div>
    </div>
);

export default ConsultationSidebar;
