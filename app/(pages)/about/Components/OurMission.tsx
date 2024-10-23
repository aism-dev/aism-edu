import BubbleText from "@/app/general components/BubbleText";
import { FaDotCircle } from "react-icons/fa";

export default function OurMission() {
    return (
        <div className="grid md:grid-cols-2 w-full md:px-40 sm:px-10 px-8 py-16 items-center gap-5 bg-black/5">
            <div>
                <BubbleText formatClass="sm:text-5xl text-4xl" text="What is AISM's Mission?" />
            </div>
            <p className="sm:max-w-[clamp(35rem,40%,20rem)] w-full justify-self-end grid gap-4">
                <span className="grid grid-cols-[1rem_1fr] gap-2"><FaDotCircle className="text-sm text-theme" /> The mission of the AISM is to create and nurture a diverse student body committed to offering internationally recognized opportunities for learning, discovery, and engagement.</span>
                <span className="grid grid-cols-[1rem_1fr] gap-2 text-lg font-medium"><span></span> AISM was born with a vision and that vision continues to grow the medical school.</span>
                <span className="grid grid-cols-[1rem_1fr] gap-2 opacity-70"><FaDotCircle className="text-sm text-theme" />To be amongst the most distinguished education and training institutions in the world specialized in Medical Health, Environmental Health and Research and Development.</span>
            </p>
        </div>
    )
}
