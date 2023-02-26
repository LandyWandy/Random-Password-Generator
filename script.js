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
const passwordDisplay = document.getElementById
("passwordDisplay");

const lowercaseChars = arrayFromLowToHigh(97, 122) 
const uppercaseChars = arrayFromLowToHigh(65, 90)
const numberChars = arrayFromLowToHigh(48, 57)
const symbolChars = arrayFromLowToHigh(33, 47).concat(58, 64).concat(91, 96).concat(123, 126)

passwordAmountSlider.addEventListener("input", syncPasswordLength)
passwordAmountNumber.addEventListener("input", syncPasswordLength)

form.addEventListener("submit", e => {
    e.preventDefault()
    const password_Amount_Number = passwordAmountNumber.value
    const include_Uppercase = includeUppercase.checked
    const include_Symbols = includeSymbols.checked
    const include_Numbers = includeNumbers.checked
    const password = generatePassword(password_Amount_Number, include_Numbers, include_Symbols, include_Uppercase)
    passwordDisplay.innerText = password
})

function generatePassword(password_Amount_Number, include_Numbers, include_Symbols, include_Uppercase) { 
    let charCodes = lowercaseChars
    if (include_Uppercase) charCodes = charCodes.concat(uppercaseChars)
    if (include_Symbols) charCodes = charCodes.concat(symbolChars)
    if (include_Numbers) charCodes = charCodes.concat(numberChars)
    
    const passwordChars = []
    for (let i = 0; i < password_Amount_Number; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordChars.push(String.fromCharCode(characterCode))
    }
    return passwordChars.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high ; i++) {
        array.push(i)
    }
    return array
}

function syncPasswordLength(e) {
    const value = e.target.value
    passwordAmountNumber.value = value
    passwordAmountSlider.value = value
}

