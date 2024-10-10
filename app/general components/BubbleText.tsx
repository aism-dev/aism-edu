import clsx from "clsx";

const BubbleText = ({ text, formatClass }: {text: string, formatClass?: string}) => {
    return (
        <h2 className="font-thin">
            {text.split("").map((child, idx) => (
                <span className={clsx(
                    "hoverText",
                    formatClass
                )} key={idx}>
                    {child}
                </span>
            ))}
        </h2>
    );
};

export default BubbleText;