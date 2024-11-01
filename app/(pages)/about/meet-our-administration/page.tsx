import { teamsItems } from "@/lib/Variables/Teams";
import Team from "./Components/Team";
import Top from "./Components/Top";

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
