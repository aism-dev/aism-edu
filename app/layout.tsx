import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import "./debugger.css";
import { aismMetadata } from "@/lib/Metadata";
import Navigation from "./home-page components/Navigation";
import Footer from "./home-page components/Footer";

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
                className={`${geistSans.variable} antialiased`}
            >
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
