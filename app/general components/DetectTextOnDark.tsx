"use client"
import { useEffect } from 'react';

export default function AddClassToElements() {
    useEffect(() => {
        const addClassToElements = (targetClass: string, newClass: string) => {
            const elements = document.querySelectorAll(`.${targetClass}`);
            elements.forEach((el) => {
                el.classList.add(newClass);
            });
        };

        addClassToElements('text-white', 'on-black');
    }, []);

    return (
        <></>
    );
}
