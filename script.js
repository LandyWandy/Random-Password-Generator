const passwordAmountSlider = document.getElementById
("passwordAmountSlider");
const passwordAmountNumber = document.getElementById
("passwordAmountNumber");
const includeUppercase = document.getElementById
("includeUppercase");
const includeSymbols = document.getElementById
("includeSymbols");
const includeNumbers = document.getElementById
("includeNumbers");
const form = document.getElementsByClassName
("form");

passwordAmountSlider.addEventListener("input", syncPasswordLength)
passwordAmountNumber.addEventListener("input", syncPasswordLength)

form.addEventListener("submit", e => {
    e.preventDefault()
    const passwordAmountNumber = passwordAmountNumber.value
    const includeUppercase = includeUppercase.checked
    const includeSymbols = includeSymbols.checked
    const includeNumbers = includeNumbers.checked
})

function syncPasswordLength(e) {
    const value = e.target.value
    passwordAmountNumber.value = value
    passwordAmountSlider.value = value
}

function generatePassword(passwordAmountNumber, includeUppercase, includeSymbols, includeNumbers) {

}
