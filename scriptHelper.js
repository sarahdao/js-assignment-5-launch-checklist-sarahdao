// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTarget = document.getElementbyId("missionTarget") 
  missionTarget.innerHtml = `<div>
        <h2>Mission Destination</h2>
               <ol>
                    <li>Name:${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src = ''> 
                </div>`
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
let faultyItems = document.getElementbyId("faultyItems");
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
    faultyItems.style.visibilty = "visible"
    pilotStatus.innerHtml = `Pilot ${pilotName} is ready`
    copilotStatus.innerHtml = `Co-Pilot ${copilotName} is ready`
}
if(fuelLevel < 10000){
    faultyItems.style.visibilty = "visible"
    fuelStatus.innerHtml = "Fuel level too low for launch"
    launchStatus.innerHtml = "Shuttle Not Ready for Launch"
    launchStatus.style.color = "red"
} else if(fuelLevel >= 10000){
    faultyItems.style.visibilty = "visible"
    fuelStatus.innerHtml = "Fuel level high enough for launch"
    launchStatus.innerHtml = "Shuttle is ready for launch"
    launchStatus.style.color = "green"
}
if(cargoLevel > 10000){
    faultyItems.style.visibilty = "visible"
    cargoStatus.innerHtml = "Cargo mass too heavy for launch"
    launchStatus.innerHtml = "Shuttle Not Ready for Launch"
    launchStatus.style.color = "red"
} else if(cargoLevel <= 10000){
    faultyItems.style.visibilty = "visible"
    cargoStatus.innerHtml = "Cargo mass low enough for launch"
    launchStatus.style.color = "green"
}
}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetList = myFetch()
    let planetIndex = Math.floor(Math.random(planets.length))
    //try math.random with empty parenthesis and try something else with planets.length
    return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
