const blockInputs = document.querySelectorAll("input[type=number]:not(#custom-tip)");
const billTotal = document.querySelector("#bill-total");
const tipButtons = document.querySelectorAll(".tip");
const customTip = document.querySelector("#custom-tip");
const numberOfPeople = document.querySelector("#people");
const numberOfPeopleHdg = document.querySelector("#people-input .input-heading");
const tipPPText = document.querySelector("#tip-per-person");
const totalPPText = document.querySelector("#total-per-person");
const resetButton = document.querySelector("button[type=reset]");
const zeroWarning = document.querySelector("#zero-warning");

let bill = 0, tip = 0, people = 0, total = 0;
tipPPText.innerHTML = "$0.00";
totalPPText.innerHTML = "$0.00";
resetButton.disabled = true;

blockInputs.forEach((el) => {
    el.addEventListener("focus", () => {
        el.parentElement.style.border = "2px solid var(--primcyan)";
        el.parentElement.style.paddingInline = "18px";
        el.parentElement.style.paddingBlock = "4px";
    })
    el.addEventListener("blur", () => {
        el.parentElement.style.border = "none";
        el.parentElement.style.paddingInline = "20px";
        el.parentElement.style.paddingBlock = "6px";
    })
});

function update() {
    let tipPerPerson = tip / people;
    let totalPerPerson = total / people;
    console.log(tipPerPerson, totalPerPerson);

    if (!bill && !tip && !people) {
        resetButton.disabled = true;
    } else {
        resetButton.disabled = false;
    }

    if (!totalPerPerson || totalPerPerson == Infinity) {
        tipPPText.innerHTML = "$0.00";
        totalPPText.innerHTML = "$0.00";
    } else {
        tipPPText.innerHTML = `$${tipPerPerson.toFixed(2)}`;
        totalPPText.innerHTML = `$${totalPerPerson.toFixed(2)}`;
    }
}

billTotal.addEventListener("input", () => {
    bill = Number(billTotal.value);
    console.log(bill);
    update();
})

tipButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        tipButtons.forEach((el) => {
            el.setAttribute("aria-pressed", "false");
        })
        el.setAttribute("aria-pressed", "true");
        tip = Number(el.value) * bill;
        total = bill + tip;
        console.log(el.value, tip, total);
        update();
    })
});

customTip.addEventListener("click", () => {
    tipButtons.forEach((el) => {
        el.setAttribute("aria-pressed", "false");
    })
})

customTip.addEventListener("input", () => {
    tip = Number(customTip.value) / 100 * bill;
    total = bill + tip;
    console.log(customTip.value / 100, tip, total);
    update();
})

numberOfPeople.addEventListener("input", () => {
    people = Number(numberOfPeople.value);
    console.log(people);

    if (people == 0) {
        numberOfPeople.parentElement.style.borderColor = "orangered";
        zeroWarning.textContent = "Can't be zero";
    } else {
        numberOfPeople.parentElement.style.borderColor = "var(--primcyan)";
        zeroWarning.textContent = "";
    }

    update();
})

resetButton.addEventListener("click", () => {
    bill = 0, tip = 0, people = 0, total = 0;
    blockInputs.forEach((el) => {
        el.value = "";
    })
    tipButtons.forEach((el) => {
        el.setAttribute("aria-pressed", "false");
    })
    tipPPText.innerHTML = "$0.00";
    totalPPText.innerHTML = "$0.00";
    resetButton.disabled = true;
})