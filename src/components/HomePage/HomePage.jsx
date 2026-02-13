import Hero from './Hero';
import TrustSection from './TrustSection';
import HowItWorks from './HowItWorks';
import FeaturedLawyers from './FeaturedLawyers';
import PracticeAreas from './PracticeAreas';
import CTASection from './CTASection';
import { motion } from 'framer-motion';
import { SEO } from '../common';

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-0"
        >
            <SEO title="Home" />
            <Hero />
            <TrustSection />
            <HowItWorks />
            <FeaturedLawyers />
            <PracticeAreas />
            <CTASection />
        </motion.div>
    );
};

export default HomePage;
