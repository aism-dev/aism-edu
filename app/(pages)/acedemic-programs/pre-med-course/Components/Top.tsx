import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

export default function Top() {
    return (
        <div className="py-10 px-20 bg-theme">
            <div className="flex items-center gap-3">
                <Link href={"/"} className="text-white opacity-50 alt-link">Home </Link>
                <FaAngleRight className="text-white mt-1" />
                <span className="text-white">Pre-Health (Pre-Medical) Sciences</span>
            </div>
            <h1 className="text-white text-4xl mt-2">Pre-Health (Pre-Medical) Sciences</h1>
        </div>
    )
}
