import { useState, useEffect } from 'react';
import { Navbar } from '../layout/Navbar';
import SearchSidebar from './SearchSidebar';
import ResultsHeader from './ResultsHeader';
import LawyerCard from './LawyerCard';
import SkeletonCard from './SkeletonCard';
import { HiChevronLeft, HiChevronRight, HiOutlineSearch } from 'react-icons/hi';
import { motion } from 'framer-motion';

const FindLawyerPage = () => {
    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({
        search: '',
        practiceAreas: ['Corporate Law'], // Default checked in previous view
        experience: 'any',
        price: 500
    });

    const lawyers = [
        {
            id: 1,
            name: 'Sarah Jenkins',
            specialty: 'Corporate Law Specialist',
            practiceArea: 'Corporate Law',
            rating: 4.9,
            reviews: 120,
            rate: 5.00,
            experience: 15,
            online: true,
            verified: true,
            tags: ['Mergers', 'Contracts'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2SZlaac569J0xG8s2vpB0y83MxPBnbczoXJaLl-xA0T0JQx52K6IiOEc9-DgLed3aPXzWcQLu5qho1geetQB7E8OKRd4Tg6yXm3Smnp4_W6k9t8waAQR-vlbDl3rFbGsjubuNNzZqnNlgh_5wPetCUh_LcpT--Kiky_npMidWAcU7jwFDmCF6TLQ4daBD8-0bhTis_CDKpofu9gSFuV8NhzmULjpXkp6QWmGeBV7FDF34bK-24iLxJvA1cTTXdLZLFKtfMs3AT84'
        },
        {
            id: 2,
            name: 'Michael Ross',
            specialty: 'Senior Criminal Defense',
            practiceArea: 'Criminal Defense',
            rating: 4.8,
            reviews: 85,
            rate: 8.50,
            experience: 8,
            online: false,
            verified: true,
            tags: ['DUI', 'Felony'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbKR9FNsz0637hAl1DfbEYjiAZfxAAEFTiVcKEtS3ZCL_-jZCU5MMomt3-8_nnMsyiWDEbfOWoFLYw3W9mYuvlQq6yhKmm-8PADD36aOv5Gsnhppla0S1eJa8UUU3GlFr_Z1VQNIrUWvImbyKh4y0t8jHPmcP8fPJVFwRE_L5Ilg37cBB13zw8zhU8mrSD90g36xsgBen-8kVMeNTLNRIBHFM_JAlo-2fG8jvelAQP721QDhkuPYovIaDPZZpwbsFjqQijaOUEWrg'
        },
        {
            id: 3,
            name: 'Emily Chen',
            specialty: 'Family & Divorce Law',
            practiceArea: 'Divorce & Family',
            rating: 5.0,
            reviews: 42,
            rate: 4.25,
            experience: 5,
            online: true,
            verified: true,
            tags: ['Custody', 'Mediation'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk712xL1v22RaeHEz7qRWuCDq7lslFSorLqlHlc-6d8_vseL8maAR_r6AQDXvifUEPAbGQ-12rMvJQub46KZ3s7d2qkLO9gbHc15rLzxOCFBv0Vo23C-awyVzmkqsNYS8DbQMKOuW98YRLqhZilm1Co7x8JVVyKP0Mki6uCQPaYfHHlnHt4TS1wO1F8fMdqRQzAubHmOFVImlt8C9khCSpN97WwhfxMiCcvYylWdWTkVlhXESJ5MqUZo5PxnBv-yRlbeThz4qzgb4'
        },
        {
            id: 4,
            name: 'David Kim',
            specialty: 'Intellectual Property',
            practiceArea: 'Immigration', // Mocking for variety
            rating: 4.7,
            reviews: 210,
            rate: 6.75,
            experience: 12,
            online: false,
            verified: false,
            tags: ['Patents', 'Copyright'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKG3xtGwvnp7svsIA84IF1mP1CSbQ9lmoMzrYGsDfOEszsGsqUAFFL4xhZw9EWSy9628-IDl8mb-MrDGtqx0U7jPN_c5KBmyzqgL-ddizPRGu7uFMbs21XG-EWLGc_MhaprHLa8AknbXKpu8QeuI1K0h5OiX4n8EwzmOhCv_uUMGThsUMaxlnytHDGdRls1wwG4WbIacZo102vLXgKIXGbV09EWW4JnML_GfHG6LvLvwJES83nsgDeeBCHhkHqMGAv0k9QNXsubIY'
        },
        {
            id: 5,
            name: 'Jessica Pearson',
            specialty: 'Corporate & Finance',
            practiceArea: 'Corporate Law',
            rating: 5.0,
            reviews: 34,
            rate: 9.00,
            experience: 20,
            online: true,
            verified: true,
            tags: ['Startups', 'IPO'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaCT6AsH_q8DHlek_1B3epB5Km7yWDGn4qnSjiHqRP4B-ZQc0qcPA8XXWZtnDD52JZbJPhLUNkJdzqV4Q2ml_aMnarNQg3yfVa8tlIM5Mc4MOZ9c2BJA2ML0N60g2fepryo2YoHsf4qibQnR5XHgRI1AG_uod_tICuzEDNUiaSNvqNULXtdzdxf5v9CvtUupaBrd-zoOlmOy4c2rwG3kxT9V1tKTpvqO6MOszD-SvvFFdhzvx6KRBm74gqccFXp6_cUlScamLaFj4'
        }
    ];

    const filteredLawyers = lawyers.filter(lawyer => {
        const matchesSearch = lawyer.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            lawyer.specialty.toLowerCase().includes(filters.search.toLowerCase());
        const matchesPractice = filters.practiceAreas.length === 0 || filters.practiceAreas.includes(lawyer.practiceArea);
        const matchesExperience = filters.experience === 'any' || lawyer.experience >= parseInt(filters.experience);
        const matchesPrice = lawyer.rate * 100 <= filters.price; // assuming rate is in hundreds based on sidebar mockup

        return matchesSearch && matchesPractice && matchesExperience && matchesPrice;
    });


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors font-sans">
            <Navbar />

            {/* Sub-header with specialized search for this page */}
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
                    {/* Page Headline */}
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
