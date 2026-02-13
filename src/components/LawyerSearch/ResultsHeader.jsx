import { HiOutlineSortAscending, HiOutlineChevronDown } from 'react-icons/hi';

const ResultsHeader = ({ count }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 shadow-sm mb-6 md:mb-10 text-left">
            <div className="flex flex-col gap-1">
                <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Search Results</p>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
                    Found <span className="text-primary">{count}</span> legal experts
                </h3>
            </div>

            <div className="flex items-center gap-5 w-full sm:w-auto">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Sort by:</span>
                <div className="relative flex-1 sm:min-w-[220px] group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                        <HiOutlineSortAscending className="text-xl" />
                    </div>
                    <select className="appearance-none w-full bg-slate-50 dark:bg-slate-950/20 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white text-[10px] md:text-xs font-black uppercase tracking-widest rounded-2xl px-10 md:px-12 py-3.5 md:py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all cursor-pointer">
                        <option>Recommended</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Highest Rated</option>
                        <option>Most Experienced</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-transform group-hover:translate-y-px">
                        <HiOutlineChevronDown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsHeader;
