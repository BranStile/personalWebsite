import { getExperience, getProjects } from "@/prisma/prismaResults";
import AboutMe from "./components/AboutMe";
import InfoCard from "./components/InfoCard";

export const dynamic = "force-dynamic";

export default async function Home() {
  const experience = (await getExperience()).map((item) => ({
    ...item,
    startDate: item.startDate.toISOString(),
    endDate: item.endDate?.toISOString() ?? null,
    createdAt: item.createdAt.toISOString(),
  }));

    const projects = (await getProjects()).map((item) => ({
    ...item,
    startDate: item.startDate?.toISOString() ?? null,
    endDate: item.endDate?.toISOString() ?? null,
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
  }));

  return (
  <div>
    <AboutMe/>
    <h2 className="text-center text-3xl text-navigation-hover-text font-bold">Experience</h2>
    <hr className="w-3/4 rounded-2xl border-2 m-auto mt-6 mb-4 border-navigation-hover-text"></hr>
    <InfoCard initialExperience={experience}></InfoCard>
   

    <h2 className="text-center text-3xl text-navigation-hover-text font-bold">Projects</h2>
    <hr className="w-3/4 rounded-2xl border-2 m-auto mt-6 mb-4 border-navigation-hover-text"></hr>
    <InfoCard initialProjects={projects}></InfoCard>

  </div>
  );
}
