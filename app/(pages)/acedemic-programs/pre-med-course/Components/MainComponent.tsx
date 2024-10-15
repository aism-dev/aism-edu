import Image from "next/image";

export default function MainComponent() {
    return (
        <div>
            <div className="relative">
                <Image
                    src={"https://aism-edu.sirv.com/pexels-yankrukov-8197537.jpg"}
                    alt=""
                    height={3795}
                    width={5862}
                    className="w-full object-cover h-96"
                />
                <h3 className="text-2xl p-4 px-8 bg-white text-center mx-auto shadow-lg text-theme font-medium -mt-8 relative z-10 w-fit">Your pathway to medicine start here</h3>
            </div>
            <p className="p-8">The American International School of Medicine began in 1999 and has graduated hundreds of medical doctors who are in speciality clinical and or training and or practices medicine in the USA, Guyana, UK, Pakistan, Caribbean, and other countries worldwide.</p>
        </div>
    )
}
