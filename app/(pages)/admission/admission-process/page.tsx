import { admissionSteps } from "@/lib/Variables/AdmissionProcess";
import Steps from "../General Component/Steps";
import Top from "../General Component/Top";

export default function page() {
    return (
        <div className="mt-44">
            <Top 
                bubbleText="Admission Process"
                p="Embark on your journey to AISM in just a few simple steps. We’ve streamlined the process to make your application experience as smooth as possible."
            />
            <Steps data={admissionSteps} />
        </div>
    )
}
