import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common';
import { HiStar, HiOutlineLocationMarker, HiOutlineClock, HiOutlineArrowRight } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import api from '../../services/api';
import { lawyers as mockLawyersData } from '../../data/lawyers';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const LawyerCard = ({ lawyer }) => (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
        <Link to={`/lawyer/${lawyer.id}`} className="relative h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden block">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${lawyer.image}')` }}
            ></div>
            <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-900 dark:text-white shadow-sm flex items-center gap-1">
                <HiStar className="text-yellow-400" /> {lawyer.rating}
            </div>
        </Link>
        <div className="p-4 flex flex-col flex-1 text-left">
            <div className="mb-3">
                <Link to={`/lawyer/${lawyer.id}`}>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white hover:text-primary transition-colors">{lawyer.name}</h3>
                </Link>
                <p className="text-primary text-sm font-medium">{lawyer.practice}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 mt-auto">
                <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-md">
                    <HiOutlineLocationMarker size={14} /> {lawyer.location}
                </span>
                <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-md">
                    <HiOutlineClock size={14} /> {lawyer.availability}
                </span>
            </div>
            <Link to={`/lawyer/${lawyer.id}`}>
                <Button variant="outline" className="w-full h-10 text-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    Book Consultation
                </Button>
            </Link>
        </div>
    </div>
);

const FeaturedLawyers = () => {
    const [lawyers, setLawyers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopLawyers = async () => {
            try {
                const response = await api.get('/lawyers');
                if (response.data && response.data.length > 0) {
                    const topLawyers = response.data.slice(0, 4).map(l => ({
                        id: l.id,
                        name: l.user?.name || "Verified Attorney",
                        practice: l.specialization || "General Practice",
                        location: "Virtual Profile",
                        availability: l.availability === 'online' ? 'Avail Today' : 'Available',
                        rating: l.rating ? Number(l.rating).toFixed(1) : "5.0",
                        image: l.user?.image || 'https://via.placeholder.com/200'
                    }));
                    setLawyers(topLawyers);
                } else {
                    throw new Error("No data received");
                }
            } catch (error) {
                console.warn("Backend unavailable, using mock data fallback for featured lawyers", error);
                const fallbacks = mockLawyersData.slice(0, 4).map(l => ({
                    id: l.id,
                    name: l.name,
                    practice: l.specialty,
                    location: "New York, NY",
                    availability: l.online ? 'Avail Today' : 'Available',
                    rating: Number(l.rating).toFixed(1),
                    image: l.image
                }));
                setLawyers(fallbacks);
            } finally {
                setLoading(false);
            }
        };

        fetchTopLawyers();
    }, []);

    return (
        <section className="py-12 lg:py-16 bg-slate-50 dark:bg-slate-900/50 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Top Rated Attorneys</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Choose from our selected list of verified legal professionals.</p>
                    </div>
                    <Link to="/find-lawyer" className="hidden sm:flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
                        View all <HiOutlineArrowRight />
                    </Link>
                </div>

                {loading ? (
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {[...Array(4)].map((_, i) => (
                            <Skeleton key={i} height={350} className="rounded-xl" />
                        ))}
                    </div>
                ) : lawyers.length > 0 ? (
                    <>
                        {/* Desktop Grid */}
                        <div className="hidden lg:grid gap-6 grid-cols-4">
                            {lawyers.map((lawyer) => (
                                <LawyerCard key={lawyer.id} lawyer={lawyer} />
                            ))}
                        </div>

                        {/* Mobile/Tablet Slider */}
                        <div className="lg:hidden">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    768: { slidesPerView: 2 },
                                }}
                                className="pb-12"
                            >
                                {lawyers.map((lawyer) => (
                                    <SwiperSlide key={lawyer.id}>
                                        <LawyerCard lawyer={lawyer} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-10 text-slate-500">
                        No attorneys currently available.
                    </div>
                )}

                <div className="mt-8 flex justify-center sm:hidden">
                    <Link to="/find-lawyer">
                        <Button variant="link" className="font-bold flex items-center gap-2">
                            View all attorneys <HiOutlineArrowRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedLawyers;
