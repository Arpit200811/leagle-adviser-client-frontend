import { toast } from 'react-hot-toast';

const SavedMethods = () => {

    const methods = [
        { type: 'VISA', last4: '4242', expiry: '12/25', brand: 'Visa' }
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4 transition-all">
            <div className="flex justify-between items-center">
                <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">Saved Methods</h3>
                <button className="text-primary text-xs font-black uppercase tracking-widest hover:underline decoration-primary/30 underline-offset-4">Manage</button>
            </div>
            <div className="flex flex-col gap-3">
                {methods.map((method, idx) => (
                    <div
                        key={idx}
                        onClick={() => toast(`Using ${method.brand} card ending in ${method.last4}`, {
                            icon: '💳',
                            style: {
                                borderRadius: '1rem',
                                background: '#0f172a',
                                color: '#fff',
                                fontWeight: '900',
                                textTransform: 'uppercase',
                                fontSize: '0.7rem'
                            }
                        })}
                        className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:border-primary/30 transition-all cursor-pointer group active:scale-95"
                    >
                        <div className="w-12 h-8 bg-slate-950 rounded shadow-inner flex items-center justify-center">
                            <span className="text-white text-[10px] font-black tracking-widest">{method.type}</span>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-sm font-bold text-slate-900 dark:text-white">{method.brand} ending in {method.last4}</span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Expires {method.expiry}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default SavedMethods;
