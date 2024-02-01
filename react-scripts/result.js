import React from "react";

export default function Result() {
    return
    (
        <>
            <div className="result">
                <TipPerPerson/>
                <TotalPerPerson/>
                <div className="break"/>
                <ResetButton/>
            </div>
        </>
    )
}