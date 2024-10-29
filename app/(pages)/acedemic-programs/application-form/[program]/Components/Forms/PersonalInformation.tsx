import { Nationals } from "@/lib/Variables/Nationality";
import InputCase from "./Sub Component/InputCase";
import Button from "@/app/general components/Button";
import { useEffect, useState } from "react";
import { useDebounce } from "@/lib/Hooks/UseDebounce";

export default function PersonalInformation() {
    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [nationality, setNationality] = useState("Afghan");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const [errors, setErrors] = useState({
        fullName: { error: 0, message: "" },
        dob: { error: 0, message: "" },
        gender: { error: 0, message: "" },
        nationality: { error: 0, message: "" },
        phone: { error: 0, message: "" },
        email: { error: 0, message: "" },
        address: { error: 0, message: "" },
    });

    const debouncedFullName = useDebounce(fullName, 500);
    const debouncedDob = useDebounce(dob, 500);
    const debouncedGender = useDebounce(gender, 500);
    const debouncedNationality = useDebounce(nationality, 500);
    const debouncedPhone = useDebounce(phone, 500);
    const debouncedEmail = useDebounce(email, 500);
    const debouncedAddress = useDebounce(address, 500);

    useEffect(() => {
        const splitName = debouncedFullName.trim().split(" ");
        if(!debouncedFullName) {
            setErrors((prevErrors) => ({  ...prevErrors, fullName: { error: 0, message: "" } }));
            return;
        }

        if (splitName.length < 2) {
            setErrors((prevErrors) => ({ ...prevErrors, fullName: { error: 1, message: "Full name must be at least 3 characters long" } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, fullName: { error: 2, message: "" } }));
        }
    }, [debouncedFullName]);


    useEffect(() => {
        if (!debouncedGender) {
            setErrors((prevErrors) => ({ ...prevErrors, gender: { error: 0,  message: "" } }));
            return;
        }

        if (debouncedGender.length < 3) {
            setErrors((prevErrors) => ({ ...prevErrors, gender: { error: 1, message: "Gender must be at least 3 characters long" } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, gender: { error: 2, message: "" } }));
        }
    }, [debouncedGender]);

    useEffect(() => {
        if (!debouncedNationality) {
            setErrors((prevErrors) => ({ ...prevErrors, nationality: { error: 1, message: "Nationality is required" } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, nationality: { error: 2, message: "" } }));
        }
    }, [debouncedNationality]);

    useEffect(() => {
        const phoneRegex = /^\+?\d{1,3}[-\s.]?\d{1,3}[-\s.]?\d{1,4}[-\s.]?\d{1,4}$/;
        if(!debouncedPhone) {
            setErrors((prevErrors) => ({ ...prevErrors, phone: { error: 0, message: "" } }));
            return;
        }
        if (!phoneRegex.test(debouncedPhone)) {
            setErrors((prevErrors) => ({ ...prevErrors, phone: { error: 1, message: "Invalid phone number" } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, phone: { error: 2, message: "" } }));
        }
    }, [debouncedPhone]);

    useEffect(() => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!debouncedEmail) {
            setErrors((prevErrors) => ({ ...prevErrors, email: { error: 0,  message: "" } }));
            return;
        }
        if (!emailRegex.test(debouncedEmail)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: { error: 1, message: "Invalid email address" } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: { error: 2, message: "" } }));
        }
    }, [debouncedEmail]);

    useEffect(() => {
        if(!debouncedAddress)  {
            setErrors((prevErrors) => ({ ...prevErrors, address: { error: 0,  message: "" } }));
            return;
        }

        if (debouncedAddress.length < 5) {
            setErrors((prevErrors) => ({ ...prevErrors, address: { error: 1, message: "Address must be at least 5 characters long" } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, address: { error: 2, message: "" } }));
        }
    }, [debouncedAddress]);


    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-2 flex-1 py-5">
                <div className="h-10 w-10 rounded-full bg-theme text-white border-2 border-theme grid place-items-center">
                    1
                </div>
                <span>Personal Information</span>
                <div className="h-[3px] bg-gray-300 flex-1 mt-1">
                    <div className="h-full w-full bg-theme"></div>
                </div>
            </div>
            
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {/* {JSON.stringify(errors)} */}
                    <InputCase
                        error={errors.fullName.error === 1 ? errors.fullName.message : ""}
                        heading="Full Name (First, Middle, Last)"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your Full Name (First, Middle, Last)"
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </InputCase>
                    <InputCase
                        error={errors.dob.error === 1 ? errors.dob.message : ""}
                        heading="Date of Birth"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <input
                            type="date"
                            name="dob"
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </InputCase>
                    <InputCase
                        error={errors.gender.error === 1 ? errors.gender.message : ""}
                        heading="Gender"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <input
                            type="text"
                            placeholder="What's your gender"
                            name="gender"
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </InputCase>
                    <InputCase
                        error={errors.nationality.error === 1 ? errors.nationality.message : ""}
                        heading="Nationality"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <select
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            name="nationality"
                            id=""
                            value={nationality}
                            onChange={(e) => setNationality(e.target.value)}
                        >
                            {Nationals.map((nation) => (<option value={nation}>{nation}</option>))}
                        </select>
                    </InputCase>
                    <InputCase
                        error={errors.phone.error === 1 ? errors.phone.message : ""}
                        heading="Phone Number (with country code)"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <input
                            type="text"
                            placeholder="+1 555 555 5555"
                            name="phone"
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </InputCase>
                    <InputCase
                        error={errors.email.error === 1 ? errors.email.message : ""}
                        heading="Email Address"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <input
                            type="email"
                            placeholder="johndoe@example.com"
                            name="email"
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputCase>
                    <InputCase
                        error={errors.address.error === 1 ? errors.address.message : ""}
                        heading="Mailing Address"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <input
                            type="text"
                            placeholder="123 ST. Example"
                            name="address"
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </InputCase>
                </div>
                <p className="py-3"><i className="">Please provide your basic details so we can reach you and verify your identity.</i></p>
                <Button sizeVariation="XL" className="w-fit">
                    Continue
                </Button>
        </div>
    )
}
