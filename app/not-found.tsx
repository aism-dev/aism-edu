import Image from "next/image";
import Button from "./general components/Button";
import ShiftingCountdown from "./general components/CountDown";

export default function NotFound() {
  return (
    <div className="mt-32 h-[60vh] grid place-items-center relative">
      <div className="w-full flex flex-col gap-2 items-center relative">
        <h1 className="text-theme text-4xl">🚧 Site Under Maintenance 🚧</h1>
        <p>We&apos;re making improvements. Please check back later.</p>
        <ShiftingCountdown />
        <Image
          src={"https://aism-edu.sirv.com/icons/c118f0f12ffe4b2f4e239e66f2e15e30.png"}
          alt="under contruction"
          height={3780}
          width={3980}
          className="absolute sm:top-[60%] top-full h-40 w-auto object-contain sm:right-[12%] right-1/2 max-sm:-translate-x-1/2"
        />
      </div>
    </div>
  );
}