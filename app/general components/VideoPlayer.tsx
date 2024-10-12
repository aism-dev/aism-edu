"use client"
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import spinnerLoader from "../assets/spinner.svg";
import Image from "next/image";
import { useClickAway } from "react-use";
import { motion } from "framer-motion";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function VideoPlayer(videoProps: { src: string, closePlayer: () => void }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef  = useRef<HTMLDivElement>(null);
    
    useClickAway(containerRef, videoProps.closePlayer);
    const [videoLength, setVideoLength] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const [isBuffering, setIsBuffering] = useState(false);

    useEffect(() => {
        if (!videoRef.current) return;

        const video = videoRef.current;

        const handleWaiting = () => {
            setIsBuffering(true);
        };

        const handleCanPlay = () => {
            setIsBuffering(false);
        };

        video.addEventListener('waiting', handleWaiting);
        video.addEventListener('canplay', handleCanPlay);

        return () => {
            video.removeEventListener('waiting', handleWaiting);
            video.removeEventListener('canplay', handleCanPlay);
        };
    }, []);


    useEffect(() => {
        if (!videoRef.current) return;

        const video = videoRef.current;

        const updateTime = () => {
            setCurrentTime(video.currentTime);
        };

        const setDuration = () => {
            setVideoLength(video.duration);
        };

        video.addEventListener('loadedmetadata', setDuration);
        video.addEventListener('timeupdate', updateTime);

        return () => {
            video.removeEventListener('loadedmetadata', setDuration);
            video.removeEventListener('timeupdate', updateTime);
        };
    }, []);

    const handleMute = () => {
        if (!videoRef.current) return;
        setIsMuted(!isMuted);
    }

    const handlePlayPause = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    const remainingTime = videoLength - currentTime;

    return (
        <motion.div 
            className="fixed top-0 left-0 h-screen w-screen z-[100] grid place-items-center overflow-y-hidden bg-black/35 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div title="Close the video" className="absolute h-full w-full -z-10 cursor-pointer"></div>
            <motion.div
                className="relative -mt-10 shadow-2xl shadow-black/25 border-2 border-white/40" ref={containerRef}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.15 }}
                exit={{ x: 100 }}
            >
                <div className="relative w-[60vw] h-[65vh] grid place-items-center group overflow-hidden">
                    <video
                        className="w-full h-full object-cover object-center bg-theme"
                        playsInline
                        ref={videoRef}
                        muted={isMuted}
                    >
                        <source src={videoProps.src} type="video/mp4" />
                    </video>

                    <div className={clsx(
                        "h-full w-full absolute top-0 left-0 z-10 pointer-events-none",
                        (isPlaying || !isBuffering) ? "group-hover:bg-black/35 bg-transparent" : "bg-black/35",
                    )}></div>

                    <div className="absolute bottom-10 right-10 z-30 text-3xl text-white drop-shadow-md">
                        {formatTime(remainingTime)}
                    </div>
                    
                    <div className="absolute bottom-10 left-10 z-30 cursor-pointer text-white drop-shadow-md active:scale-75 active:opacity-50 active:rotate-12" onClick={handleMute}>
                        {isMuted ? <FaVolumeMute className="text-3xl" /> : <FaVolumeUp className="text-3xl" />}
                    </div>

                    {!isBuffering ? <div title={ isPlaying ? "Pause the Video" : "Play the Video"} className={clsx(
                        "z-20 absolute backdrop-blur-[1px] w-32 grid place-content-center cursor-pointer active:scale-95 group rounded-full bg-white/10 aspect-square",
                        "after:w-[120%] after:backdrop-blur-[1px] after:hover:scale-105 after:aspect-square after:bg-white/10 after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2",
                        isPlaying ? "opacity-0 group-hover:opacity-100" : ""
                    )} onClick={handlePlayPause}>
                        {!isPlaying ? (
                            <FaPlay className="text-7xl ml-3 text-white group-active:rotate-12" />
                        ) : (
                            <FaPause className="text-7xl text-white group-active:rotate-12" />
                        )}
                    </div>
                        :
                        < Image
                            src={spinnerLoader}
                            alt="Buferring"
                            height={200}
                            width={200}
                            className="z-20 absolute"
                            title={ isPlaying ? "Buffering... Please wait while the video is loading." : ""}

                        />
                    }
                </div>
            </motion.div>
        </motion.div>
    )
}