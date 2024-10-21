import { VisProcess } from "@/lib/Variables/VisaProcess";
import Step from "./Step";
import clsx from "clsx";

export default function Steps() {
    return (
        <div className="grid p-20 gap-5">
            {VisProcess.map((process, id) => (
                <Step key={id} isOdd={(id + 1) % 2 !== 0}>
                    <h2 className={clsx(
                        "text-4xl font-semibold flex items-center gap-2",
                        (id + 1) % 2 !== 0 ? "justify-end" : ""
                    )}>Step {id + 1}</h2>
                    <h4 className="text-xl text-theme my-2 font-semibold">{process.title}</h4>
                    {process.content}
                </Step>
            ))}
        </div>
    )
}
