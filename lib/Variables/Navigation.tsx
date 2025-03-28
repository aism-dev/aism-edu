"use client"
import { NavTabContext } from "@/app/home-page components/sub components/NavTab";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaArrowRight, } from "react-icons/fa"
import { FaFire, FaHourglass } from "react-icons/fa6";
import { useLocation } from "react-use";

export interface TabContent {
    id: number,
    title: string,
    description:  string,
    icon: string,
    url: string;
    popular?:  boolean,
    isComingSoon?: boolean
}

export const aboutTab: TabContent[] = [
    {
        id: 1,
        title: "Our Vision, Mission & Values",
        description: "Learn about AISM's guiding principles, our mission to transform medical education, and the values that drive our commitment to shaping compassionate, skilled healthcare professionals.",
        icon: "https://aism-edu.sirv.com/icons/download%20(2).png",
        url: "/about"
    },
    {
        id: 2,
        title: "A Message for You",
        description: "Read a personal message from our leadership, sharing AISM's dedication to your success and the global impact of our medical community.",
        icon: "https://aism-edu.sirv.com/icons/download%20(3).png",
        url: "/about/message-for-you"
    },
    {
        id: 3,
        title: "Meet Our Administration",
        description: "Get to know the dedicated leadership team at AISM, committed to fostering excellence in medical education and supporting your journey toward a successful healthcare career.",
        icon: "https://aism-edu.sirv.com/icons/download%20(4).png",
        url: "/about/meet-our-administration"
    },
];

export const admissionTab: TabContent[] = [
    {
        id: 1,
        title: "Admission Process",
        description: "Explore our step-by-step guide to applying at AISM, from initial requirements to enrollment. We make it easy for you to start your journey toward a world-class medical education.",
        icon: "https://aism-edu.sirv.com/icons/download%20(5).png",
        popular: true,
        url: "/admission/admission-process"
    },
    {
        id: 2,
        title: "Tuition & Fees",
        description: "Find detailed information about AISM’s tuition rates, fees, and available financial aid options to help you plan for your medical education.",
        icon: "https://aism-edu.sirv.com/icons/download%20(6).png",
        url: "/admission/tuition-fees"
    },
    {
        id: 3,
        title: "Visa Information",
        description: "Learn about the visa requirements and application process for international students at AISM, ensuring a smooth transition to your medical studies abroad.",
        icon: "https://aism-edu.sirv.com/icons/download%20(7).png",
        url: "/admission/visa-information"
    },
];

export const academicProgramsTab: TabContent[] = [
    {
        id: 1,
        title: "Pre-Health (Pre-Medical) Sciences",
        description: "Prepare for your medical education with our comprehensive Pre-Health Sciences program, designed to build a strong foundation in the essential sciences before advancing to medical studies.",
        icon: "https://aism-edu.sirv.com/icons/download%20(12).png",
        popular:  true,
        url: "/acedemic-programs/pre-med-course"
    },
    {
        id: 2,
        title: "Basic Science Program",
        description: "Delve into the core scientific principles of medicine with our Basic Science Program, focusing on the foundational knowledge necessary for clinical practice.",
        icon: "https://aism-edu.sirv.com/icons/download%20(8).png",
        url: "/acedemic-programs/basic-science-program"
    },
    {
        id: 3,
        title: "Clinical Science Program",
        description: "Gain hands-on experience in patient care and medical procedures through our Clinical Science Program, designed to bridge theoretical knowledge with real-world clinical practice.",
        icon: "https://aism-edu.sirv.com/icons/download%20(9).png",
        url: "",
        isComingSoon: true
    },
    {
        id: 4,
        title: "Community Medicine Course",
        description: "Engage with public health and community-based medical care through our Community Medicine Course, preparing you to address health challenges on a local and global scale.",
        icon: "https://aism-edu.sirv.com/icons/download%20(10).png",
        url: "/acedemic-programs/community-medicine-course"
    },
    {
        id: 5,
        title: "Biomedical Science",
        description: "Explore the intricate science behind human biology and disease with our Biomedical Science program, laying the groundwork for innovative research and clinical applications.",
        icon: "https://aism-edu.sirv.com/icons/download%20(11).png",
        url: "",
        isComingSoon: true
    },
];

