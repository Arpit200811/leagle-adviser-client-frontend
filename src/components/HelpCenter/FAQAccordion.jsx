import { HiQuestionMarkCircle, HiPlus, HiMinus } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQAccordion = () => {
    const faqs = [
        {
            q: "How do I request a refund for a cancelled session?",
            a: "If a session is cancelled by the lawyer or due to technical issues on our end, a refund is automatically processed to your wallet within 24 hours. If you cancelled, please check our cancellation policy for eligibility."
        },
        {
            q: "Is my video call recorded?",
            a: "No. To protect attorney-client privilege and user privacy, LegalConnect does not record any video or audio consultations. All data is transiently streamed through encrypted channels."
        },
        {
            q: "How do I top up my wallet?",
            a: "Go to your Wallet section, click on 'Add Funds', and select your preferred payment method (Credit Card, PayPal, or Bank Transfer). Funds are typically available instantly."
        },
        {
            q: "Can I change my lawyer after booking?",
            a: "Yes, you can reschedule or cancel up to 24 hours before the appointment. If you wish to switch lawyers, cancel the current booking and book a new one with a different professional."
        }
    ];

    return (
        <div className="flex-1 flex flex-col gap-8 text-left">
            <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <HiQuestionMarkCircle className="text-2xl" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
            </div>
            <div className="flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} q={faq.q} a={faq.a} />
                ))}
            </div>
        </div>
    );
};

const FAQItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`rounded-[1.5rem] border-2 transition-all overflow-hidden ${isOpen
            ? 'border-primary bg-primary/5 shadow-sm'
            : 'border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-slate-200 dark:hover:border-slate-700'
            }`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-6 px-8 py-6 font-black text-slate-900 dark:text-white transition-colors"
            >
                <span className="text-base text-left tracking-tight">{q}</span>
                <div className={`p-1.5 rounded-full transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                    {isOpen ? <HiMinus /> : <HiPlus />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="px-8 pb-8 text-sm font-bold text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-6">
                            {a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQAccordion;
