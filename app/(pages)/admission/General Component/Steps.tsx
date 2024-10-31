import clsx from "clsx";
import Step from "./Step";
import { TuitionStep } from "@/lib/Variables/TuitionFees";
import { AdmissionStep } from "@/lib/Variables/VisaProcess";

export default function Steps({ data, noStep }: { data: TuitionStep[] | AdmissionStep[], noStep?: boolean }) {
    return (
        <div className="grid sm:p-20 px-8 py-20 gap-5">
            {data.map((process, id) => (
                <Step key={id} isOdd={(id + 1) % 2 !== 0}>
                    {!noStep && <h2 className={clsx(
                        "sm:text-4xl text-2xl font-semibold flex items-center gap-2",
                        (id + 1) % 2 !== 0 ? "justify-end" : ""
                    )}>Step {id + 1}</h2>}
                    <h4 className="text-xl text-theme my-2 font-semibold">{process.title}</h4>
                    {process.content}
                </Step>
            ))}
        </div>
    )
}
