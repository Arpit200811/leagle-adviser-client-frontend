import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLockClosed, HiOutlineSave } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Button } from '../common';

const BasicDetailsForm = () => {
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        setLoading(true);
        // Simulate processing
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
        toast.success('Profile details updated successfully!', {
            style: {
                borderRadius: '1rem',
                background: '#0f172a',
                color: '#fff',
                fontWeight: '900',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
            },
        });
    };

    return (
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 md:p-12 shadow-sm transition-all">
            <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Basic Details</h3>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-800/50 rounded-full border border-slate-100 dark:border-slate-700">
                        <HiOutlineLockClosed className="text-slate-400 text-sm" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Private</span>
                    </div>
                </div>

                {/* Grid Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <FormInput label="First Name" value="Jane" />
                    <FormInput label="Last Name" value="Doe" />
                    <FormInput label="Email Address" value="jane.doe@example.com" icon={<HiOutlineMail />} type="email" />
                    <FormInput label="Phone Number" value="+1 (555) 123-4567" icon={<HiOutlinePhone />} type="tel" />
                    <div className="md:col-span-2">
                        <FormInput label="Address" placeholder="Street address, City, State, Zip" fullWidth />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-5 mt-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                    <button className="px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                        Cancel
                    </button>
                    <Button
                        onClick={handleSave}
                        loading={loading}
                        variant="primary"
                        className="px-8 h-12 rounded-2xl shadow-xl shadow-primary/20"
                        icon={<HiOutlineSave className="text-lg" />}
                        loadingText="Saving..."
                    >
                        Save Changes
                    </Button>
                </div>
            </div>
        </div>
    );
};

const FormInput = ({ label, value, icon, type = "text", placeholder, fullWidth }) => (
    <label className={`flex flex-col gap-2.5 ${fullWidth ? 'w-full' : ''}`}>
        <span className="text-slate-900 dark:text-slate-200 text-xs font-black uppercase tracking-widest ml-1">{label}</span>
        <div className="relative group">
            {icon && (
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                    <span className="text-xl">{icon}</span>
                </div>
            )}
            <input
                className={`form-input w-full rounded-2xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 text-slate-900 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/5 h-16 transition-all font-bold placeholder:text-slate-300 ${icon ? 'pl-14' : 'px-6'}`}
                placeholder={placeholder}
                type={type}
                defaultValue={value}
            />
        </div>
    </label>
);

export default BasicDetailsForm;
