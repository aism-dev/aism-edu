"use client"

import Image from "next/image";
import VideoPlayer from "../general components/VideoPlayer";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa6";
import clsx from "clsx";

export default function YourJourneyOurPromise() {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <div className="p-6 pb-36 flex flex-col items-end relative">
            <div className="h-[clamp(30rem,60vh,20rem)] overflow-hidden w-full withGradient relative">
                <Image
                    src="https://aism-edu.sirv.com/301617876_512872740529074_7075262364263306893_n_LE_auto_x2.jpg"
                    alt="AISM Group Image"
                    width={1080}
                    height={604}
                    className="w-full min-h-full object-cover object-center sm:-mt-20 pointer-events-none select-none"
                />
                <div className="absolute bottom-0 z-20 text-white p-14 grid gap-3">
                    <h2 className="text-3xl font-medium">Your Journey, Our Promise</h2>
                    <p className="opacity-80 md:max-w-[50%]">
                        At AISM, we are committed to delivering exceptional medical education, shaping physicians who excel in any medical setting worldwide. Our graduates are equipped with the skills and knowledge to thrive, making them highly sought-after professionals across the globe.
                    </p>
                </div>
            </div>
            <div className="md:w-[clamp(30rem,40vw,20rem)] w-full h-96 md:-mt-[23rem] md:mr-20 z-40 bg-white md:border-[15px] border-white">
                <div className="relative w-full h-full grid place-items-center group bg-theme">
                    <div className={clsx(
                        "h-full w-full absolute top-0 left-0 pointer-events-none z-10",
                        "bg-black/35",
                    )}></div>
                    <Image
                        src="https://aism-edu.sirv.com/Screenshot%202024-10-11%20143302.png"
                        alt="message video"
                        width={1080}
                        height={604}
                        className="w-full h-full object-cover object-center pointer-events-none select-none"
                    />
                    <div className={clsx(
                        "absolute w-32 grid place-content-center cursor-pointer active:scale-95 group rounded-full bg-white/10 aspect-square z-20",
                        "after:w-[120%] after:aspect-square after:bg-white/10 after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
                    )} onClick={() => setPlayVideo(true)}>
                        <FaPlay className="text-7xl ml-3 text-white group-active:rotate-12" />
                    </div>
                </div>
                <div className="grid gap-3 pt-3">
                    <h3 className="text-2xl text-theme font-medium">Message from the President</h3>
                    <p className="opacity-80">Watch our President address AISM&apos;s mission and vision, sharing how we are committed to shaping the future of medicine and empowering the next generation of healthcare professionals.</p>
                </div>
            </div>
            <AnimatePresence>
                {playVideo && <VideoPlayer closePlayer={()=>setPlayVideo(false)} src="https://aism-edu.sirv.com/Videos/Dr%20Compressed.mp4" />}
            </AnimatePresence>
        </div>
    )
}