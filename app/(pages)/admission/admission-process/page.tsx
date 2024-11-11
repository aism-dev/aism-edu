import { admissionSteps } from "@/lib/Variables/AdmissionProcess";
import Steps from "../General Component/Steps";
import Top from "../General Component/Top";


import { aismMetadata } from "@/lib/Metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...aismMetadata,
    title: "Your Path to AISM | A Step-by-Step Admission Guide",
    description: "Explore our step-by-step guide to applying at AISM, from initial requirements to enrollment. We make it easy for you to start your journey toward a world-class medical education.",
    openGraph: {
        ...aismMetadata.openGraph,
        title: "Your Path to AISM | A Step-by-Step Admission Guide",
        description: "Explore our step-by-step guide to applying at AISM, from initial requirements to enrollment. We make it easy for you to start your journey toward a world-class medical education.",
        url: aismMetadata.openGraph?.url + "/admission/admission-process"
    }
};

export default function page() {
    return (
        <div className="mt-44">
            <Top 
                bubbleText="Admission Process"
                p="Embark on your journey to AISM in just a few simple steps. We’ve streamlined the process to make your application experience as smooth as possible."
            />
            <Steps data={admissionSteps} />
        </div>
    )
}
