import { Button } from '../common';
import { HiOutlineSearch, HiOutlineLocationMarker, HiCheckCircle, HiStar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchQuery) params.append('query', searchQuery);
        if (locationQuery) params.append('location', locationQuery);
        navigate(`/find-lawyer?${params.toString()}`);
    };


    return (
        <section className="relative bg-white dark:bg-slate-950 py-10 lg:py-16 overflow-hidden transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl text-left">
                            Expert Legal Advice,<br />On Your Schedule.
                        </h1>
                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 text-left">
                            Connect with top-rated attorneys for video consultations and secure messaging instantly. Professional help is just a click away.
                        </p>

                        {/* Search Component */}
                        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mt-4">
                            <div className="flex-1 flex items-center px-4 h-12">
                                <HiOutlineSearch className="text-slate-400 mr-3" size={20} />
                                <input
                                    className="w-full bg-transparent border-none p-0 text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-0 text-base outline-none"
                                    placeholder="Practice area or lawyer name..."
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="h-px w-full bg-slate-300 dark:bg-slate-600 sm:h-8 sm:w-px"></div>
                            <div className="flex-1 flex items-center px-4 h-12">
                                <HiOutlineLocationMarker className="text-slate-400 mr-3" size={20} />
                                <input
                                    className="w-full bg-transparent border-none p-0 text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-0 text-base outline-none"
                                    placeholder="City or Zip Code"
                                    type="text"
                                    value={locationQuery}
                                    onChange={(e) => setLocationQuery(e.target.value)}
                                />
                            </div>
                            <Button variant="primary" onClick={handleSearch} className="h-10 px-6 m-1 sm:m-0 sm:mr-1">
                                Search
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1">
                                <HiCheckCircle className="text-emerald-500" size={18} /> Verified Attorneys
                            </span>
                            <span className="flex items-center gap-1">
                                <HiCheckCircle className="text-emerald-500" size={18} /> Free Initial Chat
                            </span>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVOQZeGVST7XS1B-f0ZV_Tu_xzdPnTXFGUbV_DKprr--_GbywoijZSZCuZC61vzNZiRw2jM6ZBHwHYMLzYb3RhD489SA__VKqreD3PiNYDR2r3M_j6mwrfBYfgoO6S3yTMO7OGEb8Lzfj1bSd5ICukJ-SWh7LazC8uQokLnRAQp9KTF2QlKUr6nykNr14n_T-PX9G0QFSlIArQUEbK8LgiBvmwPDB0x0x7pd0f-ADivvAWxfoj3l7fmTml1KlcrpJygVLDzJhH1Pk')" }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-4 max-w-sm"
                        >
                            <div className="relative size-12 shrink-0">
                                <div
                                    className="size-full rounded-full bg-cover bg-center"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBey54m_9iYLt4XZuQlfJjEIEbIne788DgJqfkoukfC7i5U2qENErBiH8MGNeHEKVc__UKmqMkv7RKnt3gTbbqMkKyI6oqLo86ZzcbbUjetcpPjOvD3GcS-p9QZg9B-BSNbL-pXBDPbGyMfNjBS-d0-6LTU_D-GSBUz3arSe6K6lAoALrrTg6SnN4nAZ3GJY5k9RXxJhIHf65XWnTtutYGvyErlT4zLcjREos_syeiMFswelihIwG89M-FuAcPEJ2Agz8T_2taDMYs')" }}
                                ></div>
                                <div className="absolute bottom-0 right-0 size-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900"></div>
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-slate-900 dark:text-white">James Mitchell, Esq.</p>
                                <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                                    <HiStar className="text-yellow-400 mr-1" />
                                    5.0 (124 reviews)
                                </div>
                            </div>
                            <Link to="/lawyer/6" className="ml-auto">
                                <button className="text-primary text-xs font-black uppercase tracking-wider hover:underline">View</button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
