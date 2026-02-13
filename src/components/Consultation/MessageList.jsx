import { HiOutlineDocumentText, HiOutlineDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';

const MessageList = ({ messages, lawyer }) => {
    return (
        <div className="flex-1 overflow-y-auto p-6 space-y-6 chat-scroll bg-[#F9FAFB] dark:bg-[#0B1019] transition-colors">
            {/* Session Meta */}
            <div className="flex justify-center pb-2">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                    Session started at 10:00 AM. Billing rate is $5.00/min.
                </span>
            </div>

            {messages.map((msg, idx) => {
                const isLawyer = msg.sender === 'lawyer';
                return (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`flex gap-3 max-w-2xl ${!isLawyer ? 'ml-auto flex-row-reverse text-right' : 'text-left'}`}
                    >
                        {/* Avatar */}
                        <div
                            className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0 mt-1 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800"
                            style={{ backgroundImage: `url("${isLawyer ? lawyer.image : msg.senderAvatar}")` }}
                        ></div>

                        {/* Content */}
                        <div className={`flex flex-col gap-1 items-${isLawyer ? 'start' : 'end'}`}>
                            <div className="flex items-baseline gap-2">
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                                    {isLawyer ? lawyer.name : 'You'}
                                </span>
                                <span className="text-[10px] font-medium text-slate-400">{msg.time}</span>
                            </div>

                            {msg.type === 'text' && (
                                <div className={`px-4 py-3 shadow-sm max-w-full ${isLawyer
                                        ? 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl rounded-tl-sm text-slate-800 dark:text-slate-100'
                                        : 'bg-primary text-white rounded-2xl rounded-tr-sm'
                                    }`}>
                                    <p className="text-sm leading-relaxed">{msg.content}</p>
                                </div>
                            )}

                            {msg.type === 'attachment' && (
                                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl mt-1 w-full max-w-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                                    <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                                        <HiOutlineDocumentText size={24} />
                                    </div>
                                    <div className="flex-1 overflow-hidden text-left">
                                        <p className="text-sm font-bold truncate dark:text-white">{msg.fileName}</p>
                                        <p className="text-[10px] text-slate-500 uppercase font-black">{msg.fileSize} • {msg.fileExt}</p>
                                    </div>
                                    <HiOutlineDownload className="text-slate-400" size={20} />
                                </div>
                            )}
                        </div>
                    </motion.div>
                );
            })}

            {/* Typing Indicator */}
            <div className="flex gap-3 max-w-2xl text-left">
                <div
                    className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0 mt-1 opacity-50 ring-1 ring-slate-100 dark:ring-slate-800"
                    style={{ backgroundImage: `url("${lawyer.image}")` }}
                ></div>
                <div className="flex items-center px-4 py-3 bg-white dark:bg-slate-800 rounded-2xl rounded-tl-sm border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex space-x-1.5">
                        <div className="w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageList;
