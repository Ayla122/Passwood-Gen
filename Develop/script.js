var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here

function generatePassword() {
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
        alert("this needs a value");
    }

    //enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");

        //list of all random numbers and characters 
        var listofCharacters = [];
        //loop for password length 
        for (var i = 0; i < enter; i++) {
            if (confirmNumber === true) {
                //generate a random number 
                var randomIndex = Math.floor(Math.random() * numbers.length);
                var randomNumber = numbers[randomIndex];
                //console.log(randomNumber);
                listofCharacters.push(randomNumber);
            }

            if (confirmCharacter === true) {
                //generate a random number 
                var randomIndex = Math.floor(Math.random() * specialCharacters.length);
                var randomCharacter = specialCharacters[randomIndex];
                //console.log(randomCharacter);
                listofCharacters.push(randomCharacter);


            }
            if (confirmLowercase === true) {
                //generate a random number 
                var randomIndex = Math.floor(Math.random() * lowerCase.length);
                var randomlowerCase = lowerCase[randomIndex];
                //console.log(randomlowerCase);
                listofCharacters.push(randomlowerCase);
            }

            if (confirmUppercase === true) {
                //generate a random number 
                var randomIndex = Math.floor(Math.random() * upperCase.length);
                var randomupperCase = upperCase[randomIndex];
                //console.log(randomupperCase);
                listofCharacters.push(randomupperCase);
            }
            //console.log("listofCharacters", listofCharacters);

      
        } // End of Loop 
    }
    //console.log("Sliced version", listofCharacters.slice(0, enter).join(''));
    return listofCharacters.slice(0, enter).join('');
} // End of Function 




// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
