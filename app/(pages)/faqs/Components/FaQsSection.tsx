import { faqData } from "@/lib/Variables/FAQs";
import FaQs from "./FaQs";

export default function FaQsSection() {
    return (
        <div className="p-20">
            <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col gap-6">
                    {faqData.map((faq, idx)=>(
                        idx % 2 === 1 && <FaQs key={idx} {...faq} />
                    ))}
                </div>
                <div className="flex flex-col gap-6">
                    {faqData.map((faq, idx) => (
                        idx % 2 === 0 && <FaQs key={idx} {...faq} />
                    ))}
                </div>
            </div>
        </div>
    )
}
