// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

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



   let launchForm = document.getElementById("testForm");
   let itemsList = document.getElementById("faultyItems");

    launchForm.addEventListener("submit", function(event){
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });

})
});