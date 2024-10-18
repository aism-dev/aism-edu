import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

export default function TopSection() {
    return (
        <div className="p-20 grid grid-cols-2 gap-5">
            <div className="">
                <h1 className="text-5xl text-theme font-medium">Get in Touch</h1>
                <p className="max-w-[80%] text-balance mt-3">We&apos;d love to hear from you! Whether you have questions, need support, or want to learn more about our services, our team is here to help.</p>
            </div>
            <div className="grid grid-cols-2">
                <div className="grid gap-2">
                    <div className="h-9 w-9 rounded-lg bg-theme/10 text-theme grid place-items-center"><FaLocationDot /></div>
                    <h5 className="mt-2 text-xl font-medium text-theme">Our Address</h5>
                    <Link href={"https://maps.app.goo.gl/HSDcmkkJGtjU198d8"} target="_blank" className="grid w-fit">
                        <span>1755 E. Park Place, Blvd.</span> 
                        <span>Stone Mountain, Ga.  30087</span>
                    </Link>
                </div>
                <div className="grid gap-2">
                    <div className="h-9 w-9 rounded-lg bg-theme/10 text-theme grid place-items-center"><FaPhone /></div>
                    <h5 className="mt-2 text-xl font-medium text-theme">Our Contact Info.</h5>
                    <p className="grid">
                        <Link className="w-fit font-medium" href={"tel:+14047566737"}>(404) 756 - 6737</Link> 
                        <Link className="w-fit font-medium" href={"mailto:information@aism.edu"}>information@aism.edu</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
