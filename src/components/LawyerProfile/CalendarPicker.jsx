import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import moment from 'moment';

const CalendarPicker = ({ selectedDate, onDateChange }) => {
    const [currentMonth, setCurrentMonth] = useState(moment());

    const startDay = currentMonth.clone().startOf('month').startOf('week');
    const endDay = currentMonth.clone().endOf('month').endOf('week');

    const calendar = [];
    let day = startDay.clone();
    while (day.isBefore(endDay)) {
        calendar.push(day.clone());
        day.add(1, 'day');
    }

    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    return (
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-3 text-left">
                <h4 className="font-bold text-sm text-slate-700 dark:text-slate-200">
                    {currentMonth.format('MMMM YYYY')}
                </h4>
                <div className="flex gap-1 text-slate-400">
                    <button
                        onClick={() => setCurrentMonth(currentMonth.clone().subtract(1, 'month'))}
                        className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded transition-colors"
                    >
                        <HiChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => setCurrentMonth(currentMonth.clone().add(1, 'month'))}
                        className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded transition-colors"
                    >
                        <HiChevronRight size={20} />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] mb-2 text-slate-400 font-black uppercase tracking-widest">
                {days.map(d => <span key={d}>{d}</span>)}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-700 dark:text-slate-300">
                {calendar.map((d, i) => {
                    const isSelected = selectedDate === d.format('YYYY-MM-DD');
                    const isCurrentMonth = d.month() === currentMonth.month();
                    return (
                        <button
                            key={i}
                            onClick={() => onDateChange(d.format('YYYY-MM-DD'))}
                            className={`p-2 rounded-lg transition-all font-bold ${isSelected
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-110'
                                    : isCurrentMonth
                                        ? 'hover:bg-slate-200 dark:hover:bg-slate-700'
                                        : 'text-slate-400 opacity-30 cursor-not-allowed'
                                }`}
                        >
                            {d.date()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CalendarPicker;
