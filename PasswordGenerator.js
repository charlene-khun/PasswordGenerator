const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
"Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@",
"#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{","[", "}",
"]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let passwordLength = 15
let passwordEl1 = document.getElementById("paragraph1")
let passwordEl2 = document.getElementById("paragraph2")

function getRandomChar()
{
    let randomChar = Math.floor(Math.random()*characters.length)
    return characters[randomChar]
}

function getRandomPassword()
{
    let randomPassword = ""
    for(let count = 0; count < passwordLength; count++)
    {
        randomPassword += getRandomChar()
    }
    
    return randomPassword
}

function getReturn()
{
    let pass1 = getRandomPassword()
    let pass2 = getRandomPassword()
    passwordEl1.textContent = pass1
    passwordEl2.textContent = pass2
}