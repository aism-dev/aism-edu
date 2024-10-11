import ChooseAISM from "./home-page components/Choose AISM";
import FindYourProgram from "./home-page components/FindYourProgram";
import HeroSection from "./home-page components/HeroSection";
import MiniInfo from "./home-page components/MiniInfo";
import MiniInfoTwo from "./home-page components/MiniInfoTwo";
import Navigation from "./home-page components/Navigation";
import YourjourneyOurpromise from "./home-page components/YourjourneyOurpromise";


export default function Home() {
    return (
        <div className="app">
            <Navigation />
            <HeroSection />
            <MiniInfo />
            <ChooseAISM />
            <FindYourProgram />
            <MiniInfoTwo />
            <YourjourneyOurpromise />
        </div>
    );
}