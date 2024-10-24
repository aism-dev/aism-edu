import Image from "next/image";
import AffiliatesList, { AffiliateInterface } from "@/lib/Variables/Affiliates";
import Carousel from "@/app/home-page components/sub components/Carousel";
import { AnimatedEntrance } from "@/app/general components/AnimatedEntrance";

export default function Affiliates() {
    return (
        <div className="pt-24 pb-20 px-8 bg-black/5">
            <div className="text-center flex flex-col items-center gap-4">
                <h2 className="text-4xl font-medium text-theme">Organisations Affiliated with AISM</h2>
                <p className="sm:max-w-[40rem] w-full px-8 leading-6 text-black/70">
                Partnering with top organizations to provide students with enhanced clinical training, research opportunities, and career development pathways.
                </p>
            </div>
            <div className="sm:px-10 px-5 mt-10">
                <Carousel>
                    {AffiliatesList.map((affiliate)=>(
                        <Affiliate 
                            key={affiliate.id} 
                            name={affiliate.name}
                            relationship={affiliate.relationship}
                            avatar={affiliate.avatar}
                            affiliation ={affiliate.affiliation}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

function Affiliate({ avatar, name, relationship, affiliation }: Omit<AffiliateInterface, "id">) {
  return (
    <AnimatedEntrance className="p-8 bg-white max-w-[95%] max-sm:max-w-full cursor-grab active:cursor-grabbing relative">
        <Image
            src={avatar}
            alt="Quotes"
            height={500}
            width={500}
            className="opacity-80 pt-8 h-32 w-auto object-contain"
        />
        <Image
            src={avatar}
            alt="Quotes"
            height={500}
            width={500}
            className="h-32 w-full object-cover absolute top-0 right-0 opacity-5 saturate-0"
        />
        <p className="mt-3 mb-5">
            {affiliation}
        </p>
        <div className="flex items-center border-t-2 border-t-black/5 py-3 gap-3">
            <div>
                <h3 className="font-semibold text-theme">{name}</h3>
                <p className="opacity-70 text-sm">{relationship}</p>
            </div>
        </div>
    </AnimatedEntrance>
  )
}

