import ConsultationHeader from './ConsultationHeader';
import VideoFeeds from './VideoFeeds';
import VideoControls from './VideoControls';
import ConsultationSidebar from './ConsultationSidebar';
import { useLocation } from 'react-router-dom';

const VideoConsultationPage = () => {
    const location = useLocation();
    const session = location.state?.session || {};

    const lawyer = {
        name: session.lawyerName || "Unknown Attorney",
        image: session.lawyerImage || "https://via.placeholder.com/150",
        specialty: session.specialty || "General Practice"
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white h-screen overflow-hidden flex flex-col transition-colors">
            <ConsultationHeader lawyerName={lawyer.name} />

            <main className="flex-1 flex overflow-hidden relative">
                {/* Video Area */}
                <div className="flex-1 flex flex-col relative h-full">
                    <VideoFeeds lawyer={lawyer} />
                    <VideoControls />
                </div>

                {/* Sidebar */}
                <ConsultationSidebar lawyer={lawyer} />
            </main>
        </div>
    );
};

export default VideoConsultationPage;
