import Marquee from "react-fast-marquee";
import { FaGlobe, FaSchool } from "react-icons/fa";
import { FaAtom, FaCheck, FaHandshake, FaUserGroup } from "react-icons/fa6";

export default function OurValues() {
    return (
        <div className="">
            <Marquee
                autoFill={true}
                className="mt-4 bg-theme text-white py-6 overflow-hidden"
                gradientColor="#183d74"
                gradientWidth={250}
                pauseOnHover
                gradient
            >
                <div className="flex hover:scale-125 text-xl mx-6 items-center gap-2">
                    <FaCheck className="text-2xl" />
                    Respect
                </div>
                <div className="flex hover:scale-125 text-xl mx-6 items-center gap-2">
                    <FaHandshake className="text-2xl" />
                    Integritiy
                </div>
                <div className="flex hover:scale-125 text-xl mx-6 items-center gap-2">
                    <FaGlobe className="text-2xl" />
                    Diversity
                </div>
                <div className="flex hover:scale-125 text-xl mx-6 items-center gap-2">
                    <FaUserGroup className="text-2xl" />
                    Team Work
                </div>
                <div className="flex hover:scale-125 text-xl mx-6 items-center gap-2">
                    <FaSchool className="text-2xl" />
                    Education for all
                </div>
                <div className="flex hover:scale-125 text-xl mx-6 items-center gap-2">
                    <FaAtom className="text-2xl" />
                    Excellence
                </div>
            </Marquee>
            <Marquee
                autoFill={true}
                pauseOnHover
                className="bg-theme text-white py-6 overflow-hidden"
                gradientColor="#183d74"
                direction="right"
                gradientWidth={250}
                gradient
            >
                <div className="flex hover:scale-125 text-xl mx-6 items-center gap-2">
                    <FaCheck className="text-2xl" />
                    Respect
                </div>
                <div className="flex hover:scale-125 text-xl mx-6 items-center gap-2">
                    <FaHandshake className="text-2xl" />
                    Integritiy
                </div>
                <div className="flex hover:scale-125 text-xl mx-6 items-center gap-2">
                    <FaGlobe className="text-2xl" />
                    Diversity
                </div>
                <div className="flex hover:scale-125 text-xl mx-6 items-center gap-2">
                    <FaUserGroup className="text-2xl" />
                    Team Work
                </div>
                <div className="flex hover:scale-125 text-xl mx-6 items-center gap-2">
                    <FaSchool className="text-2xl" />
                    Education for all
                </div>
                <div className="flex hover:scale-125 text-xl mx-6 items-center gap-2">
                    <FaAtom className="text-2xl" />
                    Excellence
                </div>
            </Marquee>
        </div>
    )
}
