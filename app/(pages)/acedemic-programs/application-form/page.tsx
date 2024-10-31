import Top from "../Components/Top";
import FormBody from "./Components/FormBody";

export default function page() {
    return (
        <div className="mt-44">
            <Top 
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "acedemic-programs" },
                    { label: "Application Form" }
                ]}
            />
            <FormBody />
        </div>
    )
}
