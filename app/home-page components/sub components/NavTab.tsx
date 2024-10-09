import { motion, useAnimation, Variants } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const TABS = [
    {
        title: "Hello world",
        Conponent: () => <>Hello world</>
    },
    {
        title: "Hello world 01",
        Conponent: () => <>Hello world 01</>
    },
    {
        title: "Hello world 03",
        Conponent: () => <>Hello world 03</>
    },
    {
        title: "Hello world 04",
        Conponent: () => <>Hello world 04</>
    },
].map((n, idx) => ({ ...n, id: idx }))

export default function NavTab({ currentlyHovered, lastHovered, closeFunc, centerRect }: { centerRect: number, currentlyHovered: number | null, lastHovered: number | null, closeFunc: Dispatch<SetStateAction<number | null>> }) {
    const controls = useAnimation();
    const mountRef = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerRect, setContainerRect] = useState(0);

    useEffect(() => {
        if (currentlyHovered !== null) {
            controls.start("visible");
        } else {
            controls.start("exit");
        }

        return () => {
            if (mountRef.current === 0) {
                mountRef.current = 1
                return
            }
            console.log("Unmounted")
            closeFunc(currentlyHovered);
        }
    }, [currentlyHovered, controls]);

    useEffect(() => {
        if (!containerRef.current) return;
        setContainerRect(containerRef.current.getBoundingClientRect().left);
    }, [containerRef]);

    const dir = currentlyHovered !== null && lastHovered !== null ? (currentlyHovered < lastHovered ? "l" : currentlyHovered > lastHovered ? "r" : "") : "";

    return (
        <>
            <motion.section
                className="absolute top-[4.5rem] text-white left-0 w-full p-4 bg-themelight"
                initial={{
                    opacity: 0,
                    y: -5,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: -5,
                }}
                ref={containerRef}
            >
                <motion.span
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
                    }}
                    animate={{ left: (centerRect) - (containerRect * 1.15) }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="absolute left-1/2 top-[1px] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border-2 border-themelight bg-themelight"
                />
                {TABS.map((tab) => {
                    return (
                        <div className="overflow-hidden" key={tab.id}>
                            {currentlyHovered === tab.id && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: dir === "l" ? -100 : dir === "r" ? 100 : 0,
                                    }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                >
                                    <tab.Conponent />
                                    {dir}
                                </motion.div>
                            )}
                        </div>
                    );
                })}
                {/* <motion.div
                initial={{
                    opacity: 0,
                    x: currentlyHovered !== null && lastHovered !== null && currentlyHovered < lastHovered ? 100 : -100,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="grid grid-col-[1rem_auto]"
            >
                <div>{currentlyHovered}</div>
                <div>{lastHovered}</div>
            </motion.div> */}
            </motion.section>
        </>
    );
}
