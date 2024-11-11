import MapViewSection from "./Components/MapViewSection";
import TopSection from "./Components/TopSection";
import { aismMetadata } from "@/lib/Metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...aismMetadata,
    title: "Contact AISM | Get in Touch with Our Admissions Team",
    description: "Have questions about AISM? Reach out to our admissions team today. Contact us by phone, email, or through our online inquiry form. We’re here to assist you with your medical school journey.",
    openGraph: {
        ...aismMetadata.openGraph,
        title: "Contact AISM | Get in Touch with Our Admissions Team",
        description: "Have questions about AISM? Reach out to our admissions team today. Contact us by phone, email, or through our online inquiry form. We’re here to assist you with your medical school journey.",
        url: aismMetadata.openGraph?.url + "/contact-us"
    }
};

export default function ContactUsPage() {
    return (
        <div className="mt-44">
            <TopSection />
            <MapViewSection />
        </div>
    )
}