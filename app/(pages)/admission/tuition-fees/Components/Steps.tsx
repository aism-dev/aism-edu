import Step from "./Step";
import { tuitionSteps } from "@/lib/Variables/TuitionFees";

export default function Steps() {
    return (
        <div className="grid p-20 gap-5">
            {tuitionSteps.map((process, id) => (
                <Step key={id} isOdd={(id + 1) % 2 !== 0}>
                    <h4 className="text-2xl text-theme my-2 font-semibold">{process.title}</h4>
                    {process.content}
                </Step>
            ))}
        </div>
    )
}
