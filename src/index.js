const home = require("./pages/home.js");
home.createHome();

const menu = require("./pages/menu.js");

const contact = require("./pages/contact.js");

const signUp = require("./pages/sign-up.js");

document.querySelector("#home").addEventListener("click", home.createHome);

document.querySelector("#menu").addEventListener("click", menu.createMenu);

document.querySelector("#contact").addEventListener("click", contact.createMenu);

document.querySelector("#sign-up").addEventListener("click", signUp.createMenu);

