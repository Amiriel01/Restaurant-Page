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

    // Create a form dynamically
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit");
    formContainer.appendChild(form);

    //creates a class div for the form-row1 content//
    let formRow1 = document.createElement("div");
    formRow1.classList.add("form-row");
    form.appendChild(formRow1);

    //create elements for formRow1//
    let fullNameLabel = document.createElement("label");
    fullNameLabel.innerText = "First and Last Name"
    formRow1.appendChild(fullNameLabel)

    let fullNameInput = document.createElement("input");
    // fullNameInput.setAttribute()
    fullNameLabel.appendChild(fullNameInput);

    let emailLabel = document.createElement("label");
    emailLabel.innerText = "Email"
    formRow1.appendChild(emailLabel)

    //create elements for formRow1//
    let emailInput = document.createElement("input");
    // fullNameInput.setAttribute()
    emailLabel.appendChild(emailInput);

    //creates a class div for the form-row2 content//
    let formRow2 = document.createElement("div");
    formRow2.classList.add("form-row");
    form.appendChild(formRow2);

    let phoneLabel = document.createElement("label");
    phoneLabel.innerText = "Phone Number"
    formRow2.appendChild(phoneLabel)

    let phoneInput = document.createElement("input");
    phoneLabel.appendChild(phoneInput);

    let zipCodeLabel = document.createElement("label");
    zipCodeLabel.innerText = "Zip Code"
    formRow2.appendChild(zipCodeLabel)

    let zipCodeInput = document.createElement("input");
    zipCodeLabel.appendChild(zipCodeInput);

    //creates a class div for the form-row3 content//
    let formRow3 = document.createElement("div");
    formRow3.classList.add("form-row");
    form.appendChild(formRow3);

    let passwordLabel = document.createElement("label");
    passwordLabel.innerText = "Set Password"
    formRow3.appendChild(passwordLabel)

    let passwordInput = document.createElement("input");
    passwordLabel.appendChild(passwordInput);

    let password2Label = document.createElement("label");
    password2Label.innerText = "Confirm Password"
    formRow3.appendChild(password2Label)

    let password2Input = document.createElement("input");
    password2Label.appendChild(password2Input);

    //creates a class div for the form-row4 content//
    let formRow4 = document.createElement("div");
    formRow4.classList.add("form-row");
    form.appendChild(formRow4);

    let signUpButtonLabel = document.createElement("label");
    formRow4.appendChild(signUpButtonLabel);

    let signUpButtonInput = document.createElement("button");
    signUpButtonInput.id = "sign-up-button";
    signUpButtonInput.innerText = "Sign Up!"
    signUpButtonLabel.appendChild(signUpButtonInput);

    function passwordConfirmation() {

        let password = document.getElementById(passwordInput).value;
        let confirmPassword = document.getElementById("password2").value;
        
        if (password == confirmPassword) {
            document.getElementById("message").innerHTML = "**Success: Account Created!";
            //return true; (When I want it to actually submit the form on a website)//
        } else {
            document.getElementById("message").innerHTML = "**Error: Passwords do not match.";
        }
        return false;
    }
    passwordConfirmation();
}


//function to verify the passwords match//


module.exports = {
    createMenu
}