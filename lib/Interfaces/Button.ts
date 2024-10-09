import React from "react";

type size = "XL" |  "L" | "M" | "S";
type colorVariations = "light" | "dark";

type btnVariation = `${colorVariations}-${size}`
export interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: "submit" | "button" | "reset",
    onBlack?:  boolean,
    sizeVariation?: size,
    colorVariation?: colorVariations,
}