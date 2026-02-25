import { HiOutlineVideoCamera, HiOutlineChatAlt2, HiOutlineDotsVertical, HiOutlineCalendar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ConsultationCard = ({ session }) => {
    const isUrgent = session.urgent;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-800 p-5 shadow-sm border-l-4 ${isUrgent ? 'border-primary' : 'border-transparent'
                } border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all group`}
        >
            <div className="flex flex-col sm:flex-row items-start sm:items-stretch gap-6">
                {/* Lawyer Image */}
                <div
                    className="w-20 h-20 sm:w-32 sm:h-32 bg-center bg-no-repeat bg-cover rounded-xl shrink-0 shadow-inner group-hover:scale-[1.02] transition-transform"
                    style={{ backgroundImage: `url("${session.lawyerImage}")` }}
                ></div>

                {/* Content */}
                <div className="flex flex-col flex-1 gap-1 text-left">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-2 mb-1.5">
                                {isUrgent ? (
                                    <span className="inline-flex items-center rounded-full bg-red-50 dark:bg-red-900/20 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-red-600 dark:text-red-400 ring-1 ring-inset ring-red-500/10">
                                        Starting in 15m
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-500/10">
                                        Upcoming
                                    </span>
                                )}
                                <span className="text-slate-400 text-xs font-bold flex items-center gap-1">
                                    <HiOutlineCalendar /> {session.dateTime}
                                </span>
                            </div>
                            <h3 className="text-slate-900 dark:text-white text-lg font-black leading-tight">{session.lawyerName}</h3>
                            <p className="text-primary text-sm font-bold tracking-tight">{session.specialty}</p>
                        </div>
                        <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 text-xl">
                            <HiOutlineDotsVertical />
                        </button>
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                        {session.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-slate-50 dark:border-slate-700/50">
                        {session.canJoin ? (
                            <Link to="/video-consultation" state={{ session }}>
                                <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark text-white gap-2 text-sm font-black transition-all shadow-lg shadow-primary/20 animate-pulse-slow">
                                    <HiOutlineVideoCamera className="text-lg" />
                                    <span>Join Room</span>
                                </button>
                            </Link>
                        ) : (
                            <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-slate-100 dark:bg-slate-700 text-slate-400 gap-2 text-sm font-black cursor-not-allowed border border-slate-200 dark:border-slate-600 opacity-60">
                                <HiOutlineVideoCamera className="text-lg opacity-40" />
                                <span>Waiting for host</span>
                            </button>
                        )}
                        <Link to="/consultation" state={{ session }}>
                            <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 gap-2 text-sm font-black transition-all border border-slate-200 dark:border-slate-700">
                                <HiOutlineChatAlt2 className="text-lg" />
                                <span>Message</span>
                            </button>
                        </Link>
                        <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 text-sm font-bold ml-auto transition-all">
                            Reschedule
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ConsultationCard;
