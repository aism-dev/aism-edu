import { AnimatedEntrance } from "@/app/general components/AnimatedEntrance";
import BubbleText from "@/app/general components/BubbleText";

export default function MiniInfo({
    bubbleText,
    p
}: { bubbleText: string, p: string }) {
    return (
        <AnimatedEntrance direction="right" className="grid sm:grid-cols-2 w-full md:px-40 sm:px-20 px-10 py-24 items-center gap-5 border-b shadow-lg shadow-black/5 bg-theme">
            <div>
                <BubbleText formatClass="sm:text-5xl text-4xl text-white" text={bubbleText} />
            </div>
            <p className="sm:max-w-[clamp(30rem,40%,20rem)] w-full justify-self-end grid gap-4">
                <span className="text-white">{p}</span>
            </p>
        </AnimatedEntrance>
    )
}
