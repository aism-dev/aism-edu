import Link from "next/link";
import { FaAngleRight, FaAt, FaPhoneFlip } from "react-icons/fa6";

export default function SideComponnet() {
    return (
        <div className="md:block hidden">
            <div className="p-5 bg-theme text-white text-xl font-semibold">
                Related Academic Programs
            </div>
            <div className="grid">
                <div className="p-4 border">
                    <Link href={""} className="flex justify-between group no-underline">
                        Pre-Health (Pre-Medical) Sciences
                        <div className="aspect-square bg-theme text-white group-hover:opacity-100 opacity-0 -translate-x-5 group-hover:translate-x-0 h-7 grid place-items-center"><FaAngleRight /></div>
                    </Link>
                </div>
                <div className="p-4 border">
                    <Link href={""} className="flex justify-between group no-underline">
                        Basic Science Program
                        <div className="aspect-square bg-theme text-white group-hover:opacity-100 opacity-0 -translate-x-5 group-hover:translate-x-0 h-7 grid place-items-center"><FaAngleRight /></div>
                    </Link>
                </div>
                <div className="p-4 border">
                    <Link href={""} className="flex justify-between group no-underline">
                        Clinical Science Program
                        <div className="aspect-square bg-theme text-white group-hover:opacity-100 opacity-0 -translate-x-5 group-hover:translate-x-0 h-7 grid place-items-center"><FaAngleRight /></div>
                    </Link>
                </div>
                <div className="p-4 border">
                    <Link href={""} className="flex justify-between group no-underline">
                        Community Medicine Course
                        <div className="aspect-square bg-theme text-white group-hover:opacity-100 opacity-0 -translate-x-5 group-hover:translate-x-0 h-7 grid place-items-center"><FaAngleRight /></div>
                    </Link>
                </div>
                <div className="p-4 border">
                    <Link href={""} className="flex justify-between group no-underline">
                        Biomedical Science
                        <div className="aspect-square bg-theme text-white group-hover:opacity-100 opacity-0 -translate-x-5 group-hover:translate-x-0 h-7 grid place-items-center"><FaAngleRight /></div>
                    </Link>
                </div>
            </div>

            <div className="p-5 bg-theme text-white text-xl font-semibold mt-10">
                Questions About Applying
            </div>

            <div className="grid">
                <div className="p-4 border">
                    <div className="flex justify-between group no-underline">
                        <span>E-Mail Inquiry : <Link href={"mailto:admissions@aism.edu"}>admissions@aism.edu</Link></span>
                        <div className="aspect-square text-theme group-hover:opacity-100 opacity-0 -translate-x-5 group-hover:translate-x-0 h-7 grid place-items-center"><Link href={"mailto:admissions@aism.edu"} className="no-underline"><FaAt /></Link></div>
                    </div>
                </div>
                <div className="p-4 border">
                    <div className="flex justify-between group no-underline">
                        <span>Phone : <Link href={"tel:+18664659966"}>+1 (866) 465 9966</Link></span>
                        <div className="aspect-square text-theme group-hover:opacity-100 opacity-0 -translate-x-5 group-hover:translate-x-0 h-7 grid place-items-center"><Link href={"tel:+18664659966"} className="no-underline"><FaPhoneFlip /></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
