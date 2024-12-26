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
        name: "Dr. Colin A. Wilkinson",
        image: "https://aism-edu.sirv.com/dr.colin-a-wilkinson_LE_auto_x2.jpg",
        role: "Chair",
        hasSocials: true,
        socials: [
            { id: 1, icon: FaFacebookF, url: "https://facebook.com/dr.colin" },
            { id: 2, icon: FaTwitter, url: "https://twitter.com/dr.colin" },
        ],
    },
    {
        id: 2,
        name: "Dr. Clinton Wilkinson",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Vice Chair",
        hasSocials: false,
    },
    {
        id: 3,
        name: "Dr. Dion George",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Secretary",
        hasSocials: false,
    },
];

export const boardMembers: (Member | MemberNoSocials)[] = [
    {
        id: 1,
        name: "Dr. Donn D. Martin",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Member",
        hasSocials: false,
    },
    {
        id: 2,
        name: "Dr. Christine Wilkinson",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Member",
        hasSocials: false,
    },
    {
        id: 3,
        name: "Dr. Neil Klein",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Member",
        hasSocials: false,
    },
    {
        id: 4,
        name: "Rev. Fr. Dr. Basil",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Chaplain",
        hasSocials: false,
    },
    {
        id: 5,
        name: "Dr. G. Mujtata",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Member",
        hasSocials: false,
    },
    {
        id: 6,
        name: "Dr. William Cornell, JD, MD.",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Legal Counsel",
        hasSocials: false,
    },
    {
        id: 7,
        name: "Mr. Phillip Wallcott, M. Sc",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Member",
        hasSocials: false,
    },
    {
        id: 8,
        name: "Dr. Otis Powell",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Member",
        hasSocials: false,
    },
];

