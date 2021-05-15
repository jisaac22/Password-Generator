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
     if (!userchoiceUPPER && !userchoiceLOWER && !userchoiceNumbers && !userchoiceSymbols){
       userCHOICES = alert("Please select at least 1 option")
     }else if (userchoiceUPPER && userchoiceLOWER && userchoiceNumbers && userchoiceSymbols){
       userCHOICES = userchoiceUPPER.concat(userchoiceLOWER, userchoiceNumbers, userchoiceSymbols);
       console.log(userCHOICES);
    }
// added functions if only 3 choices are selected 
    else if (userchoiceUPPER && userchoiceLOWER && userchoiceNumbers && !userchoiceSymbols){
    userCHOICES = userchoiceUPPER.concat(userchoiceLOWER, userchoiceNumbers);
    console.log(userCHOICES);
    }
    else if (userchoiceUPPER && userchoiceLOWER && !userchoiceNumbers && userchoiceSymbols){
      userCHOICES = userchoiceUPPER.concat(userchoiceLOWER, userchoiceSymbols);
    console.log(userCHOICES);
    }
    else if (userchoiceUPPER && !userchoiceLOWER && userchoiceNumbers && userchoiceSymbols){
      userCHOICES = userchoiceUPPER.concat(userchoiceNumbers, userchoiceSymbols)
    console.log(userCHOICES);
    }
    else if  (!userchoiceUPPER && userchoiceLOWER && userchoiceNumbers && userchoiceSymbols){
      userCHOICES = userchoiceLOWER.concat(userchoiceNumbers, userchoiceSymbols);
      console.log(userCHOICES);
    }   
// added functions if only 2 are selected
    else if (userchoiceUPPER && userchoiceLOWER && !userchoiceNumbers && !userchoiceSymbols){
      userCHOICES = userchoiceUPPER.concat(userchoiceLOWER);
      console.log(userCHOICES);
    }
    else if (userchoiceUPPER && !userchoiceLOWER && userchoiceNumbers && !userchoiceSymbols){
      userCHOICES = userchoiceUPPER.concat(userchoiceNumbers);
      console.log(userCHOICES);
    }
    else if (userchoiceUPPER && !userchoiceLOWER && !userchoiceNumbers && userchoiceSymbols){
      userCHOICES - userchoiceSymbols.concat(userchoiceSymbols);
      console.log(userCHOICES);
    }
    else if (!userchoiceUPPER && userchoiceLOWER && userchoiceNumbers && !userchoiceSymbols){
      userCHOICES = userchoiceLOWER.concat(userchoiceNumbers);
      console.log(userCHOICES);
    }
    else if (!userchoiceUPPER && userchoiceLOWER && !userchoiceNumbers && userchoiceSymbols){
      userCHOICES = userchoiceLOWER.concat(userchoiceSymbols);
      console.log(userCHOICES);
    }
    else if (!userchoiceUPPER && !userchoiceLOWER && userchoiceNumbers && userchoiceSymbols){
      userCHOICES = userchoiceNumbers.concat(userchoiceSymbols);
      console.log(userCHOICES);
    }
// added functions for only 1 selected
    else if (userchoiceUPPER && !userchoiceLOWER && !userchoiceNumbers && !userchoiceSymbols){
      userCHOICES = userchoiceUPPER;
      console.log (userCHOICES);
    }
    else if (!userchoiceUPPER && userchoiceLOWER && !userchoiceNumbers && !userchoiceSymbols){
      userCHOICES = userchoiceLOWER;
      console.log(userCHOICES)
    }
    else if (!userchoiceUPPER && !userchoiceLOWER && userchoiceNumbers && !userchoiceSymbols){
      userCHOICES = userchoiceNumbers;
      console.log(userCHOICES);
    }
    else if (!userchoiceUPPER && !userchoiceLOWER && !userchoiceNumbers && userchoiceSymbols){
      userCHOICES = userchoiceSymbols;
      console.log(userCHOICES)
 
}
