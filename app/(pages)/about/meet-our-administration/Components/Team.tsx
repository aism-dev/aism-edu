import { AnimatedEntrance } from "@/app/general components/AnimatedEntrance";
import { TeamProps } from "@/lib/Variables/TeamsContent";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Team(props: TeamProps) {
    return (
        <div className={clsx(
            "sm:p-20 p-8",
            props.id % 2 === 0 ?  "bg-black/5" : "",

        )}>
            <AnimatedEntrance direction="right">
                <h3 className="sm:text-4xl text-3xl text-theme font-semibold mb-8">{props.title}</h3>
            </AnimatedEntrance>
            <div className={clsx(
                "grid",
                props.members.length > 6 ? "sm:grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-x-8 gap-y-5" : "grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-5"
            )}>
                {props.members.map((member) => (
                    <AnimatedEntrance key={member.id} className={clsx(
                        "relative group hover:z-30",
                        props.members.length > 6 ?  "flex" : "",
                    )}>
                        {member.hasSocials &&
                            <div className="absolute top-1/2 delay-500 -translate-y-1/2 left-full -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 p-2 grid gap-3 border border-theme bg-theme border-r-transparent">
                                {member.socials.map((social) => (
                                    <Link key={social.id} href={social.url} target="_blank" className="alt-link h-8 w-8 rounded-lg grid place-items-center text-white border-2 border-white">
                                        <social.icon className="text-xl" />
                                    </Link>
                                ))}
                            </div>
                        }
                        <div className={clsx(
                            "border overflow-hidden relative z-10",
                            props.members.length > 6 ?  "h-20 aspect-square w-20" : "h-80"
                        )}>
                            <Image
                                src={member.image ?? "https://aism-edu.sirv.com/Team/default_profile_image.png"}
                                alt={member.name}
                                width={1920}
                                height={1280}
                                className="w-full min-h-full object-cover object-top"
                            />
                        </div>
                        <div className={clsx(
                            props.members.length > 6 ?  "px-4 flex gap-2 flex-col justify-center w-full z-20 relative" : "mt-3",
                            props.id % 2 === 0 ? "bg-gray-100" : "bg-white",
                        )}>
                            <h4 className="leading-4 font-bold text-themeDark text-lg">{member.name}</h4>
                            <p className="text-gray-500 text-sm">{member.role}</p>
                        </div>
                    </AnimatedEntrance>
                ))}
            </div>
        </div>
    )
}
