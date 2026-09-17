import { getExperience } from "@/prisma/prismaResults";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

export const dynamic = "force-dynamic";

export default async function Home() {
  const experience = (await getExperience()).map((item) => ({
    ...item,
    startDate: item.startDate.toISOString(),
    endDate: item.endDate?.toISOString() ?? null,
    createdAt: item.createdAt.toISOString(),
  }));

  return (
  <div>
    <AboutMe/>
    <h2 className="text-center text-3xl text-navigation-hover-text font-bold">Experiences</h2>
    <hr className="w-3/4 rounded-2xl border-2 m-auto mt-6 mb-4 border-navigation-hover-text"></hr>
    <Experience initialExperience={experience}/>
  </div>
  );
}
