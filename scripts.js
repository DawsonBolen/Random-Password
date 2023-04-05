var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Ask the user for length
  //minimum of 8 characters, maximum of 128
  let passwordLength = parseInt(prompt("How long should the password be?"));
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Error, Invalid password length. \nplease choose a password with less than 128 characters");
    return "";
  }

  //ask user what special characters
  var includeLoweCase = confirm("Include Lowercase letters in password?");
  var includeUpperCase = confirm("Include Uppercase letters in password?");
  var includeNumbers = confirm("Include numbers in password?");
  var includeSpecialCharacters = confirm("Include special characters in password?");
  //validate types of characters
  if(!includeLoweCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters){
    alert("Error, Invalid character types. \nPlease include at least one type of character.");
    return "";
  }

   //generate a random password
  let passwordCharacters = [];
  const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  const numbers = '0123456789';
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";

  //to do handle other characters

  if (includeSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
  }

  if (includeNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers.split(""));
  }

  if (includeUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCase.split(""));
  }

  if (includeLoweCase) {
    passwordCharacters = passwordCharacters.concat(lowerCase.split(""));
  }



  let results = "";
  for(var i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    let randomCharacter = passwordCharacters[randomIndex];
    results += randomCharacter;
  }


 
  //Return Generated password
  return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

