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
const form = document.getElementById
("passwordGeneratorForm");

passwordAmountSlider.addEventListener("input", syncPasswordLength)
passwordAmountNumber.addEventListener("input", syncPasswordLength)

form.addEventListener("submit", e => {
    e.preventDefault()
    const passwordAmountNumber = passwordAmountNumber.value
    const includeUppercase = includeUppercase.checked
    const includeSymbols = includeSymbols.checked
    const includeNumbers = includeNumbers.checked
    const password = generatePassword(passwordAmountNumber, includeNumbers, includeSymbols, includeUppercase)
    console.log("yo")
})
console.log(form)
function generatePassword(passwordAmountNumber,includeNumbers, includeUppercase, includeSymbols) { 

}

function syncPasswordLength(e) {
    const value = e.target.value
    passwordAmountNumber.value = value
    passwordAmountSlider.value = value
}

function test(e) {
    e.preventDefault()
    console.log("hi")
}