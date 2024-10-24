import { MainComponentProps } from "@/lib/Variables/AcademicProgramsInterface";
import MainComponent from "./MainComponent";
import SideComponnet from "./SideComponnet";

export default function BodySection(mainProps: MainComponentProps) {
    return (
        <div className="py-10 md:px-20 sm:px-10 px-5 grid md:grid-cols-[auto_25rem] gap-8 grid-cols-1">
            <MainComponent
                {...mainProps}
             />
            <SideComponnet />
        </div>
    )
}
