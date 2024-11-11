import React from 'react';
import IntroSection from './Components/IntroSection';
import FaQsSection from './Components/FaQsSection';
import { aismMetadata } from "@/lib/Metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...aismMetadata,
    title: "AISM FAQs | Your Questions, Answered",
    description: "Have questions about AISM? Find answers to frequently asked questions about admissions, academics, student life, and more.",
    openGraph: {
        ...aismMetadata.openGraph,
        title: "AISM FAQs | Your Questions, Answered",
        description: "Have questions about AISM? Find answers to frequently asked questions about admissions, academics, student life, and more.",
        url: aismMetadata.openGraph?.url + "/faqs"
    }
};

export default function FaqsPage() {
    return (
        <div className='mt-44'>
            <IntroSection />
            <FaQsSection />
        </div>
    )
}
