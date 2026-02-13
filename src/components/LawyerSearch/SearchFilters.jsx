import { HiOutlineAdjustments, HiOutlineChevronUp, HiOutlineChevronDown } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const SearchFilters = ({ filters, setFilters }) => {
    const handlePracticeAreaChange = (area) => {
        const newAreas = filters.practiceAreas.includes(area)
            ? filters.practiceAreas.filter(a => a !== area)
            : [...filters.practiceAreas, area];
        setFilters({ ...filters, practiceAreas: newAreas });
    };

    const handleReset = () => {
        setFilters({
            practiceAreas: [],
            minPrice: 0,
            maxPrice: 15,
            experience: 'Any',
            rating: 0
        });
    };

    return (
        <aside className="w-full flex flex-col gap-6">
            <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto pr-1 custom-scrollbar flex flex-col gap-4 lg:gap-6">

                {/* Filter Header */}
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-3 tracking-tighter">
                        <HiOutlineAdjustments className="text-primary text-2xl" /> Filters
                    </h3>
                    <button
                        onClick={handleReset}
                        className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary-dark transition-colors"
                    >
                        Reset All
                    </button>
                </div>

                <FilterSection title="Practice Area" isOpenDefault>
                    <div className="flex flex-col gap-3.5 px-1">
                        {['Family Law', 'Criminal Defense', 'Corporate Law', 'Immigration', 'Intellectual Property'].map((area, i) => (
                            <label key={area} className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={filters.practiceAreas.includes(area)}
                                        onChange={() => handlePracticeAreaChange(area)}
                                        className="peer appearance-none size-5 rounded-lg border-2 border-slate-200 dark:border-slate-800 checked:bg-primary checked:border-primary transition-all cursor-pointer shadow-sm"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-white scale-0 peer-checked:scale-100 transition-transform">
                                        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                </div>
                                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">{area}</span>
                            </label>
                        ))}
                        <button className="text-[10px] font-black uppercase tracking-widest text-primary text-left mt-2 hover:underline">+ Show 12 more</button>
                    </div>
                </FilterSection>

                <FilterSection title="Price per minute" isOpenDefault>
                    <div className="px-1 flex flex-col gap-6">
                        <div className="relative h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full mb-2">
                            <div className="absolute left-0 top-0 h-full bg-primary rounded-full w-2/3 shadow-sm"></div>
                            <div className="absolute top-1/2 -mt-2.5 -ml-2.5 left-2/3 h-5 w-5 bg-white border-4 border-primary rounded-full shadow-2xl cursor-pointer"></div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 flex flex-col gap-1.5">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Min</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">$</span>
                                    <input
                                        className="w-full text-sm pl-7 pr-3 py-2.5 border-2 border-slate-50 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950/20 text-slate-900 dark:text-white font-black outline-none transition-all focus:border-primary"
                                        type="number"
                                        value={filters.minPrice}
                                        onChange={(e) => setFilters({ ...filters, minPrice: parseFloat(e.target.value) || 0 })}
                                    />
                                </div>
                            </div>
                            <span className="text-slate-300 mt-5">—</span>
                            <div className="flex-1 flex flex-col gap-1.5">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Max</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">$</span>
                                    <input
                                        className="w-full text-sm pl-7 pr-3 py-2.5 border-2 border-slate-50 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950/20 text-slate-900 dark:text-white font-black outline-none transition-all focus:border-primary"
                                        type="number"
                                        value={filters.maxPrice}
                                        onChange={(e) => setFilters({ ...filters, maxPrice: parseFloat(e.target.value) || 0 })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </FilterSection>

                <FilterSection title="Experience" isOpenDefault>
                    <div className="flex flex-col gap-3.5 px-1">
                        {['Any', '1-3 Years', '3-5 Years', '5-10 Years', '10+ Years'].map((exp, i) => (
                            <label key={exp} className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="radio"
                                        name="experience"
                                        checked={filters.experience === exp}
                                        onChange={() => setFilters({ ...filters, experience: exp })}
                                        className="peer appearance-none size-5 rounded-full border-2 border-slate-200 dark:border-slate-800 checked:border-primary transition-all cursor-pointer"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center scale-0 peer-checked:scale-100 transition-transform">
                                        <div className="size-2.5 bg-primary rounded-full shadow-sm"></div>
                                    </div>
                                </div>
                                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">{exp}</span>
                            </label>
                        ))}
                    </div>
                </FilterSection>

                <FilterSection title="Rating">
                    <div className="flex flex-col gap-4 px-1">
                        <label className="flex items-center gap-3 cursor-pointer group p-2 -ml-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            <input type="checkbox" defaultChecked className="peer appearance-none size-5 rounded-lg border-2 border-slate-200 dark:border-slate-800 checked:bg-primary checked:border-primary transition-all" />
                            <div className="flex text-yellow-400 text-lg">
                                {[1, 2, 3, 4].map(star => <span key={star}>★</span>)}
                                <span className="text-slate-200 dark:text-slate-700">★</span>
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-slate-400">& Up</span>
                        </label>
                    </div>
                </FilterSection>
            </div>
        </aside>
    );
};

const FilterSection = ({ title, children, isOpenDefault = false }) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    return (
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border-2 border-slate-50 dark:border-slate-800 shadow-sm transition-all hover:shadow-md h-fit">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full mb-2 group"
            >
                <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-white group-hover:text-primary transition-colors">{title}</h4>
                <div className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <HiOutlineChevronDown />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SearchFilters;
