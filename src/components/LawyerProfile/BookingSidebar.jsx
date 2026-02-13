import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common';

import { HiOutlineVideoCamera, HiOutlineCalendar, HiLockClosed } from 'react-icons/hi';
import { FaGavel } from 'react-icons/fa';
import CalendarPicker from './CalendarPicker';
import TimeSlots from './TimeSlots';

const BookingSidebar = ({ lawyer }) => {
    const navigate = useNavigate();

    const [isBooking, setIsBooking] = useState(false);

    const handleBooking = async () => {
        setIsBooking(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsBooking(false);
        navigate('/booking-success');
    };

    const handleConsultNow = () => {
        navigate('/video-consultation');
    };


    return (
        <div className="lg:col-span-4 relative text-left">
            <div className="sticky top-20 flex flex-col gap-4">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none border border-slate-100 dark:border-slate-700 p-5 overflow-hidden">
                    {/* Header with Status */}
                    <div className="flex justify-between items-center mb-4 border-b border-slate-100 dark:border-slate-700 pb-4">
                        <div className="text-left">
                            <p className="text-xs font-bold uppercase tracking-wider text-green-600 flex items-center gap-1.5 mb-1">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                Online Now
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 text-left">Video or Audio Call</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xl font-bold text-slate-900 dark:text-white">${lawyer.hourlyRate}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">per hour</p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-3 mb-6">
                        <Button
                            onClick={handleConsultNow}
                            variant="primary"
                            className="w-full h-14 shadow-primary/20 tracking-widest text-[10px]"
                            icon={<HiOutlineVideoCamera className="text-xl" />}
                        >
                            Consult Now
                        </Button>
                        <Button
                            onClick={handleBooking}
                            loading={isBooking}
                            variant="outline"
                            className="w-full h-14 tracking-widest text-[10px]"
                            icon={<HiOutlineCalendar className="text-xl" />}
                        >
                            Schedule Appointment
                        </Button>
                    </div>

                    <CalendarPicker />
                    <TimeSlots dateLabel="Mon, Oct 9" />

                    {/* Trust Footnote */}
                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mt-2">
                        <HiLockClosed className="text-sm" />
                        <span>Secure Booking & Payment</span>
                    </div>
                </div>

                {/* Additional Promo Card */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-5 text-white shadow-lg relative overflow-hidden group text-left">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <FaGavel size={100} />
                    </div>
                    <h4 className="font-bold text-lg mb-1 relative z-10 text-white">Free 15-min Discovery?</h4>
                    <p className="text-sm text-slate-300 mb-4 relative z-10">First-time clients may be eligible for a brief introductory call.</p>
                    <button className="text-xs font-bold uppercase tracking-wider underline decoration-white/30 hover:decoration-white underline-offset-4 transition-all relative z-10 text-white">
                        Check Eligibility
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingSidebar;
