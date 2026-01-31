import { Heart, Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-20 px-6 md:px-12 bg-white border-t border-gray-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:items-start">
                {/* Brand & Mission */}
                <div className="space-y-6 max-w-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary p-2 rounded-lg">
                            <Heart className="text-white w-5 h-5 fill-white" />
                        </div>
                        <span className="font-black text-primary tracking-tighter text-2xl">UMAR FOUNDATION</span>
                    </div>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed italic">
                        "Serving the underserved in Darbhanga through dedicated community outreach and long-term empowerment."
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-primary/5 hover:text-primary transition-all text-gray-400"><Facebook className="w-5 h-5" /></a>
                        <a href="https://www.instagram.com/umar_foundation/" target="_blank" className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-primary/5 hover:text-primary transition-all text-gray-400"><Instagram className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Contact info for trust */}
                <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Our Location</h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-primary/80 font-bold text-sm">
                            <MapPin className="w-4 h-4 text-secondary" />
                            <span>Hayaghat, Darbhanga, Bihar</span>
                        </div>
                        <div className="flex items-center gap-3 text-primary/80 font-bold text-sm">
                            <Mail className="w-4 h-4 text-secondary" />
                            <span>contact@umarfoundation.in</span>
                        </div>
                    </div>
                </div>

                {/* Meta & Admin */}
                <div className="md:text-right flex flex-col md:items-end gap-3 pt-12 md:pt-0 border-t border-gray-50 md:border-t-0">
                    <div className="text-gray-400 text-sm font-black tracking-tight">© 2024 Umar Foundation. All Rights Reserved.</div>
                    <Link href="/admin" className="text-[10px] uppercase font-black tracking-widest text-primary/30 hover:text-primary transition-all border-b border-primary/5 hover:border-primary/20 pb-1">Admin Dashboard</Link>
                    <p className="text-gray-300 text-[10px] mt-4 font-medium uppercase tracking-[0.2em]">Crafted for Impact</p>
                </div>
            </div>
        </footer>
    );
}
