import { VisaProcess } from "@/lib/Variables/VisaProcess";
import Steps from "../General Component/Steps";
import Top from "../General Component/Top";

export default function page() {
    return (
        <div className="mt-44">
            <Top 
                bubbleText="Student Visa"
                p="AISM will be delighted to assist students who are seeking a student visa for Guyana, this will also include Visa renewals. Below we have listed the steps to follow."
            />
            <Steps
                data={VisaProcess}
             />
        </div>
    )
}
