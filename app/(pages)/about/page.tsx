import WhatWeCanDoForYou from "./Components/WhatWeCanDoForYou";
import OurMission from "./Components/OurMission";
import OurVision from "./Components/OurVision";
import WhyChooseUs from "./Components/WhyChooseUs";
import OurValues from "./Components/OurValues";
import Affiliates from "./Components/Affiliates";

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