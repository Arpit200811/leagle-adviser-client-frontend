import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Button } from '../common';
import LawyerSummary from './LawyerSummary';
import StarRating from './StarRating';
import AttributeTags from './AttributeTags';

const ReviewPage = () => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(4);
    const [selectedTags, setSelectedTags] = useState(["Professional", "Empathetic"]);
    const [reviewText, setReviewText] = useState("");
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        // Simulate processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        toast.success('Review submitted successfully! Thank you for your feedback.', {
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
        setTimeout(() => navigate('/my-consultations'), 1000);
    };
    const lawyer = {
        name: "Sarah Jenkins",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXasIqwthwuaLcSEEHPoSCA4BEcR0Gz126dWxCXFcUD58TAJMbZ3nPvNOETxYIqR-emLMXaFufqrDWspNUYYwOYC3cM61uJnIfj53KcNrmoLJO8VMkR3FQVS9mkauV055XcrgWwgXbk3KckeEZltXjushHsLDvtiEcEpibSboXM8msH622cEAwycH6qjDNEFhAwtGkGh-F2GzXnNbUpOE_yi8JKmgkvYCOgT5Q70Wev9kha3vaEQr9wP-M8ZTFS38G1YVuOt1zmi4",
        specialty: "Family Law Specialist",
        duration: "45 min Consultation"
    };

    const toggleTag = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    return (
        <div className="bg-background-light dark:bg-background-dark transition-colors duration-200 font-sans">


            <main className="flex-1 flex justify-center py-12 px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-[720px] flex flex-col gap-10"
                >
                    {/* Page Heading */}
                    <div className="flex flex-col gap-3 text-center md:text-left">
                        <h1 className="text-slate-900 dark:text-white text-5xl font-black leading-none tracking-tighter">Rate your consultation</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">Your feedback helps us improve legal services for everyone.</p>
                    </div>

                    {/* Review Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-8 md:p-12 flex flex-col gap-10">
                        <LawyerSummary lawyer={lawyer} />

                        <StarRating rating={rating} onRatingChange={setRating} />

                        <AttributeTags selectedTags={selectedTags} onToggleTag={toggleTag} />

                        {/* Review Text Area */}
                        <div className="flex flex-col gap-5 text-left">
                            <div className="flex justify-between items-end">
                                <h3 className="text-slate-900 dark:text-white text-lg font-black tracking-tight uppercase tracking-widest text-xs">Write a Review</h3>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{reviewText.length}/500</span>
                            </div>
                            <div className="relative group">
                                <textarea
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value.slice(0, 500))}
                                    className="w-full min-h-[160px] resize-none rounded-3xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 p-6 text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all shadow-inner font-medium leading-relaxed"
                                    placeholder="Share details about your experience. Was the advice helpful? Would you recommend this lawyer?"
                                ></textarea>
                            </div>
                        </div>

                        {/* Anonymous Toggle */}
                        <div className="flex items-center justify-between p-6 bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl border border-slate-100 dark:border-slate-800 transition-all">
                            <div className="flex flex-col text-left gap-1">
                                <span className="text-sm font-black text-slate-900 dark:text-white tracking-tight">Post anonymously</span>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Your name will be hidden from the public review.</span>
                            </div>
                            <button
                                onClick={() => setIsAnonymous(!isAnonymous)}
                                className={`w-14 h-8 rounded-full p-1 transition-all duration-300 ${isAnonymous ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'
                                    }`}
                            >
                                <div className={`size-6 bg-white rounded-full shadow-lg transition-transform duration-300 ${isAnonymous ? 'translate-x-6' : 'translate-x-0'
                                    }`}></div>
                            </button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                            <Button
                                onClick={handleSubmit}
                                loading={loading}
                                variant="primary"
                                className="flex-1 h-14 shadow-primary/20 tracking-widest text-xs"
                                icon={<HiOutlinePaperAirplane className="text-lg rotate-45" />}
                                loadingText="Submitting..."
                            >
                                Submit Feedback
                            </Button>
                            <button className="sm:flex-none text-slate-400 dark:text-slate-500 font-black py-4 px-8 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all uppercase tracking-widest text-xs">
                                Skip
                            </button>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pb-8">
                        By submitting this review, you agree to our <Link className="text-primary hover:underline decoration-primary/30 underline-offset-4 transition-all" to="/terms">Review Policy</Link>.
                    </p>
                </motion.div>
            </main>
        </div>
    );
};

export default ReviewPage;
