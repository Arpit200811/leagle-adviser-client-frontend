import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { lawyers } from '../../data/lawyers';
import SearchFilters from './SearchFilters';
import ResultsHeader from './ResultsHeader';
import LawyerCard from './LawyerCard';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SEO } from '../common';

const LawyerSearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({
        practiceAreas: ['Family Law'],
        minPrice: 0,
        maxPrice: 15,
        experience: '3-5 Years',
        rating: 4
    });

    useEffect(() => {
        // Simulate initial load
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const filteredLawyers = lawyers.filter(l => {
        const matchesSearch = l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            l.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
            l.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesPractice = filters.practiceAreas.length === 0 || filters.practiceAreas.includes(l.specialty.split(' & ')[0]) || filters.practiceAreas.includes(l.specialty);

        // Mock price filtering logic for demo
        const matchesPrice = l.rate >= filters.minPrice && l.rate <= filters.maxPrice;

        // Experience logic
        const matchesExperience = filters.experience === 'Any' || l.experience === filters.experience || (filters.experience === '20+ Years' && parseInt(l.experience) >= 20);

        return matchesSearch && matchesPractice && matchesPrice;
    });

    return (
        <div className="bg-background-light dark:bg-background-dark transition-colors font-sans overflow-x-hidden">
            <SEO title="Find a Lawyer" description="Search and filter through our network of 2,000+ verified legal professionals." />
            <main className="max-w-[1440px] mx-auto w-full px-4 md:px-10 py-8 md:py-16">
                {/* Mobile Filter Toggle */}
                <div className="lg:hidden mb-6">
                    <button
                        onClick={() => setShowMobileFilters(!showMobileFilters)}
                        className="w-full flex items-center justify-center gap-3 h-14 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-100 dark:border-slate-800 shadow-sm text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs transition-all active:scale-[0.98]"
                    >
                        <span className="material-symbols-outlined text-[20px]">tune</span>
                        {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-start">
                    {/* Sidebar Filters */}
                    <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
                        <SearchFilters filters={filters} setFilters={setFilters} />
                    </div>


                    {/* Results Area */}
                    <div className="w-full">
                        {/* Page Introduction */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-8 md:mb-10 text-left flex flex-col gap-3"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-none tracking-tighter">Advanced Lawyer Search</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-2xl leading-relaxed">
                                Find the right legal expert for your needs from our network of 2,000+ verified professionals.
                            </p>
                        </motion.div>

                        <ResultsHeader count={filteredLawyers.length} />

                        {/* Results Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                            {isLoading ? (
                                [...Array(6)].map((_, i) => (
                                    <div key={i} className="bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 p-6 md:p-8 h-[400px]">
                                        <div className="flex items-start gap-4 mb-6">
                                            <Skeleton circle width={80} height={80} />
                                            <div className="flex-1 mt-2">
                                                <Skeleton height={24} width="80%" />
                                                <Skeleton height={16} width="60%" className="mt-2" />
                                            </div>
                                        </div>
                                        <Skeleton count={3} height={20} className="mb-4" />
                                        <Skeleton height={60} className="rounded-2xl mt-8" />
                                    </div>
                                ))
                            ) : filteredLawyers.length > 0 ? (
                                filteredLawyers.map((lawyer) => (
                                    <LawyerCard key={lawyer.id} lawyer={lawyer} />
                                ))
                            ) : (
                                <div className="col-span-full py-32 text-center bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-slate-50 dark:border-slate-800">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">No results found</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">Try adjusting your filters or search term</p>
                                    <button
                                        onClick={() => { setSearchTerm(''); setFilters({ practiceAreas: [], minPrice: 0, maxPrice: 15, experience: 'Any', rating: 0 }) }}
                                        className="mt-6 text-primary font-black uppercase tracking-widest text-[10px] hover:underline"
                                    >
                                        Reset All Filters
                                    </button>
                                </div>
                            )}
                        </div>


                        {/* Pagination */}
                        <div className="mt-20 flex justify-center">
                            <nav className="flex items-center gap-3 p-2 bg-white dark:bg-slate-900 rounded-[2rem] border-2 border-slate-50 dark:border-slate-800 shadow-sm">
                                <button className="p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 disabled:opacity-30">
                                    ←
                                </button>
                                {[1, 2, 3].map(page => (
                                    <button
                                        key={page}
                                        className={`px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${page === 1
                                            ? 'bg-primary text-white shadow-xl shadow-primary/20'
                                            : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <span className="text-slate-300 px-2 font-black">...</span>
                                <button className="px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">8</button>
                                <button className="p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400">
                                    →
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LawyerSearchPage;
