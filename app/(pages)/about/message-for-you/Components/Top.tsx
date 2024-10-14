"use client"
import VideoPlayer from "@/app/general components/VideoPlayer";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function TopSection() {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <div className="bg-theme h-screen relative grid grid-cols-[1fr_1.25fr]" id="TopOfPage">
            <div className="flex items-center">
                <h1 className="text-8xl font-normal text-white p-20">
                    Message <span className="text-3xl">from</span> <br /> <span className="text-3xl">the</span> President
                </h1>
            </div>
            <div className="rounded-bl-full h-full bg-white overflow-hidden relative">
                <Image
                    src={"https://aism-edu.sirv.com/icons/AISM-light.png"}
                    alt="AISM Logo"
                    height={318}
                    width={318}
                    className="w-full object-contain object-right-bottom h-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 blur opacity-25"
                />
                <Image
                    src={"https://aism-edu.sirv.com/CutOuts/dr.colin-a-wilkinson_LE_auto_x2-ai-brush-removebg-65ok652q.png"}
                    alt="Dr. Colin Wilkinson"
                    height={1920}
                    width={1280}
                    className="w-full object-contain object-right-bottom h-full translate-y-80 origin-bottom-right scale-150 relative"
                />
                <div className="grid place-items-center absolute top-0 left-0 h-full w-full">
                    <div className={clsx(
                        "absolute w-32 grid place-content-center cursor-pointer active:scale-95 group rounded-full bg-white/10 aspect-square z-20",
                        "after:w-[120%] after:aspect-square after:bg-white/10 after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
                    )} onClick={() => setPlayVideo(true)}>
                        <FaPlay className="text-7xl ml-3 text-white group-active:rotate-12" />
                    </div>
                    <AnimatePresence>
                        {playVideo && <VideoPlayer closePlayer={() => setPlayVideo(false)} src="https://aism-edu.sirv.com/Videos/Dr%20Compressed.mp4" />}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
