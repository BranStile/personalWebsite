// prisma/prismaResults.js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export async function getExperience() {
    const experience = await prisma.experience.findMany({
        orderBy: { id: 'desc' }
    });
    return experience;
}