import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import "./debugger.css";
import { aismMetadata } from "@/lib/Metadata";
import Navigation from "./general components/Navigation";
import Footer from "./general components/Footer";
import NextTopLoader from "nextjs-toploader";
import AddClassToElements from "./general components/DetectTextOnDark";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
    src: "./fonts/Nunito-VariableFont_wght.woff",
    variable: "--font-nunito-sans",
    weight: "100 900",
});

export const metadata: Metadata = aismMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} antialiased overflow-x-hidden`}
            >
                <AddClassToElements />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <NextTopLoader 
                    color="#1563d8"
                    crawlSpeed={200}
                    initialPosition={0.25}
                    showSpinner={true}
                    easing="ease"
                    speed={200}
                    zIndex={1600}
                />
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
