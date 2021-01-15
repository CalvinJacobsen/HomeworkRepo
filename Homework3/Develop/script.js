// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //checking if conditions are met for number of characters
  var characterNum = 0;
  while (characterNum < 8 || characterNum > 128 || Number.isInteger(characterNum) == false) {
    characterNum = parseInt(prompt("How many characters would you like in your password?", "Enter number between 8 and 128 here"));
  }

  //set boolean values to starting value
  lowercaseConfirm = false;
  uppercaseConfirm = false;
  numeralConfirm = false;
  specCharConfirm = false;

  //asking user for conditions for their password
  while (lowercaseConfirm == false && uppercaseConfirm == false && numeralConfirm == false && specCharConfirm == false) {
    alert("Please choose at least 1 of the following criteria (OK = Yes, Cancel = No)");
    lowercaseConfirm = confirm("Would you like to include LOWERCASE letters in your password?");
    uppercaseConfirm = confirm("Would you like to include UPPERCASE letters in your password?");
    numeralConfirm = confirm("Would you like to include NUMBERS in your password?");
    specCharConfirm = confirm("Would you like to include SPECIAL CHARACTERS in your password?");
  }

  alert("Thank you. Click 'OK' to generate your secure password.");

  //setting list for each values to pull from
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "(", ")", '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "]", ",", "^", "_", '`', '{', '|', '}', '~', '\\'];

  //creating new list for randomizer
  var passwordList = [];
  var variableCount = 0;
  if (lowercaseConfirm == true) {
    passwordList = passwordList.concat(lowercaseLetters);
    variableCount++
  }
  if (uppercaseConfirm == true) {
    passwordList = passwordList.concat(uppercaseLetters);
    variableCount++
  }
  if (numeralConfirm == true) {
    passwordList = passwordList.concat(numbers);
    variableCount++
  }
  if (specCharConfirm == true) {
    passwordList = passwordList.concat(specialCharacters);
    variableCount++
  }

  //randomizer for password
  validPW = false;
  

  while (validPW == false) {
    var password = [];
    for (var i = 0; i < characterNum; i++) {
      password[i] = passwordList[Math.floor(Math.random() * passwordList.length)];
    }

    //setting variables to check to see if the users criteria is used in the password
    var lowercaseinPW = false;
    var uppercaseinPW = false;
    var numeralinPW = false;
    var specCharinPW = false;
    variableCountCheck = 0;

    if (lowercaseConfirm == true) {
      if (lowercaseinPW == false) {
        for (i = 0; i < characterNum; i++) {
          if (lowercaseLetters.includes(password[i]) == true) {
            if (lowercaseinPW == false) {
              variableCountCheck++
            }
            lowercaseinPW = true;
          }
        }
      }
    }

    if (uppercaseConfirm == true) {
      if (uppercaseinPW == false) {
        for (i = 0; i < characterNum; i++) {
          if (uppercaseLetters.includes(password[i]) == true) {
            if (uppercaseinPW == false) {
              variableCountCheck++
            }
            uppercaseinPW = true;
          }
        }
      }
    }

    if (numeralConfirm == true) {
      if (numeralinPW == false) {
        for (i = 0; i < characterNum; i++) {
          if (numbers.includes(password[i]) == true) {
            if (numeralinPW == false) {
              variableCountCheck++
            }
            numeralinPW = true;
          }
        }
      }
    }

    if (specCharConfirm == true) {
      if (specCharinPW == false) {
        for (i = 0; i < characterNum; i++) {
          if (specialCharacters.includes(password[i]) == true) {
            if (specCharinPW == false) {
              variableCountCheck++
            }
            specCharinPW = true;
          }
        }
      }
    }

    if (variableCount == variableCountCheck) {
      validPW = true;
    }
  }
  
  return password.join("");
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

