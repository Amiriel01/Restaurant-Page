const utility = require("./utility.js");

function createMenu() {
    utility.clearContent();

    //links to content div in index.html//
    let content = document.querySelector("#content");

    //creates a class div for the sign-up-title-container content//
    let signUpTitleContainer = document.createElement("div");
    signUpTitleContainer.classList.add("sign-up-title-container");
    content.appendChild(signUpTitleContainer);

    //creates sign-up-title id div//
    let signUpTitle = document.createElement("div");
    signUpTitle.id = "sign-up-title";
    signUpTitle.innerText = "See you Next Time!";
    signUpTitleContainer.appendChild(signUpTitle);

    //creates sign-up-info id div//
    let signUpInfo = document.createElement("div");
    signUpInfo.id = "sign-up-info";
    signUpInfo.innerText = "Don't forget to sign-up to recieve our seasonal newsletter which features scheduled events, quarterly menu items, and macaron and drink coupons!!";
    signUpTitleContainer.appendChild(signUpInfo);

    //creates a class div for the form-container content//
    let formContainer = document.createElement("div");
    formContainer.classList.add("form-container");
    content.appendChild(formContainer);

    //creates img id for the form page//
    let coffee = document.createElement("img");
    coffee.id = "coffee";
    coffee.setAttribute("src", "images/coffee.png");
    formContainer.appendChild(coffee);

    // Create a form dynamically
    var form = document.createElement("form");
    //use if it was real//
    // form.setAttribute("method", "post");
    // form.setAttribute("action", "submit");
    formContainer.appendChild(form);

    //creates a class div for the form-row1 content//
    let formRow1 = document.createElement("div");
    formRow1.classList.add("form-row");
    form.appendChild(formRow1);

    let formItem1 = document.createElement("div");
    formItem1.classList.add("form-item");
    formRow1.appendChild(formItem1);

    //create elements for formRow1//
    let fullNameLabel = document.createElement("label");
    fullNameLabel.innerText = "First and Last Name"
    formItem1.appendChild(fullNameLabel)

    let fullNameInput = document.createElement("input");
    fullNameInput.id = "full-name-input";
    formItem1.appendChild(fullNameInput);

    //creates span for error message if needed//
    let fullNameSpan = document.createElement("span");
    fullNameSpan.id = "full-name-span";
    fullNameSpan.innerText = "";
    formItem1.appendChild(fullNameSpan);

    let formItem2 = document.createElement("div");
    formItem2.classList.add("form-item");
    formRow1.appendChild(formItem2);

    let emailLabel = document.createElement("label");
    emailLabel.innerText = "Email"
    formItem2.appendChild(emailLabel)

    //create elements for formRow1//
    let emailInput = document.createElement("input");
    emailInput.id = "email-input";
    // fullNameInput.setAttribute()
    formItem2.appendChild(emailInput);

    //creates span for error message if needed//
    let emailSpan = document.createElement("span");
    emailSpan.id = "email-span";
    emailSpan.innerText = "";
    formItem2.appendChild(emailSpan);

    //creates a class div for the form-row2 content//
    let formRow2 = document.createElement("div");
    formRow2.classList.add("form-row");
    form.appendChild(formRow2);

    let formItem3 = document.createElement("div");
    formItem3.classList.add("form-item");
    formRow2.appendChild(formItem3);

    let phoneLabel = document.createElement("label");
    phoneLabel.innerText = "Phone Number"
    formItem3.appendChild(phoneLabel)

    let phoneInput = document.createElement("input");
    phoneInput.id = "phone-input";
    formItem3.appendChild(phoneInput);

    let phoneSpan = document.createElement("span");
    phoneSpan.id = "phone-span";
    phoneSpan.innerText = "";
    formItem3.appendChild(phoneSpan);

    let formItem4 = document.createElement("div");
    formItem4.classList.add("form-item");
    formRow2.appendChild(formItem4);

    let zipCodeLabel = document.createElement("label");
    zipCodeLabel.innerText = "Zip Code"
    formItem4.appendChild(zipCodeLabel)

    let zipCodeInput = document.createElement("input");
    zipCodeInput.id = "zip-code-input";
    formItem4.appendChild(zipCodeInput);

    let zipCodeSpan = document.createElement("span");
    zipCodeSpan.id = "zip-code-span";
    zipCodeSpan.innerText = "";
    formItem4.appendChild(zipCodeSpan);

    //creates a class div for the form-row3 content//
    let formRow3 = document.createElement("div");
    formRow3.classList.add("form-row");
    form.appendChild(formRow3);

    let formItem5 = document.createElement("div");
    formItem5.classList.add("form-item");
    formRow3.appendChild(formItem5);

    let passwordLabel = document.createElement("label");
    passwordLabel.innerText = "Set Password"
    formItem5.appendChild(passwordLabel)

    let passwordInput = document.createElement("input");
    passwordInput.id = "password-input";
    formItem5.appendChild(passwordInput);

    let passwordSpan = document.createElement("span");
    passwordSpan.id = "password-span";
    passwordSpan.innerText = "";
    formItem5.appendChild(passwordSpan);

    let formItem6 = document.createElement("div");
    formItem6.classList.add("form-item");
    formRow3.appendChild(formItem6);

    let password2Label = document.createElement("label");
    password2Label.innerText = "Confirm Password"
    formItem6.appendChild(password2Label)

    let password2Input = document.createElement("input");
    password2Input.id = "password2-input";
    formItem6.appendChild(password2Input);

    let password2Span = document.createElement("span");
    password2Span.id = "password2-span";
    password2Span.innerText = "";
    formItem6.appendChild(password2Span);

    //creates a class div for the form-row4 content//
    let formRow4 = document.createElement("div");
    formRow4.classList.add("form-row");
    form.appendChild(formRow4);

    let signUpButtonInput = document.createElement("button");
    signUpButtonInput.id = "sign-up-button";
    signUpButtonInput.innerText = "Sign-Up!"
    formRow4.appendChild(signUpButtonInput);

    fullNameInput.addEventListener("blur", validateName);
    emailInput.addEventListener("blur", validateEmail);
    phoneInput.addEventListener("blur", validatePhone);
    zipCodeInput.addEventListener("blur", validateZipCode);
    passwordInput.addEventListener("blur", validatePassword);
    password2Input.addEventListener("blur", validatePassword2);
    password2Input.addEventListener("blur", confirmPasswords);
    
    signUpButtonInput.addEventListener("click", () => {
        validateName();
        validateEmail();
        validatePhone();
        validateZipCode();
        validatePassword();
        validatePassword2();
        confirmPasswords();
        validateForm();
    });
    
}


