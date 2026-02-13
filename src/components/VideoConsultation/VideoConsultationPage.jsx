import ConsultationHeader from './ConsultationHeader';
import VideoFeeds from './VideoFeeds';
import VideoControls from './VideoControls';
import ConsultationSidebar from './ConsultationSidebar';

const VideoConsultationPage = () => {
    // Mock data for the demonstration
    const lawyer = {
        name: "Sarah Jenkins, Esq.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmx1kdWHzp7-Xg7oLsun-PRFaxaWSxyxnDy7pkrBUkwPEng2pjHGfsQ14LZA19V0rPA63fzG3wr8CbDuUTI1fSndIgP6M7hUIJXUN-DM8EvYxlOGObypQ0Z0MDUOmTI2xUj3qpLQHvtXbweJ8hpEi8_I3P950MpwMb0maWdeHoBfg7E48vAyqrgFKTnC2AlS9ZxRjXcgdSWDKTdTqwyqMZCBwN75RC7OKD35n-gs2EDeCAq3mbC3QjkorOIccqDLADXiQxcMdhno8",
        specialty: "Family Law / Corporate"
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
