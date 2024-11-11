import clsx from "clsx";

const BubbleText = ({ text, formatClass }: {text: string, formatClass?: string}) => {
    return (
        <h1 className="font-thin">
            {text.split("").map((child, idx) => (
                <span className={clsx(
                    "hoverText",
                    formatClass
                )} key={idx}>
                    {child}
                </span>
            ))}
        </h1>
    );
};

export default BubbleText;