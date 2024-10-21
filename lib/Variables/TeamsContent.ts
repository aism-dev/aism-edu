import { IconType } from "react-icons";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";

export interface TeamProps {
    id: number,
    title: string;
    members: (Member | MemberNoSocials)[],
}

interface Member {
    id: number,
    name: string,
    image: string,
    role: string;
    hasSocials:  true,
    socials: Social[]
}

interface MemberNoSocials {
    id: number,
    name: string,
    image: string,
    role: string;
    hasSocials:  false,
}

interface Social {
    id: number,
    icon: IconType,
    url: string
}

export type Teams = TeamProps;

export const boardOfDirectors: (Member | MemberNoSocials)[] = [
    {
        id: 1,
        image: "https://aism-edu.sirv.com/dr.colin-a-wilkinson_LE_auto_x2.jpg", // Actual image URL
        hasSocials: true,
        name: "Dr. Colin A. Wilkinson",
        role: "Chairman",
        socials: [
            {
                id: 1,
                icon: FaFacebookF,
                url: "#"
            },
            {
                id: 2,
                icon: FaTwitter,
                url: "#"
            }
        ]
    },
    {
        id: 2,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Dion George",
        role: "Secretary"
    }
];

export const boardMembers: (Member | MemberNoSocials)[] = [
    {
        id: 1,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Donn D. Martin",
        role: "Member"
    },
    {
        id: 2,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Nancy Akunna",
        role: "Member"
    },
    {
        id: 3,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Christine Wilkinson",
        role: "Member"
    },
    {
        id: 4,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Rev. Fr. Dr. Basil",
        role: "Chaplain"
    },
    {
        id: 5,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Neil Klein",
        role: "Member"
    },
    {
        id: 6,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. G. Mujtaba",
        role: "Member"
    }
];

export const officers: (Member | MemberNoSocials)[] = [
    {
        id: 1,
        image: "https://aism-edu.sirv.com/dr.colin-a-wilkinson_LE_auto_x2.jpg", // Actual image URL
        hasSocials: true,
        name: "Dr. Colin A. Wilkinson",
        role: "President",
        socials: [
            {
                id: 1,
                icon: FaFacebookF,
                url: "#"
            },
            {
                id: 2,
                icon: FaTwitter,
                url: "#"
            }
        ]
    },
    {
        id: 2,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Anup K. Sharma",
        role: "Vice President"
    },
    {
        id: 3,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Donn D. Martin",
        role: "Vice President Research"
    },
    {
        id: 4,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. S. Sharma",
        role: "Vice President Research"
    },
    {
        id: 5,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Lorna McBarnett",
        role: "Chancellor (Emeritus)"
    },
    {
        id: 6,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Nancy Akunna",
        role: "Vice President"
    },
    {
        id: 7,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Christine M. Wilkinson",
        role: "Executive Vice President"
    },
    {
        id: 8,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Mr. Caden Wilkinson",
        role: "Corporate Secretary"
    }
];

export const deans: (Member | MemberNoSocials)[] = [
    {
        id: 1,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Nancy Akunna",
        role: "Dean of Administration"
    },
    {
        id: 2,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Renee Sandy",
        role: "Associate Dean of Academics"
    },
    {
        id: 3,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Bala Rao",
        role: "Dean of Admission"
    },
    {
        id: 4,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Christine Wilkinson",
        role: "Registrar"
    },
    {
        id: 5,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Ms. Patricia Coates",
        role: "Bursar"
    },
    {
        id: 6,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Debra Nedd, MS",
        role: "Dean of School of Nursing (Acting Interim)"
    },
    {
        id: 7,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Otis Powell",
        role: "Dean of Clinical Sciences"
    },
    {
        id: 8,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Robert Fountila",
        role: "Assistant Director of Admissions"
    },
    {
        id: 9,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Ms. Patricia Coates",
        role: "Librarian"
    },
    {
        id: 10,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Shawn Edwards",
        role: "Dean of Basic Sciences"
    },
    {
        id: 11,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Tanisha Jerrick",
        role: "Dean of Student Services"
    },
    {
        id: 12,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Calvin Wilkinson",
        role: "Dean of Finance"
    },
    {
        id: 13,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Mr. Melroy Jeffery",
        role: "Buildings and Grounds"
    }
];

export const basicScienceFaculty: (Member | MemberNoSocials)[] = [
    {
        id: 1,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Donn D. Martin",
        role: "Physiology"
    },
    {
        id: 2,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Radbod Movassagh",
        role: "Physical Diagnosis, Pharmacology"
    },
    {
        id: 3,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Mehran Heravi",
        role: "Biochemistry"
    },
    {
        id: 4,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Renee Sandy",
        role: "Microbiology, Immunology and Foundational Sciences"
    },
    {
        id: 5,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Gurdev D. Singh, DDS, Ph.D",
        role: "Anatomy and Histology"
    },
    {
        id: 6,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Kampta Prashad, MBBS",
        role: "Physical Diagnosis"
    },
    {
        id: 7,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Sepideh Yadollahi",
        role: "Pathology and Foundational Sciences"
    },
    {
        id: 8,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Lemuel A. Evans, Ph.D",
        role: "Nutrition and Molecular Biology"
    }
];

export const clinicalSciencesFaculty: (Member | MemberNoSocials)[] = [
    {
        id: 1,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Dr. Pearline Grant",
        role: "ICM Demonstrator"
    },
    {
        id: 2,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Roberts",
        role: "MBBS, OB/GYN"
    },
    {
        id: 3,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "J. Williams",
        role: "Internal Medicine"
    },
    {
        id: 4,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Motto",
        role: "MBBS Pediatrics"
    },
    {
        id: 5,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "K. Amin",
        role: "MD Family Medicine"
    },
    {
        id: 6,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "N. Singh",
        role: "MD Clinical and Forensic Pathology"
    },
    {
        id: 7,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "B. Justice",
        role: "MD, Surgery and Surgical Oncology"
    },
    {
        id: 8,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Surendra Persaud",
        role: "MD Surgery"
    },
    {
        id: 9,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "W. Williams",
        role: "MD Family Medicine"
    },
    {
        id: 10,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Lisa Hasso",
        role: "MD Internal Medicine"
    },
    {
        id: 11,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "G.N. Kini",
        role: "MD Family and Internal Medicine"
    },
    {
        id: 12,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "W. Ramarez",
        role: "MD Infectious Disease, Internal Medicine"
    },
    {
        id: 13,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "H. B. Giddings",
        role: "MD, Internal Medicine and Endocrinology"
    },
    {
        id: 14,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "H. B. Giddings",
        role: "MD Internal Medicine"
    },
    {
        id: 15,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "R. Howell",
        role: "MD FACOG Obstetrics and Gynecology"
    },
    {
        id: 16,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "Spence",
        role: "MD Surgery"
    },
    {
        id: 17,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "W. Richardson",
        role: "MD Medicine"
    },
    {
        id: 18,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "C. Hixon",
        role: "MD FACS, Surgery"
    },
    {
        id: 19,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "C. Medley",
        role: "MD Orthopedics"
    },
    {
        id: 20,
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        hasSocials: false,
        name: "M. Delerme",
        role: "MD, MPH, Ophthalmology"
    }
];