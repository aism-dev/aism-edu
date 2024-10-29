import React, { useState, useEffect, useLayoutEffect, useRef, useContext } from 'react';
import Button from '@/app/general components/Button';
import { useDebounce } from '@/lib/Hooks/UseDebounce';
import InputCase from './Sub Component/InputCase';
import { Variants, motion, useAnimation } from 'framer-motion';
import clsx from 'clsx';
import { FormBodyContext } from '../FormBody';

const EducationalBackground = () => {
    const [highSchool, setHighSchool] = useState('');
    const [highSchoolLocation, setHighSchoolLocation] = useState('');
    const [highSchoolGraduation, setHighSchoolGraduation] = useState('');
    const [university, setUniversity] = useState('');
    const [major, setMajor] = useState('');

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
        setCollapsed(currentTab !== 2);
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
        if (contentRef.current && currentTab === 2) {
            if (firstCollapse01.current) {
                setHeight(contentRef.current.scrollHeight + 20);
                firstCollapse01.current = false;
                return
            }
            setHeight(contentRef.current.scrollHeight);
        }
    }, [collapsed, currentTab]);

    const [errors, setErrors] = useState({
        highSchool: { error: 0, message: '' },
        highSchoolLocation: { error: 0, message: '' },
        highSchoolGraduation: { error: 0, message: '' },
        university: { error: 0, message: '' },
        major: { error: 0, message: '' },
    });

    const debouncedHighSchool = useDebounce(highSchool, 500);
    const debouncedHighSchoolLocation = useDebounce(highSchoolLocation, 500);
    const debouncedHighSchoolGraduation = useDebounce(highSchoolGraduation, 500);
    const debouncedUniversity = useDebounce(university, 500);
    const debouncedMajor = useDebounce(major, 500);

    useEffect(() => {
        if (debouncedHighSchool.length === 0) {
            setErrors((prevErrors) => ({ ...prevErrors, highSchool: { error: 0, message: '' } }));
            return;
        }
        if (!debouncedHighSchool) {
            setErrors((prevErrors) => ({ ...prevErrors, highSchool: { error: 1, message: 'High school name is required' } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, highSchool: { error: 2, message: '' } }));
        }
    }, [debouncedHighSchool]);

    useEffect(() => {
        if(String(debouncedHighSchoolLocation).length === 0) {
            setErrors((prevErrors) => ({ ...prevErrors, highSchoolLocation: { error: 0, message: '' } }));
            return;
        }
        if (!debouncedHighSchoolLocation) {
            setErrors((prevErrors) => ({ ...prevErrors, highSchoolLocation: { error: 1, message: 'High school location is required' } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, highSchoolLocation: { error: 2, message: '' } }));
        }
    }, [debouncedHighSchoolLocation]);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const yearRegex = /^\d{4}$/;
        if (!debouncedHighSchoolGraduation) {
            setErrors((prevErrors) => ({ ...prevErrors, highSchoolGraduation: { error: 0, message: '' } }));
            return;
        };
        if (!debouncedHighSchoolGraduation) {
            setErrors((prevErrors) => ({ ...prevErrors, highSchoolGraduation: { error: 1, message: 'Graduation year is required' } }));
        } else if (!yearRegex.test(debouncedHighSchoolGraduation) || parseInt(debouncedHighSchoolGraduation) < 1900 || parseInt(debouncedHighSchoolGraduation) > currentYear) {
            setErrors((prevErrors) => ({ ...prevErrors, highSchoolGraduation: { error: 1, message: 'Invalid graduation year' } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, highSchoolGraduation: { error: 2, message: '' } }));
        }
    }, [debouncedHighSchoolGraduation]);

    useEffect(() => {
        if (!university) {
            setErrors((prevErrors) => ({ ...prevErrors, university: { error: 0, message: '' } }));
            return;
        }
        if (university.length < 3) { 
            setErrors((prevErrors) => ({ ...prevErrors, university: { error: 1, message: 'University name must be at least 3 characters' } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, university: { error: 2, message: '' } }));
        }
    }, [debouncedUniversity]);

    useEffect(() => {
        if (!major) {
            setErrors((prevErrors) => ({ ...prevErrors, major: { error: 0, message: '' } }));
            return;
        }
        if (major.length < 3) {
            setErrors((prevErrors) => ({ ...prevErrors, major: { error: 1, message: 'Major must be at least 3 characters' } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, major: { error: 2, message: '' } }));
        }
    }, [debouncedMajor]);

    const canProceed = Object.values(errors).every((error)=>  error.error === 2);

    const handleBack = () => {
        setCurrentTab(1);
    }

    const HandleProceed = () => {
        if (!canProceed) return;
        const payload = {
            highSchool,
            highSchoolLocation,
            highSchoolGraduation,
            university,
            major,
        }
        setFormData((prevFormData) => ({ ...prevFormData, ...payload }));
        setCurrentTab(3);
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
                    2
                </div>
                <span>Educational Background {`${canProceed}`}</span>
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
                <div
                    className="flex flex-wrap gap-x-6 gap-y-3"
                >
                    <InputCase
                        error={errors.highSchool.error === 1 ? errors.highSchool.message : ''}
                        heading="High School Name"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <input
                            type="text"
                            name="high-school"
                            placeholder="Enter your High School Name"
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={highSchool}
                            onChange={(e) => setHighSchool(e.target.value)}
                        />
                    </InputCase>
                    <InputCase
                        error={errors.highSchoolLocation.error === 1 ? errors.highSchoolLocation.message : ''}
                        heading="Location"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <input
                            type="text"
                            name="high-school-location"
                            placeholder="City, State/Province, Country"
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={highSchoolLocation}
                            onChange={(e) => setHighSchoolLocation(e.target.value)}
                        />
                    </InputCase>
                    <InputCase
                        error={errors.highSchoolGraduation.error === 1 ? errors.highSchoolGraduation.message : ''}
                        heading="Year of Graduation"
                        required={true}
                        className="flex flex-col gap-1 flex-1"
                    >
                        <input
                            type="number"
                            name="high-school-graduation"
                            placeholder="YYYY"
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={highSchoolGraduation}
                            onChange={(e) => setHighSchoolGraduation(e.target.value)}
                        />
                    </InputCase>
                    <InputCase
                        error={errors.university.error === 1 ? errors.university.message : ''}
                        required={true}
                        heading="College or University"
                        className="flex flex-col gap-1 flex-1"
                    >
                        <input
                            type="text"
                            name="university"
                            placeholder="Enter your College or University"
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={university}
                            onChange={(e) => setUniversity(e.target.value)}
                        />
                    </InputCase>
                    <InputCase
                        required={true}
                        error={errors.major.error === 1 ? errors.major.message : ''}
                        heading="Major/Program"
                        className="flex flex-col gap-1 flex-1"
                    >
                        <input
                            type="text"
                            name="major"
                            placeholder="Enter your Major or Program"
                            className="flex-1 outline-none px-5 py-3 min-w-80"
                            value={major}
                            onChange={(e) => setMajor(e.target.value)}
                        />
                    </InputCase>
                </div>
                <p className="py-3"><i className="">Please provide your educational background details.</i></p>
                <div className='flex gap-3 items-center'>
                    <Button sizeVariation="XL" onClick={handleBack} className="w-fit">
                        Back
                    </Button>
                    <Button sizeVariation="XL" onClick={HandleProceed} className={clsx(
                        "w-fit",
                        canProceed ? "" : "pointer-events-none opacity-40 grayscale"
                    )}>
                        Continue
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default EducationalBackground;