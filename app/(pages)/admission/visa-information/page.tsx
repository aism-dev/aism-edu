import { VisaProcess } from "@/lib/Variables/VisaProcess";
import Steps from "../General Component/Steps";
import Top from "../General Component/Top";

import { aismMetadata } from "@/lib/Metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...aismMetadata,
    title: "AISM Visa Information | Your Guide to International Student Visas",
    description: "Learn about the visa requirements and application process for international students at AISM, ensuring a smooth transition to your medical studies abroad.",
    openGraph: {
        ...aismMetadata.openGraph,
        title: "AISM Visa Information | Your Guide to International Student Visas",
        description: "Learn about the visa requirements and application process for international students at AISM, ensuring a smooth transition to your medical studies abroad.",
        url: aismMetadata.openGraph?.url + "/admission/visa-information"
    }
};

export default function page() {
    return (
        <div className="mt-44">
            <Top 
                bubbleText="Student Visa"
                p="AISM will be delighted to assist students who are seeking a student visa for Guyana, this will also include Visa renewals. Below we have listed the steps to follow."
            />
            <Steps
                data={VisaProcess}
             />
        </div>
    )
}
