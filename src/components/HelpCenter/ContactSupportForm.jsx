import { useState } from 'react';
import { HiMailOpen, HiCloudUpload, HiCheck } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Button } from '../common';
import toast from 'react-hot-toast';

const ContactSupportForm = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        toast.success('Ticket submitted successfully! We will get back to you soon.');
    };

    return (
        <div className="w-full lg:w-[420px] shrink-0">
            <div className="rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 md:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-none transition-all">
                <div className="mb-10 text-left flex flex-col gap-2">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-none tracking-tight">Can't find what you need?</h3>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Response within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Subject</label>
                        <input className="h-14 w-full rounded-2xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 px-6 text-sm font-bold focus:border-primary focus:ring-4 focus:ring-primary/5 dark:text-white transition-all outline-none" placeholder="Brief summary of issue" type="text" required />
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Category</label>
                        <select className="h-14 w-full rounded-2xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 px-6 text-sm font-bold focus:border-primary focus:ring-4 focus:ring-primary/5 dark:text-white transition-all outline-none appearance-none">
                            <option>General Inquiry</option>
                            <option>Technical Issue</option>
                            <option>Billing & Refunds</option>
                            <option>Account Safety</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Description</label>
                        <textarea className="h-40 w-full resize-none rounded-2xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 p-6 text-sm font-bold focus:border-primary focus:ring-4 focus:ring-primary/5 dark:text-white transition-all outline-none leading-relaxed" placeholder="Please describe the issue in detail..." required></textarea>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Attachments</label>
                        <div className="flex w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 p-6 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-primary/50 transition-all cursor-pointer group shadow-inner">
                            <div className="flex flex-col items-center gap-2">
                                <HiCloudUpload className="text-2xl text-slate-400 group-hover:text-primary transition-colors" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">Click to upload files</span>
                            </div>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        loading={loading}
                        className="mt-4 h-16 w-full shadow-primary/20 tracking-[0.25em]"
                        icon={<HiCheck className="text-lg" />}
                        loadingText="Submitting..."
                    >
                        Submit Ticket
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ContactSupportForm;
