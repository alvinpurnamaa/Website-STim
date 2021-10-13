function validateForm () {
    const country = document.getElementById("country");
    const fullname = document.getElementById("fullname");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const paymentMethod = document.getElementById("paymentmethod");
    const cardNumber = document.getElementById("cardnumber");
    const expCard = document.getElementById("exp");

    const messagesError = document.getElementById("messages-error");

    // Country Validation 
    if(country.value == "") {
        messagesError.innerHTML = "Country must be chosen!";
        return false;
    }

    // Fullname Validation 
    if(fullname.value == "") {
        messagesError.innerHTML = "Fullname must be filled!";
        fullname.style = "border-color : red";
        fullname.focus();
        return false; 
    }

    if(fullname.value == Number) {
        messagesError.innerHTML = "Fullname must be alphabet only";
    }


    // Username Validation
    if(username.value == "") {
        messagesError.innerHTML = "Username must be filled!";
        return false;
    }

    if(username.value.length < 10) {
        messagesError.innerHTML = "Username length must more than 10 Characters";
        return false;
    }
    
    // Email Validation
    if(email.value == "") {
        messagesError.innerHTML = "Email must be filled!";
        return false;
    }

    var userEmail = email.value;
    var index = userEmail.indexOf("@");
    var addEmail = userEmail.substring(index, userEmail.length);
   
    if(addEmail != "@" && addEmail.endsWith != (".com")) {
        messagesError.innerHTML = "Email must contain @ and ends with .com";
        return false;
    }
  
    // Passowrd Validation
    if(password.value == "") {
        messagesError.innerHTML = "Password must be filled!";
        return false;
    }

    //Number
    var userPassword = password.value;
    var number = false;
    
    for (var i = 0; i < userPassword.length; i++) {
        if(!isNaN(userPassword[i] * 1)){
            number = true;
            break;
        }
    }

    if (!number) {
        messagesError.innerHTML = "Password must contain a number!"
        return false;
    }


    // Uppercase
    var upperCase = false;

    for (var i = 0; i < userPassword.length; i++) {
        if(userPassword[i] == userPassword[i].toUpperCase()) {
            upperCase = true;
            break;
        }
    }

    if (!upperCase) {
        messagesError.innerHTML = "Password must contain Uppercase Letter!"
        return false;
    }


    
    // Payment Method Validation 
    if(paymentMethod.value == "") {
        messagesError.innerHTML = "Payment method must be selected!"
        return false;
    }

    // CardNumber Validation
    if(cardNumber.value == "") {
        messagesError.innerHTML = "Card Number must be filled!";
        return false;
    }

    var userCardNumber = cardNumber.value;
    var number = false;
    for (var i = 0; i < userCardNumber.length; i++) {
        if(!isNaN(userCardNumber[i] * 1)){
            number = true;
            break;
        }
    }

    if (!number) {
        messagesError.innerHTML = "Card Number must contain a number"
        return false;
    }

    if(cardNumber.value.length != 16) {
        messagesError.innerHTML = "Card Number length must 16 Number";
        return false;
    }

    // Exp Card Validation
    if(expCard.value == "") {
        messagesError.innerHTML = "Expired Card must be filled!"
        return false;
    }
}



