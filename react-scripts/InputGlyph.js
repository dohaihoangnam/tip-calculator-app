import React from "react";
import { dollarIcon, personIcon } from "./glyphs";

export default function InputGlyph() {
    switch (Component.inputHeading) {
        case 'Bill': 
            return <>{dollarIcon}</>; 
            break;
        case 'Number of People': 
            return <>{personIcon}</>; 
            break;
        default: 
            return;
    }
}