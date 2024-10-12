export interface TestimonialInterface {
    id: number;
    name: string;
    testimonial: string;
    role: string;
    avatar: string;
}

const TestimonialsList: TestimonialInterface[] = [
    {
        id: 1,
        name: "Dr. Ranuka Bhagtani",
        testimonial: "You had always been there for me and I appreciated that very much.",
        role: "Director of Clinical Research, Cardio MD, USA",
        avatar: "https://aism-edu.sirv.com/Dr.Peraline.jpeg"
    },
    {
        id: 2,
        name: "Dr. Peraline Grant",
        testimonial: "Attending AISM was the greatest decision I have ever made.",
        role: "Family Medicine Consultant, Nashville General Hospital, Nashville, Tenn. USA",
        avatar: "https://aism-edu.sirv.com/Dr.Peraline.jpeg"
    },
    {
        id: 3,
        name: "Robin Chaudhary B.Sc, M.D.",
        testimonial: "Who influenced me the most during my time at AISM is Dr. Colin Wilkinson who always inspired me to be at my best.",
        role: "Orlando, Florida",
        avatar: "https://aism-edu.sirv.com/Dr.Peraline.jpeg"
    },
    {
        id: 4,
        name: "Dr. Sarwat Shaheen",
        testimonial: "Glad to have made the grade. Thank you for the encouragement and support.",
        role: "Resident Physician, Mount Sinai General Hospital, NY, USA",
        avatar: "https://aism-edu.sirv.com/Dr.Peraline.jpeg"
    },
];

export default TestimonialsList;

// 