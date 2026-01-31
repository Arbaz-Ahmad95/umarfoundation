'use client';

import { useEffect, useState } from 'react';
import { Post } from '@/types/post';
import { getInstagramEmbedUrl, isInstagramUrl } from '@/lib/utils';
import { Play, Maximize2 } from 'lucide-react';

export default function ActivitiesGrid() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <section id="activities" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
                <div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-primary mb-6 tracking-tighter">Our Recent <span className="text-secondary">Activities</span></h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-xl leading-relaxed">Real stories of change from the ground in Hayaghat and surrounding areas.</p>
                </div>
                <a href="/admin" className="text-xs font-black text-primary/40 hover:text-primary transition uppercase tracking-[0.2em] border-b border-primary/10 pb-1">Admin Dashboard</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {posts.length > 0 ? (
                    posts.map((post) => {
                        const isInsta = isInstagramUrl(post.videoUrl);
                        const embedUrl = isInsta ? getInstagramEmbedUrl(post.videoUrl) : null;

                        return (
                            <div key={post.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 flex flex-col h-full">
                                <div className="relative aspect-[4/5] sm:aspect-[9/16] overflow-hidden bg-black">
                                    {/* Real Video Thumbnail (Live Embed) */}
                                    {embedUrl ? (
                                        <div className="absolute inset-0 w-full h-full pointer-events-none group-hover:pointer-events-auto transition-all">
                                            <iframe
                                                src={`${embedUrl}?utm_source=ig_embed&amp;ig_rid=123`}
                                                className={`w-full h-full transform transition-all duration-1000 ${activeVideo === post.id ? 'scale-100' : 'scale-[1.05] grayscale-[20%] opacity-70 group-hover:opacity-100 group-hover:grayscale-0'}`}
                                                frameBorder="0"
                                                scrolling="no"
                                                allowTransparency={true}
                                            ></iframe>

                                            {/* Interactive Overlay */}
                                            {activeVideo !== post.id && (
                                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center">
                                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition duration-500 shadow-2xl">
                                                        <Play className="text-white fill-white w-6 h-6 ml-1" />
                                                    </div>
                                                    <button
                                                        onClick={() => setActiveVideo(post.id)}
                                                        className="absolute bottom-6 right-6 bg-secondary p-3 rounded-full text-white shadow-xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all z-20"
                                                        aria-label="Expand video"
                                                    >
                                                        <Maximize2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <img
                                            src={post.imageUrl || "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
                                        />
                                    )}

                                    <div className="absolute top-6 left-6 z-30">
                                        <span className="bg-primary/95 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 shadow-xl">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 md:p-10 flex-1 flex flex-col">
                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">{post.date}</div>
                                    <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">{post.title}</h3>
                                    <p className="text-gray-600 line-clamp-3 leading-relaxed mb-8 italic text-sm md:text-base flex-1">
                                        "{post.description}"
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.1em]">Foundation Impact</span>
                                        <a
                                            href={post.videoUrl}
                                            target="_blank"
                                            className="text-primary hover:text-secondary transition-colors font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-1"
                                        >
                                            View Reel →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="col-span-full py-20 text-center text-gray-400 italic font-medium">Loading our impact stories...</div>
                )}
            </div>
        </section>
    );
}
