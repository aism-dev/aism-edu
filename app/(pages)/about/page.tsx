import WhatWeCanDoForYou from "./Components/WhatWeCanDoForYou";
import OurMission from "./Components/OurMission";
import OurVision from "./Components/OurVision";
import WhyChooseUs from "./Components/WhyChooseUs";
import OurValues from "./Components/OurValues";
import Affiliates from "./Components/Affiliates";
import { aismMetadata } from "@/lib/Metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...aismMetadata,
    title: "About AISM | A Tradition of Excellence in Medical Education",
    description: "Learn about AISM's guiding principles, our mission to transform medical education, and the values that drive our commitment to shaping compassionate, skilled healthcare professionals.",
};

export default function AboutPage() {
    return (
        <div className="mt-56">
            <WhatWeCanDoForYou />
            <OurMission />
            <OurVision />
            <WhyChooseUs />
            <OurValues />
            <Affiliates />
        </div>
    )
}