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
    let macaronFlavorsTitle = document.createElement("div");
    macaronFlavorsTitle.id = "macaron-flavors-title";
    macaronFlavorsTitle.innerText = "Macaron Flavors";


    //creates macaron allergy info as a div and attaches it to the macaronMenuContainer//
    let macaronAllergyInfo = document.createElement("div");
    macaronAllergyInfo.id = "macaron-allergy-info";
    macaronAllergyInfo.innerText = "All macarons are gluten and dairy free!";

    //creates the macaron menu for cards to append to//
    let macaronMenu = document.createElement("div");
    macaronMenu.classList.add("macaron-menu");

    //appends all three to the macaronMenuContainer//
    macaronMenuContainer.appendChild(macaronFlavorsTitle);
    macaronMenuContainer.appendChild(macaronAllergyInfo);
    macaronMenuContainer.appendChild(macaronMenu);

    //this will create a div to hold the cards for row one and attach it to the macaronMenu//
    let macaronRow = document.createElement("div");
    macaronRow.classList.add("macaron-row");
    macaronMenu.appendChild(macaronRow);
    macaronRow.appendChild(createCard("images/lemon.png", "Lemon Sunshine", "This lemon flavored macaron is sure to be a hit in the summer months!"));
    macaronRow.appendChild(createCard("images/blackberry.png", "Blackberry Field", "This blackberry flavored macaron is as flavorful as a blackberry from the field!"));
    macaronRow.appendChild(createCard("images/weddingcake.png", "Wedding Cake", "This very vanilla flavored macaron would fit in perfectly a summer wedding!"));

    //this will create row2's cards//
    let macaronRow2 = document.createElement("div");
    macaronRow2.classList.add("macaron-row");
    macaronMenu.appendChild(macaronRow2);
    macaronRow2.appendChild(createCard("images/whitechoc.png", "White Chocolate Caramel", "This white chocolate caramel macaron is a crowd favorite!"));
    macaronRow2.appendChild(createCard("images/milkchoc.png", "Chocolate Espresso", "This chocolate macaron has an espresso cream center."));
    macaronRow2.appendChild(createCard("images/darkchoc.png", "Dark Chocolate", "Our Belgian dark chocolate macaroon speaks for itself!"));

    //this will create row2's cards//
    let macaronRow3 = document.createElement("div");
    macaronRow3.classList.add("macaron-row3");
    macaronMenu.appendChild(macaronRow3);
    macaronRow3.appendChild(createCard("images/strawberry.png", "Strawberry Rain", "Our strawberry macaron reminds us of a crisp strawberry after a summer rain."));
    macaronRow3.appendChild(createCard("images/elderberry.png", "Elderberry Vine", "Like an elderberry from the vine, only sweeter!"));
    macaronRow3.appendChild(createCard("images/raspberry.png", "Ripe Raspberry", "The ripe raspberry macaron is a tart summertime favorite."));

    //creates the drink menu container class to the content div//
    let drinkMenuContainer = document.createElement("div");
    drinkMenuContainer.classList.add("drink-menu-container");
    content.appendChild(drinkMenuContainer);

    //this will create drinkMenuTitle the div//
    let drinkMenuTitle = document.createElement("div");
    drinkMenuTitle.id = "drink-menu-title";
    drinkMenuTitle.innerText = "Specialty Drink Menu";

    //this will create the drinkMenuInfo div//
    let drinkMenuInfo = document.createElement("div");
    drinkMenuInfo.id = "drink-menu-info";
    drinkMenuInfo.innerText = "Milk Options: Dairy, Almond, Soy, Coconut, and Oat"

    //this creates the drinkListContainer div//
    let drinkListContainer = document.createElement("div");
    drinkListContainer.classList.add("drink-lists");

    //this will append drinkMenuTitle, drinkMenuInfo, and drinkListContainer to the drinkMenuContainer//
    drinkMenuContainer.appendChild(drinkMenuTitle);
    drinkMenuContainer.appendChild(drinkMenuInfo);
    drinkMenuContainer.appendChild(drinkListContainer);

    //create the drinkListTitle div and attach it to the drinkListContainer//
    let drinkListTitle = document.createElement("div");
    drinkListTitle.classList.add("drink-list-title");
    drinkListContainer.appendChild(drinkListTitle);

    //create the drinkListTitle div and attach it to the drinkListContainer//
    let drinkListTitle2 = document.createElement("div");
    drinkListTitle2.classList.add("drink-list-title");
    drinkListContainer.appendChild(drinkListTitle2);

    //create the drinkListTitle div and attach it to the drinkListContainer//
    let drinkListTitle3 = document.createElement("div");
    drinkListTitle3.classList.add("drink-list-title");
    drinkListContainer.appendChild(drinkListTitle3);
    
   //this will create the coffee drink type div//
    let drinkType = document.createElement("div");
    drinkType.id = "drink-type";
    drinkType.innerText = "Coffee Concoctions"
    drinkListTitle.appendChild(drinkType);

    //this will add the unordered list//
    let drinks = ["Maple Iced Coffee", "Iced Pistachio Rose Latte", "Irish Cream Cold Brew", "Green Tea Frappuccino"];
    let ul = document.createElement("ul");
    
    for (let drink of drinks) {
        let li = document.createElement("li");
        li.innerText = drink;
        ul.appendChild(li);
    }
    drinkListTitle.appendChild(ul);

    //this will create the tea drink type div//
    let drinkType2 = document.createElement("div");
    drinkType2.id = "drink-type";
    drinkType2.innerText = "It's Tea Time"
    drinkListTitle2.appendChild(drinkType2);

    //this will add the tea unordered list//
    let drinks2 = ["Pineapple Iced Tea", "Thai Iced Tea", "Iced Brown Sugar Milk Tea", "Strawberry Mint Iced Tea"];
    let ul2 = document.createElement("ul");
    
    for (let drink2 of drinks2) {
        let li2 = document.createElement("li");
        li2.innerText = drink2;
        ul2.appendChild(li2);
    }
    drinkListTitle2.appendChild(ul2);

    //this will create the fruit drink type div//
    let drinkType3 = document.createElement("div");
    drinkType3.id = "drink-type";
    drinkType3.innerText = "Fruit Elixers"
    drinkListTitle3.appendChild(drinkType3);

    //this will add the tea unordered list//
    let drinks3 = ["Watermelon Punch", "Nectarine Infused Sparkling Water", "Strawberry Melon Fizz", "Apricot Lemonade"];
    let ul3 = document.createElement("ul");
    
    for (let drink3 of drinks3) {
        let li3 = document.createElement("li");
        li3.innerText = drink3;
        ul3.appendChild(li3);
    }
    drinkListTitle3.appendChild(ul3);

 /*drinksListTitle.appendChild(createDrinkLists("Coffee Concoctions, ["Maple Iced Coffee", "Iced Pistachio Rose Latte", "Irish Cream Cold Brew", "Green Tea Frappuccino"]))*/
}

