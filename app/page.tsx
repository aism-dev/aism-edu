import ChooseAISM from "./home-page components/Choose AISM";
import FindYourProgram from "./home-page components/FindYourProgram";
import HeroSection from "./home-page components/HeroSection";
import MiniInfo from "./home-page components/MiniInfo";
import MiniInfoTwo from "./home-page components/MiniInfoTwo";
import Testimonials from "./home-page components/Testimonials";
import YourjourneyOurpromise from "./home-page components/YourjourneyOurpromise";


export default function Home() {
    return (
        <>
            <HeroSection />
            <MiniInfo />
            <ChooseAISM />
            <FindYourProgram />
            <MiniInfoTwo />
            <YourjourneyOurpromise />
            <Testimonials />
        </>
    );
}