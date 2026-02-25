const TimeSlots = ({ selectedSlot, onSlotChange }) => {
    const slots = [
        '09:00 AM', '10:00 AM', '11:00 AM',
        '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
    ];

    return (
        <div className="mb-4 text-left">
            <h4 className="font-bold text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                Select Time Slot
            </h4>
            <div className="grid grid-cols-2 gap-2">
                {slots.map((slot, i) => (
                    <button
                        key={i}
                        onClick={() => onSlotChange(slot)}
                        className={`py-3 px-2 text-xs font-bold rounded-xl border transition-all ${selectedSlot === slot
                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-[1.02]'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary/50'
                            }`}
                    >
                        {slot}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TimeSlots;
