import { TABS } from "@/lib/Variables/Navigation";
import { motion, useAnimation } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useMemo, useRef } from "react";
import { createContext } from "react";


export const NavTabContext = createContext({
    closeFunc: ()=> {}
});

export default function NavTab({ currentlyHovered, lastHovered, unMountFunc, closeFunc }: { containerSize: number, centerRect: number, currentlyHovered: number | null, lastHovered: number | null, unMountFunc: Dispatch<SetStateAction<number | null>>, closeFunc: () => void }) {
    const controls = useAnimation();
    const mountRef = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

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
            unMountFunc(currentlyHovered);
        }
    }, [currentlyHovered, controls]);

    const dir = useMemo(() => {
        if (currentlyHovered === null || lastHovered === null) return ""
        if (currentlyHovered < lastHovered) return "r";
        if (currentlyHovered > lastHovered) return "l";
        return "";
    }, [currentlyHovered, lastHovered]);

    return (
        <NavTabContext.Provider value={{
            closeFunc
        }}>
            <motion.section
                className="absolute top-[4.5rem] text-black left-0 w-full bg-white/60 backdrop-blur-sm border border-t-transparent border-black/25 overflow-hidden"
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
                                    {tab.Component}
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
        </NavTabContext.Provider>
    );
}
