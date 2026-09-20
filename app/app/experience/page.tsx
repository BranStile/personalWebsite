import { getExperience } from "@/prisma/prismaResults";
import ExExtended from "../components/ExExtended";

export const dynamic = "force-dynamic";

export default async function Experiences(){
    const experience = (await getExperience()).map((item) => ({
        ...item,
        startDate: item.startDate.toISOString(),
        endDate: item.endDate?.toISOString() ?? null,
        createdAt: item.createdAt.toISOString(),
    }));

    return(<div><ExExtended initialExperience={experience}/></div>);
}