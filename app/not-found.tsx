import Image from "next/image";
import Button from "./general components/Button";
import ShiftingCountdown from "./general components/CountDown";

export default function NotFound() {
  return (
    <div className="mt-44 h-[60vh] grid place-items-center relative">
      <div className="w-full flex flex-col gap-2 items-center relative">
        <h1 className="text-theme text-4xl">This page is under construction</h1>
        <ShiftingCountdown />
        <Button href="/">
          Return Home
        </Button>
        <Image
          src={"https://aism-edu.sirv.com/icons/c118f0f12ffe4b2f4e239e66f2e15e30.png"}
          alt="under contruction"
          height={3780}
          width={3980}
          className="absolute top-[45%] h-40 w-auto object-contain right-[12%]"
        />
      </div>
    </div>
  );
}