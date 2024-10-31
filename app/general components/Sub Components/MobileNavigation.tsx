"use client"
import { aboutTab, academicProgramsTab, admissionTab, applicationsTab, TabContent } from "@/lib/Variables/Navigation";
import clsx from "clsx";
import { motion, useAnimation, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaAngleUp, FaHandPointLeft } from "react-icons/fa6";
import { useLocation } from "react-use";

export default function MobileNavigation({ closeFunc }: { closeFunc: () => void }) {
    const [activeTab, setActiveTab] = useState(0);

    const state = useLocation();

    useEffect(() => {
        if (!state.pathname) return;
        const currentTab = state.pathname.split("/")[1];

        switch (currentTab) {
            case "about":
                setActiveTab(1);
                break;
            case "admission":
                setActiveTab(2);
                break;
            case "acedemic-programs":
                setActiveTab(3);
                break;
            case "student-success":
                setActiveTab(4);
                break;
            case "application-form":
                setActiveTab(5);
                break;
            case "contact-us":
                setActiveTab(6);
                break;
            case "faqs":
                setActiveTab(7);
                break;
            default:
                setActiveTab(0);
                break;
        }
    }, [state]);

    return (
        <motion.div
            initial={{
                height: 0,
                opacity: 0,
                overflowX: "hidden",
                overflowY: "hidden",
            }}
            animate={{
                opacity: 1,
                height: "100dvh",
                overflowX: "hidden",
                overflowY: "hidden",
            }}
            transition={{
                duration: 0.5,
                type: "spring"
            }}
            exit={{
                height: 0,
                overflowX: "hidden",
                overflowY: "hidden",
            }}

            className={clsx(
                "sm:hidden fixed flex top-0 left-0 w-screen overflow-y-auto origin-center z-[49] bg-gradient-to-b from-theme/90 to-themeDark/95 backdrop-blur-sm",

            )}
        >
            <div className="relative text-white mt-20 w-full">
                <div className="grid sm:px-10 px-5">
                    <NavItem
                        currentTab={state.pathname ?? ""}
                        myIndex={1}
                        title="About"
                        closeFunc={closeFunc}
                        content={aboutTab}
                        activeTab={activeTab}
                    />
                    <NavItem
                        currentTab={state.pathname ?? ""}
                        title="Admission"
                        myIndex={2}
                        closeFunc={closeFunc}
                        content={admissionTab}
                        activeTab={activeTab}
                     />
                    <NavItem
                        currentTab={state.pathname ?? ""}
                        closeFunc={closeFunc}
                        title="Academic Programs"
                        myIndex={3}
                        content={academicProgramsTab}
                        activeTab={activeTab}
                     />
                    <Link onClick={closeFunc} href={"/student-success"} className={clsx(
                        "py-5 text-xl border-b justify-between flex w-full no-underline cursor-pointer px-3",
                    )} >
                        <span className="inline-flex items-center gap-3">
                            Student Success
                            {activeTab === 4 && <FaHandPointLeft className="mt-1" />}
                        </span>
                        <button className="px-2 py-2 bg-white text-theme">
                            <FaAngleUp className={clsx(
                                "group-hover:rotate-[120deg] group-active:rotate-[180deg] rotate-90",
                            )} />
                        </button>
                    </Link>
                    <NavItem
                        currentTab={state.pathname ?? ""}
                        closeFunc={closeFunc}
                        title="Applications"
                        content={applicationsTab}
                        myIndex={5}
                        activeTab={activeTab}
                     />
                </div>
                 <div className="flex justify-between gap-6 p-6">
                    <Link onClick={closeFunc} className={clsx(
                        "py-3 px-8 hover:opacity-100 alt-link",
                    )} href={"/faqs"}>
                        FaQ
                    </Link>
                    <Link onClick={closeFunc} className="py-3 px-8 hover:opacity-100 alt-link opacity-80" href={""}>
                        Blog
                    </Link>
                    <Link onClick={closeFunc} className={clsx(
                        "py-3 px-8 hover:opacity-100 alt-link",
                    )} href={"/contact-us"}>
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className="w-0 bg-red-500">
                hello
            </div>
        </motion.div>
    )
}

const NavItem = ({ content, title, currentTab, activeTab, myIndex, closeFunc }: {
    title: string,
    content: TabContent[]
    currentTab: string,
    activeTab: number,
    myIndex: number,
    closeFunc: ()=>void
}) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLParagraphElement>(null);
    const controls = useAnimation();
    const [collapsed, setCollapsed] = useState(true);
    const [height, setHeight] = useState(0);

    const variants: Variants = {
        hidden: { opacity: 0, height: 0, paddingTop: 0 },
        visible: { opacity: 1, height: height,  paddingTop: "12px" },

    };

    useLayoutEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight); 
        }
    }, [collapsed]);

    useEffect(() => {
        if (collapsed) {
            controls.start("hidden");
        } else {
            controls.start("visible");
        }
    }, [collapsed, controls]);

    return (
        <div>
            <span onClick={() => setCollapsed(!collapsed)} ref={titleRef} className={clsx(
                "py-5 text-xl border-b justify-between flex items-center gap-2 group px-3 cursor-pointer",
            )} >
                <span className="inline-flex items-center gap-3">
                    {title}
                    {activeTab === myIndex && <FaHandPointLeft className="mt-1" />}
                </span>
                <button className="px-2 py-2 bg-white text-theme">
                    <FaAngleUp className={clsx(
                        "group-hover:rotate-[120deg] group-active:rotate-[180deg] rotate-90",
                    )} />
                </button>
            </span>
            {content.length > 0 && <motion.div 
                ref={contentRef}
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.15 }}
                className="overflow-hidden transition-all grid"
            >
                {content.map((item)=>(
                    <Link onClick={closeFunc} href={item.url} key={item.id} className="py-3 flex justify-between group ml-5 border-b no-underline border-b-white relative after:absolute after:h-11 after:w-3 after:border-l after:border-b after:-top-5 after:-left-5 hover:bg-white hover:text-theme hover:pl-5 hover:font-semibold">
                        <div className="inline-flex">
                            <Image
                                src={item.icon}
                                alt={item.title}
                                height={25}
                                width={25}
                                className="invert inline-flex mr-3 items-center group-hover:invert-0"
                            />
                            {item.title}
                        </div>
                        {currentTab === item.url && <span className="text-sm text-green-400 px-2">You&apos;re currently here</span>}
                    </Link>
                ))}
            </motion.div>}
        </div>
    )
}