export const applicationsTab: TabContent[] = [
    {
        "id": 1,
        "title": "Application Form MD",
        "description": "Start your journey towards becoming a medical doctor by completing our application form. Join AISM's MD program and take the first step toward a rewarding medical career.",
        "icon": "https://aism-edu.sirv.com/icons/download%20(18).png",
        "url": "/application-form"
    },
    {
        "id": 2,
        "title": "Community Medicine Course",
        "description": "Explore public health and community care in this popular course, designed to equip you with the skills to tackle healthcare challenges on both local and global levels.",
        "icon": "https://aism-edu.sirv.com/icons/download%20(19).png",
        "popular": true,
        "url": ""
    }      
]

const moreTab: TabContent[] = [
    ...admissionTab,
    {
        "id": 2,
        "title": "Student Success",
        "description": "Explore the inspiring stories of our students' journeys to success, equipping you with motivation to tackle your own healthcare challenges on both local and global levels.",
        "icon": "https://aism-edu.sirv.com/icons/download%20(19).png",
        "url": "/student-success"
    }      
].map((n, idx) => ({ ...n, id: idx }));

export const TABS: {
    id: number,
    title: string,
    Component: JSX.Element,
}[] = [
    {
        id: 1,
        title: 'About',
        Component: <TabComponent content={aboutTab} />,
    },
    {
        id: 2,
        title: 'Admission',
        Component: <TabComponent content={admissionTab} />,
    },
    {
        id: 3,
        title: 'Applications',
        Component: <TabComponent content={academicProgramsTab} />,
    },
    {
        id: 4,
        title: 'Student Success',
        Component: <TabComponent content={applicationsTab} />,
    },
    {
        id: 4,
        title: 'More',
        Component: <TabComponent content={moreTab} />,
    },
].map((n, idx) => ({ ...n, id: idx }));

function TabComponent({ content }: { content: TabContent[] }) {
    const { pathname } = useLocation();
    const { closeFunc } = useContext(NavTabContext);

    return (
        <div className="flex justify-between w-full relative">
            <div className="w-full h-[inherit] overflow-hidden absolute">
                <Image
                    src={"https://aism-edu.sirv.com/Assets/white-porous-texture.jpg"}
                    alt="grain"
                    height={2000}
                    width={2937}
                    className="w-full h-full object-cover opacity-20 pointer-events-none select-none"
                />
            </div>
            <div className="overflow-hidden absolute bottom-4 right-4">
                <Image
                    src={"https://aism-edu.sirv.com/icons/AISM-light.png"}
                    alt="AISM logo"
                    height={100}
                    width={100}
                    className="object-cover opacity-35 pointer-events-none select-none"
                />
            </div>
            <div className="flex-1 z-10 relative p-6 grid grid-cols-2 gap-2">
                {content.map((item)=>(
                    <Link href={item.url} key={item.id} onClick={closeFunc} className="flex items-start hover:shadow-lg gap-4 overflow-hidden relative hover:bg-white bg-white/90 cursor-pointer border group border-theme/50 hover:border-theme hover:-translate-y-1 hover:translate-x-1 active:translate-x-0 active:translate-y-0 p-4 rounded-md">
                        <Image
                            src={item.icon}
                            alt={item.title}
                            height={50}
                            width={50}
                            className="w-32 rotate-45 -top-5 -left-5 absolute group-hover:opacity-20 opacity-0 translate-y-5 group-hover:translate-y-0 select-none pointer-events-none"
                        />
                        <div className="-mt-1">
                            <h3 className="text-lg font-medium text-theme flex justify-between items-center">
                                <span className="flex gap-2 items-center">
                                    {item.title}
                                    {item.popular && <span className="text-xs text-red-500 flex group-hover:animate-stutter-shake">
                                        <FaFire className="text-xs translate-y-[1px] scale-90  group-hover:animate-none animate-pulse" /> Popular
                                    </span>}
                                    {item.isComingSoon && <span className="text-xs text-gray-500 flex">
                                        <FaHourglass className="text-xs translate-y-[1px] scale-90" /> Coming Soon
                                    </span>}
                                    <span className="text-black opacity-30 select-none pointer-events-none text-sm isVisited">visited</span>
                                </span>
                                <span className="flex items-center gap-2">
                                    {pathname === item.url ? 
                                        <span className="text-green-700">You&apos;re currently Here</span>
                                        :
                                        <FaArrowRight className="group-hover:opacity-100 group-active:rotate-45 group-hover:translate-x-0 -translate-x-5 origin-left opacity-0 text-themelight" />
                                    }
                                </span>
                            </h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </Link>
            ))}
            </div>
        </div>
    )
}