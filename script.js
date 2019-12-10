window.addEventListener("load", function() {
      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         let jsonPlanet = randomJson();
         div.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[jsonPlanet].name}</li>
                  <li>Diameter: ${json[jsonPlanet].diameter}</li>
                  <li>Star: ${json[jsonPlanet].star}</li>
                  <li>Distance from Earth: ${json[jsonPlanet].distance}</li>
                  <li>Number of Moons: ${json[jsonPlanet].moons}</li>
               </ol>
               <img src="${json[jsonPlanet].image}">
            `;
      function randomJson (){
      let index = Math.floor(Math.random()*json.length);
      return index;
      }
         });
      });
      let form = document.getElementById("launchForm");
      form.addEventListener("submit", function() {
         let checkReady = true;
         let pilotnameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel");
         let cargoMassInput = document.querySelector("input[name=cargoMass");
         let pilotStatusReady = document.getElementById("pilotStatus");
         let copilotStatusReady = document.getElementById("copilotStatus");
         let fuelStatusReady = document.getElementById("fuelStatus");
         let cargoStatusReady = document.getElementById("cargoStatus");
         let launchStatusReady = document.getElementById("launchStatus");
         let falutyItemsReady = document.getElementById("faultyItems");

         function assignment(){
            `
            <h2 id="launchStatus">${launchStatusReady.innerHTML}</h2>
            <div id = "faultyItems">
               <ol>
                  <li id="pilotStatus">${pilotStatusReady.innerHTML}</li>
                  <li id="copilotStatus">${copilotStatusReady.innerHTML}</li>
                  <li id="fuelStatus">${fuelStatusReady.innerHTML}</li>
                  <li id="cargoStatus">${cargoStatusReady.innerHTML}</li>
               </ol>
            </div>
            `
         }      
         
         if (pilotnameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" ) {
            alert("All fields are required!");
            checkReady = false;
            event.preventDefault();
         }else if (!isNaN(pilotnameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
            alert("Make sure to enter valid information for each field!");
            checkReady = false;
            event.preventDefault();
         }
   
         if( fuelLevelInput.value < 10000 && cargoMassInput.value < 10000 && checkReady){
            pilotStatusReady.innerHTML = `${pilotnameInput.value} is ready for launch`;
            copilotStatusReady.innerHTML = `${copilotNameInput.value} is ready for launch`;
            launchStatusReady.style.color = "red";
            launchStatusReady.innerHTML = "Shuttle not ready for launch";
            falutyItemsReady.style.visibility = "visible";
            fuelStatusReady.innerHTML = "Fuel level too low for launch";
            cargoStatusReady.innerHTML = 'Cargo mass low enough for launch';
            checkReady = false;
         }
   
         if( fuelLevelInput.value > 10000 && cargoMassInput.value > 10000 && checkReady){
            pilotStatusReady.innerHTML = `${pilotnameInput.value} is ready for launch`;
            copilotStatusReady.innerHTML = `${copilotNameInput.value} is ready for launch`;
            launchStatusReady.style.color = "red";
            falutyItemsReady.style.visibility = "visible";
            launchStatusReady.innerHTML = "Shuttle not ready for launch";         
            cargoStatusReady.innerHTML = "Cargo mass too high for launch";
            fuelStatusReady.innerHTML = 'Fuel level high enough for launch';
            checkReady = false;
         }

         if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000 && checkReady){
            pilotStatusReady.innerHTML = `${pilotnameInput.value} is ready for launch`;
            copilotStatusReady.innerHTML = `${copilotNameInput.value} is ready for launch`;
            launchStatusReady.style.color = "red";
            falutyItemsReady.style.visibility = "visible";
            launchStatusReady.innerHTML = "Shuttle not ready for launch";         
            cargoStatusReady.innerHTML = "Cargo mass too high for launch";
            fuelStatusReady.innerHTML = "Fuel level too low for launch";
            checkReady = false;
         }
         if (checkReady){
            falutyItemsReady.style.visibility = "hidden";
            launchStatusReady.innerHTML = 'Shuttle ready for launch';
            launchStatusReady.style.color = "green";
            assignment();
            event.preventDefault();
         } else {
            assignment();
            checkReady = true;
            event.preventDefault();
         }
      });
   });