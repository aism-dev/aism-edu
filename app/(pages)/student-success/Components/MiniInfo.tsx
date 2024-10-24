import { AnimatedEntrance } from "@/app/general components/AnimatedEntrance";
import BubbleText from "@/app/general components/BubbleText";

export default function MiniInfo() {
    return (
        <AnimatedEntrance direction="right" className="grid sm:grid-cols-2 w-full md:px-40 sm:px-20 px-10 py-24 items-center gap-5 border-b shadow-lg shadow-black/5 bg-theme">
                <div>
                    <BubbleText formatClass="sm:text-5xl text-4xl text-white" text="Student Success Stories" />
                </div>
                <p className="sm:max-w-[clamp(30rem,40%,20rem)] w-full sm:justify-self-end grid gap-4">
                    <span className="text-white">AISM students excel in academics and beyond, securing top residencies and making global impacts. Explore their stories and see how AISM has shaped their medical journeys.</span>
                </p>
        </AnimatedEntrance>
    )
}
