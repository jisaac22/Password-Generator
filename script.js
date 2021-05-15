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
     userChoiceLength = prompt ("How many characters? Min-8 characters Max-30 characters");
      if (userChoiceLength < 8 || userChoiceLength > 30){
         alert("Select from 8-30");
      }
      else {
        userchoiceUPPER = confirm ("Do you want to include uppercase?");
        userchoiceLOWER = confirm ("Do you want to include lowercase?");
        userchoiceNumbers = confirm ("Do you want to include numbers?");
        userchoiceSymbols= confirm ("Dp you want to include Symbols?");
      };
// added functions if none are selected or if all are selected
     if (!upperCase && !lowerCase && !numbers && !symbols){
       userCHOICES = alert("Please select at least 1 option")
     }
     else if (upperCase && lowerCase && numbers && symbols){
       userCHOICES = upperCase.concat(lowerCase, numbers, symbols);
       console.log(userCHOICES);
    }
// added functions if only 3 choices are selected 
    else if(upperCase && lowerCase && numbers && !symbols) {
    userCHOICES = upperCase.concat(lowerCase, numbers);
    console.log(userCHOICES);
    }
    else if (upperCase && lowerCase && !numbers && symbols){
      userCHOICES = upperCase.concat(lowerCase, symbols);
    console.log(userCHOICES);
    }
    else if (upperCase && !lowerCase && numbers && symbols){
      userCHOICES = upperCase.concat(numbers, symbols);
    console.log(userCHOICES);
    }
    else if (!upperCase && lowerCase && numbers && symbols){
      userCHOICES = lower.concat(numbers, symbols);
      console.log(userCHOICES);
    }   
// added functions if only 2 are selected
    else if (upperCase && lowerCase && !numbers && !symbols){
      userCHOICES = upperCase.concat(lower);
      console.log(userCHOICES);
    }
    else if (upperCase && !lowerCase && numbers && !symbols){
      userCHOICES = upperCase.concat(numbers);
      console.log(userCHOICES);
    }
    else if (!upperCase && !lowerCase && numbers && symbols){
      userCHOICES - numbers.concat(symbols);
      console.log(userCHOICES);
    }
    else if (!upperCase && lowerCase && numbers && !symbols){
      userCHOICES = lowerCase.concat(numbers);
      console.log(userCHOICES);
    }
    else if (!upperCase && lowerCase && !numbers && symbols){
      userCHOICES = lowerCase.concat(symbols);
      console.log(userCHOICES);
    }
    else if (upperCase && !lowerCase && !numbers && symbols){
      userCHOICES = upperCase.concat(symbols);
      console.log(userCHOICES);
    }
// added functions for only 1 selected
    else if (upperCase && !lowerCase && !numbers && !symbols){
      userCHOICES = upperCase;
      console.log (userCHOICES);
    }
    else if (!upperCase && lowerCase && !numbers && !symbols){
      userCHOICES = lowerCase;
      console.log(userCHOICES)
    }
    else if (!upperCase && !lowerCase && numbers && !symbols){
      userCHOICES = numbers;
      console.log(userCHOICES);
    }
    else if (!upperCase && !lowerCase && !numbers && symbols){
      userCHOICES = symbols;
      console.log(userCHOICES)
    };
  

  var blankpassword = [];

for (var i = 0; i < userChoiceLength; i++){
  var allChoices = userCHOICES[Math.floor(Math.random() * userCHOICES.length)];
  blankpassword.push(allChoices);
}

var password = blankpassword.join("");
console.log("Here is your password " + password);
return password;

}
  
 

