import { AnimatedEntrance } from "@/app/general components/AnimatedEntrance";
import { TopProps } from "@/lib/Variables/AcademicProgramsInterface";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function Top({ breadcrumb}: Omit<TopProps, "title">) {
    return (
        <div className="py-10 md:px-20 sm:px-10 px-8  bg-theme">
            <AnimatedEntrance direction="right">
                <div className="flex items-center gap-3">
                    {breadcrumb.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.href ? (
                                <Link href={item.href} className="text-white first:opacity-50 alt-link max-sm:text-sm truncate">{item.label}</Link>
                            ) : (
                                <p className="text-white max-sm:text-sm truncate">{item.label}</p>
                            )}
                            {index < breadcrumb.length - 1 && (
                                <FaAngleRight className="text-white mt-1 max-sm:text-sm" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </AnimatedEntrance>
        </div>
    )
}