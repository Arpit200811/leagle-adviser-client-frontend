import { Link } from 'react-router-dom';
import HelpHero from './HelpHero';
import TopicGrid from './TopicGrid';
import FAQAccordion from './FAQAccordion';
import ContactSupportForm from './ContactSupportForm';
import LiveChatFAB from './LiveChatFAB';
import { motion } from 'framer-motion';
import { SEO } from '../common';

const HelpCenterPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark transition-colors font-sans overflow-x-hidden">
            <SEO title="Help Center" description="Get answers to your questions, explore legal topics, or contact our support team for professional assistance." />
            <main className="flex flex-col items-center">
                <HelpHero />
                <TopicGrid />

                {/* Two Column Section */}
                <div className="w-full max-w-[1100px] px-6 py-20 pb-40">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row gap-20"
                    >
                        <FAQAccordion />
                        <ContactSupportForm />
                    </motion.div>
                </div>
            </main>

            <LiveChatFAB />
        </div>
    );
};

export default HelpCenterPage;
