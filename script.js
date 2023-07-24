// Write your JavaScript code here!
//const { formSubmission } = require("./scriptHelper");
//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
    let selectedPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl);
   
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
 
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.getElementById("pilotName]").value;
        let copilot = document.getElementById("copilotName]").value;
 
        let fuel = document.getElementById("fuelLevel]").value;
        let fuelLevel = Number(fuel.value);

        let cargo = document.getElementById("cargoMass]");
        let cargoLevel = Number(cargoInput.value);

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    });

});
});