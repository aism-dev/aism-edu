"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp from 'react-countup';
import { FaCheckDouble} from "react-icons/fa6";
import { useIntersection } from "react-use";

export default function WhyChooseUs() {
    const counter01Ref = useRef<HTMLDivElement>(null);
    const counter01Intersection = useIntersection(counter01Ref, {
        rootMargin: "10px",
        threshold: 0.5,
    });

    const counter02Ref = useRef<HTMLDivElement>(null);
    const counter02Intersection = useIntersection(counter02Ref, {
        rootMargin: "10px",
        threshold: 0.5,
    });

    const counter03Ref = useRef<HTMLDivElement>(null);
    const counter03Intersection = useIntersection(counter03Ref, {
        rootMargin: "10px",
        threshold: 0.5,
    });
    
    const [counter01InView, setCounter01InView] = useState(false);
    const [counter02InView, setCounter02InView] = useState(false);
    const [counter03InView, setCounter03InView] = useState(false);

    useEffect(() => {
        if (counter01Intersection?.isIntersecting) {
            setCounter01InView(true);
        }
    }, [counter01Intersection]);

    useEffect(() => {
        if (counter02Intersection?.isIntersecting) {
            setCounter02InView(true);
        }
    }, [counter02Intersection]);

    useEffect(() => {
        if (counter03Intersection?.isIntersecting) {
            setCounter03InView(true);
        }
    }, [counter03Intersection]);

    return (
        <div className="flex flex-wrap flex-row-reverse py-20">
                <div className="w-[40rem]">
                    <Image
                    src={"https://aism-edu.sirv.com/SaveClip.App_75234587_102484511140997_7839154373435935590_n_LE_auto_x2.jpg"}
                        alt=""
                        width={2880}
                        height={2158}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="min-w-[20rem] flex-1 py-10 sm:px-16 px-8">
                    <h3 className="text-4xl font-semibold">Why Choose AISM</h3>
                    <p className="max-w-[85%] mt-5 text-themeDark">
                        We are dedicated to educating future physicians and empowering them to drive innovation in medicine. Our curriculum provides extensive clinical practice opportunities to help you become an exceptional physician.
                    </p>
                    <div className="grid gap-3 my-6">
                        <span className="flex items-start gap-2 sm:text-xl text-lg font-medium">
                            <FaCheckDouble className="sm:text-2xl text-lg text-themelight" />
                            Clinical Rotations available in USA, India, UK, Canada, Guyana
                        </span>
                        <span className="flex items-start gap-2 sm:text-xl text-lg font-medium">
                            <FaCheckDouble className="sm:text-2xl text-lg text-themelight" />
                            3 Admission Cycles: January, May, September
                        </span>
                        <span className="flex items-start gap-2 sm:text-xl text-lg font-medium">
                            <FaCheckDouble className="sm:text-2xl text-lg text-themelight" />
                            State-of-the-Art Campus in Guyana with Full Wireless Access
                        </span>
                    </div>
                    <div className="grid grid-cols-3 mt-10">
                        <div className="flex flex-col items-center gap-2 text-center text-balance" ref={counter01Ref}>
                            <span className="md:text-6xl sm:text-5xl text-3xl text-themeDark font-bold">
                            {!counter01InView ? "0" : <CountUp end={100} className="md:text-6xl sm:text-5xl text-3xl" duration={2} />}+
                            </span>
                            <span className="opacity-70 max-sm:text-sm">Graduates practicing in USA, India, UK, Guyana</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center text-balance" ref={counter02Ref}>
                            <span className="md:text-6xl sm:text-5xl text-3xl text-themeDark font-bold">
                            {!counter02InView ? "0" : <CountUp end={85} className="md:text-6xl sm:text-5xl text-3xl" duration={2} />}%
                            </span>
                            <span className="opacity-70 max-sm:text-sm">USMLE Pass Rate</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center text-balance" ref={counter03Ref}>
                            <span className="md:text-6xl sm:text-5xl text-3xl text-themeDark font-bold">
                            {!counter03InView ? "0" : <CountUp end={95} className="md:text-6xl sm:text-5xl text-3xl" duration={2} />}%
                            </span>
                            <span className="opacity-70 max-sm:text-sm">PLAB Pass Rate</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}
