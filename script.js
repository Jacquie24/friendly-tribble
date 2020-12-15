$(document).ready(function () {
  // DOM VARIABLES
  var welcomeDiv = $("#welcome");
  var availablePetsDiv = $("#available-pets");

  // JAVASCRIPT VARIABLES
  var petsArray = [
    "Fido the Dog",
    "Fluffy the Cat",
    "Jerry the Mouse",
    "Dino the Dinosaur",
  ];

  // FUNCTION DEFINITIONS
  function displayPets() {
    for (var i = 0; i < petsArray.length; i++) {
      // 1.
      var divEl = $("<div>");
      // 2.
      divEl.addClass("col-sm-3");
      // 1a.
      var h3El = $("<h3>");
      // 2a.
      h3El.text(petsArray[i]);
      h3El.addClass("text-center");
      h3El.addClass("available-pet");
      h3El.attr("data-index", i);
      // 3a.
      divEl.append(h3El);
      // 3.
      availablePetsDiv.append(divEl);
    }
  }

  // FUNCTION CALLS

  // EVENT LISTENERS

  $("#view-pets").on("click", function () {
    welcomeDiv.attr("style", "display:none");
    displayPets();
  });

  // jQuery Event Delegation
  availablePetsDiv.on("click", ".available-pet", function () {
    console.log("You clicked on a pet!");
    console.log($(this).data("index"));
    var currentPetIndex = $(this).data("index");
    console.log(petsArray[currentPetIndex]);
  });

  console.log("Document is ready.");
});
