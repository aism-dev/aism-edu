import { teamsItems } from "@/lib/Variables/Teams";
import Team from "./Components/Team";
import Top from "./Components/Top";

import { Metadata } from "next";
import { aismMetadata } from "@/lib/Metadata";

export const metadata: Metadata = {
    ...aismMetadata,
    title: "AISM Leadership | Guiding Future Generations of Physicians",
    description: "Get to know the dedicated leadership team at AISM, committed to fostering excellence in medical education and supporting your journey toward a successful healthcare career.",
    openGraph: {
        ...aismMetadata.openGraph,
        title: "AISM Leadership | Guiding Future Generations of Physicians",
        description: "Get to know the dedicated leadership team at AISM, committed to fostering excellence in medical education and supporting your journey toward a successful healthcare career.",
        url: aismMetadata.openGraph?.url + "/about/meet-our-administration"
    }
};

export default function MeetOurAdministration() {
    return (
        <div className="sm:mt-44 mt-36">
            <Top />
            {teamsItems.map((team)=>(
                <Team 
                    key={team.id}
                    id={team.id}
                    members={team.members}
                    title={team.title}
                />
            ))}
        </div>
    )
}
