import { StoryProps } from "@/lib/Variables/Stories";
import clsx from "clsx";
import { FC } from "react";
import { FaStar } from "react-icons/fa";

interface StoryPropsWithIsOdd extends StoryProps {
    isOdd: boolean
}

const Story: FC<StoryPropsWithIsOdd> = ({ name, title, description, imageSrc, rating, isOdd }) => {
    const renderStars = (count: number) => {
        return Array.from({ length: count }, (_, i) => (
            <FaStar key={i} className="drop-shadow-[1px_1px_0_rgba(0,0,0,1)] text-yellow-500" />
        ));
    };

    return (
        <div className={clsx(
            "flex items-center px-20 py-10",
            isOdd ?  "" : "bg-black/5",

        )}>
            <svg viewBox="0 -18 200 200" height={600} width={600} xmlns="http://www.w3.org/2000/svg" className="min-w-[20rem] flex-1">
                <clipPath id="clipPic">
                    <path
                        fill="#183D74"
                        d="M41.1,-73.1C51.3,-65.3,56.3,-50.3,59.1,-36.9C62,-23.6,62.8,-11.8,63.6,0.4C64.3,12.6,65,25.3,61.1,36.8C57.1,48.4,48.6,58.8,37.6,64.1C26.6,69.5,13.3,69.7,1.2,67.6C-11,65.6,-21.9,61.3,-34.5,56.9C-47.1,52.5,-61.3,48,-68,38.6C-74.7,29.1,-73.8,14.5,-72.3,0.8C-70.9,-12.8,-68.8,-25.7,-64.4,-39.2C-60.1,-52.6,-53.4,-66.7,-42.2,-74C-31.1,-81.2,-15.5,-81.7,0,-81.6C15.5,-81.5,30.9,-80.9,41.1,-73.1Z"
                        transform="translate(100 90)"
                    />
                </clipPath>
                <path
                    fill="#183D74"
                    d="M41.1,-73.1C51.3,-65.3,56.3,-50.3,59.1,-36.9C62,-23.6,62.8,-11.8,63.6,0.4C64.3,12.6,65,25.3,61.1,36.8C57.1,48.4,48.6,58.8,37.6,64.1C26.6,69.5,13.3,69.7,1.2,67.6C-11,65.6,-21.9,61.3,-34.5,56.9C-47.1,52.5,-61.3,48,-68,38.6C-74.7,29.1,-73.8,14.5,-72.3,0.8C-70.9,-12.8,-68.8,-25.7,-64.4,-39.2C-60.1,-52.6,-53.4,-66.7,-42.2,-74C-31.1,-81.2,-15.5,-81.7,0,-81.6C15.5,-81.5,30.9,-80.9,41.1,-73.1Z"
                    transform="translate(100 100)"
                />
                <image
                    href={imageSrc}
                    height={500}
                    width={500}
                    className="h-full w-full object-cover translate-x-3 -translate-y-2"
                    clipPath="url(#clipPic)"
                />
            </svg>
            <div className="flex-1 py-10 flex flex-col gap-3">
                <div className="grid">
                    <h3 className="text-3xl font-medium text-theme">{name}</h3>
                    <h5 className="text-base font-medium opacity-60">{title}</h5>
                </div>
                <p>{description}</p>
                <div className="flex items-center gap-2">{renderStars(rating)}</div>
            </div>
        </div>
    );
};

export default Story;