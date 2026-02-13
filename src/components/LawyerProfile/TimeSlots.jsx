const TimeSlots = ({ dateLabel }) => {
    const slots = [
        { time: '09:00 AM', available: true },
        { time: '10:30 AM', available: true, selected: true },
        { time: '01:00 PM', available: true },
        { time: '02:30 PM', available: true },
        { time: '04:00 PM', available: true },
    ];

    return (
        <div className="mb-4 text-left">
            <h4 className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                Available Times ({dateLabel})
            </h4>
            <div className="grid grid-cols-3 gap-2">
                {slots.map((slot, i) => (
                    <button
                        key={i}
                        className={`py-2 px-1 text-xs font-medium rounded border transition-all ${slot.selected
                                ? 'bg-primary/10 border-primary text-primary shadow-sm'
                                : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary'
                            }`}
                    >
                        {slot.time}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TimeSlots;
