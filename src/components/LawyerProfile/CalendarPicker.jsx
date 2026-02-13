import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const CalendarPicker = () => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const dates = [
        { n: 1, c: 'text-slate-400' }, { n: 2, c: 'text-slate-400' }, { n: 3, c: 'text-slate-400' },
        { n: 4, c: '' }, { n: 5, c: '' }, { n: 6, c: '' }, { n: 7, c: 'text-slate-400' },
        { n: 8, c: 'text-slate-400' }, { n: 9, c: 'bg-primary text-white font-bold shadow-md' },
        { n: 10, c: 'border border-primary/30' }, { n: 11, c: '' }, { n: 12, c: '' },
        { n: 13, c: '' }, { n: 14, c: 'text-slate-400' }
    ];

    return (
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-3">
                <h4 className="font-bold text-sm text-slate-700 dark:text-slate-200">October 2023</h4>
                <div className="flex gap-1 text-slate-400">
                    <button className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded transition-colors"><HiChevronLeft size={20} /></button>
                    <button className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded transition-colors"><HiChevronRight size={20} /></button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-slate-400 font-medium">
                {days.map(d => <span key={d}>{d}</span>)}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-700 dark:text-slate-300">
                {dates.map((d, i) => (
                    <button
                        key={i}
                        className={`p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors ${d.c}`}
                    >
                        {d.n}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CalendarPicker;
