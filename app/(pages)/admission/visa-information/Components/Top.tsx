import BubbleText from "@/app/general components/BubbleText";

export default function MiniInfo() {
    return (
        <div className="grid grid-cols-2 w-full px-40 py-24 items-center gap-5 border-b shadow-lg shadow-black/5 bg-theme">
            <div>
                <BubbleText formatClass="text-5xl text-white" text="Student Visa" />
            </div>
            <p className="max-w-[clamp(30rem,40%,20rem)] justify-self-end grid gap-4">
                <span className="text-white">AISM will be delighted to assist students who are seeking a student visa for Guyana, this will also include Visa renewals. Below we have listed the steps to follow</span>
            </p>
        </div>
    )
}
