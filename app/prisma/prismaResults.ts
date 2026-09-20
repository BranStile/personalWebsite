// prisma/prismaResults.ts
import { PrismaClient, Experience, Project } from '@prisma/client'
const prisma = new PrismaClient();

export async function getExperience(): Promise<Experience[]> {
    const experience = await prisma.experience.findMany({
        orderBy: { id: 'desc' }
    });
    return experience;
}

export async function getProjects(): Promise<Project[]> {
    const projects = await prisma.project.findMany({
        orderBy: { id: 'desc' }
    });
    return projects;
}