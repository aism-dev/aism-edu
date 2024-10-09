import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="grid place-items-center mt-36">
            <div className="heroImg">
                <Image
                    src={"https://aism-edu.sirv.com/pexels-rdne-7683745.jpg"}
                    alt="bg-cover"
                    height={3360}
                    width={5040}
                    className="h-[calc(100vh-2.5rem)] object-cover"
                />
                <p className="absolute bottom-20 left-20 text-white z-10 text-6xl font-thin max-w-[40rem] leading-[1.25]">
                    Empowering the feature 
                    at AISM.
                </p>
            </div>
        </div>
    )
}