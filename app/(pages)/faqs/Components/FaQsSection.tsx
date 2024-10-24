import { faqData } from "@/lib/Variables/FAQs";
import FaQs from "./FaQs";

export default function FaQsSection() {
    return (
        <div className="py-20 md:px-20 sm:px-10 px-5">
            <div className="grid sm:grid-cols-2 gap-10">
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
