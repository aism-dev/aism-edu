import { tuitionSteps } from "@/lib/Variables/TuitionFees";
import Steps from "../General Component/Steps";
import Top from "../General Component/Top";

import { aismMetadata } from "@/lib/Metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...aismMetadata,
    title: "Invest in Your Future | AISM Tuition & Financial Aid Options",
    description: "Find detailed information about AISM’s tuition rates, fees, and available financial aid options to help you plan for your medical education.",
    openGraph: {
        ...aismMetadata.openGraph,
        title: "Invest in Your Future | AISM Tuition & Financial Aid Options",
        description: "Find detailed information about AISM’s tuition rates, fees, and available financial aid options to help you plan for your medical education.",
        url: aismMetadata.openGraph?.url + "/admission/tuition-fees"
    }
};

export default function page() {
    return (
        <div className="mt-44">
            <Top 
                bubbleText="Tuition Fees"
                p="Embark on your journey to AISM in just a few simple steps. We’ve streamlined the process to make your application experience as smooth as possible."
            />
            <Steps 
                data={tuitionSteps}
                noStep
            />
        </div>
    )
}
