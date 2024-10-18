import BubbleText from "@/app/general components/BubbleText";

export default function IntroSection() {
    return (
        <div className="grid grid-cols-2 w-full px-40 items-center gap-5 border-b shadow-lg shadow-black/5 bg-theme py-24">
            <div>
                <BubbleText formatClass="text-5xl text-white" text="Frequently Asked Question?" />
            </div>
            <p className="max-w-[clamp(30rem,40%,20rem)] justify-self-end grid gap-4">
                <span className="text-white">Find answers to common questions about our programs, admissions, and campus life at AISM. If you don&apos;t see your question here, rest assured—we&apos;re here to help!</span>
            </p>
        </div>
    )
}
