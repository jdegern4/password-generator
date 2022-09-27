// Assignment code here
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "~",
  "`",
  "|",
  "}",
  "{",
  "[",
  "]",
  ":",
  ";",
  "?",
  ">",
  "<",
  ",",
  ".",
  "/",
  "-",
  "=",
];

// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  console.log("Did I get clicked?");
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

function generatePassword() {
  // Create empty arrays for selected types of characters and the randomly generated password
  var chosenCharacters = [];
  var randomPW = [];
  // Prompt box for character length
  var passwordLength = parseInt(
    prompt("How many characters in your password? (8-128)")
  );

  // Verify valid length for password
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("Error: Please enter a whole number between 8 and 128.");
    generatePassword();
  }

  // Use window prompts to select what kind of characters to use in password
  var passwordUppercase = confirm(
    "Use uppercase characters? Click OK for yes, Cancel for no"
  );
  if (passwordUppercase) {
    chosenCharacters = chosenCharacters.concat(upperCase);
  }

  var passwordLowercase = confirm(
    "Use lowercase characters? Click OK for yes, Cancel for no"
  );
  if (passwordLowercase) {
    chosenCharacters = chosenCharacters.concat(lowerCase);
  }

  var passwordNumbers = confirm(
    "Use number characters? Click OK for yes, Cancel for no"
  );
  if (passwordNumbers) {
    chosenCharacters = chosenCharacters.concat(numbers);
  }

  var passwordSymbols = confirm(
    "Use symbol characters? Click OK for yes, Cancel for no"
  );
  if (passwordSymbols) {
    chosenCharacters = chosenCharacters.concat(symbols);
  }

  // Prompt user to start over if no characters are selected
  if (
    !passwordLowercase &&
    !passwordUppercase &&
    !passwordNumbers &&
    !passwordSymbols
  ) {
    alert("No characters selected, please try again.");
    generatePassword();
  }

  // Randomly choose characters from selected sets to generate password of desired length
  for (var i = 0; i < passwordLength; i++) {
    randomPW[i] =
      chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
  }
  
  return randomPW.join('');
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());