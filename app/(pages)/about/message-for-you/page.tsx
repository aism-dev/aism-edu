import MessageSection from "./Components/Message";
import TopSection from "./Components/Top";
import { Metadata } from "next";
import { aismMetadata } from "@/lib/Metadata";

export const metadata: Metadata = {
    ...aismMetadata,
    title: "A Message from AISM's Founder | A Special Message for You",
    description: "Read a personal message from our leadership, sharing AISM's dedication to your success and the global impact of our medical community.",
    openGraph: {
        ...aismMetadata.openGraph,
        title: "A Message from AISM's Founder | A Special Message for You",
        description: "Read a personal message from our leadership, sharing AISM's dedication to your success and the global impact of our medical community.",
        url: aismMetadata.openGraph?.url + "/about/message-for-you"
    }
};

export default function MessageForYou() {
    return (
        <div className="mt-44">
            <TopSection />
            <MessageSection />
        </div>
    )
}
