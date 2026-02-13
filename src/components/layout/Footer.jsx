import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { FaGavel } from 'react-icons/fa';
import { HiOutlineGlobeAlt, HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Col */}
                    <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-white">
                            <FaGavel size={24} />
                            <span className="text-lg font-bold">LegalConnect</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Democratizing access to legal services. Connect with verified attorneys anytime, anywhere.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">
                                <HiOutlineGlobeAlt size={20} />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <HiOutlineMail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Platform Col */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/find-lawyer" className="hover:text-white transition-colors">Browse Lawyers</Link></li>
                            <li><a href="/#how-it-works" className="hover:text-white transition-colors text-left">How it Works</a></li>
                            <li><Link to="/wallet" className="hover:text-white transition-colors">Pricing & Wallet</Link></li>
                            <li><Link to="/my-consultations" className="hover:text-white transition-colors text-left">Your Reviews</Link></li>
                        </ul>
                    </div>

                    {/* Legal Areas Col */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Legal Areas</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/find-lawyer" className="hover:text-white transition-colors">Family Law</Link></li>
                            <li><Link to="/find-lawyer" className="hover:text-white transition-colors">Criminal Defense</Link></li>
                            <li><Link to="/find-lawyer" className="hover:text-white transition-colors">Immigration</Link></li>
                            <li><Link to="/find-lawyer" className="hover:text-white transition-colors">Business Law</Link></li>
                        </ul>
                    </div>

                    {/* Support Col */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/help-center" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/help-center" className="hover:text-white transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© 2023 LegalConnect Inc. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 text-slate-500">Made for justice.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
