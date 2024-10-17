import Form from "./Components/Form";
import Top from "./Components/Top";

export default function ApplicationFormPage() {
    return (
        <div className="mt-44">
            <Top 
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Pre-Health (Pre-Medical) Sciences", href: "academic-programs/pre-med-course" },
                    { label: "Application Form" },
                ]}
                title="Pre-Health (Pre-Medical) Sciences Application Form"
            />
            <Form />
        </div>
    )
}
