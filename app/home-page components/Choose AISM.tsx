"use client"
import Image from "next/image";
import Button from "../general components/Button";
import { FaArrowRight } from "react-icons/fa6";
import { WhatWeDoAtAism } from "@/lib/Variables/WhatWeDoAtAism";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function ChooseAISM() {
    const [currentItem, setCurrentItem] = useState(0);
    const [intervalId, setIntervalId] = useState(setInterval(()=>{}, 10));

    const changeComponent = () => {
        setCurrentItem((prevReason) => (prevReason + 1) % WhatWeDoAtAism.length);
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
        <section className="p-20 bg-theme text-white grid sm:grid-cols-[auto_1fr] gap-20">
            <div className="max-w-[clamp(25rem,30vw,20rem)] flex flex-col gap-4">
                <h3 className="text-5xl alt-font capitalize">
                    What we do at <span title="American International School of Medicine" className="text-5xl">AISM</span>
                </h3>
                <p className="opacity-70">
                    We take pride in carrying out our mission to educate and train future physicians, fastening their capability to make discoveries and lead innovation in the science and practice of medicine.
                </p>
            </div>
            <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-6">
                {WhatWeDoAtAism.map((item) => (
                    <div key={item.id} onMouseEnter={() => handleClick(item.id - 1)} className="sm:h-[22rem] h-80 hover:-translate-y-1 hover:translate-x-1 group bg-white overflow-hidden relative flex">
                        <div className="h-9 p-2 overflow-hidden w-9 rounded-md bg-theme absolute top-4 left-4 z-20">
                            <Image
                                src={item.icon}
                                alt={item.title}
                                height={50}
                                width={50}
                                className="select-none pointer-events-none h-full w-full object-contain invert"
                            />
                        </div>
                        <div className={clsx(
                            "h-full min-w-full w-full origin-bottom relative withGradient",
                            currentItem === (item.id - 1) ? "-ml-[100%] translate-y-10 -translate-x-28 rotate-90" : "",
                            )}>
                            <Image
                                src={item.image}
                                alt=""
                                height={6000}
                                width={4000}
                                priority
                                className="h-full w-full object-cover"
                            />
                            <h3 className="absolute bottom-4 left-0 px-2 text-center text-white text-lg z-10 w-full">{item.title}</h3>
                        </div>
                        <div className="h-full min-w-full w-full text-black relative">
                            <Image
                                src={item.icon}
                                alt={item.title}
                                height={250}
                                width={250}
                                className="select-none pointer-events-none h-full w-full object-contain absolute -top-10 -right-20 -rotate-45 opacity-10"
                            />

                            <div className="p-4 relative z-10">
                                <h4 className="text-lg font-bold text-theme mt-12">{item.title}</h4>
                                <p className="">
                                    {item.description}
                                </p>
                            </div>
                            <Button className="absolute bottom-3 right-3 z-10">
                                <span className="flex items-center gap-2">Learn more <FaArrowRight /></span>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
