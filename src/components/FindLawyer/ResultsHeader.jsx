import { HiOutlineX } from 'react-icons/hi';

const ResultsHeader = ({ count = 142 }) => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="text-left">
                <h2 className="text-slate-900 dark:text-white font-bold">{count} Lawyers Available</h2>
                <div className="flex gap-2 mt-2 flex-wrap">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        Corporate Law
                        <button className="ml-1 hover:text-primary/70">
                            <HiOutlineX size={14} />
                        </button>
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        Online Now
                        <button className="ml-1 hover:text-primary/70">
                            <HiOutlineX size={14} />
                        </button>
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">Sort by:</span>
                <select className="form-select text-sm border-none bg-slate-50 dark:bg-slate-900 dark:text-white rounded-lg py-2 pl-3 pr-8 focus:ring-0 cursor-pointer font-medium outline-none">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                </select>
            </div>
        </div>
    );
};

export default ResultsHeader;
