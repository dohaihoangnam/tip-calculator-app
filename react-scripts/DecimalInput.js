import React, { useState } from "react";
import { InputGlyph } from './InputGlyph';
import jQuery from "jquery";

export default function DecimalInput(inputHeading, name, id) {
    const [ bill, setBill ] = useState(0);
    function getBill(e) {
        setBill(e.target.value);
        return bill;
    }
    
    $("div:not('.input-heading')").addClass(`${id}-input`);

    return
    (
        <>
            <div className='input-heading'>{inputHeading}</div>
            <div>
                <InputGlyph/>
                <input type="number" name={name} id={id} min="0" step="0.01" placeholder="0" inputMode="decimal" onInput={getBill} />
            </div>
        </>
    )
}