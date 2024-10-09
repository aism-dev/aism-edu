import { ButtonInterface } from "@/lib/Interfaces/Button";

export default function Button({ btnType = "button", children }: ButtonInterface) {
    return (
        <button type={btnType} className="relative px-6 py-3 btn hover:text-white text-theme border border-theme after:bg-theme">
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