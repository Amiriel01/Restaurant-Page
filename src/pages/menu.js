const utility = require("./utility.js");

function createMenu() {
    utility.clearContent();


    //links to content div in index.html//
    let content = document.querySelector("#content");

    //Create div for Summer Menu title//
    let menuTitle = document.createElement("div");
    menuTitle.id = "menu-title";
    menuTitle.innerText = "Seasonal Summer Menu";
    //append menuTitle to content div//
    content.appendChild(menuTitle);

    //creates a class div for the macaron menu container content//
    let macaronMenuContainer = document.createElement("div");
    macaronMenuContainer.classList.add("macaron-container");
    content.appendChild(macaronMenuContainer);

    //creates macaron flavors title as a div and attaches it to the macaronMenuContainer//
    let macaronFlavorsTitle = document.querySelector("div");
    macaronFlavorsTitle.id = "macaron-flavors-title";
    macaronFlavorsTitle.innerText = "Macaron Flavors";


    //creates macaron allergy info as a div and attaches it to the macaronMenuContainer//
    let macaronAllergyInfo = document.querySelector("div");
    macaronAllergyInfo.id = "macaron-allergy-info";
    macaronAllergyInfo.innerText = "All macarons are gluten and dairy free!";

    //creates the macaron menu for cards to append to//
    let macaronMenu = document.querySelector("div");
    macaronMenu.classList.add("macaron-menu");

    //appends all three to the macaronMenuContainer//
    macaronMenuContainer.appendChild(macaronFlavorsTitle);
    macaronMenuContainer.appendChild(macaronAllergyInfo);
    macaronMenuContainer.appendChild(macaronMenu);
}
module.exports = {
    createMenu
}