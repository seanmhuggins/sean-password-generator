// Assignment Code
document.querySelector("#generate").addEventListener("click", createPassword);

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbol = ["?", ">", "<", ">", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "-", "+"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


let confirmLength;
let confirmUppercase;
let confirmLowercase;
let confirmNumber;
let confirmSymbol;


function writePassword() {
  let confirmLength = prompt("How many characters you wish to have in your password?");

  if (confirmLength < 8 || confirmLength > 128){
  alert("Please select a value between 8 and 128.")
  confirmLength = prompt("How many characters do you wish to have in your password?")
  }

  let confirmUppercase = confirm("Press OK if you would like to use uppercase characters.");
  let confirmLowercase = confirm("Press OK if you would like to use lowercase characters.");
  let confirmNumber = confirm("Press OK if you would like to use numeric characters.");    
  let confirmSymbol = confirm("Press OK if you would like to use special characters.");

  if (confirmUppercase === false && confirmLowercase === false && confirmNumber === false && confirmSymbol === false){
    alert("You are required to select at least one parameter to generate a password.")
  }

  let randomcharacters = []

  if (confirmUppercase) {
    randomcharacters = randomcharacters.concat(uppercase)
  }

  if (confirmLowercase) {
    randomcharacters = randomcharacters.concat(lowercase)
  }

  if (confirmNumber) {
    randomcharacters = randomcharacters.concat(number)
  }

  if (confirmSymbol) {
    randomcharacters = randomcharacters.concat(symbol)
  }
  console.log(randomcharacters)


  let approvedPassword = ""

  for (let i = 0; i < confirmLength; i++) {
    approvedPassword = approvedPassword + randomcharacters[Math.floor(Math.random() * randomcharacters.length)];
    console.log(approvedPassword)
    
  }

  return approvedPassword;
}

function createPassword() {
  let password = writePassword();
  let passwordText = document.querySelector("#password");


passwordText.value = password;

}
