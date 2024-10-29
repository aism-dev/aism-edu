import Top from "../../Components/Top";
import FormBody from "./Components/FormBody";

export default function page({ params }: { params: { program: string } }) {
    const { program: currentProgram } = params;
    
    return (
        <div className="mt-44">
            <Top 
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "acedemic-programs" },
                    { label: currentProgram, href: `${currentProgram}` },
                    { label: "Application Form" }
                ]}
                title="Basic Science Program"
            />
            <FormBody />
        </div>
    )
}
