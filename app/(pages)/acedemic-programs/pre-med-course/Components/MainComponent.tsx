import Button from "@/app/general components/Button";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export default function MainComponent() {
    return (
        <div>
            <div className="relative">
                <Image
                    src={"https://aism-edu.sirv.com/pexels-yankrukov-8197537.jpg"}
                    alt=""
                    height={3795}
                    width={5862}
                    className="w-full object-cover h-96"
                />
                <h3 className="text-2xl p-4 px-8 bg-white text-center mx-auto shadow-lg text-theme font-medium -mt-8 relative z-10 w-fit">Your pathway to medicine start here</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] px-8">
                <div className="p-5 hover:bg-theme/5">
                    <FaCheck className="text-2xl text-green-600" />
                    <p className="font-medium text-themeDark">Transition from High School to medical school in a single course</p>
                </div>
                <div className="p-5 hover:bg-theme/5">
                    <FaCheck className="text-2xl text-green-600" />
                    <p className="font-medium text-themeDark">Small class sizes to support your successful transition</p>
                </div>
                <div className="p-5 hover:bg-theme/5">
                    <FaCheck className="text-2xl text-green-600" />
                    <p className="font-medium text-themeDark">International students are welcome and fully supported</p>
                </div>
                <div className="p-5 hover:bg-theme/5">
                    <FaCheck className="text-2xl text-green-600" />
                    <p className="font-medium text-themeDark">Your own personal advisor to guide you through the program</p>
                </div>
                <div className="p-5 hover:bg-theme/5">
                    <FaCheck className="text-2xl text-green-600" />
                    <p className="font-medium text-themeDark">A broad array of volunteer internships</p>
                </div>
            </div>
            <p className="p-8">The American International School of Medicine began in 1999 and has graduated hundreds of medical doctors who are in speciality clinical and or training and or practices medicine in the USA, Guyana, UK, Pakistan, Caribbean, and other countries worldwide.</p>

            <Button btnType="link" href="/" hovered className="px-8 my-5" sizeVariation="XL">
                Apply Now
            </Button>
            <div className="flex gap-10 px-3">
                <div className="p-5">
                    <h5 className="text-lg text-themeDark font-semibold">Application Starts:</h5>
                    <p className="text-3xl text-themelight">September, 2024</p>
                </div>
                <div className="p-5">
                    <h5 className="text-lg text-themeDark font-semibold">Classes Starts:</h5>
                    <p className="text-3xl text-themelight">January, 2025</p>
                </div>
            </div>
        </div>
    )
}
