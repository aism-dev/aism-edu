import Image from "next/image"
import Carousel from "./sub components/Carousel"

export default function Testimonials() {
    return (
        <div className="pt-24 pb-20 bg-black/5">
            <div className="text-center flex flex-col items-center gap-4">
                <h2 className="text-4xl font-medium text-theme">What Others Are Saying</h2>
                <p className="max-w-[40rem] leading-6 text-black/70">
                    Hear from students, faculty, and professionals as they share their experiences and how AISM has impacted their careers in the medical field.
                </p>
            </div>
            <div className="px-10 mt-10">
                <Carousel>
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                </Carousel>
            </div>
        </div>
    )
}

function Testimonial() {
  return (
    <div className="p-8 bg-white max-w-[95%] max-sm:max-w-full cursor-grab active:cursor-grabbing">
        <Image
            src={"https://aism-edu.sirv.com/icons/quote-left-svgrepo-com%20(1).svg"}
            alt="Quotes"
            height={50}
            width={50}
            className="opacity-50 pt-8"
        />
        <p className="mt-3 mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima asperiores praesentium qui neque fugit accusantium?
        </p>
        <div className="flex items-center border-t-2 border-t-black/5 py-3 gap-3">
            <div className="h-full rounded-full aspect-square border overflow-hidden">
                  <Image
                      src={"https://aism-edu.sirv.com/Dr.Peraline.jpeg"}
                      alt="Quotes"
                      height={50}
                      width={50}
                      className="max-sm:h-16 max-sm:w-16"
                  />
            </div>
            <div>
                <h3 className="font-semibold text-theme">Jeffrey Dahmer</h3>
                <p className="opacity-70">Mauwakee Butcher</p>
            </div>
        </div>
    </div>
  )
}

