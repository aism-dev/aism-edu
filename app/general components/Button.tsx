"use client"
import { ButtonInterface } from "@/lib/Interfaces/Button";
import clsx from "clsx";
import Link from "next/link";
import { useRef } from "react";

export default function Button({ btnType = "button", children, sizeVariation = "M", colorVariation, className: customClass, hovered, href, ...props }: ButtonInterface) {
    const anchorRef = useRef<HTMLAnchorElement>(null);

    const handleClickAction = () => {
        if(!href) return;
        if(!anchorRef.current) return;
        anchorRef.current.click();
    }

    return (
        <div className={customClass} onClick={handleClickAction} role={href ? "link" : "button"}>
            <button 
                type={btnType}
                className={clsx(
                    "relative btn text-base border",
                    colorVariation === "dark" ?
                        "text-white border-themelight after:bg-themelight hover:text-white focus:text-white" :
                        colorVariation === "footer" ?
                            hovered ? "after:bg-white after:h-full after:w-full text-theme" : "border-white after:bg-white hover:text-theme focus:text-theme rotate-0"
                            :
                            hovered ? "after:bg-theme after:h-full after:w-full text-white" : "text-theme border-theme after:bg-theme hover:text-white focus:text-white",
                    sizeVariation === "L" ? "py-4 px-10" : "",
                    sizeVariation === "M" ? "px-6 py-3" : "",
                    sizeVariation === "W" ? "w-full py-5" : "",
                    sizeVariation === "XL" ? "py-5 px-16" : "",
                )}
                {...props}
        >
                {href ? <Link ref={anchorRef} href={href}>{children}</Link> : children
            }
            <div className="absolute w-full h-full top-0 left-0 grid grid-cols-3">
                <div className="mark-1"></div>
                <div className="mark-2"></div>
                <div className="mark-3"></div>
                <div className="mark-4"></div>
                <div className="mark-5"></div>
                <div className="mark-6"></div>
            </div>
        </button>
        </div>
    )
}