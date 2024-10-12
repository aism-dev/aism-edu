import Image from "next/image";
import Link from "next/link";
import Button from "../general components/Button";
import { FaAt, FaFacebook, FaInstagram, FaLink, FaLinkedin, FaMapLocation, FaPhone, FaTiktok, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="grid bg-theme text-white relative overflow-hidden">
            <Image
                src={"https://aism-edu.sirv.com/icons/AISM-white.png"}
                alt="logo"
                height={500}
                width={500}
                className="h-[60%] w-auto blur-[2px] object-contain absolute pointer-events-none select-none -z-0 opacity-15 invert top-1/2 -translate-y-1/2 left-3"
            />
            <div className="sm:px-16 px-8 sm:py-20 py-10 grid md:grid-cols-[auto_1fr] grid-cols-1 md:gap-20 sm:gap-10 gap-5">
                <div>
                    <div className="flex items-center gap-2 h-fit">
                        <Link href={"/"} className="no-underline">
                            <Image
                                src={"https://aism-edu.sirv.com/icons/AISM-white.png"}
                                alt="logo"
                                height={500}
                                width={500}
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                        <div className="grid">
                            <span className="alt-font text-2xl opacity-70 font-medium leading-4">American International</span>
                            <span className="alt-font text-3xl">School of Medicine</span>
                        </div>
                    </div>
                    <div className="pt-5 max-w-[20rem] pl-2">
                        <h4 className="font-medium text-lg flex items-center gap-2 opacity-70"><FaMapLocation /> Address:</h4>
                        <address className="not-italic ">
                            1000  Windward Concourse, Ste 110,
                            Alpharetta GA &mdash; 30005
                        </address>
                    </div>
                    <div className="flex items-center gap-2 justify-between py-4">
                        <Link href={""} className="alt-link h-10 w-10 rounded-lg grid place-items-center bg-white text-theme">
                            <FaFacebook className="text-2xl"/>
                        </Link>
                        <Link href={""} className="alt-link h-10 w-10 rounded-lg grid place-items-center bg-white text-theme">
                            <FaInstagram className="text-2xl"/>
                        </Link>
                        <Link href={""} className="alt-link h-10 w-10 rounded-lg grid place-items-center bg-white text-theme">
                            <FaLinkedin className="text-2xl"/>
                        </Link>
                        <Link href={""} className="alt-link h-10 w-10 rounded-lg grid place-items-center bg-white text-theme">
                            <FaYoutube className="text-2xl"/>
                        </Link>
                        <Link href={""} className="alt-link h-10 w-10 rounded-lg grid place-items-center bg-white text-theme">
                            <FaTiktok className="text-2xl"/>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="grid sm:grid-cols-3 w-full grid-cols-1 gap-4">
                        <Button colorVariation="footer" sizeVariation="W" className="border-white">
                            Apply Now
                        </Button>
                        <Button colorVariation="footer" sizeVariation="W" className="border-white">
                            Visit
                        </Button>
                        <Button colorVariation="footer" sizeVariation="W" className="border-white">
                            Contact Admissions
                        </Button>
                    </div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        <div className="pt-5 min-w-[20rem]">
                            <h4 className="font-medium text-lg flex items-center gap-2 opacity-70"><FaPhone />Call:</h4>
                            <Link href={"tel:+18664659966"} className="alt-link"> +1 (866) 465 9966</Link>
                        </div>
                        <div className="pt-5 min-w-[20rem]">
                            <h4 className="font-medium text-lg flex items-center gap-2 opacity-70"><FaAt />Email:</h4>
                            <Link href={"tel:+18664659966"} className="alt-link"> +1 (866) 465 9966</Link>
                        </div>
                        <div className="pt-5 min-w-[20rem] grid">
                            <h4 className="font-medium text-lg flex items-center gap-2 opacity-70">Quick Access:</h4>
                            <div className="flex item-center justify-between gap-6">
                                <Link href={""} className="alt-link">About Us</Link>
                                <Link href={""} className="alt-link">Blog</Link>
                                <Link href={""} className="alt-link">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-themeDark darker px-20 py-5 relative z-10 flex justify-between">
                <span>Designed by: <Link href={"https://fabiconcept.online"} target="_blank" className="alt-link">Fabiconcept</Link></span>
                <span>
                    Copyright © {new Date().getFullYear()} American International School of Medicine
                </span>
            </div>
        </div>
    )
}
