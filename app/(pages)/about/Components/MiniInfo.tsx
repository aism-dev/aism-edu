import BubbleText from "@/app/general components/BubbleText";

export default function MiniInfo() {
    return (
        <div className="grid grid-cols-2 w-full px-40 pb-10 items-center gap-5">
            <div>
                <BubbleText formatClass="text-5xl" text="Turning your Dreams into Reality" />
            </div>
            <p className="max-w-[clamp(30rem,40%,20rem)] justify-self-end grid gap-4">
                <span>The American International School of Medicine began in 1999 and has graduated hundreds of medical doctors who are in specialty clinical training and practicing medicine in the USA, Guyana, UK, Pakistan, Caribbean, and other countries worldwide.</span>
                <span>We focus on training physicians who can excel in patient-care research and education as a part of their professional development.</span>
            </p>
        </div>
    )
}
