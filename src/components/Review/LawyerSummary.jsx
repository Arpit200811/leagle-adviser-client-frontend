const LawyerSummary = ({ lawyer }) => {
    return (
        <div className="flex items-center gap-6 border-b border-slate-100 dark:border-slate-800 pb-8 text-left">
            <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl h-20 w-20 shadow-lg ring-4 ring-slate-50 dark:ring-slate-900"
                style={{ backgroundImage: `url("${lawyer.image}")` }}
            ></div>
            <div className="flex flex-col justify-center gap-1">
                <p className="text-slate-900 dark:text-white text-2xl font-black leading-none tracking-tighter">{lawyer.name}</p>
                <p className="text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest">{lawyer.specialty} • {lawyer.duration}</p>
            </div>
        </div>
    );
};

export default LawyerSummary;
