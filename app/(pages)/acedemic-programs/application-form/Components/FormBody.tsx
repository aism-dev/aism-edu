"use client"
import React, { useState } from "react";
import Form from "./Form";
import SuccessModal from "./SuccessModal";

export interface FormData {
    fullName: string,
    email: string,
    phone: string,
    address: string,
    nationality: string,
    gender: string,
    birthDate: string,
    highSchool: string,
    highSchoolLocation: string,
    highSchoolGraduation: string,
    university: string,
    major: string,
    intendedProgram: string,
    preferredStartDate: string,
    isTransferStudent: boolean,
}

interface FormBodyContext {
    currentTab: number,
    setCurrentTab: React.Dispatch<React.SetStateAction<number>>,
    formData: FormData,
    setFormData: React.Dispatch<React.SetStateAction<FormData>>,
    setApplicationComplete: React.Dispatch<React.SetStateAction<boolean>>,
}

const formBodyContext: FormBodyContext = {
    currentTab: 1,
    setCurrentTab: () => { },
    formData: {
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
        isTransferStudent: false,
    },
    setFormData: () => { },
    setApplicationComplete: () => { },
}

export const FormBodyContext = React.createContext(formBodyContext);

export default function FormBody() {
    const [currentTab,  setCurrentTab] = useState(1);
    const [applicationComplete, setApplicationComplete] = useState(false);
    const [formData, setFormData] = useState({
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
        isTransferStudent: false,
    })

    return (
        <FormBodyContext.Provider value={{ currentTab, setCurrentTab, formData, setFormData, setApplicationComplete }}>
            <div className="py-10 xl:px-20 md:px-10 sm:px-7 px-5">
                <h1 className="text-3xl font-semibold text-theme">Apply to AISM &mdash; Start Your Journey</h1>
                <p className="my-3">
                    Thank you for choosing AISM as a step toward your medical career. This preliminary application form allows you to submit your basic information and pay the application fee, after which you’ll receive the full application form via email.
                </p>
                <i>Please complete each section below and ensure the information is accurate.</i>
                <Form />
            </div>
            {applicationComplete && <SuccessModal />}
        </FormBodyContext.Provider>
    )
}