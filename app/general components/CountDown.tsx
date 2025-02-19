"use client"
import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const COUNTDOWN_FROM = "2025-09-01";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type Units = "Day" | "Hour" | "Minute" | "Second";

const ShiftingCountdown = () => {
    return (
        <div className="p-4 w-full">
            <div className="mx-auto flex w-full flex-wrap max-w-5xl items-center bg-gradient-to-br from-theme to-themeDark">
                <CountdownItem unit="Day" text="days" />
                <CountdownItem unit="Hour" text="hours" />
                <CountdownItem unit="Minute" text="minutes" />
                <CountdownItem unit="Second" text="seconds" />
            </div>
        </div>
    );
};

const CountdownItem = ({ unit, text }: { unit: Units; text: string }) => {
    const { ref, time } = useTimer(unit);

    return (
        <div className="flex h-24 md:w-1/4 w-1/2 flex-col items-center justify-center gap-1 border-r-[1px] max-md:border-b-[1px] border-slate-200 font-mono md:h-36 md:gap-2">
            <div className="relative w-full overflow-hidden text-center">
                <span
                    ref={ref}
                    className="block text-2xl font-medium text-white md:text-4xl lg:text-6xl xl:text-7xl"
                >
                    {time > 9 ? time : `0${time}`}
                </span>
            </div>
            <span className="text-xs font-light text-slate-300 md:text-sm lg:text-base">
                {text}
            </span>
        </div>
    );
};

export default ShiftingCountdown;
const useTimer = (unit: Units) => {
    const [ref, animate] = useAnimate();

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const timeRef = useRef(0);

    const [time, setTime] = useState(0);

    useEffect(() => {
        intervalRef.current = setInterval(handleCountdown, 1000);

        return () => clearInterval(intervalRef.current || undefined);
    }, []);

    const handleCountdown = async () => {
        const end = new Date(COUNTDOWN_FROM);
        const now = new Date();
        const distance = +end - +now;

        let newTime = 0;

        if (unit === "Day") {
            newTime = Math.floor(distance / DAY);
        } else if (unit === "Hour") {
            newTime = Math.floor((distance % DAY) / HOUR);
        } else if (unit === "Minute") {
            newTime = Math.floor((distance % HOUR) / MINUTE);
        } else {
            newTime = Math.floor((distance % MINUTE) / SECOND);
        }

        if (newTime !== timeRef.current) {
            // Exit animation
            await animate(
                ref.current,
                { y: ["0%", "-50%"], opacity: [1, 0] },
                { duration: 0.35 }
            );

            timeRef.current = newTime;
            setTime(newTime);

            // Enter animation
            await animate(
                ref.current,
                { y: ["50%", "0%"], opacity: [0, 1] },
                { duration: 0.35 }
            );
        }
    };

    return { ref, time };
};