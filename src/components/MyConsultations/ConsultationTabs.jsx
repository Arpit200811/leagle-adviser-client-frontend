import { motion } from 'framer-motion';

const ConsultationTabs = ({ activeTab, onTabChange, counts }) => {
    const tabs = [
        { id: 'upcoming', label: `Upcoming (${counts.upcoming})` },
        { id: 'completed', label: 'Completed' },
        { id: 'canceled', label: 'Canceled' },
    ];

    return (
        <div className="border-b border-slate-200 dark:border-slate-800">
            <div className="flex gap-8 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 px-2 text-sm font-bold leading-normal tracking-wide transition-all whitespace-nowrap group ${activeTab === tab.id
                                ? 'border-primary text-slate-900 dark:text-white'
                                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ConsultationTabs;
