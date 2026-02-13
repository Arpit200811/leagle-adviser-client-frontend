import { HiCheck } from 'react-icons/hi';
import { motion } from 'framer-motion';

const AttributeTags = ({ selectedTags, onToggleTag }) => {
    const tags = [
        "Professional",
        "Knowledgeable",
        "Clear Advice",
        "Empathetic",
        "Responsive"
    ];

    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-slate-900 dark:text-white text-lg font-black tracking-tight uppercase tracking-widest text-xs">What went well?</h3>
            <div className="flex flex-wrap gap-3">
                {tags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                        <motion.button
                            key={tag}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onToggleTag(tag)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 transition-all font-bold text-sm ${isSelected
                                    ? 'bg-primary/10 border-primary text-primary shadow-sm'
                                    : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-200 dark:hover:border-slate-600'
                                }`}
                        >
                            {isSelected && <HiCheck className="text-lg" />}
                            <span className="tracking-tight">{tag}</span>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default AttributeTags;
