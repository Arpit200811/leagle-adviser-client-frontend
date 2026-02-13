import { Navbar } from '../layout/Navbar';
import Footer from '../layout/Footer';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors font-sans flex flex-col pt-16">
            <Navbar />

            <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-left"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-none">Privacy Policy</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest mb-12 border-b border-slate-100 dark:border-slate-800 pb-8">
                        Last updated: January 2024
                    </p>

                    <div className="prose prose-slate dark:prose-invert max-w-none flex flex-col gap-10">
                        <section>
                            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4">1. Information We Collect</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                We collect minimal personal data necessary to provide our services, including identity verification data, secure contact information, and encrypted consultation metadata.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4">2. Data Encryption</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                All consultation transcripts, video feeds, and document uploads in your Vault are end-to-end encrypted. LegalConnect does not have access to the contents of your legal discussions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4">3. Third-party Sharing</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                We do not sell your personal data. We only share anonymized telemetry to improve our system's performance and comply with legal regulatory requirements for online legal services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4">4. Your Rights</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                You have the right to export your entire Case Vault and consultation history at any time. You may request account deletion, which will securely purge all identifiable metadata from our records.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPage;
