// Assignment Code
var generateBtn = document.querySelector("#generate");
//created variable and gave them arrayy 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var password = "";
var passwordMin = 8;
var passwordMax= 30;

console.log(lowerCase);
console.log(upperCase);
console.log(numbers);
console.log(symbols);

//added a couple prompt questions 
function options(){
    var optionSelectors = confirm ("Please select from the following");
    var userChoiceUPPER = confirm ("Do you want to include uppercase?");
     console.log(userChoiceUPPER);
    var userChoiceLOWER = confirm ("Do you want to include lowercase?");
     console.log(userChoiceLOWER);
    var userChoiceNUMBERS = confirm ("Do you want to include numbers?");
    console.log(userChoiceNUMBERS);
    var userChoiceSYMBOLS = confirm ("Do you want to include symbols?");
    console.log(userChoiceSYMBOLS) ; 
}    

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
