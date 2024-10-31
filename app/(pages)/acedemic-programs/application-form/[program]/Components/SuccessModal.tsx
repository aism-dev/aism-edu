import clsx from "clsx";
import Image from "next/image";
import { useClickAway } from "react-use";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaX } from "react-icons/fa6";
import Link from "next/link";

export default function SuccessModal() {
    const containerRef  = useRef<HTMLDivElement>(null);

    const router = useRef<HTMLAnchorElement>(null);

    const closeFunc = () => {
        if(!router.current) return;

        router.current.click();
    }
    useClickAway(containerRef, closeFunc);


    return (
        <motion.div
            className="fixed top-0 left-0 h-screen w-screen z-[100] grid place-items-center overflow-y-hidden bg-black/35 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div title="Close this" className="absolute h-full w-full -z-10 cursor-pointer"></div>
            <motion.div
                className="relative -mt-10 shadow-2xl shadow-black/25 border-2 border-white/40" ref={containerRef}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.15 }}
                exit={{ x: 100 }}
            >
                <div className="relative bg-white md:w-[60vw] md:h-[65vh] sm:w-[95dvw] sm:h-[70dvh] w-[85dvw] h-auto max-h-[90dvh] grid sm:grid-cols-[1fr_auto]  items-center group overflow-hidden">
                    <div className="sm:p-16 p-10">
                        <Link href={"/"} className="opacity-0 absolute" ref={router}>Go to Home Page</Link>
                        <h2 className="text-3xl text-theme font-semibold md:max-w-[60%]">Thank You for Your Application!</h2>
                        <h3 className="py-3 text-green-400 text-lg">Your application has been submitted successfully.</h3>
                        <div>
                            <h4 className="font-semibold">Next Steps:</h4>
                            <p className="md:max-w-[70%] ml-3 my-2"><span className="font-semibold text-theme">&mdash;</span> Check your email for confirmation and instructions.</p>
                            <p className="md:max-w-[70%] ml-3"><span className="font-semibold text-theme">&mdash;</span> The full application form will be sent to you once payment is verified.</p>
                        </div>
                        <h3 className="mt-6 text-theme text-lg">We look forward to welcoming you to AISM!</h3>
                    </div>
                    <Image
                        src={"https://aism-edu.sirv.com/icons/animation.svg"}
                        alt="Successful"
                        height={500}
                        width={500}
                        className="md:h-[70%] h-80 w-auto object-contain pr-10 max-md:py-10 max-sm:pl-10 max-sm:order-first"
                    />
                </div>

                <div onClick={closeFunc} className="absolute -top-2 -right-2 h-9 w-9 bg-red-500 rounded-full overflow-hidden grid place-items-center text-white cursor-pointer active:scale-95">
                    <FaX />
                </div>
            </motion.div>
        </motion.div>
    )
}
