import { Link } from 'react-router-dom';
import { Button } from '../common';
import { HiStar, HiOutlineLocationMarker, HiOutlineClock, HiOutlineArrowRight } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const lawyers = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        practice: 'Corporate Law',
        location: 'New York',
        availability: 'Avail Today',
        rating: '4.9',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAecy5QDwkum-G1KW6qdvXwOyL8dpF2TYFeWZU-SpuvPwvlo9WQtZu1KJt2Axu4sgFrqC0xzl9rGx4sSd7e5tYZkrBCflx0sMSXCiXu6YGZSVVzjaZviTGo1cxVzRu6ekqKWIsZG8yxICxTvEQdMk2SUwlR17t4v2ejMgS4LbLPngwm5JCAFsIOCGWQBLWAjSFgblhA8Me8V60MX9y6GEsb-jS2Wbg-KxNpkEwQdXfmZSwzpUM0dgd9Adinc9V7kpsIQQ9Ea7TN8-I'
    },
    {
        id: 2,
        name: 'Michael Ross',
        practice: 'Family Law',
        location: 'Chicago',
        availability: 'Tomorrow',
        rating: '5.0',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2QSvt06SJ8eClTe4gUZxVeqkUfQ4V-yh4g5cS6NSK6Z1kjVfLYzmV_tAM_YLMUzz_gUjDEHS0XbKdGAOtaskGr83A5Huq0B7c9AGfxBSFl5m79HY07sbEPJtj0u_qWRwMORPjqroi3x7AA7FmE7crhNvOJtQbMuIaEGFrtJ5Bz637prKWNSbo3hr8578M3wAJb-PO3vyY71KDxVRWVAlXiFQNYvco9STAvHn1vVKUmEfQriFLV19ka8qb05LUHomeeY1RaVQcEXM'
    },
    {
        id: 3,
        name: 'Elena Rodriguez',
        practice: 'Immigration',
        location: 'Miami',
        availability: 'Avail Today',
        rating: '4.8',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCod9c3bMM4GU2ZdVH86V1gSZcfvoJtwpyFvg1u37_1qZDGSLknXoFT3vCnfnou2UPKKCRcYeGtmatIZrwNgG71MR_Vo2iq-ddPYtVdqKVHPZbhAEylNP4s7nHfsUJpPdaDK0te1mpwfH2mQbnx0o9dh5Ws0tUGHVN69lrtcFXFAzQXakqmEArGaXlO0SW7LR8V_IZE0K-6kC8Ie_wNI0uxwJrIHsOWPr87S8arsGYHr0Za24y_8IAwK4F2oe86H6k3InyfmkDiY6Q'
    },
    {
        id: 4,
        name: 'David Chen',
        practice: 'Intellectual Property',
        location: 'San Francisco',
        availability: 'In 2 days',
        rating: '5.0',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtu5DOKrLzk3l8Kyja8pVNldjRI_MPYp_5vtxWSvIgHJWMrsGmp6Oq0_j-aK1t-JZ2g1_zpd9XSnSC0P2kaXqHEEVRBTfQ0UFy0O6dvrkY1s_6mLXggl4TAIrH3s3NBxON1crbm7OfzWPBOWljRE0c-I5yV5-Vx9krBChDXocBkfADCuy_k6NVL2TD_qZCJP64NHPZo1YTQQHekmiM7yo49IJy0f3Ye7OyrT5wY-qxeKnNsTVofHqJBQChGroCok3Dkw9tqvvX_Fw'
    }
];

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
            <Button variant="outline" className="w-full h-10 text-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                Book Consultation
            </Button>
        </div>
    </div>
);

const FeaturedLawyers = () => {
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

                {/* Desktop Grid */}
                <div className="hidden lg:grid gap-6 grid-cols-4">
                    {lawyers.map((lawyer, index) => (
                        <LawyerCard key={index} lawyer={lawyer} />
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
                        {lawyers.map((lawyer, index) => (
                            <SwiperSlide key={index}>
                                <LawyerCard lawyer={lawyer} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="mt-8 flex justify-center sm:hidden">
                    <Button variant="link" className="font-bold flex items-center gap-2">
                        View all attorneys <HiOutlineArrowRight />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedLawyers;
