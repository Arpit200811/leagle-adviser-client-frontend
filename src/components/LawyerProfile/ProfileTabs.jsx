import { useState } from 'react';
import { HiStar } from 'react-icons/hi';

const ProfileTabs = ({ lawyer }) => {
    const [activeTab, setActiveTab] = useState('about');

    const tabs = [
        { id: 'about', label: 'About' },
        { id: 'credentials', label: 'Credentials' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'locations', label: 'Location' },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden min-h-[500px]">
            {/* Tabs Header */}
            <div className="border-b border-slate-100 dark:border-slate-700 px-6">
                <div className="flex gap-8 overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center justify-center border-b-[3px] py-4 px-1 min-w-fit text-sm font-bold tracking-wide transition-all ${activeTab === tab.id
                                ? 'border-primary text-slate-900 dark:text-white'
                                : 'border-transparent text-slate-400 dark:text-slate-500 hover:text-primary'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 md:p-6 space-y-8 text-left">
                {activeTab === 'about' && (
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">About {lawyer.name.split(' ')[0]}</h3>
                        <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
                            {lawyer.about.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </section>
                )}

                {activeTab === 'credentials' && (
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Credentials & Education</h3>
                        {lawyer.credentials?.length > 0 ? (
                            <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-8">
                                {lawyer.credentials.map((cred, i) => (
                                    <div key={i} className="relative">
                                        <div className={`absolute -left-[21px] top-1 h-3 w-3 rounded-full ring-4 ring-white dark:ring-slate-800 ${i === 0 ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}></div>
                                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{cred.institution}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{cred.degree} • {cred.year}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-slate-500 dark:text-slate-400 text-sm">No credentials provided on profile.</p>
                        )}
                    </section>
                )}

                {activeTab === 'reviews' && (
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Client Reviews</h3>
                        {/* Summary Block */}
                        <div className="flex flex-wrap gap-x-8 gap-y-6 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl mb-8">
                            <div className="flex flex-col gap-2">
                                <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight">{lawyer.rating}</p>
                                <div className="flex gap-0.5 text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <HiStar key={i} className={`text-lg ${i < Math.floor(lawyer.rating) ? 'fill-current' : 'text-slate-300 dark:text-slate-600'}`} />
                                    ))}
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">{lawyer.reviews} reviews</p>
                            </div>
                            <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-2">
                                {[5, 4, 3, 2, 1].map((star) => (
                                    <div key={star} className="contents">
                                        <p className="text-slate-900 dark:text-slate-300 text-xs font-medium">{star}</p>
                                        <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                                            <div className="rounded-full bg-primary" style={{ width: `${lawyer.ratingStats[star]}%` }}></div>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs text-right">{lawyer.ratingStats[star]}%</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reviews List */}
                        {lawyer.recentReviews?.length > 0 ? (
                            <div className="space-y-6">
                                {lawyer.recentReviews.map((review, i) => (
                                    <div key={i} className="flex flex-col gap-3">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-slate-200 dark:bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center text-slate-500 font-bold uppercase">
                                                    {review.author.slice(0, 2)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">{review.author}</p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">{review.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-0.5 text-yellow-500">
                                                {[...Array(5)].map((_, j) => (
                                                    <HiStar key={j} className={`text-sm ${j < review.stars ? 'fill-current' : 'text-slate-300'}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-300">{review.comment}</p>
                                        {i < lawyer.recentReviews.length - 1 && <hr className="border-slate-100 dark:border-slate-700 mt-3" />}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-slate-500 dark:text-slate-400 text-sm">No reviews submitted yet.</p>
                        )}
                    </section>
                )}
                {activeTab === 'locations' && (
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Our Location</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-slate-900 dark:text-white">New York Office</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                                        123 Broadway St, Suite 400<br />
                                        New York, NY 10001
                                    </p>
                                    <button className="mt-3 text-sm font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
                                        Get Directions <span className="material-symbols-outlined text-[18px]">north_east</span>
                                    </button>
                                </div>
                            </div>
                            {/* Static Map Embed */}
                            <div className="w-full h-64 bg-slate-200 dark:bg-slate-700 rounded-xl overflow-hidden flex items-center justify-center relative shadow-sm">
                                <iframe
                                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=-74.020%2C40.700%2C-73.980%2C40.730&amp;layer=mapnik&amp;marker=40.715%2C-74.000"
                                    allowFullScreen
                                    title="Map Location"
                                ></iframe>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default ProfileTabs;
