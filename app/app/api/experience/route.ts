import { NextResponse } from 'next/server';
import { getExperience } from '@/prisma/prismaResults';

export async function GET() {
    try {
        const data = await getExperience();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Failed to fetch experience:', error);
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}