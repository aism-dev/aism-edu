"use client"
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { useLocation } from "react-use";

export default function MobileNavigation() {
    const [activeTab, setActiveTab] = useState(0);

    const state = useLocation();

    useEffect(() => {
        if (!state.pathname) return;
        const currentTab = state.pathname.split("/")[1];

        switch (currentTab) {
            case "about":
                setActiveTab(1);
                break;
            case "admi\ssion":
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
            }}
            animate={{
                opacity: 1,
                height: "100dvh"
            }}
            transition={{
                duration: 0.5,
                type: "spring"
            }}
            exit={{
                height: 0
            }}

            className={clsx(
                "sm:hidden fixed flex top-0 left-0 w-screen overflow-hidden origin-center z-[49] bg-gradient-to-b from-theme/90 to-themeDark/95 backdrop-blur-sm",
            )}
        >
            <div className="relative text-white mt-20 w-full">
                <div className="inline-flex gap-6 px-5">
                    <Link className={clsx(
                        "py-3 px-8 hover:opacity-100 alt-link",
                    )} href={"/faqs"}>
                        FaQ
                    </Link>
                    <Link className="py-3 px-8 hover:opacity-100 alt-link opacity-80" href={""}>
                        Blog
                    </Link>
                    <Link className={clsx(
                        "py-3 px-8 hover:opacity-100 alt-link",
                    )} href={"/contact-us"}>
                        Contact Us
                    </Link>
                </div>
                <div className="grid px-10">
                    <span className={clsx(
                        "py-5 text-xl border-b justify-between flex items-center gap-2 group px-3 cursor-pointer",
                    )} >
                        About 
                        <span className="px-2 py-2 bg-white text-theme">
                            <FaAngleUp className={clsx(
                                "group-hover:rotate-[120deg] group-active:rotate-[180deg] rotate-90",
                            )} />
                        </span>
                    </span>
                    <span className={clsx(
                        "py-5 text-xl border-b justify-between flex items-center gap-2 group px-3 cursor-pointer",
                    )} >
                        Admission 
                        <span className="px-2 py-2 bg-white text-theme">
                            <FaAngleUp className={clsx(
                                "group-hover:rotate-[120deg] group-active:rotate-[180deg] rotate-90",
                            )} />
                        </span>
                    </span>
                    <span className={clsx(
                        "py-5 text-xl border-b justify-between flex items-center gap-2 group px-3 cursor-pointer",
                    )} >Academic 
                        Programs 
                        <span className="px-2 py-2 bg-white text-theme">
                            <FaAngleUp className={clsx(
                                "group-hover:rotate-[120deg] group-active:rotate-[180deg] rotate-90",
                            )} />
                        </span>
                    </span>
                    <Link href={"/student-success"} className={clsx(
                        "py-5 text-xl border-b justify-between w-fit cursor-pointer px-3",
                    )} >Student Success</Link>
                    <span className={clsx(
                        "py-5 text-xl border-b justify-between flex items-center gap-2 group px-3 cursor-pointer",
                    )} >
                        Applications
                        <span className="px-2 py-2 bg-white text-theme">
                            <FaAngleUp className={clsx(
                                "group-hover:rotate-[120deg] group-active:rotate-[180deg] rotate-90",
                            )} />
                        </span>
                    </span>
                </div>
            </div>
            <div className="w-0 bg-red-500">
                hello
            </div>
        </motion.div>
    )
}