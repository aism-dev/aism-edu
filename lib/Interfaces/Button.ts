import React from "react";

type size = "XL" | "L" | "M" | "S" | "W";
type colorVariations = "light" | "dark" | "footer";

export interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: "submit" | "button" | "reset",
    sizeVariation?: size,
    colorVariation?: colorVariations,
    hovered?: boolean,
}