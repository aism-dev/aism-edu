import React from "react";
import Story from "./Story";
import { StoriesList } from "@/lib/Variables/Stories";

export default function Stories() {
    return (
        <>
            {StoriesList.map((story, _) => (
                <Story
                    {...story}
                    key={_}
                    isOdd={_ % 2 === 0}
                />
            ))}
        </>
    )
}
