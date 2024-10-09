import Image from "next/image";
import Link from "next/link";
import Button from "../general components/Button";

export default function Navigation() {
    return (
        <nav className="w-full bg-white sm:px-40 px-6 fixed top-0 left-0">
            <div className="border-b border-b-gray-400/50 py-5 flex justify-between">
                <div className="flex items-center gap-2">
                    <Link href={"/"} className="relative no-underline">
                        <Image
                            src={"https://aism-edu.sirv.com/icons/AISM-light.png"}
                            alt="logo"
                            height={500}
                            width={500}
                            className="h-16 w-auto"
                        />
                    </Link>
                    <div className="grid">
                        <span className="alt-font text-2xl opacity-70 font-medium leading-4">American International</span>
                        <span className="alt-font text-3xl text-theme">School of Medicine</span>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <div className="inline-flex gap-6">
                        <Link className="text-sm hover:opacity-100 opacity-50" href={""}>
                            FaQ
                        </Link>
                        <Link className="text-sm hover:opacity-100 opacity-50" href={""}>
                            Blog
                        </Link>
                        <Link className="text-sm hover:opacity-100 opacity-50" href={""}>
                            Contact Us
                        </Link>
                    </div>
                    <Link href={"tel:+18664659966"} className="justify-self-end text-2xl text-themelight">+1 (866) 465 9966</Link>
                </div>
            </div>
            <div className="flex justify-between items-center py-3">
                <div>
                    <span>About</span>
                    <span>Admission</span>
                    <span>Academic Programs</span>
                    <span>Student Sucess</span>
                </div>
                <Button>
                    <span>Apply for Admission</span>
                </Button>
            </div>
        </nav>
    )
}