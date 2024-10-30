import React, { useState, useEffect, useRef, useContext, useLayoutEffect } from 'react';
import InputCase from './Sub Component/InputCase';
import Button from '@/app/general components/Button';
import { useDebounce } from '@/lib/Hooks/UseDebounce';
import { useAnimation, Variants, motion } from 'framer-motion';
import { FormBodyContext } from '../FormBody';
import clsx from 'clsx';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const ProgramOfInterest = () => {
    const [intendedProgram, setIntendedProgram] = useState('');
    const [preferredStartDate, setPreferredStartDate] = useState('');
    const [isTransferStudent, setIsTransferStudent] = useState(false);

    const [errors, setErrors] = useState({
        intendedProgram: { error: 0, message: '' },
        preferredStartDate: { error: 0, message: '' },
    });

    const debouncedIntendedProgram = useDebounce(intendedProgram, 500);
    const debouncedPreferredStartDate = useDebounce(preferredStartDate, 500);

    useEffect(() => {
        if (!debouncedIntendedProgram) {
            setErrors((prevErrors) => ({ ...prevErrors, intendedProgram: { error: 0, message: '' } }));
            return;
        }
        if (!debouncedIntendedProgram || (debouncedIntendedProgram !== 'Premedical' && debouncedIntendedProgram !== 'Basic Sciences' && debouncedIntendedProgram !== 'Clinical Sciences')) {
            setErrors((prevErrors) => ({ ...prevErrors, intendedProgram: { error: 1, message: 'Please select a valid program' } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, intendedProgram: { error: 2, message: '' } }));
        }
    }, [debouncedIntendedProgram]);

    useEffect(() => {
        const currentDate = new Date().toISOString().slice(0, 10);
        if(!debouncedPreferredStartDate) {
            setErrors((prevErrors) => ({ ...prevErrors, preferredStartDate: { error: 0, message: '' } }));
            return;
        }
        if (debouncedPreferredStartDate < currentDate) {
            setErrors((prevErrors) => ({ ...prevErrors, preferredStartDate: { error: 1, message: 'Please select a valid start date' } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, preferredStartDate: { error: 2, message: '' } }));
        }
    }, [debouncedPreferredStartDate]);

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
    const canProceed = Object.values(errors).every((error)=>  error.error === 2);

    const today = new Date().getTime() + (48 * 60 * 60 * 1000);
    const $minPreferredDate = new Date(today).toISOString().split('T')[0];

    useEffect(() => {
        setCollapsed(currentTab !== 3);
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
        if (contentRef.current && currentTab === 3) {
            if (firstCollapse01.current) {
                setHeight(contentRef.current.scrollHeight + 20);
                firstCollapse01.current = false;
                return
            }
            setHeight(contentRef.current.scrollHeight);
        }
    }, [collapsed, currentTab]);

    const handleBack = () => {
        setCurrentTab(2);
    }

    const HandleProceed = () => {
        if (!canProceed) return;
        const payload = {
            intendedProgram,
            preferredStartDate,
            isTransferStudent,
        }
        setFormData((prevFormData) => ({ ...prevFormData, ...payload }));
        setCurrentTab(4);
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
                    3
                </div>
                <span>Program of Interest</span>
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
                className='overflow-hidden'
                animate={controls}
                variants={variants}
                transition={{ duration: 0.15 }}
            >
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                    <InputCase
                        error={errors.intendedProgram.error === 1 ? errors.intendedProgram.message : ''}
                        heading="Intended Program"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <select
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={intendedProgram}
                            onChange={(e) => setIntendedProgram(e.target.value)}
                        >
                            <option value="">Select a program</option>
                            <option value="Premedical">Premedical</option>
                            <option value="Basic Sciences">Basic Sciences</option>
                            <option value="Clinical Sciences">Clinical Sciences</option>
                        </select>
                    </InputCase>
                    <InputCase
                        error={errors.preferredStartDate.error === 1 ? errors.preferredStartDate.message : ''}
                        heading="Preferred Start Date"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <input
                            type="date"
                            min={$minPreferredDate}
                            name="preferred-start-date"
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={preferredStartDate}
                            onChange={(e) => setPreferredStartDate(e.target.value)}
                        />
                    </InputCase>
                    <InputCase
                        error={''}
                        heading="Are you applying as a transfer student?"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <div className="flex items-center gap-5 px-5 py-3">
                            <label className='flex gap-2'>
                                <input
                                    type="radio"
                                    name="is-transfer-student"
                                    checked={isTransferStudent}
                                    onChange={() => setIsTransferStudent(true)}
                                />
                                Yes
                            </label>
                            <label className='flex gap-2'>
                                <input
                                    type="radio"
                                    name="is-transfer-student"
                                    checked={!isTransferStudent}
                                    onChange={() => setIsTransferStudent(false)}
                                />
                                No
                            </label>
                        </div>
                    </InputCase>
                </div>
                <p className="py-3"><i className="">Please provide details about the program you're interested in.</i></p>
                <div className='flex gap-3 items-center'>
                    <Button sizeVariation="XL" onClick={handleBack} className="w-fit">
                        <span className="flex flex-row-reverse items-center gap-2">Back <FaAngleLeft /></span>
                    </Button>
                    <Button sizeVariation="XL" onClick={HandleProceed} hovered={canProceed} className={clsx(
                        "w-fit",
                        canProceed ? "" : "pointer-events-none opacity-40 grayscale"
                    )}>
                        <span className='flex items-center gap-2'>{canProceed ? "Proceed" : "Fill in the section"} <FaAngleRight /></span>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default ProgramOfInterest;