import Top from "../Components/Top";
import FormBody from "./Components/FormBody";
import { aismMetadata } from "@/lib/Metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...aismMetadata,
    title: "Join AISM | Apply Now to Join Our Global Community of Physicians",
    description: "Start your journey towards becoming a medical doctor by completing our application form. Join AISM's MD program and take the first step toward a rewarding medical career.",
    openGraph: {
        ...aismMetadata.openGraph,
        title: "Join AISM | Apply Now to Join Our Global Community of Physicians",
        description: "Start your journey towards becoming a medical doctor by completing our application form. Join AISM's MD program and take the first step toward a rewarding medical career.",
        url: aismMetadata.openGraph?.url + "/acedemic-programs/application-form"
    }
};

export default function page() {
    return (
        <div className="mt-44">
            <Top 
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "acedemic-programs" },
                    { label: "Application Form" }
                ]}
            />
            <FormBody />
        </div>
    )
}
