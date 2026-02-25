import { HiOutlineCloudUpload } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import api from '../../services/api';

const FileUploadZone = () => {
    return (
        <div className="px-6 pb-6">
            <motion.div
                whileHover={{ borderColor: 'var(--primary)', backgroundColor: 'rgba(19, 91, 236, 0.03)' }}
                className="group relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 transition-all cursor-pointer shadow-inner"
            >
                <input
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    multiple=""
                    type="file"
                    onChange={async (e) => {
                        const file = e.target.files[0];
                        if (file) {
                            const loadingToast = toast.loading(`Uploading ${file.name}...`, {
                                style: {
                                    borderRadius: '1rem',
                                    background: '#0f172a',
                                    color: '#fff',
                                    fontWeight: '900',
                                    textTransform: 'uppercase',
                                    fontSize: '0.7rem'
                                }
                            });

                            try {
                                const formData = new FormData();
                                formData.append('file', file);

                                await api.post('/uploads/vault', formData, {
                                    headers: { 'Content-Type': 'multipart/form-data' }
                                });

                                toast.success(`${file.name} uploaded successfully!`, { id: loadingToast });
                            } catch (error) {
                                console.error("Upload error:", error);
                                toast.error(`Failed to upload ${file.name}`, { id: loadingToast });
                            }
                        }
                    }}
                />
                <div className="flex flex-col items-center gap-4 text-center pointer-events-none">
                    <div className="size-14 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <HiOutlineCloudUpload className="text-primary text-3xl" />
                    </div>
                    <div>
                        <p className="text-base font-black text-slate-900 dark:text-white tracking-tight">Click to upload or drag and drop</p>
                        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mt-1">PDF, DOCX, JPG or PNG (max. 10MB)</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};


export default FileUploadZone;
