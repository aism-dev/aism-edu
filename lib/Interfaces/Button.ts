import { WithChildren } from "../Types";

export interface ButtonInterface extends WithChildren { 
    btnType?: "submit" | "button" | "reset"
}