import { basicScienceFaculty, boardMembers, boardOfDirectors, clinicalSciencesFaculty, deans, officers, Teams } from "./TeamsContent";

export const teamsItems: Teams[] = [
    {
        id:  1,
        members: boardOfDirectors,
        title: "Board of Directors",
    },
    {
        id: 2,
        members: boardMembers,
        title: "Board Members",
    },
    {
        id: 3,
        members: officers,
        title: "Officers",
    },
    {
        id: 4,
        members: deans,
        title: "Deans",
    },
    {
        id: 5,
        members: basicScienceFaculty,
        title: "Basic Science Faculty",
    },
    {
        id:  6,
        members: clinicalSciencesFaculty,
        title: "Clinical Sciences Faculty",
    },
]