export const administrationStaff: (Member | MemberNoSocials)[] = [
    {
        id: 1,
        name: "Dr. Colin A. Wilkinson",
        image: "https://aism-edu.sirv.com/dr.colin-a-wilkinson_LE_auto_x2.jpg",
        role: "President / CEO",
        hasSocials: true,
        socials: [
            { id: 1, icon: FaFacebookF, url: "https://facebook.com/dr.colin" },
            { id: 2, icon: FaTwitter, url: "https://twitter.com/dr.colin" },
        ],
    },
    {
        id: 2,
        name: "Lorna McBarnett",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Chancellor (Emeritus)",
        hasSocials: false,
    },
    {
        id: 3,
        name: "Dr. Christine M. Wilkinson",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Executive Vice President",
        hasSocials: false,
    },
    {
        id: 4,
        name: "Dr. William Cornell, MD, JD, ESQ.",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Vice President / Associate Dean of Basic Medical Sciences",
        hasSocials: false,
    },
    {
        id: 5,
        name: "Dr. Dion George",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Corporate Secretary",
        hasSocials: false,
    },
    {
        id: 6,
        name: "Dr. Donn D. Martin",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Vice President Research Institute",
        hasSocials: false,
    },
    {
        id: 7,
        name: "Dr. Renee Sandy",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Director of Office of Enrollment Management",
        hasSocials: false,
    },
    {
        id: 8,
        name: "Dr. Otis Powell",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Dean of Clinical Sciences",
        hasSocials: false,
    },
    {
        id: 9,
        name: "Dr. Diane Roberts",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Associate Dean - Student Outcomes",
        hasSocials: false,
    },
    {
        id: 10,
        name: "Dr. Bala Roa",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Associate Dean of Admission",
        hasSocials: false,
    },
    {
        id: 11,
        name: "Dr. Tanesha Jerrick",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Associate Dean of Student Services",
        hasSocials: false,
    },
    {
        id: 12,
        name: "Dr. Dion George",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Associate Dean of Finance (Acting)",
        hasSocials: false,
    },
    {
        id: 13,
        name: "Dr. Curtis Briscoe",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Director Officer of Public Relations",
        hasSocials: false,
    },
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
        name: "Dr. Diane Roberts",
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

export const administration: (Member | MemberNoSocials)[] = [
    {
        id: 1,
        name: "Dr. Colin A. Wilkinson",
        image: "https://aism-edu.sirv.com/dr.colin-a-wilkinson_LE_auto_x2.jpg",
        role: "President / CEO",
        hasSocials: true,
        socials: [
            { id: 1, icon: FaFacebookF, url: "https://facebook.com/dr.colin" },
            { id: 2, icon: FaTwitter, url: "https://twitter.com/dr.colin" },
        ],
    },
    {
        id: 2,
        name: "Lorna McBarnett",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Chancellor (Emeritus)",
        hasSocials: false,
    },
    {
        id: 3,
        name: "Dr. Christine M. Wilkinson",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Executive Vice President",
        hasSocials: false,
    },
    {
        id: 4,
        name: "Dr. William Cornell, MD, JD, ESQ.",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Vice President / Associate Dean of Basic Medical Sciences",
        hasSocials: false,
    },
    {
        id: 5,
        name: "Dr. Dion George",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Corporate Secretary",
        hasSocials: false,
    },
    {
        id: 6,
        name: "Dr. Donn D. Martin",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Vice President Research Institute",
        hasSocials: false,
    },
    {
        id: 7,
        name: "Dr. Renee Sandy",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Director of Office of Enrollment Management",
        hasSocials: false,
    },
    {
        id: 8,
        name: "Dr. Otis Powell",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Dean of Clinical Sciences",
        hasSocials: false,
    },
    {
        id: 9,
        name: "Dr. Diane Roberts",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Associate Dean - Student Outcomes",
        hasSocials: false,
    },
    {
        id: 10,
        name: "Dr. Bala Roa",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Associate Dean of Admission",
        hasSocials: false,
    },
    {
        id: 11,
        name: "Dr. Tanesha Jerrick",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Associate Dean of Student Services",
        hasSocials: false,
    },
    {
        id: 12,
        name: "Dr. Dion George",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Associate Dean of Finance (Acting)",
        hasSocials: false,
    },
    {
        id: 13,
        name: "Dr. Curtis Briscoe",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Director Officer of Public Relations",
        hasSocials: false,
    },
    {
        id: 14,
        name: "G. Mark",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Administration of IT and Digital Services",
        hasSocials: false,
    },
    {
        id: 15,
        name: "O. Hendricks",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Administration of IT and Digital Services",
        hasSocials: false,
    },
    {
        id: 16,
        name: "Fabian Dev",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Administration of IT and Digital Services",
        hasSocials: false,
    },
];

export const basicScienceFaculty: (Member | MemberNoSocials)[] = [
    {
        id: 1,
        name: "Dr. Donn D. Martin",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Basic Science Faculty",
        hasSocials: false,
    },
    {
        id: 2,
        name: "Dr. Radbod Movassagh",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Physiology",
        hasSocials: false,
    },
    {
        id: 3,
        name: "Dr. Mehran Heravi",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Physical Diagnosis, Pharmacology",
        hasSocials: false,
    },
    {
        id: 4,
        name: "Dr. Renee Sandy",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Biochemistry",
        hasSocials: false,
    },
    {
        id: 5,
        name: "Gurdev D. Singh, DDS, Ph.D",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Microbiology, Immunology and Foundational Sciences",
        hasSocials: false,
    },
    {
        id: 6,
        name: "Kampta Prashad",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Anatomy and Histology",
        hasSocials: false,
    },
    {
        id: 7,
        name: "Dr. Sepideh Yadollahi",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MBBS Physical Diagnosis, Pathology and Foundational Sciences",
        hasSocials: false,
    },
    {
        id: 8,
        name: "Lemuel A. Evans, Ph.D",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Nutrition and Molecular Biology",
        hasSocials: false,
    },
];

export const clinicalScienceFaculty: (Member | MemberNoSocials)[] = [
    {
        id: 1,
        name: "Dr. Pearline Grant",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "ICM Demonstrator",
        hasSocials: false,
    },
    {
        id: 2,
        name: "Roberts",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MBBS, OB/ GYN.",
        hasSocials: false,
    },
    {
        id: 3,
        name: "J. Williams",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "Internal Medicine",
        hasSocials: false,
    },
    {
        id: 4,
        name: "Motto",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MBBS Pediatrics",
        hasSocials: false,
    },
    {
        id: 5,
        name: "K. Amin",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD Family Medicine",
        hasSocials: false,
    },
    {
        id: 6,
        name: "N. Singh",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD Clinical and Forensic Pathology",
        hasSocials: false,
    },
    {
        id: 7,
        name: "B. Justice",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD, Surgery and Surgical Oncology.",
        hasSocials: false,
    },
    {
        id: 8,
        name: "Surendra Persaud",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD Surgery",
        hasSocials: false,
    },
    {
        id: 9,
        name: "W. Williams",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD Family Medicine",
        hasSocials: false,
    },
    {
        id: 10,
        name: "Lisa Hasso",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD Internal Medicine",
        hasSocials: false,
    },
    {
        id: 11,
        name: "G.N. Kini",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD Family and Internal Medicine",
        hasSocials: false,
    },
    {
        id: 12,
        name: "W. Ramarez",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD Infectious Disease, Internal medicine",
        hasSocials: false,
    },
    {
        id: 13,
        name: "H. B. Giddings",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD, Internal Medicine and Endocrinology",
        hasSocials: false,
    },
    {
        id: 14,
        name: "H. B. Giddings",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD. Internal Medicine",
        hasSocials: false,
    },
    {
        id: 15,
        name: "R. Howell",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD FACOG Obstetrics and Gynecology",
        hasSocials: false,
    },
    {
        id: 16,
        name: "Spence",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD Surgery",
        hasSocials: false,
    },
    {
        id: 17,
        name: "W. Richardson",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD Medicine",
        hasSocials: false,
    },
    {
        id: 18,
        name: "C. Hixon",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD FACS, Surgery",
        hasSocials: false,
    },
    {
        id: 19,
        name: "C. Medley",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD Orthopedics",
        hasSocials: false,
    },
    {
        id: 20,
        name: "M. Delerme",
        image: "https://aism-edu.sirv.com/Team/default_profile_image.png",
        role: "MD., MPH. Ophthalmology",
        hasSocials: false,
    },
];