function validateName() {
    let name = document.getElementById("full-name-input").value;
    if (!name) {
        document.getElementById("full-name-span").innerText = "Please enter your name";
        // alert ("Please enter your name");
        return false;
    }
    return true;
}


function validateEmail() {
    let email = document.getElementById("email-input").value;
    
    if (!email.includes("@") && !email.includes(".")) {
        document.getElementById("email-span").innerText = "Please enter a valid email address";
        return false;
   
    } 
    return true;
}

function validatePhone() {
    let phone = document.getElementById("phone-input").value;
    if (!phone) {
        document.getElementById("phone-span").innerText = "Please enter a valid phone number";
        return false;
    }
    return true;
}

function validateZipCode() {
    let zip = document.getElementById("zip-code-input").value;
    if (!zip) {
        document.getElementById("zip-code-span").innerText = "Please enter a valid zip code";
        return false;
    }
    return true;
}

function validatePassword() {
    let password = document.getElementById("password-input").value;
    if (!password) {
        document.getElementById("password-span").innerText = "Please enter a password";
        return false;
    }
    return true;
}

function validatePassword2() {
    let password2 = document.getElementById("password2-input").value;
    if (!password2) {
        document.getElementById("password2-span").innerText = "Please enter a password";
        return false;
    }
    return true;
}

function confirmPasswords() {
    let password = document.getElementById("password-input").value;
    let password2 = document.getElementById("password2-input").value;

    if (password === password2) {
        return true;
    } else {
        document.getElementById("password2-span").innerText = "Error: Passwords do not match.";
        return false;
    }
}

function validateForm() {

    if (validateName() && validateEmail() && validatePhone() && validateZipCode() && validatePassword() && validatePassword2() &&confirmPasswords()) {
        alert("Your form was submitted. Thank you!")
    } else
        alert ("Please complete the form or correct the form errors.")
}

module.exports = {
    createMenu
}