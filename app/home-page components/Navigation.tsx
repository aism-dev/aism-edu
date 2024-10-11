"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "../general components/Button";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimation, Variants } from  "framer-motion";
import NavTab from "./sub components/NavTab";
import { FaAngleUp } from "react-icons/fa6";



export default function Navigation() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollPositionRef = useRef(0);

    const tabRef01 = useRef<HTMLDivElement>(null);
    const tabRef02 = useRef<HTMLDivElement>(null);
    const tabRef03 = useRef<HTMLDivElement>(null);
    const tabRef04 = useRef<HTMLDivElement>(null);

    const [scrollDirection, setScrollDirection] = useState<null | "up" | "down">(null);
    const [rectBoundHover, setRectBoundHover] = useState(0);
    const [rectBoundWidth, setRectBoundWidth] = useState(0);


    const [currentlyHovered, setCurrentlyHovered] = useState<null | number>(null);
    const [lastHovered, setLastHovered] = useState<null | number>(null);

    const shouldHide = useMemo(() => scrollPosition >= 100, [scrollPosition]);
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

    useEffect(()=>{
        if(shouldHide && scrollDirection !== "up") {
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
        <motion.nav 
            className="w-full bg-white md:px-40 sm:px-10 px-6 fixed top-0 left-0 z-50"
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
                    onMouseLeave={()=>{
                        setCurrentlyHovered(null)
                    }}
                >
                    <span className="py-3 flex items-center gap-2 group pr-7 cursor-pointer" onMouseEnter={() => {
                        setCurrentlyHovered(0);
                        const rect = tabRef01.current!
                        const val = rect.getBoundingClientRect();
                        setRectBoundHover((val.left) + (val.width/2));
                        setRectBoundWidth(val.width - 14);
                    }} ref={tabRef01}>About <FaAngleUp className="group-hover:rotate-180" /></span>
                    <span className="py-3 flex items-center gap-2 group px-7 cursor-pointer" onMouseEnter={() => {
                        setCurrentlyHovered(1);
                        const rect = tabRef02.current!
                        const val = rect.getBoundingClientRect();
                        setRectBoundHover((val.left + 10) + (val.width / 2));
                        setRectBoundWidth(val.width - 56);
                    }} ref={tabRef02}>Admission <FaAngleUp className="group-hover:rotate-180" /></span>
                    <span className="py-3 flex items-center gap-2 group px-7 cursor-pointer" onMouseEnter={() => {
                        setCurrentlyHovered(2);
                        const rect = tabRef03.current!
                        const val = rect.getBoundingClientRect();
                        setRectBoundHover((val.left - 20) + (val.width / 2));
                        setRectBoundWidth(val.width - 56);
                    }} ref={tabRef03}>Academic Programs <FaAngleUp className="group-hover:rotate-180" /></span>
                    <span className="py-3 px-7 cursor-pointer" onMouseEnter={() => {
                        setLastHovered(3);
                        setCurrentlyHovered(null);
                    }} ref={tabRef04}>Student Sucess</span>
                    <AnimatePresence>
                        {currentlyHovered !== null && <NavTab containerSize={rectBoundWidth} centerRect={rectBoundHover} closeFunc={setLastHovered} currentlyHovered={currentlyHovered} lastHovered={lastHovered} />}
                    </AnimatePresence>
                </motion.div>
                <Button>
                    <span>Apply for Admission</span>
                </Button>
            </div>
        </motion.nav>
    )
}