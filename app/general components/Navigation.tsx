"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import NavTab from "../home-page components/sub components/NavTab";
import { FaAngleUp, FaArrowUp } from "react-icons/fa6";
import clsx from "clsx";
import { useLocation, useWindowSize } from 'react-use';
import MobileNavigation from "./Sub Components/MobileNavigation";

export default function Navigation() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollPositionRef = useRef(0);
    const [activeTab, setActiveTab] = useState(0);
    const [hamburgerOpen,  setHamburgerOpen] = useState(false);
    const ViewPort = useWindowSize();

    const state = useLocation();

    useEffect(() => {
        if (!state.pathname) return;
        const currentTab = state.pathname.split("/")[1];

        switch(currentTab){
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
        hidden: { y: ViewPort.width > 700 ? -108 : -90 },
        visible: { y: 0, transition: { duration: 0.25 } },
    };

    const logoPositionVariants: Variants = {
        hidden: { y: ViewPort.width > 700 ? 90: 75, scale: 0.9 },
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
        if ((shouldHide && scrollDirection !== "up") || hamburgerOpen) {
            controls.start("hidden");
            return;
        }
        controls.start("visible");
    }, [shouldHide, scrollDirection, hamburgerOpen]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <motion.nav
                className="w-full bg-white md:px-[10vmin] lg:px-[20vmin] px-[5vmin] fixed top-0 left-0 z-50 shadow-lg shadow-black/5"
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
                            className="cursor-pointer relative z-20"
                        >
                            <Link href={"/"} className="no-underline">
                                <Image
                                    src={"https://aism-edu.sirv.com/icons/AISM-light.png"}
                                    alt="logo"
                                    height={500}
                                    width={500}
                                    priority
                                    className="h-16 w-auto"
                                />
                            </Link>
                        </motion.div>
                        <Link href={"/"} className="grid">
                            <span className="alt-font text-2xl max-sm:text-xl opacity-70 font-medium leading-4 max-sm:leading-3">American International</span>
                            <span className="alt-font text-3xl max-sm:text-2xl text-theme">School of Medicine</span>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <div className="inline-flex gap-6 max-sm:hidden">
                            <Link className={clsx(
                                "text-sm hover:opacity-100",
                                activeTab === 7 ? "opacity-100 underline underline-offset-4 text-theme font-medium" : "opacity-80",
                            )} href={"/faqs"}>
                                FaQ
                            </Link>
                            <Link className="text-sm hover:opacity-100 opacity-80" href={""}>
                                Blog
                            </Link>
                            <Link className={clsx(
                                "text-sm hover:opacity-100",
                                activeTab === 6 ? "opacity-100 underline underline-offset-4 text-theme font-medium" : "opacity-80",
                            )} href={"/contact-us"}>
                                Contact Us
                            </Link>
                        </div>
                        <Link href={"tel:+18664659966"} className="justify-self-end text-2xl text-themelight">+1 (866) 465 9966</Link>
                    </div>
                </motion.div>
                <div className="flex justify-between items-center relative border-b">
                    <motion.div
                        className="flex items-center py-3 max-sm:hidden"
                        variants={bottomLinksVariants}
                        initial="hidden"
                        animate={controls}
                        onMouseLeave={() => {
                            setCurrentlyHovered(null)
                        }}
                    >
                        <span className={clsx(
                            "py-3 flex items-center gap-2 group pr-7 cursor-pointer hover:text-theme",
                            activeTab === 1 ? "text-theme font-semibold underline underline-offset-8" : "",

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
                            activeTab === 2 ? "text-theme font-semibold underline underline-offset-8" : "",
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
                            activeTab === 3 ? "text-theme font-semibold underline underline-offset-8" : "",
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
                        <Link href={"/student-success"} className={clsx(
                            "py-3 px-7 min-[960px]:flex hidden  cursor-pointer hover:text-theme",
                            activeTab === 4 ? "text-theme font-semibold underline underline-offset-8" : "",
                        )} onMouseEnter={() => {
                            setLastHovered(2.5);
                            setCurrentlyHovered(null);
                        }} >Student Success</Link>
                        <span className={clsx(
                            "py-3  min-[960px]:flex hidden items-center gap-2 group px-7 cursor-pointer hover:text-theme",
                            activeTab === 5 ? "text-theme font-semibold underline underline-offset-8" : "",
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
                            {currentlyHovered !== null && <NavTab containerSize={rectBoundWidth} centerRect={rectBoundHover} closeFunc={()=>setCurrentlyHovered(null)} unMountFunc={setLastHovered} currentlyHovered={currentlyHovered} lastHovered={lastHovered} />}
                        </AnimatePresence>
                    </motion.div>
                    <div className={clsx(
                        "flex gap-6 items-center max-sm:py-3 max-sm:flex-1 justify-self-end",
                        (shouldHide && scrollDirection !== "up") || hamburgerOpen ? "max-sm:justify-end" : "max-sm:justify-between"
                    )}>
                        <Button>
                            <span>Apply for Admission</span>
                        </Button>
                        <div className="relative">
                            <div onClick={() => setHamburgerOpen(!hamburgerOpen)} className={clsx(
                                "hamburger text-theme",
                                hamburgerOpen ? "active z-[1000]" : "",
                                "min-[960px]:hidden"

                            )}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.nav>
            <AnimatePresence>
                {hamburgerOpen && <MobileNavigation closeFunc={()=>setHamburgerOpen(false)} />}
            </AnimatePresence>
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