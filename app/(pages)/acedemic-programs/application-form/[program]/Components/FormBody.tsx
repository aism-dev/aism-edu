"use client"
import React, { useState } from "react";
import Form from "./Form";

interface FormBodyContext {
    currentTab: number,
    setCurrentTab: React.Dispatch<React.SetStateAction<number>>,
}

const formBodyContext: FormBodyContext = {
    currentTab: 0,
    setCurrentTab: ()=>{}
}

const FormBodyContext = React.createContext(formBodyContext);

export default function FormBody() {
    const [currentTab,  setCurrentTab] = useState(0);
    const [ ]=useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        nationality: "",
        gender: "",
        birthDate: "",
        highSchool: "",
        highSchoolLocation: "",
        highSchoolGraduation: "",
        university: "",
        major: "",
        intendedProgram: "",
        preferredStartDate: "",
        isTransferStudent: "",
    })

    return (
        <FormBodyContext.Provider value={{ currentTab, setCurrentTab }}>
            <div className="py-10 xl:px-20 md:px-10 sm:px-7 px-5">
                <h1 className="text-3xl font-semibold text-theme">Apply to AISM &mdash; Start Your Journey</h1>
                <p className="my-3">
                    Thank you for choosing AISM as a step toward your medical career. This preliminary application form allows you to submit your basic information and pay the application fee, after which you’ll receive the full application form via email.
                </p>
                <i>Please complete each section below and ensure the information is accurate.</i>
                {/* <FormTabs tabs={tabs} currentTab={currentTab} /> */}
                <Form />
            </div>
        </FormBodyContext.Provider>
    )
}