"use client"
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { Programs } from "@/lib/Variables/Programs";
import { motion } from  "framer-motion";
import Image from "next/image";
import Button from "../general components/Button";
import { useIntersection, useWindowSize } from "react-use";
import { AnimatedEntrance } from "../general components/AnimatedEntrance";

export default function FindYourProgram() {
    const [currentItem, setCurrentItem] = useState(0);
    const [intervalId, setIntervalId] = useState(setInterval(()=>{}, 10));
    
    const containerRef = useRef<HTMLDivElement>(null);

    const changeComponent = () => {
        setCurrentItem((prevReason) => (prevReason + 1) % Programs.length);
    };

    const isInView = useIntersection(containerRef, {
        rootMargin: "0px",
        threshold:  0.25,
    })

    useEffect(() => {
        const id = setInterval(changeComponent, 10000);
        setIntervalId(id);

        return () => clearInterval(id);
    }, []);

    
    const handleClick = (id: number) => {
        setCurrentItem(id);
        clearInterval(intervalId); // Clear the current interval
        const newIntervalId = setInterval(changeComponent, 10000); // Set a new interval
        setIntervalId(newIntervalId);
    };

    useEffect(() => {
        if (!isInView || isInView?.isIntersecting) {
            const id = setInterval(changeComponent, 10000);
            setIntervalId(id);
            return;
        }

        clearInterval(intervalId);
    }, [isInView]);

    return (
        <div className="py-20 max-sm:px-3" ref={containerRef}>
            <AnimatedEntrance className="text-center flex flex-col items-center gap-4">
                <h2 className="text-4xl font-medium text-theme">Find your Course</h2>
                <p className="max-w-[40rem] leading-6 text-black/70">
                    Explore a range of programs tailored to your career goals. Choose the path that best suits your aspirations and start your journey in healthcare today.
                </p>
            </AnimatedEntrance>
            <div className="flex max-sm:flex-col gap-3 mt-8 sm:px-4 max-sm:h-screen max-sm:min-h-[50rem]">
                {Programs.map((program)=>(
                    <AnimatedEntrance key={program.id} className={clsx(
                        currentItem === (program.id - 1) ? "flex-1" : "cursor-pointer"
                    )}>
                        <div onClick={() => handleClick(program.id - 1)} className={clsx(
                            "sm:h-[25rem] max-sm:min-h-[5rem] h-full min-w-40 transition-[width_1s_ease] duration-500-alt relative overflow-hidden",
                        )}>
                            <div className={clsx(
                                "h-full pointer-events-none select-none absolute top-0 left-0 -z-10",
                                currentItem === (program.id - 1) ? "withGradient" : "withoutGradient"
                            )}>
                                <Image
                                    src={program.img}
                                    alt={program.title}
                                    height={10800}
                                    width={7200}
                                    priority
                                    className="h-full min-w-full object-top object-cover self-start"
                                    />
                            </div>
                            <div className="absolute z-10 bottom-10 sm:left-24 left-10 text-white grid gap-3">
                                <h3 className={clsx(
                                    "origin-bottom-left text-2xl whitespace-nowrap flex flex-col",
                                    currentItem === (program.id - 1) ? "font-semibold" : "sm:-rotate-90 translate-y-10 max-sm:translate-x-4"
                                )}>
                                    {currentItem === (program.id - 1) && program.isComingSoon && <span className="text-gray-300/80 capitalize font-thin">coming soon</span>}
                                    {program.title}
                                </h3>
                                <motion.p
                                    className="max-w-[80%] overflow-hidden opacity-80"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={currentItem === (program.id - 1) ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                    transition={currentItem === (program.id - 1) ? { duration: 0.5 } : { duration: 0.1}}
                                    exit={{ height: 0 }}
                                >
                                    {program.description}
                                </motion.p>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={currentItem === (program.id - 1) ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                    transition={currentItem === (program.id - 1) ? { duration: 0.5 } : { duration: 0.1}}
                                    exit={{ height: 0 }}
                                >
                                    <Button href={program.url} colorVariation="dark">
                                        Explore {program.title}
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </AnimatedEntrance>
                ))}
            </div>
        </div>
    )
}
