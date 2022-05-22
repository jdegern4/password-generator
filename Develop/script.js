// Assignment code here
const characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword() {
    var passwordLength = function() {
    // PROMPT BOX FOR CHARACTER LENGTH
      var passwordLengthTest = Number(window.prompt("How many characters in your password? (8-128)"))
      if (passwordLengthTest >= 8 && passwordLengthTest >= 128 && Number.isInteger(passwordLengthTest)) {
        window.alert("Your password will have " + passwordLengthTest + " characters.");
        return passwordLengthTest;
      }  else {
        window.alert("Please enter a whole number between 8 and 128.");
        return passwordLength;
      }
    }
    var passwordUppercase = function () {
      window.confirm("Click OK to use uppercase characters and Cancel to not use them")

    }
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
