// Assignment Code
var generateBtn = document.querySelector("#generate");
//Validate the user input
function getPasswordOptions(userNumCharacters) {
  if (isNaN(userNumCharacters)) {
    alert("Please enter a valid number.");
    return false;
  } else if (parseInt(userNumCharacters) < 8) {
    alert("Password length must be at least 8 characters.");
    return false;
  } else if (parseInt(userNumCharacters) >= 128) {
    alert("Password must be less than 129 characters.");
    return false;
  }
  return true;
}
//Select random characters for the specific requirement sets.
function getRandomElementFromArray(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}
//Prompt user for their requirements.
function generatePassword() {
  var userNumCharacters = prompt(
    "How many characters do you want your password to contain?"
  );
  var validPWord = getPasswordOptions(userNumCharacters);
  if  (validPWord) {
    var hasSpecial = confirm("Click OK if you require special characters. e.g. ! $ #");
    var hasNumbers = confirm("Click OK if you wish to include numbers.");
    var hasLower = confirm("Click OK if you wish to include lower case letters.");
    var hasUpper = confirm("Click OK if you wish to include capital letters.");
  }
//Check if user doesn't include any types of characters. Script will end upon all false values.
  if (
    [hasSpecial, hasNumbers, hasLower, hasUpper].includes(
      true
    )
  )
//Array to store types of characters to include in password
    var chosenChar = [];

//Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedChar = [];

//Conditional statements that add array of each type of character into array of possible characters based on user input and pushes new random character to guaranteedCharacters.
  if (hasSpecial) {
    chosenChar = chosenChar.concat(specialCharacters);
    guaranteedChar.push(
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    );
  }
  if (hasNumbers) {
    chosenChar = chosenChar.concat(numericCharacters);
    guaranteedChar.push(
      numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
    );
  }
  if  (hasLower) {
    chosenChar = chosenChar.concat(lowerCasedCharacters);
    guaranteedChar.push(
      lowerCasedCharacters[
        Math.floor(Math.random() * lowerCasedCharacters.length)
      ]
    );
  }
  if (hasUpper) {
    chosenChar = chosenChar.concat(upperCasedCharacters);
    guaranteedChar.push(
      upperCasedCharacters[
        Math.floor(Math.random() * upperCasedCharacters.length)
      ]
    );
  }

//A for loop to iterate the password length from the options object whilst
// the random characters.
  var randomChar = [];
  for (var i = 0; i < userNumCharacters; i++) {
    var index = Math.floor(Math.random() * chosenChar.length);
    randomChar.push(chosenChar[index]);
  }
  var replacedPosition = {};
//While loop to ensure a least one of each character type.
  while (guaranteedChar.length > 0) {
    var replaceChar = Math.floor(Math.random() * randomChar.length);
    if (!replacedPosition[replaceChar]) {
      randomChar[replaceChar] = guaranteedChar.pop();
      replacedPosition[replaceChar] = true;
    }
  }
  return randomChar.join("");
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//The array of special characters.
var specialCharacters = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_",".",];
//The array of numeric characters.
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//The array of lower case letters.
var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
// The array of upper case letters.
var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];