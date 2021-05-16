// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//created variable and gave them arrayy 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var userchoiceUPPER;
var userchoiceLOWER;
var userChoiceLength;
var userchoiceNumbers;
var userchoiceSymbols;
var userCHOICES;

 console.log(lowerCase);
 console.log(upperCase);
 console.log(numbers);
 console.log(symbols);
 


// Write password to the #password input
    function writePassword() {
    var password = generatePassword();

    var passwordText = document.querySelector("#password");


   passwordText.value = password;

 }

// added a couple prompt questions 
function generatePassword(){
     userChoiceLength = prompt ("How many characters? Min-8 characters Max-128 characters");
      if (userChoiceLength < 8 || userChoiceLength > 128){
         alert("Select from 8-128");
         return;
      }
      else {
        userchoiceUPPER = confirm ("Do you want to include uppercase?");
        userchoiceLOWER = confirm ("Do you want to include lowercase?");
        userchoiceNumbers = confirm ("Do you want to include numbers?");
        userchoiceSymbols= confirm ("Do you want to include Symbols?");
      };
// added functions if none are selected or if all are selected
     if (!userchoiceUPPER && !userchoiceLOWER && !userchoiceNumbers && !userchoiceSymbols){
       userCHOICES = alert("Please select at least 1 option")
     }
     else if (userchoiceUPPER && userchoiceLOWER && userchoiceNumbers && userchoiceSymbols){
       userCHOICES = upperCase.concat(lowerCase, numbers, symbols);
       console.log(userCHOICES);
    };
// added functions if only 3 choices are selected 
     if (userchoiceUPPER && userchoiceLOWER && userchoiceNumbers && !userchoiceSymbols) {
    userCHOICES = upperCase.concat(lowerCase, numbers);
    console.log(userCHOICES);
    }
    else if (userchoiceUPPER && userchoiceLOWER && !userchoiceNumbers && userchoiceSymbols){
      userCHOICES = upperCase.concat(lowerCase, symbols);
    console.log(userCHOICES);
    };
     if (userchoiceUPPER && !userchoiceLOWER && userchoiceNumbers && userchoiceSymbols){
      userCHOICES = upperCase.concat(numbers, symbols);
    console.log(userCHOICES);
    }
    else if (!userchoiceUPPER && userchoiceLOWER && userchoiceNumbers && userchoiceSymbols){
      userCHOICES = lowerCase.concat(numbers, symbols);
      console.log(userCHOICES);
    }
// added functions if only 2 are selected
    else if (userchoiceUPPER && userchoiceLOWER && !userchoiceNumbers && !userchoiceSymbols){
      userCHOICES = upperCase.concat(lowerCase);
      console.log(userCHOICES);
    }
    else if (userchoiceUPPER && !userchoiceLOWER && userchoiceNumbers && !userchoiceSymbols){
      userCHOICES = upperCase.concat(numbers);
      console.log(userCHOICES);
    }
    else if (!userchoiceUPPER && !userchoiceLOWER && userchoiceNumbers && userchoiceSymbols){
      userCHOICES - numbers.concat(symbols);
      console.log(userCHOICES);
    }
    else if (!userchoiceUPPER && userchoiceLOWER && userchoiceNumbers && !userchoiceSymbols){
      userCHOICES = lowerCase.concat(numbers);
      console.log(userCHOICES);
    }
    else if (!userchoiceUPPER && userchoiceLOWER && !userchoiceNumbers && userchoiceSymbols){
      userCHOICES = lowerCase.concat(symbols);
      console.log(userCHOICES);
    }
    else if (userchoiceUPPER && !userchoiceLOWER && !userchoiceNumbers && userchoiceSymbols){
      userCHOICES = upperCase.concat(symbols);
      console.log(userCHOICES);
    }
// added functions for only 1 selected
    else if (userchoiceUPPER && !userchoiceLOWER && !userchoiceNumbers && !userchoiceSymbols){
      userCHOICES = upperCase;
      console.log (userCHOICES);
    }
     else if (!userchoiceUPPER && userchoiceLOWER && !userchoiceNumbers && !userchoiceSymbols){
      userCHOICES = lowerCase;
      console.log(userCHOICES)
    }
     else if (!userchoiceUPPER && !userchoiceLOWER && userchoiceNumbers && !userchoiceSymbols){
      userCHOICES = numbers;
      console.log(userCHOICES);
    }
     else if (!userchoiceUPPER && !userchoiceLOWER && !userchoiceNumbers && userchoiceSymbols){
      userCHOICES = symbols;
      console.log(userCHOICES)
    }
  
// added functions to push password into text area 
  var blankpassword = [];

for (var i = 0; i < userChoiceLength; i++){
  var allChoices = userCHOICES[Math.floor(Math.random() * userCHOICES.length)];
  blankpassword.push(allChoices);
}

var password = blankpassword.join("");
console.log("Here is your password " + password);
return password;

}
  
 

