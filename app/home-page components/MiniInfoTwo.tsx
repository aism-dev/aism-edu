import BubbleText from "../general components/BubbleText";
import Button from "../general components/Button";
export default function MiniInfoTwo() {
    return (
        <div className="grid gap-14 sm:grid-cols-[auto_1fr_auto] w-full px-20 py-10 items-center bg-black/5">
            <div className="w-fit">
                <Button sizeVariation="XL">
                    Join Us
                </Button>
            </div>
            <p className=" grid gap-4">
                <span>Join AISM and unlock your potential with world-class faculty, cutting-edge facilities, and a diverse, supportive community. Gain the expertise and confidence to excel in medicine and make a meaningful impact on global healthcare. Your journey starts here!</span>
            </p>
            <div>
                <BubbleText formatClass="text-5xl text-theme" text="Shape Your Future" />
            </div>
        </div>
    )
}
