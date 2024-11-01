"use client"
import { AnimatedEntrance } from "@/app/general components/AnimatedEntrance";
import Button from "@/app/general components/Button";
import VideoPlayer from "@/app/general components/VideoPlayer";
import { MainComponentProps } from "@/lib/Variables/AcademicProgramsInterface";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaCheck, FaPlay } from "react-icons/fa6";

export default function MainComponent({
    mainImage,
    title,
    features,
    description,
    applyLink,
    applicationInfo,
    video
}: MainComponentProps) {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <div>
            <div className="relative">
                {video ? <>
                    <AnimatedEntrance>
                        <div className="max-h-[30rem] overflow-hidden bg-black/5 relative group grid place-items-center border border-black/5">
                            <Image
                                src={video.thumbnailSrc}
                                alt="Thumbnail"
                                width={6139}
                                height={3453}
                                className="object-top object-cover h-full w-full"
                            />
                            <div className={clsx(
                                "absolute w-32 grid place-content-center cursor-pointer active:scale-95 group rounded-full bg-white/10 aspect-square z-20",
                                "after:w-[120%] after:aspect-square after:bg-white/10 after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
                            )} onClick={() => setPlayVideo(true)}>
                                <FaPlay className="text-7xl ml-3 text-white group-active:rotate-12" />
                            </div>
                        </div>
                    </AnimatedEntrance>
                    <AnimatePresence>
                        {playVideo && <VideoPlayer closePlayer={() => setPlayVideo(false)} src={video.videoSrc} />}
                    </AnimatePresence>
                </> 
                    :
                    <AnimatedEntrance>
                        <Image
                            src={mainImage.src}
                            alt={mainImage.alt}
                            height={mainImage.height}
                            width={mainImage.width}
                            className="w-full object-cover object-top h-[30rem]"
                        />
                    </AnimatedEntrance>
                }

                    <h3 className="md:text-2xl sm:text-xl text-lg p-4 px-8 bg-white text-center mx-auto shadow-lg text-theme font-medium -mt-8 relative z-10 w-fit">{title}</h3>
            </div>
            <div className="my-5 grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] sm:px-5 mt-5">
                {features.map((feature, index) => (
                    <AnimatedEntrance key={index}>
                        <div className="p-5 hover:bg-theme/5">
                            <FaCheck className="text-2xl text-green-600" />
                            <p className="font-medium text-themeDark">{feature.description}</p>
                        </div>
                    </AnimatedEntrance>
                ))}
            </div>

            <AnimatedEntrance>
                <p className="sm:p-5 max-sm:text-balance">{description}</p>
            </AnimatedEntrance>
            
            <AnimatedEntrance>
                <div className="mt-8 mb-16">
                    <div className="flex gap-10">
                        {applicationInfo.map((info, index) => (
                            <div key={index} className="p-5">
                                <h5 className="sm:text-lg text-themeDark font-semibold opacity-70">{info.label}:</h5>
                                <p className="md:text-3xl text-2xl font-semibold text-themelight">{info.date}</p>
                            </div>
                        ))}
                    </div>
                    <Button href={applyLink.href} className="px-5 mt-4" sizeVariation="XL">
                        {applyLink.label}
                    </Button>
                </div>
            </AnimatedEntrance>
        </div>
    )
}
