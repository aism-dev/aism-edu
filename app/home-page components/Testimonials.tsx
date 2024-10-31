import Image from "next/image"
import Carousel from "./sub components/Carousel"
import TestimonialsList, { TestimonialInterface } from "@/lib/Variables/Testimonials"
import { AnimatedEntrance } from "../general components/AnimatedEntrance"

export default function Testimonials() {
    return (
        <div className="pt-24 pb-20 bg-black/5 max-sm:px-2">
            <AnimatedEntrance className="text-center flex flex-col items-center gap-4">
                <h2 className="sm:text-4xl text-3xl font-medium text-theme">What Others Are Saying</h2>
                <p className="max-w-[40rem] leading-6 text-black/70 px-10">
                    Hear from students, faculty, and professionals as they share their experiences and how AISM has impacted their careers in the medical field.
                </p>
            </AnimatedEntrance>
            <AnimatedEntrance className="sm:px-10 mt-10">
                <Carousel>
                    {TestimonialsList.map((testimonial)=>(
                        <Testimonial 
                            key={testimonial.id} 
                            name={testimonial.name}
                            role={testimonial.role}
                            avatar={testimonial.avatar}
                            testimonial ={testimonial.testimonial}
                        />
                    ))}
                </Carousel>
            </AnimatedEntrance>
        </div>
    )
}

function Testimonial({ avatar, name, role, testimonial }: Omit<TestimonialInterface, "id">) {
  return (
    <div className="sm:p-8 p-5 bg-white max-w-[95%] max-sm:max-w-full mx-auto cursor-grab active:cursor-grabbing">
        <Image
            src={"https://aism-edu.sirv.com/icons/quote-left-svgrepo-com%20(1).svg"}
            alt="Quotes"
            height={50}
            width={50}
            className="opacity-80 max-sm:h-20 pt-8"
        />
        <p className="mt-3 mb-5 sm:h-20 h-16">
            {testimonial}
        </p>
        <div className="flex items-center border-t-2 border-t-black/5 py-3 gap-3">
            <div className="h-full shrink-0 rounded-full aspect-square border overflow-hidden">
                  <Image
                      src={avatar}
                      alt={name}
                      height={50}
                      width={50}
                      className="max-sm:h-16 max-sm:w-16"
                  />
            </div>
            <div>
                <h3 className="font-semibold text-theme">{name}</h3>
                <p className="opacity-70">{role}</p>
            </div>
        </div>
    </div>
  )
}

