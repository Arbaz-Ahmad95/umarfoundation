'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X, ExternalLink, Maximize2 } from 'lucide-react';
import { Post } from '@/types/post';
import { getInstagramEmbedUrl, isInstagramUrl } from '@/lib/utils';

export default function VideoGallery() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [activeVideo, setActiveVideo] = useState<Post | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => setPosts(data.filter((p: Post) => p.section === 'impact')));
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    if (posts.length === 0) return null;

    return (
        <section id="gallery" className="py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 tracking-tighter">Impact <span className="text-secondary">Videos</span></h2>
                    <p className="text-gray-400 text-base md:text-xl max-w-xl leading-relaxed">Witness the direct impact of Umar Foundation through these short films and reels.</p>
                </div>
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Horizontal Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-4 md:gap-8 overflow-x-auto px-6 md:px-12 no-scrollbar pb-12 snap-x snap-mandatory"
            >
                {posts.map((post) => {
                    const isInsta = isInstagramUrl(post.videoUrl);
                    const embedUrl = isInsta ? getInstagramEmbedUrl(post.videoUrl) : null;

                    return (
                        <div
                            key={post.id}
                            className="flex-none w-[280px] sm:w-[320px] md:w-[400px] snap-center md:snap-start group"
                        >
                            <div className="relative aspect-[9/16] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 mb-6 bg-black shadow-2xl transition-transform duration-500 group-hover:scale-[0.98]">
                                {/* Live Instagram Feed as Thumbnail */}
                                {embedUrl ? (
                                    <div className="absolute inset-0">
                                        <iframe
                                            src={`${embedUrl}?utm_source=ig_embed&amp;ig_rid=456`}
                                            className="w-full h-full scale-[1.05] grayscale-[20%] opacity-70 group-hover:opacity-100 group-hover:scale-100 group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                                            frameBorder="0"
                                            scrolling="no"
                                            // @ts-expect-error -- react-dom doesn't recognize allowTransparency but it is required
                                            allowtransparency="true"
                                        ></iframe>

                                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                                            <button
                                                onClick={() => setActiveVideo(post)}
                                                className="w-16 h-16 md:w-20 md:h-20 bg-secondary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition hover:bg-secondary duration-500 pointer-events-auto"
                                            >
                                                <Maximize2 className="text-white w-6 h-6 md:w-8 md:h-8" />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-full bg-white/5 animate-pulse flex items-center justify-center">
                                        <Play className="text-white/10 w-16 h-16" />
                                    </div>
                                )}

                                <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-3 block">{post.category}</span>
                                    <h3 className="text-lg md:text-xl font-bold line-clamp-2 leading-tight group-hover:text-white transition">{post.title}</h3>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Video Detail Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10">
                    <button
                        onClick={() => setActiveVideo(null)}
                        className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition p-4 z-[110]"
                    >
                        <X className="w-8 h-8 md:w-12 md:h-12" />
                    </button>

                    <div className="max-w-6xl w-full grid lg:grid-cols-[1fr_400px] gap-8 md:gap-16 items-center max-h-[90vh] overflow-y-auto lg:overflow-visible no-scrollbar p-4">
                        {/* Player Container */}
                        <div className="aspect-[9/16] w-full max-w-[320px] md:max-w-[450px] mx-auto bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 relative">
                            <iframe
                                src={`${getInstagramEmbedUrl(activeVideo.videoUrl)}?utm_source=ig_embed&amp;ig_rid=456`}
                                className="w-full h-full"
                                frameBorder="0"
                                scrolling="no"
                                // @ts-expect-error -- react-dom doesn't recognize allowTransparency but it is required
                                allowtransparency="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>

                        {/* Details Content */}
                        <div className="text-left space-y-6 md:space-y-8 h-full flex flex-col justify-center">
                            <div>
                                <span className="bg-secondary text-white text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">
                                    {activeVideo.category}
                                </span>
                                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">{activeVideo.title}</h3>
                                <div className="text-gray-400 border-l-4 border-secondary pl-6 italic text-base md:text-xl leading-relaxed">
                                    "{activeVideo.description}"
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-8 md:pt-12 border-t border-white/10">
                                <a
                                    href={activeVideo.videoUrl}
                                    target="_blank"
                                    className="flex-1 bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 transition text-[10px] md:text-xs uppercase tracking-[0.2em]"
                                >
                                    Open on Instagram <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
