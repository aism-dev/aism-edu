import PersonalInformation from "./Forms/PersonalInformation";
import EducationalBackground from "./Forms/EducationalBackground";
import ProgramOfInterest from "./Forms/ProgramOfInterest";

export default function Form() {
    return (
        <div className="">
            <PersonalInformation />
            <EducationalBackground />
            <ProgramOfInterest />
        </div>
    )
}
