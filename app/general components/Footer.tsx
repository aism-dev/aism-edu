import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FaAt, FaInstagram, FaLinkedin, FaMapLocation, FaPhone, FaPinterest, FaReddit, FaYoutube } from "react-icons/fa6";
import { AnimatedEntrance } from "./AnimatedEntrance";
import { SocialsMedia } from "@/lib/Variables/Socials";

export default function Footer() {
    return (
        <div className="grid bg-gradient-to-b from-theme to-themeDark text-white relative overflow-hidden">
            <Image
                src={"https://aism-edu.sirv.com/icons/AISM-white.png"}
                alt="logo"
                height={500}
                width={500}
                className="md:h-[60%] h-[30%] w-auto blur-[2px] object-contain absolute pointer-events-none select-none -z-0 opacity-15 invert sm:top-1/2 top-1/3 -translate-y-1/2 sm:left-3 left-1/2 max-sm:-translate-x-1/2"
            />
            <AnimatedEntrance className="sm:px-16 px-5 sm:py-20 py-10 grid md:grid-cols-[auto_1fr] grid-cols-1 md:gap-20 sm:gap-10 gap-5">
                <div>
                    <AnimatedEntrance className="flex items-center gap-2 h-fit">
                        <Link href={"/"} className="no-underline">
                            <Image
                                src={"https://aism-edu.sirv.com/icons/AISM-white.png"}
                                alt="logo"
                                height={500}
                                priority
                                width={500}
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                        <div className="grid">
                            <span className="alt-font sm:text-2xl text-xl opacity-70 font-medium leading-4">American International</span>
                            <span className="alt-font sm:text-3xl text-2xl">School of Medicine</span>
                        </div>
                    </AnimatedEntrance>
                    <AnimatedEntrance className="py-5 max-w-[20rem] pl-2">
                        <h4 className="font-medium text-lg flex items-center gap-2 opacity-70"><FaMapLocation /> Address:</h4>
                        <address className="not-italic ">
                            1755 E. Park Place Blvd,
                            Stone Mountain, Ga 30087
                        </address>
                    </AnimatedEntrance>
                    <div className="flex items-center gap-2 sm:justify-between max-sm:gap-5 py-4">
                        <Link target="_blank" href={SocialsMedia.reddit} className="alt-link h-10 w-10 rounded-lg grid place-items-center bg-white text-theme">
                            <FaReddit className="text-2xl"/>
                        </Link>
                        <Link target="_blank" href={SocialsMedia.instagram} className="alt-link h-10 w-10 rounded-lg grid place-items-center bg-white text-theme">
                            <FaInstagram className="text-2xl"/>
                        </Link>
                        <Link target="_blank" href={SocialsMedia.linkedin} className="alt-link h-10 w-10 rounded-lg grid place-items-center bg-white text-theme">
                            <FaLinkedin className="text-2xl"/>
                        </Link>
                        <Link target="_blank" href={SocialsMedia.youtube} className="alt-link h-10 w-10 rounded-lg grid place-items-center bg-white text-theme">
                            <FaYoutube className="text-2xl"/>
                        </Link>
                        <Link target="_blank" href={SocialsMedia.pinterest} className="alt-link h-10 w-10 rounded-lg grid place-items-center bg-white text-theme">
                            <FaPinterest className="text-2xl"/>
                        </Link>
                    </div>
                </div>
                <div>
                    <AnimatedEntrance className="sm:grid sm:grid-cols-3 flex flex-wrap w-full sm:gap-4 gap-2">
                        <Button href="/acedemic-programs/application-form" colorVariation="footer" sizeVariation="W" className="border-white flex-1 max-sm:min-w-56">
                            Apply Now
                        </Button>
                        <Button href="https://www.google.com/maps/dir/5.5038247,7.0502649/1755+E+Park+Pl+Blvd,+Stone+Mountain,+GA+30087,+USA/@1.4556928,-124.4564065,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88f5aff24a97c9c7:0x73b61a14e2227369!2m2!1d-84.1184891!2d33.8265653?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" colorVariation="footer" sizeVariation="W" className="border-white flex-1 max-sm:min-w-56">
                            Visit
                        </Button>
                        <Button href="/contact-us" colorVariation="footer" sizeVariation="W" className="border-white flex-1 max-sm:min-w-56">
                            Contact Admissions
                        </Button>
                    </AnimatedEntrance>
                    <AnimatedEntrance className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        <div className="pt-5 min-w-[20rem]">
                            <h4 className="font-medium text-lg flex items-center gap-2 opacity-70"><FaPhone />Call:</h4>
                            <Link href={"tel:+14047566737"} className="alt-link"> +1 (404) 756 - 6737</Link>
                        </div>
                        <div className="pt-5 min-w-[20rem]">
                            <h4 className="font-medium text-lg flex items-center gap-2 opacity-70"><FaAt />Email:</h4>
                            <Link href={"mailto:admissions@aism.edu"} className="alt-link">admissions@aism.edu</Link>
                        </div>
                        <div className="pt-5 min-w-[20rem] grid">
                            <h4 className="font-medium text-lg flex items-center gap-2 opacity-70">Quick Access:</h4>
                            <div className="flex item-center justify-between gap-6">
                                <Link href={"/about"} className="alt-link">About Us</Link>
                                <Link href={"/faqs"} className="alt-link">Frequently Asked Questions</Link>
                                <Link href={"/contact-us"} className="alt-link">Contact Us</Link>
                            </div>
                        </div>
                    </AnimatedEntrance>
                </div>
            </AnimatedEntrance>
            <AnimatedEntrance className="bg-themeDark darker px-20 py-5 relative z-10 flex justify-between">
                <span className="max-sm:opacity-0 max-sm:pointer-events-none max-sm:absolute">Designed by: <Link href={"https://fabiconcept.online"} target="_blank" className="alt-link">Fabiconcept</Link></span>
                <span className="text-center">
                    Copyright © {new Date().getFullYear()} American International School of Medicine
                </span>
            </AnimatedEntrance>
        </div>
    )
}
