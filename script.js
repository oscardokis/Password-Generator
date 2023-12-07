// Assignment code here
/* GIVEN I need a new, secure password
WHEN I click the button to generate a password YO QUIERO
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */
/* Length (8 and 128) -->  lowercase, uppercase, numeric, and/or special characters ---> password will be generated*/


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
//Create a function to generated the password
function generatePassword() {
  // Get references to the length-password, lower-case, upper-case, numbers and/or special-characters elements
  let lengthPassword = document.querySelector('#length-password');
  let lowerCasePassword = document.getElementsByName('lowercase');
  let upperCasePassword = document.getElementsByName('uppercase');
  let numbersPassword = document.getElementsByName('numbers');
  let specialCharactersPassword = document.getElementsByName('special-characters');

  //Regex password empty string
  let passwordstring = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.+*?^$()[]{}|[$&+,:;=?@#|'<>.^*()%!-]";
  //Array empty for the password
  let passwordGenerate = [];
  
  //Asking for the length of the password
  if(Number(lengthPassword.value) >= 8 && Number(lengthPassword.value) <= 128){
    for(let i =0; i < 2; i++){
      if(lowerCasePassword[i].checked){
        if(lowerCasePassword[i].value == "false"){
          passwordstring = passwordstring.match(/[^a-z]+/g).join("");
        }
      }
      if(upperCasePassword[i].checked){
        if(upperCasePassword[i].value == "false"){
          passwordstring = passwordstring.match(/[^A-Z]+/g).join("");
        }
      }
      if(numbersPassword[i].checked){
        if(numbersPassword[i].value == "false"){
          passwordstring = passwordstring.match(/[^0-9]+/g).join("");
        }
      }
      if(specialCharactersPassword[i].checked){
        if(specialCharactersPassword[i].value == "false" && passwordstring.match(/[\w]+/g) != null){
          passwordstring = passwordstring.match(/[\w]+/g).join("");
        }else if(passwordstring.match(/[\w]+/g) == null){
          passwordstring = passwordstring.match(/[\w]+/g);
          window.alert('to get a generated password one of the options should be "yes".');
          return passwordstring;
        }
      }
    }
    let passwordArray = passwordstring.split("");
    
    for(let j= 0; j <Number(lengthPassword.value); j++){
      let randomPassword = passwordArray[Math.floor(Math.random()*passwordArray.length)];
      passwordGenerate.push(randomPassword);
    }
    return passwordGenerate.join("");
  }else{
    lengthPassword.value="";
    window.alert("Please enter a number between 8 and 128.");
    return "";
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);