import { AnimatedEntrance } from "@/app/general components/AnimatedEntrance";
import Image from "next/image";

export default function Top() {
    return (
        <AnimatedEntrance className="withGradient relative h-96 overflow-hidden grid place-items-center">
            <Image
                src={"https://aism-edu.sirv.com/301617876_512872740529074_7075262364263306893_n_LE_auto_x2.jpg"}
                alt="AISM Group Photo"
                width={2160}
                height={1208}
                className="md:object-contain object-cover min-h-full object-center w-full h-auto md:-mt-24 pointer-events-none select-none"
            />
            <div className="absolute mt-20 z-20 px-10 text-center text-white">
                <h1 className="sm:text-5xl text-3xl uppercase font-semibold">Administration</h1>
                <p className="pt-3 sm:text-xl text-lg w-[40rem,70%,20rem]">Providing world-class education and training to shape the future leaders in healthcare and medical research</p>
            </div>
        </AnimatedEntrance>
    )
}