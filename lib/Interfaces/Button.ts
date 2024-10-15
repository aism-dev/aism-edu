import React from "react";

type size = "XL" | "L" | "M" | "S" | "W";
type colorVariations = "light" | "dark" | "footer";
type ButtonType  = "submit" | "button" | "reset" | "link" | undefined

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: ButtonType,
    sizeVariation?: size,
    colorVariation?: colorVariations,
    hovered?: boolean,
    href: ""
}

interface LinkInterface extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    btnType?: "link",
    sizeVariation?: size,
    colorVariation?: colorVariations,
    hovered?: boolean,
}

export type CustomButtonInterface = ButtonInterface | LinkInterface