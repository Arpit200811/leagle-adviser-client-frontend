import { Link } from 'react-router-dom';
import { Button } from '../common';
import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section className="py-12 lg:py-16 px-4 bg-primary dark:bg-blue-900 transition-colors relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 size-96 rounded-full bg-white"></div>
                <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-white"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl mb-4">Are you an Attorney?</h2>
                    <p className="text-blue-100 text-lg sm:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
                        Join our network of top-rated legal professionals. Grow your practice, manage your schedule, and connect with clients effortlessly.
                    </p>
                    <Link to="/register">
                        <Button
                            variant="outline"
                            className="bg-white hover:bg-blue-50 text-primary border-white font-black py-4 px-10 rounded-xl shadow-xl transition-all duration-300 text-lg h-auto"
                        >
                            Join as a Lawyer
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
