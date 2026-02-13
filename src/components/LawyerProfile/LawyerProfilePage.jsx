import { Link, useParams, useNavigate } from 'react-router-dom';
import { lawyers } from '../../data/lawyers';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import BookingSidebar from './BookingSidebar';
import { motion } from 'framer-motion';
import { SEO } from '../common';

const LawyerProfilePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [lawyer, setLawyer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const foundLawyer = lawyers.find(l => l.id === parseInt(id));

        // Simulate loading
        const timer = setTimeout(() => {
            if (foundLawyer) {
                setLawyer(foundLawyer);
            }
            setIsLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [id]);

    if (isLoading) {
        return (
            <div className="bg-background-light dark:bg-background-dark transition-colors font-sans py-12">
                <SEO title="Loading Profile..." />
                <main className="max-w-7xl mx-auto px-4 lg:px-10 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700">
                            <div className="flex gap-6">
                                <Skeleton circle width={128} height={128} />
                                <div className="flex-1 mt-4">
                                    <Skeleton height={40} width="60%" />
                                    <Skeleton height={20} width="40%" className="mt-4" />
                                </div>
                            </div>
                        </div>
                        <Skeleton height={400} className="rounded-xl" />
                    </div>
                    <div className="lg:col-span-4">
                        <Skeleton height={500} className="rounded-xl" />
                    </div>
                </main>
            </div>
        );
    }

    if (!lawyer) {
        return (
            <div className="flex items-center justify-center bg-background-light dark:bg-background-dark transition-colors py-20">
                <SEO title="Lawyer Not Found" />
                <div className="text-center p-12 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Lawyer Not Found</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-8">The profile you are looking for does not exist.</p>
                    <Link to="/find-lawyer">
                        <button className="h-14 px-8 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:scale-105 transition-all">Back to Search</button>
                    </Link>
                </div>
            </div>
        );
    }


    return (
        <div className="bg-background-light dark:bg-background-dark transition-colors font-sans">


            <main className="flex-grow w-full max-w-7xl mx-auto px-4 lg:px-10 py-6">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 py-2 mb-4 text-sm">
                    <Link to="/" className="text-slate-500 dark:text-slate-400 font-medium hover:text-primary transition-colors">Home</Link>
                    <span className="text-slate-400">/</span>
                    <Link to="/find-lawyer" className="text-slate-500 dark:text-slate-400 font-medium hover:text-primary transition-colors">Lawyers</Link>
                    <span className="text-slate-400">/</span>
                    <Link to="/find-lawyer" className="text-slate-500 dark:text-slate-400 font-medium hover:text-primary transition-colors">Family Law</Link>
                    <span className="text-slate-400">/</span>
                    <span className="text-slate-900 dark:text-white font-medium">Sarah J. Miller</span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative"
                >
                    {/* LEFT COLUMN: Profile & Info */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <ProfileHeader lawyer={lawyer} />
                        <ProfileTabs lawyer={lawyer} />
                    </div>

                    {/* RIGHT COLUMN: Sticky Booking Card */}
                    <BookingSidebar lawyer={lawyer} />
                </motion.div>
            </main>

        </div>
    );
};

export default LawyerProfilePage;
