export const getInstagramEmbedUrl = (url: string) => {
    if (!url) return null;
    const match = url.match(/(?:reels?|p)\/([a-zA-Z0-9_-]+)/);
    if (match && (url.includes('instagram.com'))) {
        return `https://www.instagram.com/reel/${match[1]}/embed`;
    }
    return null;
};

export const getInstagramThumbnail = (url: string) => {
    if (!url) return null;
    // Using our internal proxy to fetch the real thumbnail securely
    return `/api/thumbnail?url=${encodeURIComponent(url)}`;
};

export const isInstagramUrl = (url: string) => {
    return url.includes('instagram.com/reel/') || url.includes('instagram.com/p/');
};
