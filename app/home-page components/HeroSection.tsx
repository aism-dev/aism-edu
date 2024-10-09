"use client"
import Image from "next/image";
import HeroSlider from "./sub components/HeroSlider";
import { motion } from  "framer-motion";
import { HeroSliderSlide } from "@/lib/Variables/HeroSection";
import Button from "../general components/Button";
import clsx from "clsx";

export default function HeroSection() {
    return (
        <div className="grid place-items-center mt-36">
            <HeroSlider>
                {HeroSliderSlide.map((slideContent)=>(
                    <div className="heroImg" key={slideContent.id}>
                        <Image
                            src={slideContent.image}
                            alt="bg-cover"
                            height={slideContent.size.h}
                            width={slideContent.size.w}
                            className="h-[calc(100vh-2.5rem)] object-cover"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="absolute bottom-32 left-32 text-white z-10 max-w-[40rem]"
                        >
                            <p className="text-6xl leading-[1.15]">{slideContent.title}</p>
                            <p>{slideContent.content}</p>
                            <br />
                            <Button colorVariation="dark" sizeVariation="L">
                                {slideContent.ctaText}
                            </Button>
                        </motion.div>

                            <div className="absolute text-white right-10 bottom-10 z-10 flex gap-4 items-end">
                            {new Array(HeroSliderSlide.length).fill("").map((_, id) => (
                                <div 
                                    key={id}
                                    className={clsx(
                                        (id + 1) === slideContent.id ? "text-xl font-thin grid place-items-center rounded-full border border- w-20 aspect-square" : "opacity-30",
                                    )}
                                >{id + 1}</div>
                            ))}
                            </div>
                    </div>
                ))}
            </HeroSlider>
        </div>
    )
}