'use client';

import { useEffect, useState } from 'react';
import { Post } from '@/types/post';
import { getInstagramEmbedUrl, isInstagramUrl } from '@/lib/utils';
import { Instagram } from 'lucide-react';

export default function ActivitiesGrid() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <section id="activities" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Our Impact</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1]">
                            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Activities</span>
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            See how we are transforming lives in Hayaghat. Real stories, real impact.
                        </p>
                    </div>
                    <a href="https://www.instagram.com/umarfoundation/" target="_blank" className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-primary transition group border border-gray-200 px-6 py-3 rounded-full bg-white hover:shadow-lg hover:border-transparent">
                        <Instagram className="w-5 h-5 group-hover:text-[#E1306C] transition-colors" />
                        <span>Follow Us</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {posts.filter(p => p.section === 'recent').length > 0 ? (
                        posts.filter(p => p.section === 'recent').map((post) => {
                            const isInsta = isInstagramUrl(post.videoUrl);
                            const embedUrl = isInsta ? getInstagramEmbedUrl(post.videoUrl) : null;

                            return (
                                <div
                                    key={post.id}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 relative aspect-[4/5] z-0">
                                        {embedUrl ? (
                                            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                                                <iframe
                                                    src={`${embedUrl}?utm_source=ig_embed&amp;ig_rid=123&controls=0`}
                                                    className="absolute w-full h-[135%] -top-[17.5%] left-0 scale-105"
                                                    frameBorder="0"
                                                    scrolling="no"
                                                    // @ts-expect-error -- react-dom doesn't recognize allowTransparency but it is required
                                                    allowtransparency="true"
                                                    allow="encrypted-media"
                                                    title="Instagram Video"
                                                    style={{ pointerEvents: 'auto' }}
                                                ></iframe>
                                            </div>
                                        ) : (
                                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                                                Video Unavailable
                                            </div>
                                        )}
                                    </div>

                                    <a
                                        href={post.videoUrl}
                                        target="_blank"
                                        className="w-full bg-white border border-gray-200 text-gray-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition shadow-sm text-sm"
                                    >
                                        <Instagram className="w-4 h-4" />
                                        View on Instagram
                                    </a>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full py-20 flex flex-col items-center justify-center text-center">
                            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
                            <p className="text-gray-400 font-medium">Loading stories...</p>
                        </div>
                    )}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="https://www.instagram.com" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 text-primary transition group border border-gray-200 px-6 py-3 rounded-full bg-white shadow-sm">
                        <Instagram className="w-5 h-5" />
                        <span>Follow Us on Instagram</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
