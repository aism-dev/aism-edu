import BubbleText from "@/app/general components/BubbleText";
import Image from "next/image";

export default function WhatWeCanDoForYou() {
    return (
        <>
            <div className="grid grid-cols-2 w-full px-40 pb-10 items-center gap-5" id="Up">
                <div>
                    <BubbleText formatClass="text-5xl" text="What AISM can do for you?" />
                </div>
                <p className="max-w-[clamp(35rem,40%,20rem)] justify-self-end grid gap-4">
                    <span className="text-lg">The American International School of Medicine (AISM), established in 1999, has proudly graduated hundreds of medical doctors now practicing and specializing in countries like the USA, Guyana, the UK, Pakistan, and across the Caribbean. Our mission is to train physicians who excel in patient care, research, and education, ensuring a well-rounded professional development experience.</span>
                    <span className="opacity-70">AISM has campuses in Atlanta, Georgia, Georgetown, Guyana, the UK, and Nigeria. Our students gain invaluable hands-on experience through clinical rotations at hospitals in the United States, Canada, the UK, and Guyana, with opportunities for elective rotations in other countries.</span>
                </p>
            </div>
            <div className="h-96 overflow-y-hidden grid place-items-center">
                <Image
                    src={"https://aism-edu.sirv.com/301617876_512872740529074_7075262364263306893_n_LE_auto_x2.jpg"}
                    alt="AISM Group Photo"
                    width={2160}
                    height={1208}
                    className="object-contain object-center w-full h-auto md:-mt-24 pointer-events-none select-none"
                />
            </div>
        </>
    )
}
