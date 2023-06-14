const utility = require("./utility.js");
function createHome() {
    //links to function that clears content with each tab change//
    utility.clearContent();

    //links to content div in index.html//
    let content = document.querySelector("#content");

    //creates a class div for the title-space content//
    let titleSpaceDiv = document.createElement("div");
    titleSpaceDiv.classList.add("title-space");
    //creates an id div for the title//
    let title = document.createElement("div");
    title.id = "title";
    title.innerText = "Macaron Maven";
    //attatches the title info to the class div//
    titleSpaceDiv.appendChild(title);
    content.appendChild(titleSpaceDiv);

    //creates class div for content paragraphs//
    let homeParagraphsDiv = document.createElement("div");
    homeParagraphsDiv.classList.add("home-paragraphs");
    //creates id for first paragraph and info//
    let homeInfo1 = document.createElement("div");
    homeInfo1.id = "home-info-paragraph1";
    homeInfo1.innerText = "Macaron Maven has a wide selection of delectable treats for every palette. At Macaron Maven, only the finest imported ingredients are used in our products. We offer an international small cafe feel in rural America.";
    homeParagraphsDiv.appendChild(homeInfo1);
    content.appendChild(homeParagraphsDiv);
    //creates id for first paragraph and info//
    let homeInfo2 = document.createElement("div");
    homeInfo2.id = "home-info-paragraph2";
    homeInfo2.innerText = "Come in and see us today or order online! In addition to the world renowned macarons, you will also find a wide variety of seasonally themed coffee, tea, and hot cocoa.";
    homeParagraphsDiv.appendChild(homeInfo2);
    content.appendChild(homeParagraphsDiv);

    //creates a class div for hours-location//
    let hoursLocationDiv = document.createElement("div");
    hoursLocationDiv.classList.add("hours-location");

    //creates a class div for week-hours within the hours-location div//
    let weekHoursDiv = document.createElement("div");
    weekHoursDiv.classList.add("week-hours");
    //attaches weekHoursDiv to the hoursLocationDiv//
    hoursLocationDiv.appendChild(weekHoursDiv);
    content.appendChild(hoursLocationDiv);

    //creates a class div for location within the hours-location div//
    let locationDiv = document.createElement("div");
    locationDiv.classList.add("location");
    //attaches location to the hoursLocationDiv//
    hoursLocationDiv.appendChild(locationDiv);
    content.appendChild(hoursLocationDiv);

    //create id divs for the weekHoursDiv//
    //creates an id for hours//
    let hourTitle = document.createElement("div");
    hourTitle.id = "hour-title";
    hourTitle.innerText = "Hours";
    //creates an id for Monday//
    let monday = document.createElement("div");
    monday.id = "Monday";
    monday.innerText = "Monday 7am-6pm";
    //creates an id for Tuesday//
    let tuesday = document.createElement("div");
    tuesday.id = "Tuesday";
    tuesday.innerText = "Tuesday 7am-6pm";
    //creates an id for Wednesday//
    let wednesday = document.createElement("div");
    wednesday.id = "Wednesday";
    wednesday.innerText = "Wednesday 7am-8pm";
    //creates an id for Thursday//
    let thursday = document.createElement("div");
    thursday.id = "Thursday";
    thursday.innerText = "Thursday 7am-6pm";
    //creates an id for Friday//
    let friday = document.createElement("div");
    friday.id = "Friday";
    friday.innerText = "Friday 7am-10pm";
    //creates an id for Saturday//
    let saturday = document.createElement("div");
    saturday.id = "Saturday";
    saturday.innerText = "Saturday 7am-10pm";
    //creates an id for Sunday//
    let sunday = document.createElement("div");
    sunday.id = "Sunday";
    sunday.innerText = "Sunday Closed";
    //attaches all ids created under weekHoursDiv to it//
    weekHoursDiv.appendChild(hourTitle);
    weekHoursDiv.appendChild(monday);
    weekHoursDiv.appendChild(tuesday);
    weekHoursDiv.appendChild(wednesday);
    weekHoursDiv.appendChild(thursday);
    weekHoursDiv.appendChild(friday);
    weekHoursDiv.appendChild(saturday);
    weekHoursDiv.appendChild(sunday);
    content.appendChild(weekHoursDiv);

    

    //creates an id div for locationTitle//
    let locationTitle = document.createElement("div");
    locationTitle.id = "location-title";
    locationTitle.innerText = "Location";

    //attaches the locationTitle id to the location class div//
    locationDiv.appendChild(locationTitle);
    content.appendChild(locationDiv);

    //add class address to the location class div//
    let address = document.createElement("div");
    address.classList.add("address");
    //attaches location to the hoursLocationDiv//
    locationDiv.appendChild(address);
    content.appendChild(locationDiv);

    //creates the street div//
    let street = document.createElement("div");
    street.id ="street";
    street.innerText = "555 Macaron Dr.";

    //attaches the street to the location class div//
    address.appendChild(street);
    content.appendChild(address);
}
module.exports = {
    createHome
}
