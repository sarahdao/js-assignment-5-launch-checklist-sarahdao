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
       window.addEventListener("click", formSubmission)
    let selectedPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl);
    document.getElementById("launchForm").addEventListener("click", formSubmission);
})
});