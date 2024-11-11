import MiniInfo from "./Components/MiniInfo";
import Stories from "./Components/Stories";
import { aismMetadata } from "@/lib/Metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...aismMetadata,
    title: "AISM Student Life | Experience a Vibrant Campus Community",
    description: "Discover inspiring stories of AISM alumni who have gone on to achieve remarkable success in the medical field. Learn how our rigorous academic programs and supportive community helped shape their futures. Join a legacy of excellence.",
    openGraph: {
        ...aismMetadata.openGraph,
        title: "AISM Student Life | Experience a Vibrant Campus Community",
        description: "Discover inspiring stories of AISM alumni who have gone on to achieve remarkable success in the medical field. Learn how our rigorous academic programs and supportive community helped shape their futures. Join a legacy of excellence.",
        url: aismMetadata.openGraph?.url + "/student-success"
    }
};

export default function StudentSuccessPage() {
    return (
        <div className="mt-44">
            <MiniInfo />
            <Stories />
        </div>
    )
}
