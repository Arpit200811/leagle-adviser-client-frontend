import { motion } from 'framer-motion';
import { HiStar, HiOutlineShieldCheck } from 'react-icons/hi';

const LoginLeft = () => {
    return (
        <div className="hidden lg:flex flex-1 relative bg-slate-50 dark:bg-slate-800 flex-col justify-between p-12 text-white overflow-hidden">
            {/* Background Image */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiMrDiV0-yCNr-iSNrbsCLrM-Bbz-NrERyw3uQ8Ezdx-AcPWa8w4cNDBckDXHIvpxwfP5ApNLGK2aKAfypTvh2iH84FXG9K7ydt3rS0zEbeH1T6VlyazmuzmwuqWXta7n6twFOZ8TPGIE1blqkYoHeI-wAKpkwUAZcznXWu2IaYAkFSiKesNL_bi_JKrfVh4iMtHzmm5o_u2aoB-7Q-AV7tZ2rmCxEZrYUn8P02EHWnvHU0uO1OIv37A8Hbw3GDDJpA0uenAcBSu8"
                    alt="Modern building facade"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-blue-900/90 mix-blend-multiply"></div>
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-between text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 text-xs font-medium mb-6">
                        <HiOutlineShieldCheck size={16} className="text-emerald-400" />
                        Bank-grade Security
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight leading-tight mb-4">Your legal counsel,<br />just a click away.</h1>
                    <p className="text-blue-100 text-lg leading-relaxed max-w-sm">Connect with top-rated attorneys for secure video consultations and document review.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                >
                    <div className="flex -space-x-3">
                        {[
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuBJg4znosuq_ECX_uj-WL4uh8k4xZy2ldz7H9HBs70FXPusqWjDTUikvyqu0fGOs3s9q99w9S-1JDvAVB0Gln-QUO7EdxEbI3rEA2aMVuFVF8fpZUnxCMdx88sqIHT-ajprCNj8RXFo0xUlbRkIybqCM416AHCocbFOF-TtPyQlyBGED5xGmKpfFz3EtFETW0um4fdxPs6pZQ0AahUIE-wiLl1E08l9yezpUhAnOT7_8J_L4oTWCrwmUt0GV5sMW1hWcR6mkLWCca4",
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuClBzwoAR-lfaHxxlMGEuxUSKTe7sgtD4Vmpyrpjs5fPXaNvFX4OeRYfDLJ1iKV8mLDeVCyteT_auvwuSZNBOx6kQJTD7COPt-JLlY1RICp3X4QOHEqLOwSUxRwb_JxbAnmh_1j8OH9T6RNG-mjIKNsJgSYnXtZWwjVWkJEtz3LOqVSUXZhRS9QN0zLcNF57WsqXJAL13X9y-AdzBjUPbM3J3fTCQjw7Vn-o3h7pWmH88ZWChgQG35QsyMB5ZYmDXbHoy3XTmE5Dy4",
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuD7dkR8cE_AhldSr8tD9XmEaTFcGXb6G2UT_na8R7f_yDcVtsjlxgkCW3wlKZPsHzI0ufnGVIGIk7BRr_VnfdNv6PHyhIRKXYPYXYYQay1hgZ9LQ-haF2QfwnsdVTyCGvPuO0aJSfz2m8ItDjR10VExiWSB6wCK1it9QUWgmr02FgAzs6Erg8WdUkG_IbclZb-SymLratx-Y1ua0q-lVy1GNQs7HsC8kd044MckO68u8z0XAH_y9S0B0YDmiaSdRWqtErAOV4KuxTo"
                        ].map((src, i) => (
                            <img key={i} src={src} alt="Lawyer" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold">+2k</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => <HiStar key={i} size={18} />)}
                        </div>
                        <span className="text-white text-sm font-medium">4.9/5 from verified clients</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LoginLeft;
