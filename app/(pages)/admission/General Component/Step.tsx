"use client"
import clsx from "clsx";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion"

export default function Step({ isOdd, children }: { isOdd: boolean, children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const inView = useInView(containerRef, {
        amount: "all",
        margin: "20%",
        once: true,
    });

    return (
        isOdd ?
            <div className="grid sm:grid-cols-2 grid-cols-[1fr_auto] text-right isOdd" ref={containerRef}>
                <div className="sm:p-10 p-5 border-l border-t border-b border-theme">
                    {children}
                </div>
                <div className="gridy -ml-5 relative">
                    <div className="absolute sm:h-[120%] h-full flex flex-col items-center top-[10%] left-[0.65rem]">
                        <div className="h-5 w-5 rounded-full bg-theme"></div>
                        <div className="flex-1 bg-gray-300 w-1">
                            <motion.div
                                className={clsx(
                                    "w-full bg-theme duration-300",
                                )}
                                initial={{ height: 0 }}
                                animate={{
                                    height: inView ? "100%" : 0,
                                }}
                            ></motion.div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className="grid sm:grid-cols-2 grid-cols-[1fr_auto] isNotOdd" ref={containerRef}>
                <div className="gridy -mr-5 relative">
                    <div className="absolute sm:h-[120%] h-full flex flex-col items-center top-[calc(10%)] right-[0.65rem]">
                        <div className="h-5 w-5 rounded-full bg-theme"></div>
                        <div className="flex-1 bg-gray-300 w-1">
                            <motion.div
                                className={clsx(
                                    "w-full bg-theme duration-300",
                                )}
                                initial={{ height: 0 }}
                                animate={{
                                    height: inView ? "100%" : 0,
                                }}
                            ></motion.div>
                        </div>
                    </div>
                </div>
                <div className="sm:p-10 p-5 border-r border-t border-b border-theme">
                    {children}
                </div>
            </div>
    )
}