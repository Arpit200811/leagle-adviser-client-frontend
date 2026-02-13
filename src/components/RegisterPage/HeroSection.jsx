import { HiStar, HiOutlineShieldCheck } from 'react-icons/hi';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div className="relative hidden w-0 flex-1 lg:block overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 h-full w-full bg-slate-900 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 h-full w-full bg-cover bg-center opacity-80"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBA31HHS1CscRQY0wIGV2nT8anHBYkfrLCKMX42qSOBrcZKAQZ8GnMYZwni_ffBLgXTEgvHw5S-JzM75T_i5rLoxoWtaRvxU3rDal5K2xlky-H_HCLZFiqnLhieCGy4z_wftvIR8N63LoHk6gbV3n4JCLtR-pQibEiUcPQsnstcLumuMA-ejWV7rPB8PCm6Ct5Y_8Sv-1ph-Fw3AUiqtTQehgHFqD5HjTT769Etj79E9nnuC-1Kv6aPB65f6FhegRksRGnKWxngU_o')"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
            </div>


            {/* Testimonial Content */}
            <div className="absolute bottom-0 left-0 right-0 p-12 xl:p-20 text-white text-left">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-xl"
                >
                    <div className="mb-8 flex gap-1.5">
                        {[...Array(5)].map((_, i) => (
                            <HiStar key={i} className="text-amber-400 text-2xl drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                        ))}
                    </div>
                    <blockquote className="text-3xl xl:text-4xl font-black leading-[1.3] tracking-tight mb-8 drop-shadow-sm">
                        "LegalConnect made it incredibly easy to find a specialist. The process was <span className="text-primary-light">seamless and secure.</span>"
                    </blockquote>
                    <div className="flex items-center gap-5">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPG2BYReQs5oa9EqgRbuGiVmxIIW6PBlbbpKFlw1Yfpo5pbp7PLmtNpw8n1_medZYWhDH-ALYSjgB78RARINwgcjwzrAwv16nm_UU8ffWt-zlKLeMv_-tzcDOtyrBb3nNTPhvTOk-XfjzTVumOP9XXwzE_w6cm877uHj3YJ6hU8VX_olr66Phoa5vAX5vbt60S4ESCfpxZ0V9nbcAy4CQnWDKj2rIf28F_O56l4N3hph2LSafyWVIYX1FJCNDMlbv1mk2MwAN-HMU"
                            alt="Michael Chen"
                            className="size-14 rounded-2xl border-2 border-white/20 object-cover shadow-2xl shadow-black/20"
                        />
                        <div className="flex flex-col gap-0.5">
                            <p className="font-black text-lg tracking-tight">Michael Chen</p>
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400">Small Business Owner</p>
                        </div>
                    </div>
                </motion.div>
            </div>


            {/* Trust Badge */}
            <div className="absolute top-10 right-10">
                <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 border border-white/10">
                    <HiOutlineShieldCheck className="text-emerald-400 text-lg" />
                    <span className="text-xs font-semibold text-white tracking-wide uppercase">Secure & Confidential</span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
