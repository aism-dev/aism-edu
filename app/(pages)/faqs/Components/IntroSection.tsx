import { AnimatedEntrance } from "@/app/general components/AnimatedEntrance";
import BubbleText from "@/app/general components/BubbleText";

export default function IntroSection() {
    return (
        <AnimatedEntrance className="grid sm:grid-cols-2 w-full md:px-40 sm:px-10 px-8 items-center gap-5 border-b shadow-lg shadow-black/5 bg-theme py-24">
            <div>
                <BubbleText formatClass="sm:text-5xl text-4xl text-white" text="Frequently Asked Question?" />
            </div>
            <p className="sm:max-w-[clamp(30rem,40%,20rem)] w-full sm:justify-self-end grid gap-4">
                <span className="text-white">Find answers to common questions about our programs, admissions, and campus life at AISM. If you don&apos;t see your question here, rest assured—we&apos;re here to help!</span>
            </p>
        </AnimatedEntrance>
    )
}
