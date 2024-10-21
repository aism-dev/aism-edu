import BubbleText from "@/app/general components/BubbleText";

export default function MiniInfo() {
    return (
        <div className="grid grid-cols-2 w-full px-40 py-24 items-center gap-5 border-b shadow-lg shadow-black/5 bg-theme">
            <div>
                <BubbleText formatClass="text-5xl text-white" text="Admission Process" />
            </div>
            <p className="max-w-[clamp(30rem,40%,20rem)] justify-self-end grid gap-4">
                <span className="text-white">Embark on your journey to AISM in just a few simple steps. We’ve streamlined the process to make your application experience as smooth as possible.</span>
            </p>
        </div>
    )
}
