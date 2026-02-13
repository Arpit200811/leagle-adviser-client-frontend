import { HiOutlineUserAdd, HiOutlineCalendar, HiOutlineVideoCamera } from 'react-icons/hi';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: HiOutlineUserAdd,
        title: '1. Browse Profiles',
        description: 'Filter by specialty, price, and location to find the perfect attorney for your specific case needs.'
    },
    {
        icon: HiOutlineCalendar,
        title: '2. Book Instantly',
        description: 'Choose a time that works for your schedule. No phone tag, just a confirmed appointment.'
    },
    {
        icon: HiOutlineVideoCamera,
        title: '3. Resolve Issues',
        description: 'Connect via secure video or chat for your consultation and get the advice you need.'
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-12 lg:py-16 bg-white dark:bg-slate-950 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-300"
                    >
                        Getting expert legal help shouldn't be complicated. We've streamlined the process to three simple steps.
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center group p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors duration-300"
                        >
                            <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                <step.icon size={30} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
