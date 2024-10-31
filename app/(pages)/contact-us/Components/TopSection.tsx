import { AnimatedEntrance } from "@/app/general components/AnimatedEntrance";
import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

export default function TopSection() {
    return (
        <div className="md:px-20 sm:px-10 px-5 py-20 grid sm:grid-cols-2 sm:gap-5 gap-8">
            <AnimatedEntrance className="">
                <h1 className="md:text-5xl sm:text-4xl text-3xl text-theme font-medium">Get in Touch</h1>
                <p className="sm:max-w-[80%] text-balance mt-3">We&apos;d love to hear from you! Whether you have questions, need support, or want to learn more about our services, our team is here to help.</p>
            </AnimatedEntrance>
            <div className="grid sm:grid-cols-2 gap-6">
                <AnimatedEntrance className="grid gap-2">
                    <div className="sm:h-9 h-8 sm:w-9 w-8 rounded-lg bg-theme/10 text-theme grid place-items-center"><FaLocationDot /></div>
                    <h5 className="mt-2 sm:text-xl text-lg font-medium text-theme">Our Address</h5>
                    <Link href={"https://maps.app.goo.gl/HSDcmkkJGtjU198d8"} target="_blank" className="grid w-fit">
                        <span>1755 E. Park Place, Blvd.</span> 
                        <span>Stone Mountain, Ga.  30087</span>
                    </Link>
                </AnimatedEntrance>
                <AnimatedEntrance className="grid gap-2">
                    <div className="sm:h-9 h-8 sm:w-9 w-8 rounded-lg bg-theme/10 text-theme grid place-items-center"><FaPhone /></div>
                    <h5 className="mt-2 sm:text-xl text-lg font-medium text-theme">Our Contact Info.</h5>
                    <p className="grid">
                        <Link className="w-fit font-medium" href={"tel:+14047566737"}>(404) 756 - 6737</Link> 
                        <Link className="w-fit font-medium" href={"mailto:information@aism.edu"}>information@aism.edu</Link>
                    </p>
                </AnimatedEntrance>
            </div>
        </div>
    )
}
