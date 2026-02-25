import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import ConsultationTabs from './ConsultationTabs';
import ConsultationCard from './ConsultationCard';
import DocumentsSidebar from './DocumentsSidebar';
import HelperCard from './HelperCard';
import { motion } from 'framer-motion';
import { HiOutlinePlus, HiOutlineSearch, HiOutlineBell } from 'react-icons/hi';

const MyConsultationsPage = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await api.get('/appointments/my');
                setSessions(response.data);
            } catch (error) {
                console.error("Failed to fetch appointments:", error);
            }
        };
        fetchAppointments();
    }, []);

    const upcomingSessions = sessions.filter(s => s.status !== 'completed' && s.status !== 'cancelled').map(s => ({
        id: s.id,
        urgent: false,
        lawyerName: s.lawyer?.user?.name || "Atty. Unknown",
        lawyerImage: s.lawyer?.user?.image || "https://via.placeholder.com/150",
        specialty: s.lawyer?.specialization || "General Practice",
        dateTime: new Date(s.appointmentDate).toLocaleString(),
        description: s.reason || "Consultation details",
        canJoin: true
    }));

    const pastSessions = sessions.filter(s => s.status === 'completed' || s.status === 'cancelled').map(s => ({
        id: s.id,
        lawyerId: s.lawyer?.id,
        lawyerName: s.lawyer?.user?.name || "Atty. Unknown",
        lawyerImage: s.lawyer?.user?.image || "https://via.placeholder.com/150",
        specialty: s.lawyer?.specialization || "General Practice",
        date: new Date(s.appointmentDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }));

    const counts = { upcoming: upcomingSessions.length, completed: pastSessions.length };

    return (
        <div className="bg-background-light dark:bg-background-dark transition-colors duration-200 font-sans">

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col gap-8">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 text-left mb-2">
                    <Link to="/" className="text-slate-500 font-bold hover:text-primary transition-colors text-sm">Home</Link>
                    <span className="text-slate-400 text-sm">/</span>
                    <span className="text-slate-900 dark:text-white text-sm font-black">My Consultations</span>
                </div>

                {/* Page Heading */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-none tracking-tighter">My Consultations</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Manage your upcoming and past legal sessions</p>
                    </div>
                    <button className="bg-primary hover:bg-primary-dark text-white font-black py-3.5 px-6 rounded-xl flex items-center gap-3 transition-all shadow-xl shadow-primary/20 whitespace-nowrap active:scale-95">
                        <HiOutlinePlus className="text-xl" />
                        <span>Book New Consultation</span>
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Column: List */}
                    <div className="flex-1 flex flex-col gap-8">
                        <ConsultationTabs activeTab={activeTab} onTabChange={setActiveTab} counts={counts} />

                        {activeTab === 'upcoming' && (
                            <div className="flex flex-col gap-6">
                                {upcomingSessions.map((session, i) => (
                                    <ConsultationCard key={i} session={session} />
                                ))}

                                <div className="pt-8 text-left">
                                    <h3 className="text-slate-900 dark:text-white text-xl font-black mb-6 flex items-center gap-2 tracking-tight">
                                        Recent History
                                    </h3>
                                    {pastSessions.slice(0, 3).map((session, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            className="flex flex-col gap-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 p-5 border border-slate-200 dark:border-slate-800 transition-all hover:bg-slate-50 dark:hover:bg-slate-900/60"
                                        >
                                            <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6">
                                                <img
                                                    src={session.lawyerImage}
                                                    className="size-14 rounded-full object-cover grayscale opacity-60 shadow-inner"
                                                    alt="Past lawyer"
                                                />
                                                <div className="flex flex-col sm:flex-row flex-1 justify-between items-center sm:items-start w-full gap-4 text-center sm:text-left">
                                                    <div className="flex flex-col gap-0.5">
                                                        <h4 className="text-slate-900 dark:text-slate-200 text-lg font-black leading-tight">{session.lawyerName}</h4>
                                                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest text-[10px]">{session.specialty} • {session.date}</p>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <button className="text-primary text-sm font-black uppercase tracking-widest hover:underline decoration-primary/30 underline-offset-8">Invoice</button>
                                                        <Link to={`/review/${session.lawyerId}`} className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm font-black uppercase tracking-widest transition-colors">Review</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-[380px] flex flex-col gap-8"
                    >
                        <DocumentsSidebar />
                        <HelperCard />
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default MyConsultationsPage;
