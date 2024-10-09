import { ButtonInterface } from "@/lib/Interfaces/Button";
import clsx from "clsx";

export default function Button({ btnType = "button", children, onBlack, sizeVariation, colorVariation }: ButtonInterface) {
    return (
        <button type={btnType} className={clsx(
            "relative px-6 py-3 btn hover:text-white text-base border",
            colorVariation === "dark" ? "text-white border-themelight after:bg-themelight" : "text-theme border-theme after:bg-theme",
            sizeVariation === "L" ? "text-xl py-4 px-10" : "",
            sizeVariation === "XL" ? "text-2xl py-5 px-16" : "",
        )}>
            {children}
            <div className="absolute w-full h-full top-0 left-0 grid grid-cols-3">
                <div className="mark-1"></div>
                <div className="mark-2"></div>
                <div className="mark-3"></div>
                <div className="mark-4"></div>
                <div className="mark-5"></div>
                <div className="mark-6"></div>
            </div>
        </button>
    )
}