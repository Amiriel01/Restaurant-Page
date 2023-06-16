const utility = require("./utility.js");

function createMenu() {
    utility.clearContent();

    //links to content div in index.html//
    let content = document.querySelector("#content");

    //creates a class div for the baker container content//
    let bakerContainer = document.createElement("div");
    bakerContainer.classList.add("baker-container");
    content.appendChild(bakerContainer);

    //creates baker class div//
    let bakers = document.createElement("div");
    bakers.classList.add("bakers");
    bakerContainer.appendChild(bakers);

    //create baker title div//
    let bakerTitle = document.createElement("div");
    bakerTitle.id = "baker-title";
    bakerTitle.innerText = "The Bakers";
    bakers.appendChild(bakerTitle);

    //creates baker bios class div//
    let bakerBios = document.createElement("div");
    bakerBios.classList.add("baker-bios");
    bakers.appendChild(bakerBios);

    //creates baker1 class div//
    let baker1 = document.createElement("div");
    baker1.classList.add("baker1");
    bakerBios.appendChild(baker1);

    //creates baker1-img id//
    let bakerImage1 = document.createElement("img");
    bakerImage1.id = "baker1-img";
    bakerImage1.setAttribute("src", "images/baker1.png");

    //creates baker-info div class//
    let bakerInfo1 = document.createElement("div");
    bakerInfo1.classList.add("baker-info");

    //appends baker info and baker image to baker1 class div//
    baker1.appendChild(bakerImage1);
    baker1.appendChild(bakerInfo1);

    //create baker1-name id div//
    let bakerName1 = document.createElement("div");
    bakerName1.id = "baker1-name";
    bakerName1.innerText = "Sally Sue";

    //create baker1-bio id div//
    let bakerBio1 = document.createElement("div");
    bakerBio1.id = "baker1-bio";
    bakerBio1.innerText = "Sally Sue has been a baker for 45 years. She specialized in macaroons at a young age and it has been her life goal to create new interesting macaroon flavors!";

    bakerInfo1.appendChild(bakerName1);
    bakerInfo1.appendChild(bakerBio1);

    //creates baker2 class div//
    let baker2 = document.createElement("div");
    baker2.classList.add("baker2");
    bakerBios.appendChild(baker2);

    //creates baker2-img id//
    let bakerImage2 = document.createElement("img");
    bakerImage2.id = "baker2-img";
    bakerImage2.setAttribute("src", "images/baker2.png");

    //creates baker-info div class//
    let bakerInfo2 = document.createElement("div");
    bakerInfo2.classList.add("baker-info2");

    //appends baker info and baker image to baker2 class div//
    baker2.appendChild(bakerImage2);
    baker2.appendChild(bakerInfo2);

    //create baker2-name id div//
    let bakerName2 = document.createElement("div");
    bakerName2.id = "baker2-name";
    bakerName2.innerText = "Vincent";

    //create baker2-bio id div//
    let bakerBio2 = document.createElement("div");
    bakerBio2.id = "baker2-bio";
    bakerBio2.innerText = "Vincent is new to Macaron Maven. He has ten years professional baking experience and is a welcome addition to the team!";

    bakerInfo2.appendChild(bakerName2);
    bakerInfo2.appendChild(bakerBio2);

    //creates contact info class div//
    let contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    content.appendChild(contactInfo);

    //create contact title id div//
    let contactTitle = document.createElement("div");
    contactTitle.id = "contact-title";
    contactTitle.innerText = "Contact Us!";

    //create phone id div//
    let phone = document.createElement("div");
    phone.id = "phone";
    phone.innerText = "Phone: (888) 888-8888";

    //create email id div//
    let email = document.createElement("div");
    email.id = "email";
    email.innerText = "Email: macarons@bakery.com";

    //create social media id div//
    let socialMedia = document.createElement("div");
    socialMedia.id = "social-media";
    socialMedia.innerText = "Find us on Facebook!";

    contactInfo.appendChild(contactTitle);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);
    contactInfo.appendChild(socialMedia);
}

module.exports = {
    createMenu
}