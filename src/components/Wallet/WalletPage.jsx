import BalanceCard, { SecurityBadge } from './BalanceCard';
import SavedMethods from './SavedMethods';
import AddFundsCard from './AddFundsCard';
import TransactionTable from './TransactionTable';
import { motion } from 'framer-motion';

const WalletPage = () => {
    const userBalance = 1250.00;

    return (
        <div className="bg-background-light dark:bg-background-dark transition-colors duration-200 font-sans">
            <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col gap-10">
                {/* Page Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-3 text-left"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-none tracking-tighter">Wallet & Payments</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-2xl leading-relaxed">
                        Manage your funds, add payment methods, and view transaction history securely.
                    </p>
                </motion.div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-4 flex flex-col gap-8"
                    >
                        <BalanceCard balance={userBalance} />
                        <SecurityBadge />
                        <SavedMethods />
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-8 h-full"
                    >
                        <AddFundsCard />
                    </motion.div>
                </div>

                {/* Transaction History Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <TransactionTable />
                </motion.section>
            </main>
        </div>
    );
};

export default WalletPage;
