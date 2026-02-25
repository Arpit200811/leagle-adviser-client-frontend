import { useState, useEffect } from 'react';
import { Navbar } from '../layout/Navbar';
import SearchSidebar from './SearchSidebar';
import ResultsHeader from './ResultsHeader';
import LawyerCard from './LawyerCard';
import SkeletonCard from './SkeletonCard';
import { HiChevronLeft, HiChevronRight, HiOutlineSearch } from 'react-icons/hi';
import { motion } from 'framer-motion';
import api from '../../services/api';

const FindLawyerPage = () => {
    const [loading, setLoading] = useState(true);
    const [lawyers, setLawyers] = useState([]);

    const [filters, setFilters] = useState({
        search: '',
        practiceAreas: ['Corporate Law'],
        experience: 'any',
        price: 500
    });

    useEffect(() => {
        const fetchLawyers = async () => {
            setLoading(true);
            try {
                const response = await api.get('/lawyers');
                const mappedLawyers = response.data.map(l => ({
                    id: l.id,
                    name: l.user?.name || "Unknown",
                    specialty: l.specialization || "General Practice",
                    practiceArea: l.specialization || "General",
                    rating: l.rating || 0,
                    reviews: l.reviews ? l.reviews.length : 0,
                    rate: parseFloat(l.price) || 0,
                    experience: l.experience || 0,
                    online: l.availability === 'online',
                    verified: l.user?.isVerified || false,
                    tags: [l.specialization],
                    image: l.user?.image || 'https://via.placeholder.com/150'
                }));
                setLawyers(mappedLawyers);
            } catch (error) {
                console.error("Failed to fetch lawyers", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLawyers();
    }, []);

    const filteredLawyers = lawyers.filter(lawyer => {
        const matchesSearch = lawyer.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            lawyer.specialty.toLowerCase().includes(filters.search.toLowerCase());
        const matchesPractice = filters.practiceAreas.length === 0 || filters.practiceAreas.includes(lawyer.practiceArea);
        const matchesExperience = filters.experience === 'any' || lawyer.experience >= parseInt(filters.experience);
        const matchesPrice = lawyer.rate <= filters.price;
        return matchesSearch && matchesPractice && matchesExperience && matchesPrice;
    });

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors font-sans">
            <Navbar />

            <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-4 px-4 md:px-10 lg:hidden">
                <div className="flex w-full items-stretch rounded-lg h-11 border border-slate-200 dark:border-slate-800 overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                    <div className="text-slate-400 dark:text-slate-500 flex bg-white dark:bg-slate-800 items-center justify-center pl-3">
                        <HiOutlineSearch size={20} />
                    </div>
                    <input
                        className="flex w-full min-w-0 flex-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none px-3 text-sm placeholder:text-slate-500"
                        placeholder="Search by name or keyword..."
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    />
                </div>
            </div>

            <main className="flex-1 flex justify-center w-full px-4 md:px-10 py-8">
                <div className="flex w-full max-w-[1400px] flex-col">
                    <div className="mb-8 text-left">
                        <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">
                            Find the right legal expert for your needs
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base mt-2">
                            Connect with verified attorneys instantly via video or chat.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <SearchSidebar filters={filters} setFilters={setFilters} />

                        <div className="flex-1 flex flex-col gap-6">
                            <ResultsHeader count={filteredLawyers.length} />

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {loading ? (
                                    [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
                                ) : filteredLawyers.length > 0 ? (
                                    filteredLawyers.map((lawyer) => (
                                        <motion.div
                                            key={lawyer.id}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <LawyerCard lawyer={lawyer} />
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="col-span-full py-20 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <p className="text-slate-500 dark:text-slate-400 font-bold">No lawyers found matching your filters.</p>
                                        <button
                                            onClick={() => setFilters({ search: '', practiceAreas: [], experience: 'any', price: 500 })}
                                            className="text-primary font-bold mt-2 hover:underline"
                                        >
                                            Clear all filters
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Pagination */}
                            {!loading && (
                                <div className="flex justify-center mt-8">
                                    <nav className="flex items-center gap-2">
                                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                            <HiChevronLeft size={20} />
                                        </button>
                                        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-md shadow-primary/20">
                                            1
                                        </button>
                                        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors">
                                            2
                                        </button>
                                        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors">
                                            3
                                        </button>
                                        <span className="text-slate-400 dark:text-slate-600 mx-1">...</span>
                                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                            <HiChevronRight size={20} />
                                        </button>
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FindLawyerPage;
