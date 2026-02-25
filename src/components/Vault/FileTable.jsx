import { HiOutlineDotsVertical, HiOutlineDocumentText, HiOutlinePhotograph, HiOutlineHashtag, HiOutlineBriefcase, HiOutlineArrowSmDown } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

import { useState, useEffect } from 'react';
import api from '../../services/api';

const FileTable = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await api.get('/vault');
                setFiles(response.data);
            } catch (error) {
                console.error("Failed to fetch vault files:", error);
            }
        };
        fetchFiles();

        // Listen to an upload event from FileUploadZone (or just rely on reload for now)
    }, []);

    const toggleShare = async (id) => {
        try {
            const response = await api.patch(`/vault/${id}/share`);
            setFiles(files.map(f => f.id === id ? { ...f, shared: response.data.file.shared } : f));
            toast.success(`File share status updated`, {
                style: {
                    borderRadius: '1rem',
                    background: '#0f172a',
                    color: '#fff',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    fontSize: '0.7rem'
                }
            });
        } catch (error) {
            toast.error("Failed to update share status");
        }
    };

    const handleDelete = async (id) => {
        const file = files.find(f => f.id === id);
        try {
            await api.delete(`/vault/${id}`);
            setFiles(files.filter(f => f.id !== id));
            toast.success(`${file?.name || 'File'} deleted`, {
                style: {
                    borderRadius: '1rem',
                    background: '#0f172a',
                    color: '#fff',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    fontSize: '0.7rem'
                }
            });
        } catch (error) {
            toast.error("Error deleting file");
        }
    };

    const handleDownload = (file) => {
        toast.success(`Opening ${file.name}`, {
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
        window.open(file.url, '_blank');
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
                    {files.length === 0 ? (
                        <div className="p-8 text-center text-slate-500 font-bold">
                            No files uploaded to the Vault yet.
                        </div>
                    ) : (
                        files.map((file) => {
                            const date = new Date(file.createdAt).toLocaleDateString();
                            const size = "Unknown";
                            return (
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
                                            {(file.type === 'zip' || file.type === 'other') && <HiOutlineHashtag size={22} />}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-black text-slate-900 dark:text-white truncate leading-tight">{file.name}</p>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1 sm:hidden">{size} • {date}</p>
                                        </div>
                                    </div>

                                    <div className="col-span-2 hidden md:block text-sm font-bold text-slate-700 dark:text-slate-300 text-left">{date}</div>
                                    <div className="col-span-1 hidden sm:block text-sm font-bold text-slate-500 dark:text-slate-500 text-left">{size}</div>

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
                                            onClick={() => handleDownload(file)}
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
                            )
                        })
                    )}
                </div>

                {/* Pagination */}
                <div className="px-6 py-5 border-t border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                        Showing <span className="text-slate-900 dark:text-white">{files.length > 0 ? 1 : 0}-{files.length > 4 ? 4 : files.length}</span> of <span className="text-slate-900 dark:text-white">{files.length}</span> items
                    </p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-30 transition-all" disabled>Previous</button>
                        <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm" disabled={files.length <= 4}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileTable;
