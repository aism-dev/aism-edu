import BubbleText from "@/app/general components/BubbleText";
import Button from "@/app/general components/Button";
import Image from "next/image";

export default function OurVision() {
    return (
        <>
            <div className="grid gap-14 grid-cols-[auto_1fr_auto] w-full px-20 py-10 items-center">
                <div className="w-fit">
                    <Button sizeVariation="XL">
                        Apply Now
                    </Button>
                </div>
                <p className=" grid gap-4">
                    <span>
                        We will realize our bold vision by producing future generations of well-trained physicians, developing new solutions from innovative research, improving access to high-quality health care and forging strategic partnerships to build thriving communities and better lives for all people in all around World.
                    </span>
                </p>
                <div className="pl-3">
                    <BubbleText formatClass="text-5xl text-theme" text="AISM's Vision" />
                </div>
            </div>
            <div className="flex flex-wrap border-y-2">
                <div className="min-w-[20rem] max-w-[30rem]">
                    <Image
                        src={"https://aism-edu.sirv.com/pexels-hawk-i-i-75310404-19547594.jpg"}
                        alt=""
                        width={4024}
                        height={4960}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="grid bg-black/5 min-w-[20rem] flex-1 gap-[2px]">
                    <div className="bg-white p-10 grid place-content-center h-full gap-3 cursor-education">
                        <h3 className="text-3xl font-normal text-theme">Excellence in Medical Education</h3>
                        <p>
                            We prepare future physicians through exceptional medical education and hands-on clinical training. Our students and residents develop a strong academic foundation, critical thinking skills, and clinical competence, ensuring their professional growth and expanding access to quality healthcare globally.
                        </p>
                    </div>
                    <div className="bg-white p-10 grid place-content-center h-full gap-3">
                        <h3 className="text-3xl font-normal text-theme">Advancing Medical Research</h3>
                        <p>
                            Our faculty drive research initiatives that push the boundaries of science and improve health outcomes for individuals and communities. Through active involvement in research, students and residents cultivate a passion for discovery, making meaningful scholarly contributions to the medical field.
                        </p>
                    </div>
                    <div className="bg-white p-10 grid place-content-center h-full gap-3">
                        <h3 className="text-3xl font-normal text-theme">Excellence in Clinical Care</h3>
                        <p>
                            With accredited programs, expert faculty, and cutting-edge facilities, we equip learners with the skills to deliver compassionate, evidence-based, patient-centered care. Our healthcare services make a meaningful impact on the lives of the communities we serve.
                        </p>  
                    </div>
                </div>
            </div>
        </>
    )
}