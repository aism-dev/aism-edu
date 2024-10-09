export const TABS: {
    id: number,
    title: string,
    Component: JSX.Element,
    imageSrc: string;
}[] = [
    {
        id: 1,
        title: 'About',
        Component: <About />,
        imageSrc: 'https://source.unsplash.com/1600x900/?person',
    },
    {
        id: 2,
        title: 'Admission',
        Component: <Admission />,
        imageSrc: 'https://source.unsplash.com/1600x900/?person',
    },
    {
        id: 3,
        title: 'Academic Programs',
        Component: <AcademicPrograms />,
        imageSrc: 'https://source.unsplash.com/1600x900/?person',
    },
    {
        id: 4,
        title: 'Student Success',
        Component: <StudentSuccess />,
        imageSrc: 'https://source.unsplash.com/1600x900/?person',
    },
].map((n, idx) => ({ ...n, id: idx }))

function About() {
    return (
        <div>About </div>
    )
}

function Admission() {
    return (
        <div>About </div>
    )
}

function AcademicPrograms() {
    return (
        <div>About </div>
    )
}

function StudentSuccess() {
    return (
        <div>About </div>
    )
}