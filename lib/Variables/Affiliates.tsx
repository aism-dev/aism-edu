export interface AffiliateInterface {
    id: number;
    name: string;
    affiliation: string;
    relationship: string;
    avatar: string;
}

const AffiliatesList: AffiliateInterface[] = [
    {
        id: 1,
        name: "World Health Organization (WHO)",
        affiliation: "American International School of Medicine (AISM) is listed in the World Health Organization – The AVICENNA Directories, which is a publicly accessible database of schools, colleges and universities for education of academic professions in health.",
        relationship: "Global Recognition through WHO Listing",
        avatar: "https://aism-edu.sirv.com/icons/affiliates/91vbv2hhsspm23eh4h5.svg"
    },
    {
        id: 2,
        name: "International Medical Education Directory (IMED)",
        affiliation: "AISM is listed in the International Medical Education Directory (IMED). This is an accurate and up-to-date compilation of International Medical Schools recognized by the appropriate government agency in the medical school’s respective country. Recognition by the ECFMG depends directly on whether or not the school is listed in this directory.",
        relationship: "IMED Recognition for Global Accreditation",
        avatar: "https://aism-edu.sirv.com/icons/affiliates/6y1sq5mthrxm23emdj2.svg"
    },
    {
        id: 3,
        name: "National Accreditation Council of Guyana",
        affiliation: "AISM is recognized by the Department of Education Via registration with the National Accreditation Council of Guyana.",
        relationship: "Accredited by the National Accreditation Council of Guyana",
        avatar: "https://aism-edu.sirv.com/icons/affiliates/logo-oi8sb1p0xue12zliuchxgzjumynqtmqmq6m7dh2na4.png"
    },
    {
        id: 4,
        name: "Walden University",
        affiliation: "AISM partners with Walden University to offer concurrent enrollment, allowing pre-med and medical students to pursue a second degree. This enhances their clinical training, boosts academic credentials, and improves residency competitiveness.",
        relationship: "Concurrent Enrollment Partnership with Walden University",
        avatar: "https://aism-edu.sirv.com/icons/affiliates/walden-university-aism_LE_auto_x2-removebg-preview.png"
    },
    {
        id: 5,
        name: "Medical Council of India",
        affiliation: "AISM is recognized by the Medical Council of India (MCI), allowing graduates to pursue medical licensure and opportunities in India.",
        relationship: "AISM is recognized by the MCI",
        avatar: "https://aism-edu.sirv.com/icons/affiliates/n4tgrjk5ckm28pmi0u.svg"
    },
    {
        id: 6,
        name: "Educational Commission for Foreign Medical Graduates (ECFMG)",
        affiliation: "AISM is recognized by the ECFMG, enabling graduates to pursue medical licensure and residency opportunities in the United States.",
        relationship: "AISM is recognized by the ECFMG",
        avatar: "https://aism-edu.sirv.com/icons/affiliates/ecfmg-aism_LE_auto_x2-removebg-preview.png"
    },
];

export default AffiliatesList;

// 