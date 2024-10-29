import React, { useState, useEffect, useLayoutEffect, useRef, useContext } from 'react';
import Button from '@/app/general components/Button';
import { useDebounce } from '@/lib/Hooks/UseDebounce';
import InputCase from './Sub Component/InputCase';
import { Variants, motion, useAnimation } from 'framer-motion';
import clsx from 'clsx';
import { FormBodyContext } from '../FormBody';
import PayPalPayment from '../PayPalComponent';

const ApplicationFeePayment = () => {
    // Framer section
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const [collapsed, setCollapsed] = useState(true);
    const controls = useAnimation();

    const variants: Variants = {
        hidden: { opacity: 0, height: 0, },
        visible: { opacity: 1, height: height },
    };

    const { currentTab, setCurrentTab, setFormData } = useContext(FormBodyContext);

    useEffect(() => {
        setCollapsed(currentTab !== 4);
    }, [currentTab]);
    
    useEffect(() => {
        if (collapsed) {
            controls.start("hidden");
        } else {
            controls.start("visible");
        }
    }, [collapsed, controls]);
    
    const firstCollapse01 = useRef(true);

    useLayoutEffect(() => {
        if (contentRef.current && currentTab === 4) {
            if (firstCollapse01.current) {
                setHeight(contentRef.current.scrollHeight + 20);
                firstCollapse01.current = false;
                return
            }
            setHeight(contentRef.current.scrollHeight);
        }
    }, [collapsed, currentTab]);

    const handleBack = () => {
        setCurrentTab(3);
    }

    const HandleProceed = () => {
    }

    return (
        <div className={clsx(
            "flex flex-col",
            { "mb-3 opacity-100": !collapsed },
            { "opacity-50": collapsed }
        )}>
            <div className="flex items-center gap-2 flex-1 py-5">
                <div className={clsx(
                    "h-10 w-10 rounded-full  border-2 border-theme grid place-items-center",
                    { "bg-theme text-white": !collapsed }
                )}>
                    4
                </div>
                <span>Application Fee Payment</span>
                <div className="h-[3px] bg-gray-300 flex-1 mt-1">
                    <div className={clsx(
                        "h-full bg-theme",
                        { "w-full": !collapsed },
                        { "w-0": collapsed }
                    )}></div>
                </div>
            </div>

            <motion.div
                ref={contentRef}
                initial="hidden"
                className='overflow-hidden px-1'
                animate={controls}
                variants={variants}
                transition={{ duration: 0.15 }}
            >
                <p className=''>To proceed with your application, please complete the non-refundable application fee payment of <span className='text-xl font-semibold text-theme'>$150 USD</span>.</p>
                <p className=''>Once we receive your payment, you&apos;ll receive the full application form via email, which will require additional details and supporting documents.</p>
                <p className="py-3"><sup className='text-2xl text-red-600'>*</sup><i className="">Note: This fee is non-refundable and covers the review of your application materials.</i></p>
                <div className='flex gap-3 items-start'>
                    <Button sizeVariation="L" onClick={handleBack} className="w-fit">
                        Back
                    </Button>
                    <PayPalPayment />
                </div>
            </motion.div>
        </div>
    );
};

export default ApplicationFeePayment;