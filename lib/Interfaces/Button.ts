import React from "react";

type size = "XL" | "L" | "M" | "S" | "W";
type colorVariations = "light" | "dark" | "footer";
type ButtonType  = "submit" | "button" | "reset" | undefined

export interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: ButtonType,
    sizeVariation?: size,
    colorVariation?: colorVariations,
    hovered?: boolean,
    href?: string
}