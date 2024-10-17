import { TopProps } from "@/lib/Variables/AcademicProgramsInterface";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function Top({ breadcrumb, title }: TopProps) {
    return (
        <div className="py-10 px-20 bg-theme">
            <div className="flex items-center gap-3">
                {breadcrumb.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.href ? (
                            <Link href={item.href} className="text-white opacity-50 alt-link">{item.label}</Link>
                        ) : (
                            <span className="text-white">{item.label}</span>
                        )}
                        {index < breadcrumb.length - 1 && (
                            <FaAngleRight className="text-white mt-1" />
                        )}
                    </React.Fragment>
                ))}
            </div>
            <h1 className="text-white text-4xl mt-2">{title}</h1>
        </div>
    )
}