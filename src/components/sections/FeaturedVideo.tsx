'use client';

import { getInstagramEmbedUrl } from '@/lib/utils';
import { Play, Heart, Users, Globe } from 'lucide-react';

export default function FeaturedVideo() {
    const videoUrl = "https://www.instagram.com/reel/DT2mIoKkuUP/";
    const embedUrl = getInstagramEmbedUrl(videoUrl);

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-black uppercase tracking-widest mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Featured Foundation Reel
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tighter leading-[1.1]">
                            Witness the <span className="text-secondary">Real Impact</span> on Ground.
                        </h2>

                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 italic border-l-4 border-secondary pl-6">
                            "Every contribution we receive goes directly to the field. This video captures our recent community outreach in Hayaghat, Darbhanga."
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 text-primary font-bold">
                                    <Users className="w-5 h-5 text-secondary" />
                                    <span>1000+ Helped</span>
                                </div>
                                <p className="text-sm text-gray-500">Local residents reached through this initiative.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 text-primary font-bold">
                                    <Globe className="w-5 h-5 text-secondary" />
                                    <span>Hayaghat Region</span>
                                </div>
                                <p className="text-sm text-gray-500">The primary focus area for our 2024 mission.</p>
                            </div>
                        </div>

                        <a
                            href="#donate"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary-light transition-all shadow-[0_20px_40px_-10px_rgba(26,71,42,0.3)] scale-100 hover:scale-105"
                        >
                            Support This Mission <Heart className="ml-2 w-5 h-5 fill-current" />
                        </a>
                    </div>

                    {/* Real Video Embed */}
                    <div className="order-1 lg:order-2">
                        <div className="relative aspect-[9/16] w-full max-w-[320px] md:max-w-[400px] mx-auto rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border-[6px] md:border-[10px] border-gray-50">
                            <iframe
                                src={`${embedUrl}?utm_source=ig_embed&amp;ig_rid=789`}
                                className="w-full h-full"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>

                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
