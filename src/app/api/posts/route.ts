import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'src/data/posts.json');

export async function GET() {
    try {
        const data = fs.readFileSync(DATA_PATH, 'utf8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json([], { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const newPost = await request.json();
        const data = fs.readFileSync(DATA_PATH, 'utf8');
        const posts = JSON.parse(data);

        const postWithId = {
            ...newPost,
            id: Date.now().toString(),
            date: new Date().toISOString().split('T')[0]
        };

        posts.unshift(postWithId);
        fs.writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2));

        return NextResponse.json(postWithId);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save post' }, { status: 500 });
    }
}
