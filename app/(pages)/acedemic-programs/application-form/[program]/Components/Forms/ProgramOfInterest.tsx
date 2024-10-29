import React, { useState, useEffect } from 'react';
import InputCase from './Sub Component/InputCase';
import Button from '@/app/general components/Button';
import { useDebounce } from '@/lib/Hooks/UseDebounce';

const ProgramOfInterest = () => {
    const [intendedProgram, setIntendedProgram] = useState('');
    const [preferredStartDate, setPreferredStartDate] = useState('');
    const [isTransferStudent, setIsTransferStudent] = useState(false);

    const [errors, setErrors] = useState({
        intendedProgram: { error: 0, message: '' },
        preferredStartDate: { error: 0, message: '' },
        isTransferStudent: { error: 0, message: '' },
    });

    const debouncedIntendedProgram = useDebounce(intendedProgram, 500);
    const debouncedPreferredStartDate = useDebounce(preferredStartDate, 500);

    useEffect(() => {
        if (!debouncedIntendedProgram || (debouncedIntendedProgram !== 'Premedical' && debouncedIntendedProgram !== 'Basic Sciences' && debouncedIntendedProgram !== 'Clinical Sciences')) {
            setErrors((prevErrors) => ({ ...prevErrors, intendedProgram: { error: 1, message: 'Please select a valid program' } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, intendedProgram: { error: 0, message: '' } }));
        }
    }, [debouncedIntendedProgram]);

    useEffect(() => {
        const currentDate = new Date().toISOString().slice(0, 10);
        if (!debouncedPreferredStartDate || debouncedPreferredStartDate < currentDate) {
            setErrors((prevErrors) => ({ ...prevErrors, preferredStartDate: { error: 1, message: 'Please select a valid start date' } }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, preferredStartDate: { error: 0, message: '' } }));
        }
    }, [debouncedPreferredStartDate]);

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-2 flex-1 py-5">
                <div className="h-10 w-10 rounded-full bg-theme text-white border-2 border-theme grid place-items-center">
                    3
                </div>
                <span>Program of Interest</span>
                <div className="h-[3px] bg-gray-300 flex-1 mt-1">
                    <div className="h-full w-full bg-theme"></div>
                </div>
            </div>

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
                        name="preferred-start-date"
                        className="flex-1 outline-none px-5 py-3 min-w-80"
                        value={preferredStartDate}
                        onChange={(e) => setPreferredStartDate(e.target.value)}
                    />
                </InputCase>
                <InputCase
                    error={errors.isTransferStudent.error === 1 ? errors.isTransferStudent.message : ''}
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
            <Button sizeVariation="XL" className="w-fit">
                Continue
            </Button>
        </div>
    );
};

export default ProgramOfInterest;