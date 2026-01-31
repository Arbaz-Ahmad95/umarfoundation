'use client';

import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 glass h-20 flex items-center justify-between px-6 md:px-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg">
                    <Heart className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="font-bold text-xl md:text-2xl text-primary tracking-tighter">UMAR FOUNDATION</div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-8 items-center font-semibold text-gray-700">
                <a href="#home" className="hover:text-primary transition">Home</a>
                <a href="#about" className="hover:text-primary transition">About</a>
                <a href="#gallery" className="hover:text-primary transition">Videos</a>
                <a href="#activities" className="hover:text-primary transition">Activities</a>
                <a href="#donate" className="bg-secondary text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-secondary/30 transition">Donate Now</a>
            </div>

            {/* Mobile Toggle */}
            <button
                className="md:hidden p-2 text-primary"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 top-20 bg-white z-40 md:hidden flex flex-col p-8 gap-6 animate-in slide-in-from-top duration-300">
                    <a href="#home" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-800 border-b border-gray-100 pb-4">Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-800 border-b border-gray-100 pb-4">About</a>
                    <a href="#gallery" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-800 border-b border-gray-100 pb-4">Videos</a>
                    <a href="#activities" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-800 border-b border-gray-100 pb-4">Activities</a>
                    <a href="#donate" onClick={() => setIsOpen(false)} className="bg-secondary text-white px-8 py-4 rounded-2xl text-xl font-bold text-center shadow-xl shadow-secondary/20">Donate Now</a>

                    <div className="mt-auto text-center text-gray-400 text-sm">
                        © 2024 Umar Foundation
                    </div>
                </div>
            )}
        </nav>
    );
}
