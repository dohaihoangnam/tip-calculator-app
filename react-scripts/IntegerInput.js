import React from "react";
import { InputGlyph } from './InputGlyph';
import jQuery from "jquery";
import handleInput from './handleInput';

export default function IntegerInput(inputHeading, name, id) {
    const [ number, setNumber ] = useState(0);
    function handleInput(e) {
        setNumber(e.target.value);
        return number;
    }
    
    $("div:not('.input-heading')").addClass(`${id}-input`);
    
    return
    (
        <>
            <div className='input-heading'>{inputHeading}</div>
            <div>
                <InputGlyph/>
                <input type="number" name={name} id={id} min="1" step="1" placeholder="0" inputMode="numeric" onInput={handleInput} />
            </div>
        </>
    )
}