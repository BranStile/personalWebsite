import { NextResponse} from 'next/server'
import { getAboutMe} from '@/prisma/prismaResults'


export async function GET() {
    try {
        const data = await getAboutMe();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Failed to fetch aboutMe:', error);
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}