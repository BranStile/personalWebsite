import { getProjects } from "@/prisma/prismaResults";
import ProjectsExtended from "../components/ProjectsExtended";

export const dynamic = "force-dynamic";

export default async function Projects(){
    const projects = (await getProjects()).map((item) => ({
        ...item,
        startDate: item.startDate?.toISOString() ?? null,
        endDate: item.endDate?.toISOString() ?? null,
        createdAt: item.createdAt.toISOString(),
    }));

    return(<div><ProjectsExtended initialProjects = {projects}/></div>);
}