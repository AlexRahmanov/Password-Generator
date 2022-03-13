// Assignment code here

//all kind of character available
var passwordGenerater = {
  numbers: "0123456789",
  special: "~`!@#$%^&*()_-+=[]{}\|;:',./<>?",
  upper: "QWERTYUIOPASDFGHJKLZXCVBNM",
  lower: "qwertyuiopasdfghjklzxcvbnm",

}

//start code
var generatePassword = function() {
  var confirmCancel = window.confirm(
    "You need a new and secure password? Please click the OK button to generate your password by specifying your preferred criteria in next step. If not just click CANCEL."
    );
    

//cancel the process
    if (confirmCancel) {

   
//entering number between 8 and 128
    var charactersNumber = function () {
      var enterNum = window.prompt("Please specify how much characters do you prefer for your password, PLEASE select a number between 8 & 128");

      
      var specialNumbers = enterNum % 1;

      if (isNaN(enterNum) || enterNum < 8 || enterNum > 128 || specialNumbers) {
        alert("PLEASE ENTER ONLY A NUMBER BETWEEN 8 & 128!");
        return charactersNumber();
      } else {
        return enterNum;
      }
      
    }
    
//final password
    var finalPass = charactersNumber();
    window.alert("Your password will contain " + finalPass + " characters!")
    


//save user preferences
      var confirmNumbers = false;
      var confirmSpecial = false;
      var confirmUpper = false;
      var confirmLower = false;

//pop up windows with questions
    while (confirmNumbers === false && confirmSpecial === false && confirmUpper === false && confirmLower === false) {
      window.alert("Please confirm at least one character type.");
      var confirmNumbers = window.confirm("Do you want your password will contain numbers? if so click OK button if not click CANCEL button.");
      var confirmSpecial = window.confirm("Do you want your password will contain special characters? if so click OK button if not click CANCEL button.");
      var confirmUpper = window.confirm("Do you want your password will contain uppercase letter? if so click OK button if not click CANCEL button.");
      var confirmLower = window.confirm("Do you want your password will contain lowercase letter? if so click OK button if not click CANCEL button.");
    }

//auto generate
    if (!confirmNumbers) {
      passwordGenerater.numbers = "";
    }
    if (!confirmSpecial) {
      passwordGenerater.special = "";
    }
    if (!confirmUpper) {
      passwordGenerater.upper = "";
    }
    if (!confirmLower) {
      passwordGenerater.lower = "";
    }

    var fullPassword = passwordGenerater.numbers + passwordGenerater.special + passwordGenerater.upper + passwordGenerater.lower;

 
    var result = "";
    for (var i = 0; i <= finalPass - 1; i++) {
      result += fullPassword.charAt(Math.floor(Math.random() * fullPassword.length));
    }


    } else {
      return "";
  }

  var finalPassword = result;
  return finalPassword;
 
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);