"use client"
import { useEffect } from "react";

declare global {
    interface Window {
        __ow: {
            organizationId: string;
            template_id: string;
            integration_name: string;
            product_name: string;
            asyncInit?: () => void;
        };
        OpenWidget: any;
    }
}


export default function ChatBot() {
    useEffect(() => {
        // Set Chatbot configuration on the window object
        window.__ow = window.__ow || {};
        window.__ow.organizationId = "9e26835e-88f3-4673-a477-1b0363764f97";
        window.__ow.template_id = "1116a29a-1bd9-4586-a28a-68562b2b0a19";
        window.__ow.integration_name = "manual_settings";
        window.__ow.product_name = "chatbot";

        // Create and append the Chatbot script
        const script = document.createElement("script");
        script.src = "https://cdn.openwidget.com/openwidget.js";
        script.async = true;
        script.type = "text/javascript";
        document.head.appendChild(script);

        // Clean up by removing the script on component unmount
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <></>
    )
}