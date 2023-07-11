// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if(testInput == ""){
    return "Empty";
   } else if (isNaN(testInput) == true){
    return "Not a Number";
   } else if(isNaN(testInput) == false){
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
let list = document.getElementbyId("faultyItems");
let pilotStatus = document.getElementbyId("pilotStatus");
let copilotStatus = document.getElementbyId("copilotStatus");
let fuelStatus = document.getElementbyId("fuelStatus");
let cargoStatus = document.getElementbyId("cargoStatus");
let launchStatus = document.getElementbyId("launchStatus");
   if(validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty"
|| validateInput(fuelLevel) == "Empty"|| validateInput(cargoLevel) == "Empty"){
    alert("All fields are required")
} else if(validateInput(pilot) == "Is a Number" || validateInput(copilot)
== "Is a Number"){
    alert("Make sure to add valid information for each fiel!")
} else if(validateInput(fuelLevel) == "Not a Number"|| validateInput(cargoLevel) == "Not a Number"){
    alert("Make sure to add valid information for each field")
} else {
    list.style.visibilty = "visible"
    pilotStatus.innerHtml = `Pilot ${pilotName} is ready`
    copilotStatus.innerHtml = `Co-Pilot ${copilotName} is ready`
}
if(fuelLevel < 10000){
    list.style.visibilty = "visible"
    fuelStatus.innerHtml = "Fuel level too low for launch"
    launchStatus.innerHtml = "Shuttle Not Ready for Launch"
    launchStatus.style.color = "red"
} else if(fuelLevel >= 10000){
    list.style.visibilty = "visible"
    fuelStatus.innerHtml = "Fuel level high enough for launch"
}
if(cargoLevel > 10000){
    list.style.visibilty = "visible"
    cargoStatus.innerHtml = "Cargo mass too heavy for launch"
    launchStatus.innerHtml = "Shuttle Not Ready for Launch"
    launchStatus.style.color = "red"
} else if(cargoLevel <= 10000){
    list.style.visibilty = "visible"
    cargoStatus.innerHtml = "Cargo mass low enough for launch"
}
}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
