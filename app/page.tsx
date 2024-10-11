import ChooseAISM from "./home-page components/Choose AISM";
import FindYourProgram from "./home-page components/FindYourProgram";
import HeroSection from "./home-page components/HeroSection";
import MiniInfo from "./home-page components/MiniInfo";
import Navigation from "./home-page components/Navigation";


export default function Home() {
    return (
        <div className="app">
            <Navigation />
            <HeroSection />
            <MiniInfo />
            <ChooseAISM />
            <FindYourProgram />
        </div>
    );
}