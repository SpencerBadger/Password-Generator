// DOM Manipulation to get button from ID 
var generateBtn = document.querySelector("#generate");

//The array of special characters.
var specialChar = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
//The array of numeric characters.
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//The array of lower case letters.
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
// The array of upper case letters.
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];

//Validating the user input
const passwordOptions = (numChar) => {
    if (isNaN(numChar)) {
        alert("Please enter a valid number.");
        return false;
    } else if (parseInt(numChar) < 8) {
        alert("Password must be a minimum of 8 characters long.");
        return false;
    } else if (parseInt(numChar) >= 128) {
        alert("Password must be a maximum of 128 characters or less.");
        return false;
    }
    return true;

};

//Prompt user for their requirements.
const genPassword = () => {
    var numChar = prompt(
        "How many characters do you want your password to contain?"
    );
    var pWordChecker = passwordOptions(numChar);
    if (pWordChecker) {
        var special = confirm("Click OK if you require special characters. e.g. ! $ #");
        var numbers = confirm("Click OK if you wish to include numbers.");
        var lower = confirm("Click OK if you wish to include lower case letters.");
        var upper = confirm("Click OK if you wish to include capital letters.");
    }
    //Check if user doesn't include any types of characters. Script will end upon all false values.
    if (
        [special, numbers, lower, upper].includes(
            true
        )
    )
    //Array to store types of characters to include in password
        var chosenChar = [];

    //Array to contain one of each type of chosen character to ensure each will be used
    var forcedChar = [];

    //Conditional statements that add array of each type of character into array of possible characters based on user input and pushes new random character to forcedCharacters.

    if (special) {
        chosenChar = chosenChar.concat(specialChar);
        forcedChar.push(
            specialChar[Math.floor(Math.random() * specialChar.length)]
        );
    }

    if (numbers) {
        chosenChar = chosenChar.concat(numericChar);
        forcedChar.push(
            numericChar[Math.floor(Math.random() * numericChar.length)]
        );
    }

    if (lower) {
        chosenChar = chosenChar.concat(lowerChar);
        forcedChar.push(
            lowerChar[
                Math.floor(Math.random() * lowerChar.length)
            ]
        );
    }

    if (upper) {
        chosenChar = chosenChar.concat(upperChar);
        forcedChar.push(
            upperChar[
                Math.floor(Math.random() * upperChar.length)
            ]
        );
    };
    var randomChar = [];
    for (var i = 0; i < numChar; i++) {
        var index = Math.floor(Math.random() * chosenChar.length);
        randomChar.push(chosenChar[index]);
    }
    var replacedPosition = {};
    //While loop to ensure a least one of each character type.
    while (forcedChar.length > 0) {
        var charReplace = Math.floor(Math.random() * randomChar.length);
        if (!replacedPosition[charReplace]) {
            randomChar[charReplace] = forcedChar.pop();
            replacedPosition[charReplace] = true;
        }
    }
    return randomChar.join("");
};

//Write password to the #password id.
const displayPassword = () => {
    var password = genPassword();
    var textPassword = document.querySelector("#password");
    textPassword.value = password;
};

//Add event listener to generate id, so when clicked will display the password.
generateBtn.addEventListener("click", displayPassword);