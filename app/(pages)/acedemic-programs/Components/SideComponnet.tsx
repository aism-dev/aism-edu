"use client"
import Link from "next/link";
import { FaAngleRight, FaAt, FaPhoneFlip } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useLocation } from "react-use"; // This tries to access `window`, which doesn't exist on the server.

const programs = [
    { id: 1, name: "Pre-Health (Pre-Medical) Sciences", link: "/acedemic-programs/pre-med-course" },
    { id: 2, name: "Basic Science Program", link: "/acedemic-programs/basic-science-program" },
    { id: 3, name: "Clinical Science Program", link: "/acedemic-programs" },
    { id: 4, name: "Community Medicine Course", link: "/acedemic-programs/community-medicine-course" },
    { id: 5, name: "Biomedical Science", link: "/acedemic-programs" }
];

export default function SideComponent() {
    const [pathname, setPathname] = useState<string | null>(null);

    useEffect(() => {
        // Ensure this only runs on the client side
        setPathname(window.location.pathname);
    }, []);

    return (
        <div className="md:block hidden">
            <div className="p-5 bg-theme text-white text-xl font-semibold">
                Related Academic Programs
            </div>
            {pathname && (
                <div className="grid">
                    {programs.filter((program) => program.link !== pathname).map((program) => (
                        <div key={program.id} className="p-4 border">
                            <Link href={program.link} className="flex justify-between group no-underline">
                                {program.name}
                                <div className="aspect-square bg-theme text-white group-hover:opacity-100 opacity-0 -translate-x-5 group-hover:translate-x-0 h-7 grid place-items-center">
                                    <FaAngleRight />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            <div className="p-5 bg-theme text-white text-xl font-semibold mt-10">
                Questions About Applying
            </div>

            <div className="grid">
                <div className="p-4 border">
                    <div className="flex justify-between group no-underline">
                        <span>E-Mail Inquiry : <Link href={"mailto:admissions@aism.edu"}>admissions@aism.edu</Link></span>
                        <div className="aspect-square text-theme group-hover:opacity-100 opacity-0 -translate-x-5 group-hover:translate-x-0 h-7 grid place-items-center">
                            <Link href={"mailto:admissions@aism.edu"} className="no-underline">
                                <FaAt />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 border">
                    <div className="flex justify-between group no-underline">
                        <span>Phone : <Link href={"tel:+18664659966"}>+1 (866) 465 9966</Link></span>
                        <div className="aspect-square text-theme group-hover:opacity-100 opacity-0 -translate-x-5 group-hover:translate-x-0 h-7 grid place-items-center">
                            <Link href={"tel:+18664659966"} className="no-underline">
                                <FaPhoneFlip />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