//this function will create the cards//
function createCard(img, name, info) {
    //this will add the macaron card divs to row one//
    let macaronCard = document.createElement("div");
    macaronCard.classList.add("macaron-cards");


    //this will add the lemon image to the lemon card//
    let cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.setAttribute("src", img);

    //this will create the class title-info to be attached to the macaronCard//
    let titleInfo = document.createElement("div");
    titleInfo.classList.add("title-info");

    //this will attach the image and title-info class to the card//
    macaronCard.appendChild(cardImage);
    macaronCard.appendChild(titleInfo);

    //this will create the lemon name to add to the card//
    let cardName = document.createElement("div");
    cardName.classList.add("card-name");
    cardName.innerText = name;

    //this will create the lemon description to add to the card//
    let cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    cardInfo.innerText = info;

    //this will add the description and name to the card//
    titleInfo.appendChild(cardName);
    titleInfo.appendChild(cardInfo);

    return macaronCard;
}

/*//function to create the drinks lists//
function createDrinkLists(type, drinks) {
    //this will create the drink type div//
    let drinkType = document.createElement("div");
    drinkType.classList.add("drink-type");
    drinkType.innerText = type
    drinkListTitle.appendChild(drinkType);

    //this will add the unordered list//
    let drinkArray = ["a", "a", "a", "a"];
    let ul = document.createElement("ul");

    for (let drinks of drinkArray) {
        let li = document.createElement("li");
        li.innerText = drinks;
        ul.appendChild(li);
    }
    drinkListTitle.appendChild(ul);

    return drinkType, drinkAray;
}*/

module.exports = {
    createMenu
}