import HeroSection from "./home-page components/HeroSection";
import Navigation from "./home-page components/Navigation";

export default function Home() {
    return (
        <div className="">
            <Navigation />
            <HeroSection />
            <div className="h-44"></div>
        </div>
    );
}