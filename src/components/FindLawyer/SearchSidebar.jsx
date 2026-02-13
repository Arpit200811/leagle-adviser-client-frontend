const SearchSidebar = ({ filters, setFilters }) => {
    const practiceAreas = [
        { label: 'Corporate Law', count: 142 },
        { label: 'Criminal Defense', count: 86 },
        { label: 'Divorce & Family', count: 203 },
        { label: 'Immigration', count: 54 },
    ];

    const experienceLevels = [
        { label: 'Any Experience', value: 'any' },
        { label: '5+ Years', value: '5' },
        { label: '10+ Years', value: '10' },
    ];

    const handlePracticeAreaChange = (label) => {
        const newAreas = filters.practiceAreas.includes(label)
            ? filters.practiceAreas.filter(a => a !== label)
            : [...filters.practiceAreas, label];
        setFilters({ ...filters, practiceAreas: newAreas });
    };


    return (
        <aside className="w-full lg:w-72 flex-none space-y-8">
            {/* Specialization Filter */}
            <div className="flex flex-col gap-4">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Practice Area</h3>
                <div className="flex flex-col gap-3">
                    {practiceAreas.map((area) => (
                        <label key={area.label} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                checked={filters.practiceAreas.includes(area.label)}
                                onChange={() => handlePracticeAreaChange(area.label)}
                                className="h-5 w-5 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary dark:bg-slate-800 dark:checked:bg-primary transition duration-150 ease-in-out"
                                type="checkbox"
                            />
                            <span className="text-slate-900 dark:text-slate-300 text-sm font-medium group-hover:text-primary transition-colors">
                                {area.label}
                            </span>
                            <span className="ml-auto text-xs text-slate-500 dark:text-slate-500">{area.count}</span>
                        </label>
                    ))}
                    <button className="text-primary text-sm font-semibold text-left mt-1 hover:underline">+ Show more</button>
                </div>
            </div>

            {/* Experience Filter */}
            <div className="flex flex-col gap-4">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Experience</h3>
                <div className="flex flex-col gap-2">
                    {experienceLevels.map((level) => (
                        <label
                            key={level.value}
                            className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 cursor-pointer hover:border-primary/50 transition-colors"
                        >
                            <input
                                className="h-4 w-4 border-slate-300 text-primary focus:ring-primary bg-transparent"
                                name="experience"
                                type="radio"
                                checked={filters.experience === level.value}
                                onChange={() => setFilters({ ...filters, experience: level.value })}
                            />
                            <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">{level.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="flex flex-col gap-4">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Hourly Rate</h3>
                <div className="flex items-center gap-4">
                    <div className="relative w-full">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                        <input
                            className="w-full pl-6 pr-2 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary outline-none"
                            type="number"
                            value="50"
                            readOnly
                        />
                    </div>
                    <span className="text-slate-400">-</span>
                    <div className="relative w-full">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                        <input
                            className="w-full pl-6 pr-2 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary outline-none"
                            type="number"
                            value={filters.price}
                            onChange={(e) => setFilters({ ...filters, price: parseInt(e.target.value) || 0 })}
                        />
                    </div>
                </div>
                <input
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-primary"
                    max="500"
                    min="50"
                    type="range"
                    value={filters.price}
                    onChange={(e) => setFilters({ ...filters, price: parseInt(e.target.value) })}
                />
            </div>
        </aside>
    );
};

export default SearchSidebar;
