import clsx from "clsx";
import Step from "./Step";

export default function Steps({data}: {data: any[]}) {
    return (
        <div className="grid sm:p-20 px-8 py-20 gap-5">
            {data.map((process, id) => (
                <Step key={id} isOdd={(id + 1) % 2 !== 0}>
                    <h2 className={clsx(
                        "sm:text-4xl text-2xl font-semibold flex items-center gap-2",
                        (id + 1) % 2 !== 0 ? "justify-end" : ""
                    )}>Step {id + 1}</h2>
                    <h4 className="text-xl text-theme my-2 font-semibold">{process.title}</h4>
                    {process.content}
                </Step>
            ))}
        </div>
    )
}
