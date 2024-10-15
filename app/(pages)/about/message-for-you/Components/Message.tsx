import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function MessageSection() {
    return (
        <div className="p-20 grid gap-5">
            <p></p>
            <p>Congratulations on being accepted into American International School of Medicine.</p>

            <p>It is with Great pride that I introduce to you an institution, which has grown over the years into an excellent school that provides medical education and training to meet the growing demands for health and health care professionals worldwide.</p>

            <p>Standing by our mission we strive to provide the most efficient service; and we are committed to the preparation of our students for a lifelong process. To become educators, practitioners, leaders and biomedical researchers who can produce discoverers that enhance the understanding of life processes, leading to disease prevention and curing.</p>

            <p>Our major strength lies in our ability to attract and maintain quality faculty and staff with the experiences necessary to provide the highest standard of training and services required to fulfil our mission.</p>

            <p>At AISM, we offer a very dynamic and culturally diverse learning environment.</p>

            <p>As President, I wish to personally extend the key to gateway of acquiring an excellent career in Medical and Health Care sciences. I am confident that your choice to be associated with AISM will be an experience you will always cherish. I wish you a memorable and earnest journey towards success. <Link href={"https://inspirery.com/colin-wilkinson/"} target="_blank" className="text-themelight">Read more</Link></p>

            <p>Welcome to the American International School of Medicine &mdash; AISM</p>

            <p className="font-medium sign-font mt-10 text-3xl text-theme underline underline-offset-8">Dr. Colin A. Wilkinson</p>
            <p className="font-bold text-lg uppercase text-themeDark -mt-3">Founder & Chairman</p>
            <div className="flex items-center gap-3 justify-between w-fit">
                <Link href={""} className="alt-link h-12 w-12 rounded-lg grid place-items-center text-theme border-2 border-theme">
                    <FaFacebookF className="text-2xl" />
                </Link>
                <Link href={""} className="alt-link h-12 w-12 rounded-lg grid place-items-center text-theme border-2 border-theme">
                    <FaInstagram className="text-2xl" />
                </Link>
                <Link href={""} className="alt-link h-12 w-12 rounded-lg grid place-items-center text-theme border-2 border-theme">
                    <FaLinkedinIn className="text-2xl" />
                </Link>
            </div>
        </div>
    )
}
