const SkeletonCard = () => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-5 shadow-sm relative flex flex-col h-full overflow-hidden">
            {/* Shimmer overlay effect */}
            <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                <div className="flex flex-col items-end gap-2">
                    <div className="w-12 h-6 rounded-md bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                    <div className="w-10 h-3 rounded-md bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                </div>
            </div>
            <div className="mb-4 space-y-3">
                <div className="w-3/4 h-6 rounded bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                <div className="w-1/2 h-4 rounded bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                <div className="flex gap-2">
                    <div className="w-16 h-6 rounded bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                    <div className="w-16 h-6 rounded bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                </div>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div className="space-y-2">
                    <div className="w-8 h-3 rounded bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                    <div className="w-20 h-5 rounded bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                </div>
                <div className="w-24 h-9 rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
