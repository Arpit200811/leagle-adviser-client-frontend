import { HiOutlineSearch, HiOutlineFilter, HiOutlineDownload, HiOutlineVideoCamera, HiOutlineChatAlt2, HiOutlinePlusCircle, HiOutlineReply } from 'react-icons/hi';

const TransactionTable = () => {
    const transactions = [
        {
            id: 1,
            title: "Consultation with Atty. J. Doe",
            info: "Video Call • 45 mins",
            date: "Oct 24, 2023",
            time: "10:30 AM",
            type: "Service Fee",
            status: "Completed",
            amount: -150.00,
            icon: <HiOutlineVideoCamera />,
            color: "blue"
        },
        {
            id: 2,
            title: "Wallet Top-up",
            info: "Via Stripe • Visa 4242",
            date: "Oct 20, 2023",
            time: "09:15 AM",
            type: "Deposit",
            status: "Completed",
            amount: 500.00,
            icon: <HiOutlinePlusCircle />,
            color: "green"
        },
        {
            id: 3,
            title: "Refund: Canceled Session",
            info: "Refund ID #REF-0982",
            date: "Oct 15, 2023",
            time: "02:45 PM",
            type: "Refund",
            status: "Processed",
            amount: 150.00,
            icon: <HiOutlineReply />,
            color: "orange"
        },
        {
            id: 4,
            title: "Chat with Atty. M. Ross",
            info: "Secure Chat • 15 mins",
            date: "Oct 10, 2023",
            time: "11:00 AM",
            type: "Service Fee",
            status: "Pending",
            amount: -50.00,
            icon: <HiOutlineChatAlt2 />,
            color: "blue"
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700 gap-4">
                <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-widest">Transaction History</h3>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <HiOutlineSearch className="absolute left-3 top-2.5 text-slate-400 text-lg" />
                        <input
                            className="pl-10 pr-4 py-2 text-sm border-2 border-slate-100 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900 focus:ring-primary/20 focus:border-primary w-full md:w-64 dark:text-white font-medium placeholder-slate-400 transition-all text-left"
                            placeholder="Search transactions..."
                            type="text"
                        />
                    </div>
                    <button className="p-2.5 rounded-xl border-2 border-slate-100 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors bg-white dark:bg-slate-800">
                        <HiOutlineFilter size={20} />
                    </button>
                    <button className="p-2.5 rounded-xl border-2 border-slate-100 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors bg-white dark:bg-slate-800">
                        <HiOutlineDownload size={20} />
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-100 dark:border-slate-700">
                        <tr>
                            <th className="px-6 py-4">Transaction Details</th>
                            <th className="px-6 py-4">Date & Time</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Amount (USD)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
                        {transactions.map((t) => (
                            <tr key={t.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition-colors group cursor-default">
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-4">
                                        <div className={`size-10 rounded-2xl flex items-center justify-center text-lg shadow-sm border ${t.color === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:border-blue-900/30' :
                                            t.color === 'green' ? 'bg-green-50 text-green-600 border-green-100 dark:bg-green-900/20 dark:border-green-900/30' :
                                                'bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-900/20 dark:border-orange-900/30'
                                            }`}>
                                            {t.icon}
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="font-bold text-slate-900 dark:text-white leading-tight">{t.title}</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{t.info}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5">
                                    <div className="flex flex-col text-left">
                                        <span className="text-slate-700 dark:text-slate-300 font-bold">{t.date}</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t.time}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-5">
                                    <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${t.type === 'Deposit' ? 'bg-green-50 text-green-700 border-green-100 dark:bg-green-950 dark:text-green-400 dark:border-green-900' :
                                        t.type === 'Refund' ? 'bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-950 dark:text-orange-400 dark:border-orange-900' :
                                            'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                                        }`}>
                                        {t.type}
                                    </span>
                                </td>
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-2">
                                        <div className={`size-2 rounded-full ${t.status === 'Pending' ? 'bg-slate-400 animate-pulse' : 'bg-green-500'}`}></div>
                                        <span className="text-slate-900 dark:text-slate-300 font-bold text-xs">{t.status}</span>
                                    </div>
                                </td>
                                <td className={`px-6 py-5 text-right font-black text-base tabular-nums ${t.amount < 0 ? 'text-slate-900 dark:text-white' : 'text-green-600 dark:text-green-400'}`}>
                                    {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-5 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between bg-slate-50/30 dark:bg-slate-900/30">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Showing <span className="text-slate-900 dark:text-white">1-4</span> of <span className="text-slate-900 dark:text-white">12</span> results
                </span>
                <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-xl border-2 border-slate-100 dark:border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 transition-all" disabled>Previous</button>
                    <button className="px-4 py-2 rounded-xl border-2 border-slate-100 dark:border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm">Next</button>
                </div>
            </div>
        </div>
    );
};

export default TransactionTable;
