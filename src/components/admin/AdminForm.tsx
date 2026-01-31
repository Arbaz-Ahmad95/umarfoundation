'use client';

import { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function AdminForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('General');
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, category, imageUrl, videoUrl }),
            });

            if (res.ok) {
                alert('Post added successfully!');
                setTitle('');
                setDescription('');
                setCategory('General');
                setImageUrl('');
                setVideoUrl('');
            } else {
                alert('Failed to add post');
            }
        } catch (err) {
            alert('Error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center justify-between mb-10">
                <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-primary transition font-bold text-sm uppercase tracking-widest">
                    <ArrowLeft className="w-4 h-4" /> Back to Site
                </Link>
                <div className="text-primary font-black text-xl tracking-tighter">UMAR ADMIN</div>
            </div>

            <h1 className="text-4xl font-extrabold text-primary mb-10 tracking-tight">Create New Impact Post</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-black uppercase text-gray-400 tracking-[0.2em] mb-3">Activity Title</label>
                        <input
                            required
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none font-medium text-lg placeholder:text-gray-300 transition"
                            placeholder="e.g. Flood Relief in Hayaghat"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-black uppercase text-gray-400 tracking-[0.2em] mb-3">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none font-medium appearance-none transition"
                            >
                                <option>Education</option>
                                <option>Healthcare</option>
                                <option>Relief</option>
                                <option>General</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase text-gray-400 tracking-[0.2em] mb-3">Cover Image URL</label>
                            <input
                                required
                                type="text"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none font-medium placeholder:text-gray-300 transition"
                                placeholder="Unsplash direct link..."
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-black uppercase text-gray-400 tracking-[0.2em] mb-3">Video Link (YouTube/MP4)</label>
                        <input
                            type="text"
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none font-medium placeholder:text-gray-300 transition"
                            placeholder="https://..."
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-black uppercase text-gray-400 tracking-[0.2em] mb-3">Description</label>
                        <textarea
                            required
                            rows={5}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none font-medium placeholder:text-gray-300 transition resize-none"
                            placeholder="Describe the amazing work done..."
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white font-black py-5 rounded-2xl hover:bg-primary-light transition-all transform hover:scale-[1.02] shadow-xl shadow-primary/20 disabled:bg-gray-200 disabled:shadow-none flex items-center justify-center gap-3 tracking-widest uppercase text-sm"
                >
                    {loading ? 'Processing...' : <><Save className="w-5 h-5" /> Publish Impact Post</>}
                </button>
            </form>
        </div>
    );
}
