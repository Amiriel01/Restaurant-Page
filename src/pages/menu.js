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


}
module.exports = {
    createMenu
}