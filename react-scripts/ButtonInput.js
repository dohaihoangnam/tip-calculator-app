import React, { useState } from "react";
import { InputButton } from './InputButton.js';
import { CustomInput } from './CustomInput.js';
import jQuery from "jquery";

export default function ButtonInput(inputHeading, name, id) {
    const [ tip, setTip ] = useState(0);
    function getTip(e) {
        setTip(e.target.value);
        return tip;
    }

    $("div:not('.input-heading')").addClass(`${id}-input`);

    return
    (
        <>
            <div className='input-heading'>{inputHeading}</div>
            <div>
                <InputButton name={name} onClick={getTip}>5%</InputButton>
                <InputButton name={name} onClick={getTip}>10%</InputButton>
                <InputButton name={name} onClick={getTip}>15%</InputButton>
                <InputButton name={name} onClick={getTip}>25%</InputButton>
                <InputButton name={name} onClick={getTip}>50%</InputButton>
                <CustomInput name={name} id="custom-tip" onInputHandler={getTip}/>
            </div>
        </>
    )
}