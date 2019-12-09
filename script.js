// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function() {
      let pilotnameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel");
      let cargoMassInput = document.querySelector("input[name=cargoMass");
      if (pilotnameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" ) {
         alert("All fields are required!");
         event.preventDefault();
      }

      if (!isNaN(pilotnameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }
      /*
      const launchStatusCheck = document.getElementById("launchStatusCheck");
         let itemsUpdate = "";
         itemsUpdate = `
         <h2 id="launchStatus">Awaiting Information Before Launch</h2>
         <div id = "faultyItems">
            <ol>
               <li id="pilotStatus">${pilotnameInput} is ready for launch</li>
               <li id="copilotStatus">${copilotNameInput} is ready for launch</li>
               <li id="fuelStatus">Fuel level high enough for launch</li>
               <li id="cargoStatus">Cargo mass low enough for launch</li>
               </ol>
         </div>
         `;
      */

     const launchStatusCheck = document.getElementById("launchStatusCheck");
     let itemsUpdate = "";
      if( fuelLevelInput.value < 10000 ){
         //document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";         
         document.getElementById("faultyItems").style.visibility = "visible";            
         itemsUpdate = `
         <h2 id="launchStatus">Shuttle not ready for launch</h2>
         <div id = "faultyItems">
            <ol>
               <li id="pilotStatus">${pilotnameInput} is ready for launch</li>
               <li id="copilotStatus">${copilotNameInput} is ready for launch</li>
               <li id="fuelStatus">Fuel level low for launch</li>
               <li id="cargoStatus">Cargo mass low enough for launch</li>
               </ol>
         </div>
         `
         event.preventDefault();
      }
      launchStatusCheck.innerHTML = itemsUpdate;
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
