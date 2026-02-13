import VaultSidebar from './VaultSidebar';
import VaultHeader from './VaultHeader';
import FileUploadZone from './FileUploadZone';
import FileTable from './FileTable';
import { motion } from 'framer-motion';

const VaultPage = () => {
    return (
        <div className="flex flex-1 h-[calc(100vh-4rem)] bg-background-light dark:bg-background-dark transition-colors font-sans overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar */}
                <VaultSidebar />

                {/* Main Content */}
                <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                    {/* Header & Upload Zone are non-scrollable area boosters */}
                    <div className="flex-shrink-0">
                        <VaultHeader />
                        <FileUploadZone />
                    </div>

                    {/* Scrollable File Area */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <FileTable />
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default VaultPage;
