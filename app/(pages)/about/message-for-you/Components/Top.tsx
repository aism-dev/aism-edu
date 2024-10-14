import Image from "next/image";

export default function TopSection() {
    return (
        <div className="bg-theme h-screen relative grid grid-cols-[1fr_1.25fr]">
            <div className="flex items-center">
                <h1 className="text-8xl font-normal text-white p-20">
                    Message <span className="text-3xl">from</span> <br /> <span className="text-3xl">the</span> President
                </h1>
            </div>
            <div className="rounded-bl-full h-full bg-white overflow-hidden">
                <Image
                    src={"https://aism-edu.sirv.com/icons/AISM-light.png"}
                    alt="AISM Logo"
                    height={318}
                    width={318}
                    className="w-full object-contain object-right-bottom h-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 blur opacity-25"
                />
                <Image
                    src={"https://aism-edu.sirv.com/CutOuts/dr.colin-a-wilkinson_LE_auto_x2-ai-brush-removebg-65ok652q.png"}
                    alt="Dr. Colin Wilkinson"
                    height={1920}
                    width={1280}
                    className="w-full object-contain object-right-bottom h-full translate-y-80 origin-bottom-right scale-150 relative"
                />
            </div>
        </div>
    )
}
