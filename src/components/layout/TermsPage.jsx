import { Navbar } from '../layout/Navbar';
import Footer from '../layout/Footer';
import { motion } from 'framer-motion';

const TermsPage = () => {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors font-sans flex flex-col pt-16">
            <Navbar />

            <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-left"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-none">Terms of Service</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest mb-12 border-b border-slate-100 dark:border-slate-800 pb-8">
                        Last updated: January 2024
                    </p>

                    <div className="prose prose-slate dark:prose-invert max-w-none flex flex-col gap-10">
                        <section>
                            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4">1. Agreement to Terms</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                By accessing or using LegalConnect, you agree to be bound by these Terms of Service. Our platform is designed to facilitate connections between legal professionals and clients, providing tools for secure communication, consultation, and document management.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4">2. Professional Relationship</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                LegalConnect is a technology platform and does not provide legal advice. All legal consultations are provided by independent attorneys. No attorney-client relationship is formed between you and LegalConnect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4">3. Security & Identity</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                You are responsible for maintaining the confidentiality of your account credentials. All interactions on the platform are end-to-end encrypted to protect your legal privilege and data privacy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4">4. Payment Terms</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                Charges for legal consultations are set by the individual attorneys. LegalConnect processes payments securely. Refund policies are subject to the specific agreement between the client and the attorney, moderated by LegalConnect support where necessary.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsPage;
