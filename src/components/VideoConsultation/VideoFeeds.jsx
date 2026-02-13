import { motion } from 'framer-motion';
import { HiOutlineMicrophone } from 'react-icons/hi';

const VideoFeeds = ({ lawyer }) => {
    return (
        <section className="flex-1 relative bg-slate-950 flex flex-col items-center justify-center group overflow-hidden">
            {/* Main Video Feed (Lawyer) */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Professional lawyer"
                    className="w-full h-full object-cover opacity-80"
                    src={lawyer.image}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
            </div>

            {/* Lawyer Name Overlay */}
            <div className="absolute top-6 left-6 z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-xl flex items-center gap-3 border border-white/10 shadow-2xl"
                >
                    <HiOutlineMicrophone className="text-green-400 text-lg" />
                    <span className="text-sm font-bold tracking-tight">{lawyer.name}</span>
                </motion.div>
            </div>

            {/* Picture-in-Picture (Self View) */}
            <motion.div
                layout
                drag
                dragConstraints={{ left: -400, right: 0, top: 0, bottom: 400 }}
                className="absolute top-6 right-6 md:bottom-28 md:top-auto md:right-8 z-20 w-36 md:w-56 aspect-video rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-800 draggable cursor-move hover:border-primary transition-colors group/pip"
            >
                <img
                    alt="User self view"
                    className="w-full h-full object-cover transform scale-x-[-1]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEGaTPnaO0FnCtYEoWj_u6asi6HBZcSYefp0rRNvQu5kcZOOsR4ZkAynGaozO1B9iLDwZCD6B60KREXvBW_T7Bg-enuo-XJ-SrBCyNvXelD_xx0yENUnpL4OC5gnRk6Iai121g0hEWP19RXNJsa_wKu0rBkK59eOL4gHIVMgGlutah3TGVw43nH6NXCMNBLzGj8wJzmPifzhQTBLqnFg1cLUwFrqqrZ8moDODUFB-7itC6W-voM9_oYfkxy3d4B_ZZaZNdZ-r7GG4"
                />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                    You
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/pip:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
        </section>
    );
};

export default VideoFeeds;
