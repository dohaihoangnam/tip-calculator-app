import React, { useState } from "react";
import DecimalInput from "./DecimalInput";
import ButtonInput from "./ButtonInput";
import IntegerInput from "./IntegerInput";

export default function Form() {
    const [ bill, setBill ] = useState(0);
    const [ people, setPeople ] = useState(0);
    
    function getBill(e) {
        setBill(e.target.value);
        return bill;
    }

    function getPeople(e) {
        setPeople(e.target.value);
        return people;
    }

    return
    (
        <>
            <form>
                <DecimalInput inputHeading='Bill' name='bill' id='bill' onInputHandler={getBill}/>
                <ButtonInput inputHeading='Tip %' name='tip' id='tip' onGetTip={getTip}/>
                <IntegerInput inputHeading ='Number of People' name='people' id='people' onInputHandler={getPeople}/>
            </form>
        </>
    )
}