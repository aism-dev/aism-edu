import BubbleText from "@/app/general components/BubbleText";

export default function MiniInfo() {
    return (
        <div className="grid grid-cols-2 w-full px-40 py-20 items-center gap-5 border-b shadow-lg shadow-black/5 bg-theme">
            <div>
                <BubbleText formatClass="text-5xl text-white" text="Student Success Stories" />
            </div>
            <p className="max-w-[clamp(30rem,40%,20rem)] justify-self-end grid gap-4">
                <span className="text-white">AISM students excel in academics and beyond, securing top residencies and making global impacts. Explore their stories and see how AISM has shaped their medical journeys.</span>
            </p>
        </div>
    )
}
