"use client"
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Programs } from "@/lib/Variables/Programs";
import { motion } from  "framer-motion";
import Image from "next/image";
import Button from "../general components/Button";

export default function FindYourProgram() {
    const [currentItem, setCurrentItem] = useState(0);
    const [intervalId, setIntervalId] = useState(setInterval(()=>{}, 10));

    const changeComponent = () => {
        setCurrentItem((prevReason) => (prevReason + 1) % Programs.length);
    };

    useEffect(() => {
        const id = setInterval(changeComponent, 5000);
        setIntervalId(id);

        return () => clearInterval(id);
    }, []);

    const handleClick = (id: number) => {
        setCurrentItem(id);
        clearInterval(intervalId); // Clear the current interval
        const newIntervalId = setInterval(changeComponent, 5000); // Set a new interval
        setIntervalId(newIntervalId);
    };

    return (
        <div className="py-20">
            <div className="text-center flex flex-col items-center gap-4">
                <h2 className="text-4xl font-medium text-theme">Find your Course</h2>
                <p className="max-w-[40rem] leading-6 text-black/70">
                    Explore a range of programs tailored to your career goals. Choose the path that best suits your aspirations and start your journey in healthcare today.
                </p>
            </div>
            <div className="flex gap-3 mt-8 px-4">
                {Programs.map((program)=>(
                    <div key={program.id} onClick={() => handleClick(program.id - 1)} className={clsx(
                        "h-[25rem] min-w-40 transition-[width_1s_ease] duration-500-alt relative overflow-hidden",
                        currentItem === (program.id - 1) ? "flex-1" : "cursor-pointer"
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
                        <div className="absolute z-10 bottom-10 left-24 text-white grid gap-3">
                            <h3 className={clsx(
                                "origin-bottom-left text-2xl whitespace-nowrap flex flex-col",
                                currentItem === (program.id - 1) ? "font-semibold" : "-rotate-90"
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
                                <Button colorVariation="dark">
                                    Explore {program.title}
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
