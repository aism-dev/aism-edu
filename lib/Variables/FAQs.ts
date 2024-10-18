export interface FAQInterface {
    section: string,
    questions: {
        question: string;
        answer: string;
    }[];
}

export const faqData: FAQInterface[] = [
    {
        section: "Admissions & Application Process",
        questions: [
            {
                question: "What are the admission requirements for AISM?",
                answer: "Admission requirements vary depending on your educational background. Generally, applicants need to meet specific academic qualifications and pass an entrance evaluation. Detailed requirements can be found on our Admissions page."
            },
            {
                question: "How can I apply to AISM?",
                answer: "You can apply online through our website by filling out the application form. After submitting the form, you'll be contacted with further instructions."
            },
            {
                question: "What is the deadline for submitting applications?",
                answer: "AISM accepts applications year-round, but we recommend applying as early as possible. We start classes in January, May, and September."
            },
            {
                question: "Can international students apply to AISM?",
                answer: "Yes, AISM welcomes international students. Please check the specific requirements for international applicants on the Admissions page."
            }
        ]
    },
    {
        section: "Programs & Courses",
        questions: [
            {
                question: "What programs does AISM offer?",
                answer: "AISM offers a variety of medical programs, including Pre-Medical, MD (Doctor of Medicine), and specialized clinical rotations. Detailed information on our programs can be found on the Programs page."
            },
            {
                question: "Is there an option to take the MD program online?",
                answer: "The MD program is primarily conducted in person at our campuses, with opportunities for online coursework and virtual learning in certain areas."
            },
            {
                question: "What is the duration of the MD program?",
                answer: "The MD program typically takes 4-6 years, depending on the specialization and clinical rotation requirements."
            }
        ]
    },
    {
        section: "Tuition & Financial Aid",
        questions: [
            {
                question: "How much does the MD program cost?",
                answer: "The tuition for the MD program is $4,500 per semester, with additional fees for labs and other resources. Full details on tuition and fees can be found on our Tuition page."
            },
            {
                question: "Does AISM offer financial aid or scholarships?",
                answer: "Yes, AISM offers financial aid options for eligible students. We also provide scholarships for certain academic achievements. Please contact our Financial Aid office for more information."
            },
            {
                question: "What are the payment options for tuition?",
                answer: "We offer flexible payment plans, including installment options. For more details, please visit the Tuition page or contact our Financial Aid office."
            }
        ]
    },
    {
        section: "Campus Life",
        questions: [
            {
                question: "Where is AISM located?",
                answer: "AISM has campuses in Atlanta, Georgia, and Georgetown, Guyana, with clinical rotation opportunities in the USA, Canada, the UK, and Guyana."
            },
            {
                question: "Are there student housing options available?",
                answer: "Yes, we provide on-campus housing options for students at our Guyana campus. Off-campus housing options are also available for students at other locations."
            },
            {
                question: "What student resources are available on campus?",
                answer: "AISM offers a range of student services, including academic advising, counseling, a library, and student lounges. We also have access to cutting-edge medical technology and labs."
            }
        ]
    },
    {
        section: "Clinical Rotations & Residency",
        questions: [
            {
                question: "Where can I complete my clinical rotations?",
                answer: "Our students have clinical rotation opportunities in hospitals across the USA, Canada, the UK, and Guyana. Specific placements are based on availability and academic progress."
            },
            {
                question: "How do clinical rotations work?",
                answer: "Clinical rotations provide hands-on medical experience under the supervision of experienced physicians. Students rotate through different specialties, including internal medicine, surgery, pediatrics, and more."
            },
            {
                question: "Does AISM help students with residency placement?",
                answer: "Yes, AISM supports students in their residency applications, providing guidance and resources to help you secure residency positions in hospitals around the world."
            }
        ]
    },
    {
        section: "Student Support & Services",
        questions: [
            {
                question: "Does AISM offer tutoring or academic support?",
                answer: "Yes, we offer individual and group tutoring sessions for students who need extra support in their studies. Academic advisors are also available to help with course planning."
            },
            {
                question: "What career services does AISM provide?",
                answer: "AISM provides career counseling, residency application assistance, and networking opportunities with alumni and medical professionals to help students pursue successful careers in medicine."
            },
            {
                question: "How can I contact the AISM administration?",
                answer: "You can contact the AISM administration through the contact information provided on our website. We also have dedicated support for admissions, financial aid, and student services."
            }
        ]
    },
    {
        section: "General Information",
        questions: [
            {
                question: "How can I stay updated with AISM news and events?",
                answer: "Stay connected with AISM by following us on social media, subscribing to our newsletter, or visiting the News section on our website for updates on events and announcements."
            },
            {
                question: "Does AISM offer online or remote learning options?",
                answer: "AISM offers some online resources and virtual lectures, but the MD program is primarily in-person. Please refer to the Program page for more details on learning formats."
            },
            {
                question: "What is the student-to-faculty ratio at AISM?",
                answer: "AISM maintains a low student-to-faculty ratio to ensure personalized attention and support for all students. Specific ratios can be found on our Program details page."
            }
        ]
    }
];
