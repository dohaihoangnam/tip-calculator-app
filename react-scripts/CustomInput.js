import React from "react";
import { handleInput } from "./handleInput";

export default function CustomInput(name, id) {
    return
    (
        <>
            <input type="number" name={name} id={id} placeholder="Custom" inputMode="numeric" onInput={handleInput}/>
        </>
    )
}