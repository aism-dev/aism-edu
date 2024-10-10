import ChooseAISM from "./home-page components/Choose AISM";
import HeroSection from "./home-page components/HeroSection";
import MiniInfo from "./home-page components/MiniInfo";
import Navigation from "./home-page components/Navigation";


export default function Home() {
    return (
        <div className="">
            <Navigation />
            <HeroSection />
            <MiniInfo />
            <ChooseAISM />
        </div>
    );
}