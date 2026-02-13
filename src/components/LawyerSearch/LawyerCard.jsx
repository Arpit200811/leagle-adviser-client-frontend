import { HiStar, HiCheckCircle, HiOutlineBriefcase, HiOutlineTranslate, HiOutlineVideoCamera, HiOutlineChatAlt } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LawyerCard = ({ lawyer }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 p-6 md:p-8 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col h-full text-left"
        >
            <div className="flex items-start gap-4 md:gap-5 mb-6 md:mb-8">
                <Link to={`/lawyer/${lawyer.id}`} className="relative flex-shrink-0 group/img">
                    <div
                        className="size-16 md:size-20 rounded-[1.25rem] md:rounded-[1.75rem] bg-slate-100 bg-cover bg-center shadow-lg ring-4 ring-white dark:ring-slate-950 transition-transform group-hover/img:scale-105"
                        style={{ backgroundImage: `url("${lawyer.image}")` }}
                    ></div>
                    {lawyer.online && (
                        <div className="absolute -bottom-1 -right-1 bg-emerald-500 size-5 border-4 border-white dark:border-slate-900 rounded-full shadow-lg shadow-emerald-500/30" title="Online"></div>
                    )}
                </Link>
                <div className="flex flex-col gap-1 overflow-hidden">
                    <div className="flex items-center gap-1.5">
                        <Link to={`/lawyer/${lawyer.id}`}>
                            <h3 className="font-black text-slate-900 dark:text-white text-xl tracking-tighter truncate leading-none hover:text-primary transition-colors cursor-pointer">{lawyer.name}</h3>
                        </Link>
                        {lawyer.verified && (
                            <HiCheckCircle className="text-primary text-xl flex-shrink-0" title="Verified Professional" />
                        )}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 truncate">{lawyer.specialty}</p>
                    <div className="flex items-center gap-1.5 text-yellow-400">
                        <HiStar className="text-xl" />
                        <span className="text-sm font-black text-slate-900 dark:text-white leading-none">{lawyer.rating}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">({lawyer.reviews} reviews)</span>
                    </div>
                </div>
            </div>

            <div className="space-y-6 flex-grow">
                <div className="flex flex-wrap gap-2">
                    {lawyer.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 rounded-full border border-slate-100 dark:border-slate-700">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between py-4 border-y border-slate-50 dark:border-slate-800">
                    <div className="flex items-center gap-2 group/info">
                        <div className="size-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover/info:bg-primary group-hover/info:text-white transition-colors">
                            <HiOutlineBriefcase className="text-lg" />
                        </div>
                        <span className="text-xs font-black text-slate-500 dark:text-slate-400 tracking-tight">{lawyer.experience} Exp.</span>
                    </div>
                    <div className="flex items-center gap-2 group/info">
                        <div className="size-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover/info:bg-primary group-hover/info:text-white transition-colors">
                            <HiOutlineTranslate className="text-lg" />
                        </div>
                        <span className="text-xs font-black text-slate-500 dark:text-slate-400 tracking-tight">{(lawyer.languages || []).join(', ')}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-8">
                <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 leading-none mb-1">Fee Rate</span>
                    <div className="flex items-baseline gap-0.5 font-black text-2xl text-slate-900 dark:text-white tracking-tighter">
                        ${lawyer.rate}<span className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">/min</span>
                    </div>
                </div>

                <Link to={`/lawyer/${lawyer.id}`}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl transition-all font-black text-xs uppercase tracking-widest ${lawyer.actionType === 'video'
                            ? 'bg-primary text-white shadow-primary/20 hover:bg-primary-dark'
                            : lawyer.actionType === 'chat'
                                ? 'bg-slate-900 text-white shadow-slate-900/10'
                                : 'bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100'
                            }`}
                    >
                        {lawyer.actionType === 'video' && <HiOutlineVideoCamera className="text-xl" />}
                        {lawyer.actionType === 'chat' && <HiOutlineChatAlt className="text-xl" />}
                        {lawyer.actionLabel}
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

export default LawyerCard;
