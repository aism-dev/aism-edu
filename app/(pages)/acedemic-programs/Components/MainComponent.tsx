"use client"
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
                <Image
                    src={mainImage.src}
                    alt={mainImage.alt}
                    height={mainImage.height}
                    width={mainImage.width}
                    className="w-full object-cover h-96"
                />
                <h3 className="text-2xl p-4 px-8 bg-white text-center mx-auto shadow-lg text-theme font-medium -mt-8 relative z-10 w-fit">{title}</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] px-8">
                {features.map((feature, index) => (
                    <div key={index} className="p-5 hover:bg-theme/5">
                        <FaCheck className="text-2xl text-green-600" />
                        <p className="font-medium text-themeDark">{feature.description}</p>
                    </div>
                ))}
            </div>

            <p className="p-5">{description}</p>
            
            <Button btnType="link" href={applyLink.href} className="px-5 mt-8 mb-5" sizeVariation="XL">
                {applyLink.label}
            </Button>
            <div className="flex gap-10">
                {applicationInfo.map((info, index) => (
                    <div key={index} className="p-5">
                        <h5 className="text-lg text-themeDark font-semibold">{info.label}:</h5>
                        <p className="text-3xl text-themelight">{info.date}</p>
                    </div>
                ))}
            </div>
            <div className="h-[30rem] overflow-hidden bg-black/5 mt-4 relative group grid place-items-center border border-black/5">
                <Image
                    src={video.thumbnailSrc}
                    alt="Thumbnail"
                    width={6139}
                    height={3453}
                    className="object-top object-cover"
                />
                <div className={clsx(
                    "absolute w-32 grid place-content-center cursor-pointer active:scale-95 group rounded-full bg-white/10 aspect-square z-20",
                    "after:w-[120%] after:aspect-square after:bg-white/10 after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
                )} onClick={() => setPlayVideo(true)}>
                    <FaPlay className="text-7xl ml-3 text-white group-active:rotate-12" />
                </div>
            </div>
            <AnimatePresence>
                {playVideo && <VideoPlayer closePlayer={() => setPlayVideo(false)} src={video.videoSrc} />}
            </AnimatePresence>
        </div>
    )
}
