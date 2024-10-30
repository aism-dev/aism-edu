import PersonalInformation from "./Forms/PersonalInformation";
import EducationalBackground from "./Forms/EducationalBackground";
import ProgramOfInterest from "./Forms/ProgramOfInterest";
import ApplicationFeePayment from "./Forms/ApplicationFeePayment";

export default function Form() {
    return (
        <div className="">
            <PersonalInformation key={"PersonalInformation"} />
            <EducationalBackground key={"EducationalBackground"} />
            <ProgramOfInterest key={"ProgramOfInterest"} />
            <ApplicationFeePayment key={"ApplicationFeePayment"} />
        </div>
    )
}
