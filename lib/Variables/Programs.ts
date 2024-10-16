interface Programs {
    id: number;
    title: string;
    description: string;
    img: string;
    isComingSoon?: any;
    url: string
}

export const Programs: Programs[] = [
    {
        id: 1,
        title: "Community Medicine Course",
        description: "To create the world’s first online course for healthcare. This will be offered globally for a duration of some 12 weeks. On finishing, students will have a full certificate of completion.",
        img: "https://aism-edu.sirv.com/pexels-mikhail-nilov-7465697.jpg",
        url: "/acedemic-programs/community-medicine-course"
    },
    {
        id: 2,
        title: "Clinical Science Program",
        description: "A lead that has been qualified by the sales team as a potential customer.",
        img: "https://aism-edu.sirv.com/pexels-rdne-6129507.jpg",
        url: ""
    },
    {
        id: 3,
        title: "Basic Science Program",
        description:"AISM exciting opportunity for you to start your journey into medicine with the AISM Basic Science Course.",
        img: "https://aism-edu.sirv.com/pexels-artempodrez-5726789.jpg",
        isComingSoon:  true,
        url: "/acedemic-programs/basic-science-program"
    },
    {
        id: 4,
        title: "Pr-HealthMedical Science)",
        description: "The American International School of Medicine began in 1999 and has graduated hundreds of medical doctors who are in speciality clinical and or training and or practices medicine in the USA, Guyana, UK, Pakistan, Caribbean, and other countries worldwide.",
        img: "https://aism-edu.sirv.com/national-cancer-institute-c6rgP7K5rXc-unsplash.jpg",
        url: "/acedemic-programs/pre-med-course"
    },
]