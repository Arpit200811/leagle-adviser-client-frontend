import { HiStar, HiCheckCircle } from 'react-icons/hi';
import { Button } from '../common';

const LawyerCard = ({ lawyer }) => {
    return (
        <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-5 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
                <div className="relative">
                    <img
                        alt={lawyer.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm"
                        src={lawyer.image}
                    />
                    {lawyer.online && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-800" title="Online"></div>
                    )}
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 bg-yellow-400/10 px-2 py-1 rounded-md">
                        <HiStar className="text-yellow-500 text-[18px]" />
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{lawyer.rating}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">({lawyer.reviews})</span>
                    </div>
                    {lawyer.online && (
                        <span className="text-xs font-medium text-green-600 dark:text-green-400 mt-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            Online
                        </span>
                    )}
                </div>
            </div>

            <div className="mb-4 text-left">
                <div className="flex items-center gap-1 mb-1">
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold group-hover:text-primary transition-colors">
                        {lawyer.name}
                    </h3>
                    {lawyer.verified && (
                        <HiCheckCircle className="text-blue-500 text-[18px]" title="Verified" />
                    )}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{lawyer.specialty}</p>
                <div className="flex flex-wrap gap-2 text-left">
                    {lawyer.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div className="text-left">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Rate</p>
                    <p className="text-slate-900 dark:text-white font-bold text-lg">
                        ${lawyer.rate} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">/ min</span>
                    </p>
                </div>
                <Button variant="primary" className="h-9 px-4 text-sm font-bold">
                    Book Now
                </Button>
            </div>
        </div>
    );
};

export default LawyerCard;
