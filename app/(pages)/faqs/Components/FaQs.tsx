"use client"
import { AnimatedEntrance } from "@/app/general components/AnimatedEntrance";
import { FAQInterface } from "@/lib/Variables/FAQs";
import clsx from "clsx";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function FaQs({ questions, section }: FAQInterface) {
    return (
        <div className="grid gap-6">
            <AnimatedEntrance direction="right">
                <h3 className="text-2xl font-semibold text-themeDark">{section}</h3>
            </AnimatedEntrance>
            <div className="grid">
                {questions.map((question, idx)=>(
                    <FAQ 
                        key={`${question.question}-${idx}`}
                        {...question}
                    />
                ))}
            </div>
        </div>
    )
}

const FAQ = ({ answer, question }: { question: string; answer: string; }) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLParagraphElement>(null);
    const controls = useAnimation();
    const [collapsed, setCollapsed] = useState(true);
    const [height, setHeight] = useState(0);
    const isFirstMount = useRef(true);

    const variants: Variants = {
        hidden: { opacity: 0, height: 0, paddingTop: 0 },
        visible: { opacity: 1, height: height,  paddingTop: "12px" },

    };

    
    useEffect(() => {
        if(height === 0) return;
        isFirstMount.current = false;
    }, [isFirstMount, height]);

    useLayoutEffect(() => {
        if (contentRef.current) {
            if(isFirstMount.current){
                const tempHeight = contentRef.current.scrollHeight;
                setHeight(tempHeight + 20); 
                return;
            }
            setHeight(contentRef.current.scrollHeight); 
        }
    }, [collapsed, isFirstMount]);

    useEffect(() => {
        if (collapsed) {
            controls.start("hidden");
        } else {
            controls.start("visible");
        }
    }, [collapsed, controls]);

    return (
        <AnimatedEntrance className="border-t border-t-theme py-3">
            <h5 
                ref={titleRef} 
                className={clsx(
                    "font-medium flex items-center justify-between cursor-pointer",
                    { "text-theme": !collapsed },
                )} 
                onClick={() => setCollapsed(!collapsed)}
            >
                <span>{question}</span>
                <button className="h-9 w-9 grid active:scale-90 active:rotate-6 place-items-center bg-theme text-white">
                    <FaAngleRight className={clsx(
                        { "rotate-90": !collapsed }
                    )} />
                </button>
            </h5>
            <motion.p
                ref={contentRef}
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.15 }}
                className="overflow-hidden transition-all"
            >
                {answer}
            </motion.p>
        </AnimatedEntrance>
    );
}
