"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import NavTab from "../home-page components/sub components/NavTab";
import { FaAngleUp, FaArrowUp } from "react-icons/fa6";
import clsx from "clsx";
import {useLocation} from 'react-use';



export default function Navigation() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollPositionRef = useRef(0);
    const [activeTab, setActiveTab] = useState(0);

    const state = useLocation();

    useEffect(() => {
        if (!state.pathname) return;
        const currentTab = state.pathname.split("/")[1];

        switch(currentTab){
            case "about":
                setActiveTab(1);
                break;
            case "adminssion":
                setActiveTab(2);
                break;
            case "acedemic-programs":
                setActiveTab(3);
                break;
            case "student-success":
                setActiveTab(4);
                break;
            case "application":
                setActiveTab(5);
                break;
            default:
                setActiveTab(0);
                break;
        }
    }, [state]);

    const tabRef01 = useRef<HTMLDivElement>(null);
    const tabRef02 = useRef<HTMLDivElement>(null);
    const tabRef03 = useRef<HTMLDivElement>(null);
    const tabRef04 = useRef<HTMLDivElement>(null);
    const tabRef05 = useRef<HTMLDivElement>(null);

    const [scrollDirection, setScrollDirection] = useState<null | "up" | "down">(null);
    const [rectBoundHover, setRectBoundHover] = useState(0);
    const [rectBoundWidth, setRectBoundWidth] = useState(0);


    const [currentlyHovered, setCurrentlyHovered] = useState<null | number>(null);
    const [lastHovered, setLastHovered] = useState<null | number>(null);

    const shouldHide = useMemo(() => scrollPosition >= 100, [scrollPosition]);
    const shouldHideBackTop = useMemo(() => scrollPosition >= 170, [scrollPosition]);

    const controls = useAnimation();

    const topVariants: Variants = {
        hidden: { y: -104 },
        visible: { y: 0, transition: { duration: 0.25 } },
    };

    const logoPositionVariants: Variants = {
        hidden: { y: 90, scale: 0.9 },
        visible: { y: 0, scale: 1, transition: { duration: 0.25 } },
    };

    const bottomLinksVariants: Variants = {
        hidden: { marginLeft: 70, },
        visible: { marginLeft: 0, transition: { duration: 0.25 } },
    };

    const handleScroll = () => {
        const position = window.scrollY;

        if (position > scrollPositionRef.current) {
            setScrollDirection('down');
        } else {
            setScrollDirection('up');
        }

        setScrollPosition(position);
        scrollPositionRef.current = position;
    };

    useEffect(() => {
        if (shouldHide && scrollDirection !== "up") {
            controls.start("hidden");
            return;
        }
        controls.start("visible");
    }, [shouldHide, scrollDirection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <motion.nav
                className="w-full bg-white xl:px-40 lg:px-20 md:px-10 sm:px-10 px-6 fixed top-0 left-0 z-50 shadow-lg shadow-black/5"
                variants={topVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.div
                    className="border-b border-b-gray-400/50 py-5 flex justify-between relative"
                >
                    <div className="flex items-center gap-2">
                        <motion.div
                            variants={logoPositionVariants}
                            initial="hidden"
                            animate={controls}
                        >
                            <Link href={"/"} className="no-underline">
                                <Image
                                    src={"https://aism-edu.sirv.com/icons/AISM-light.png"}
                                    alt="logo"
                                    height={500}
                                    width={500}
                                    className="h-16 w-auto"
                                />
                            </Link>
                        </motion.div>
                        <div className="grid">
                            <span className="alt-font text-2xl opacity-70 font-medium leading-4">American International</span>
                            <span className="alt-font text-3xl text-theme">School of Medicine</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <div className="inline-flex gap-6">
                            <Link className="text-sm hover:opacity-100 opacity-50" href={""}>
                                FaQ
                            </Link>
                            <Link className="text-sm hover:opacity-100 opacity-50" href={""}>
                                Blog
                            </Link>
                            <Link className="text-sm hover:opacity-100 opacity-50" href={""}>
                                Contact Us
                            </Link>
                        </div>
                        <Link href={"tel:+18664659966"} className="justify-self-end text-2xl text-themelight">+1 (866) 465 9966</Link>
                    </div>
                </motion.div>
                <div className="flex justify-between items-center relative border-b">
                    <motion.div
                        className="flex items-center py-3"
                        variants={bottomLinksVariants}
                        initial="hidden"
                        animate={controls}
                        onMouseLeave={() => {
                            setCurrentlyHovered(null)
                        }}
                    >
                        <span className={clsx(
                            "py-3 flex items-center gap-2 group pr-7 cursor-pointer hover:text-theme",
                            activeTab === 1 ? "text-theme font-semibold underline underline-offset-4" : "",

                        )} onMouseEnter={() => {
                            setCurrentlyHovered(0);
                            const rect = tabRef01.current!
                            const val = rect.getBoundingClientRect();
                            setRectBoundHover((val.left) + (val.width / 2));
                            setRectBoundWidth(val.width - 14);
                        }} ref={tabRef01}>About <FaAngleUp className={clsx(
                            "group-hover:rotate-180", 
                            activeTab === 1 ? "rotate-90" : "",

                        )} /></span>
                        <span className={clsx(
                            "py-3 min-[960px]:flex hidden items-center gap-2 group px-7 cursor-pointer hover:text-theme",
                            activeTab === 2 ? "text-theme font-semibold underline underline-offset-4" : "",
                        )} onMouseEnter={() => {
                            setCurrentlyHovered(1);
                            const rect = tabRef02.current!
                            const val = rect.getBoundingClientRect();
                            setRectBoundHover((val.left) + (val.width / 2));
                            setRectBoundWidth(val.width - 56);
                        }} ref={tabRef02}>Admission <FaAngleUp className={clsx(
                            "group-hover:rotate-180",
                            activeTab === 2 ? "rotate-90" : "",
                            )} /></span>
                        <span className={clsx(
                            "py-3 flex items-center gap-2 group px-7 cursor-pointer hover:text-theme",
                            activeTab === 3 ? "text-theme font-semibold underline underline-offset-4" : "",
                        )} onMouseEnter={() => {
                            setCurrentlyHovered(2);
                            const rect = tabRef03.current!
                            const val = rect.getBoundingClientRect();
                            setRectBoundHover((val.left - 37) + (val.width / 2));
                            setRectBoundWidth(val.width - 56);
                        }} ref={tabRef03}>Academic Programs <FaAngleUp className={clsx(
                            "group-hover:rotate-180",
                            activeTab === 3 ? "rotate-90" : "",
                            )} /></span>
                        <Link href={"#"} className={clsx(
                            "py-3 px-7 cursor-pointer hover:text-theme",
                            activeTab === 4 ? "text-theme font-semibold underline underline-offset-4" : "",
                        )} onMouseEnter={() => {
                            setLastHovered(2.5);
                            setCurrentlyHovered(null);
                        }} >Student Sucess</Link>
                        <span className={clsx(
                            "py-3  min-[960px]:flex hidden items-center gap-2 group px-7 cursor-pointer hover:text-theme",
                            activeTab === 5 ? "text-theme font-semibold underline underline-offset-4" : "",
                        )} onMouseEnter={() => {
                            setCurrentlyHovered(3);
                            const rect = tabRef04.current!
                            const val = rect.getBoundingClientRect();
                            setRectBoundHover((val.left - 10) + (val.width / 2));
                            setRectBoundWidth(val.width - 56);
                        }} ref={tabRef04}>Applications<FaAngleUp className={clsx(
                            "group-hover:rotate-180",
                            activeTab === 5 ? "rotate-90" : "",
                            )} /></span>
                        <span className={clsx(
                            "py-3 min-[960px]:hidden flex items-center gap-2 group px-7 cursor-pointer hover:text-theme",
                        )} onMouseEnter={() => {
                            setCurrentlyHovered(4);
                            const rect = tabRef05.current!
                            const val = rect.getBoundingClientRect();
                            setRectBoundHover((val.left - 10) + (val.width / 2));
                            setRectBoundWidth(val.width - 56);
                        }} ref={tabRef05}>More<FaAngleUp className={clsx(
                            "group-hover:rotate-180",
                            )} /></span>
                        <AnimatePresence>
                            {currentlyHovered !== null && <NavTab containerSize={rectBoundWidth} centerRect={rectBoundHover} closeFunc={setLastHovered} currentlyHovered={currentlyHovered} lastHovered={lastHovered} />}
                        </AnimatePresence>
                    </motion.div>
                    <Button>
                        <span>Apply for Admission</span>
                    </Button>
                    <div className="hamburger active text-theme">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </motion.nav>
            <AnimatePresence>
                {shouldHideBackTop && scrollDirection === "up" && <motion.div 
                    className={clsx(
                        "fixed bottom-10 right-10 z-[200]"
                    )}
                    initial={{
                        y: 20,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    exit={{
                        y: 20,
                        opacity: 0
                    }}
                    title="Go to the Top"
                >
                    <Link href={"#TopOfPage"} className={clsx("h-14 w-14 rounded-lg bg-theme text-white shadow-xl cursor-pointer active:scale-90 active:rotate-12 active:opacity-50 origin-bottom-left",
                        "grid place-items-center text-2xl")}>
                        <FaArrowUp />
                    </Link>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}