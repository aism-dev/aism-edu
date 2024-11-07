import { basicScienceFaculty, boardMembers, boardOfDirectors, clinicalScienceFaculty, administration, administrationStaff, Teams } from "./TeamsContent";

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
        members: administrationStaff,
        title: "Administration Staff",
    },
    {
        id: 4,
        members: administration,
        title: "Administration, Management and Staff",
    },
    {
        id: 5,
        members: basicScienceFaculty,
        title: "Basic Science Faculty",
    },
    {
        id:  6,
        members: clinicalScienceFaculty,
        title: "Clinical Sciences Faculty",
    },
]