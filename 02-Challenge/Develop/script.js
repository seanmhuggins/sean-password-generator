// Assignment Code
const generateBtn = document.querySelector("#generate").addEventListener("click", createPassword);

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbol = ["?", ">", "<", ">", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "-", "+"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


let confirmLength;
let confirmUppercase;
let confirmLowercase;
let confirmNumber;
let confirmSymbol;

// Write password to the #password input


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const str = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"]
// const avail = []



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
