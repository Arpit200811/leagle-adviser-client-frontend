import { HiOutlineDotsVertical, HiOutlineDocumentText, HiOutlinePhotograph, HiOutlineHashtag, HiOutlineBriefcase, HiOutlineArrowSmDown } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

import { useState } from 'react';

const FileTable = () => {
    const [files, setFiles] = useState([
        { id: 1, name: "Employment_Contract.pdf", date: "Oct 24, 2023", size: "2.4 MB", shared: true, type: 'pdf' },
        { id: 2, name: "Incident_Photo_01.jpg", date: "Oct 25, 2023", size: "4.1 MB", shared: false, type: 'image' },
        { id: 3, name: "Divorce_Decree_Draft_v2.docx", date: "Oct 26, 2023", size: "12 KB", shared: false, type: 'doc' },
        { id: 4, name: "Financial_Records_2022.zip", date: "Oct 20, 2023", size: "156 MB", shared: true, type: 'zip' },
    ]);

    const toggleShare = (id) => {
        const file = files.find(f => f.id === id);
        setFiles(files.map(f => f.id === id ? { ...f, shared: !f.shared } : f));
        toast.success(`${file.name} is now ${!file.shared ? 'Shared' : 'Private'}`, {
            style: {
                borderRadius: '1rem',
                background: '#0f172a',
                color: '#fff',
                fontWeight: '900',
                textTransform: 'uppercase',
                fontSize: '0.7rem'
            }
        });
    };

    const handleDelete = (id) => {
        const file = files.find(f => f.id === id);
        toast.promise(
            new Promise(resolve => setTimeout(resolve, 800)),
            {
                loading: 'Deleting file...',
                success: `${file.name} deleted`,
                error: 'Error deleting file',
            },
            {
                style: {
                    borderRadius: '1rem',
                    background: '#0f172a',
                    color: '#fff',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    fontSize: '0.7rem'
                }
            }
        ).then(() => {
            setFiles(files.filter(f => f.id !== id));
        });
    };

    const handleDownload = (name) => {
        toast.loading(`Starting download: ${name}`, {
            duration: 1500,
            style: {
                borderRadius: '1rem',
                background: '#0f172a',
                color: '#fff',
                fontSize: '0.7rem',
                fontWeight: '900',
                textTransform: 'uppercase'
            }
        });
    };


    return (
        <div className="px-6 pb-12">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <div className="col-span-5 flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                        Name <HiOutlineArrowSmDown className="text-base" />
                    </div>
                    <div className="col-span-2 hidden md:block">Date Uploaded</div>
                    <div className="col-span-1 hidden sm:block">Size</div>
                    <div className="col-span-3 flex justify-center">Share with Lawyer</div>
                    <div className="col-span-1 text-right">Actions</div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-slate-50 dark:divide-slate-800">
                    {files.map((file) => (
                        <div
                            key={file.id}
                            className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all group"
                        >
                            <div className="col-span-12 sm:col-span-5 flex items-center gap-4 text-left">
                                <div className={`size-11 rounded-xl flex items-center justify-center shadow-sm border ${file.type === 'pdf' ? 'bg-red-50 text-red-600 border-red-100 dark:bg-red-900/20 dark:border-red-900/30' :
                                    file.type === 'image' ? 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:border-blue-900/30' :
                                        file.type === 'doc' ? 'bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-900/20 dark:border-indigo-900/30' :
                                            'bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-900/20 dark:border-orange-900/30'
                                    }`}>
                                    {file.type === 'pdf' && <HiOutlineDocumentText size={22} />}
                                    {file.type === 'image' && <HiOutlinePhotograph size={22} />}
                                    {file.type === 'doc' && <HiOutlineBriefcase size={22} />}
                                    {file.type === 'zip' && <HiOutlineHashtag size={22} />}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-black text-slate-900 dark:text-white truncate leading-tight">{file.name}</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1 sm:hidden">{file.size} • {file.date}</p>
                                </div>
                            </div>

                            <div className="col-span-2 hidden md:block text-sm font-bold text-slate-700 dark:text-slate-300 text-left">{file.date}</div>
                            <div className="col-span-1 hidden sm:block text-sm font-bold text-slate-500 dark:text-slate-500 text-left">{file.size}</div>

                            <div className="col-span-12 sm:col-span-3 flex sm:justify-center mt-2 sm:mt-0">
                                <button
                                    onClick={() => toggleShare(file.id)}
                                    className="flex items-center gap-3 group/toggle cursor-pointer"
                                >
                                    <div className={`w-11 h-6 rounded-full p-1 transition-all duration-300 ${file.shared ? 'bg-primary shadow-sm' : 'bg-slate-200 dark:bg-slate-700'
                                        }`}>
                                        <div className={`size-4 bg-white rounded-full shadow transition-transform duration-300 ${file.shared ? 'translate-x-5' : 'translate-x-0'
                                            }`}></div>
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${file.shared ? 'text-primary' : 'text-slate-400'
                                        }`}>
                                        {file.shared ? 'Shared' : 'Private'}
                                    </span>
                                </button>
                            </div>

                            <div className="col-span-12 sm:col-span-1 flex justify-end items-center relative gap-2">
                                <button
                                    onClick={() => handleDownload(file.name)}
                                    className="p-2 rounded-xl text-slate-400 hover:text-primary hover:bg-primary/5 transition-all opacity-0 group-hover:opacity-100"
                                    title="Download"
                                >
                                    <HiOutlineArrowSmDown size={22} />
                                </button>
                                <button
                                    onClick={() => handleDelete(file.id)}
                                    className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                                    title="Delete"
                                >
                                    <HiOutlineDotsVertical size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="px-6 py-5 border-t border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">Showing <span className="text-slate-900 dark:text-white">1-4</span> of <span className="text-slate-900 dark:text-white">12</span> items</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-30 transition-all" disabled>Previous</button>
                        <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileTable;
