import { HiOutlineCloudUpload, HiOutlineDocumentText, HiOutlinePhotograph, HiOutlineTrash, HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { motion } from 'framer-motion';

const DocumentsSidebar = () => {
    const files = [
        { name: "Employment_Contract_v2.pdf", size: "1.2 MB", date: "Yesterday", type: "pdf", color: "red" },
        { name: "Evidence_Photo_01.jpg", size: "3.4 MB", date: "Oct 20", type: "image", color: "blue" },
        { name: "Court_Notes_Oct12.docx", size: "0.5 MB", date: "Oct 12", type: "doc", color: "green" },
    ];

    return (
        <div className="rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col gap-6 transition-all">
            <div className="flex items-center justify-between">
                <h3 className="text-slate-900 dark:text-white text-base font-black uppercase tracking-widest leading-none">Case Files</h3>
                <button className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline decoration-primary/30 underline-offset-4">View All</button>
            </div>

            {/* Upload Widget */}
            <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-slate-50/50 dark:bg-slate-950/30 hover:bg-white dark:hover:bg-slate-900 hover:border-primary/50 transition-all cursor-pointer group shadow-inner">
                <div className="size-12 rounded-full bg-primary/5 dark:bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                    <HiOutlineCloudUpload size={24} />
                </div>
                <p className="text-slate-900 dark:text-white text-sm font-black leading-none">Click to upload</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-2">SVG, PNG, JPG or PDF (max. 10MB)</p>
            </div>

            {/* File List */}
            <div className="flex flex-col gap-2">
                {files.map((file, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-all group cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                    >
                        <div className={`size-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${file.color === 'red' ? 'bg-red-50 text-red-600 dark:bg-red-900/20' :
                                file.color === 'blue' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20' :
                                    'bg-green-50 text-green-600 dark:bg-green-900/20'
                            }`}>
                            {file.type === 'pdf' ? <HiOutlineDocumentText size={22} /> :
                                file.type === 'image' ? <HiOutlinePhotograph size={22} /> :
                                    <HiOutlineDotsCircleHorizontal size={22} />}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                            <p className="text-slate-900 dark:text-white text-xs font-bold truncate leading-none mb-1">{file.name}</p>
                            <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <span>{file.size}</span>
                                <span className="size-1 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                                <span>{file.date}</span>
                            </div>
                        </div>
                        <button className="text-slate-300 opacity-0 group-hover:opacity-100 hover:text-red-500 transition-all p-1">
                            <HiOutlineTrash size={18} />
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default DocumentsSidebar;
