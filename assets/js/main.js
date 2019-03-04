'use strict';

$(document).ready(function() {
  // slider
  var slider = $('#slider').slideReveal(); // slideReveal return $('#slider')

  $("#sidebar-wrapper").slideReveal({
    trigger: $("#toggle"),
    push: false,
    speed: 200,
    overlay: true
  });

  // this allows the second button to close the menu
  $("#toggleSidebar").mousedown(function() {
    $('#sidebar-wrapper').slideReveal("toggle");
  });

});




// Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyCSz2T3eruA7DdHh9NjXsiBW4Bma0q1Khk",
  //   authDomain: "health-companion-e4173.firebaseapp.com",
  //   databaseURL: "https://health-companion-e4173.firebaseio.com",
  //   projectId: "health-companion-e4173",
  //   storageBucket: "health-companion-e4173.appspot.com",
  //   messagingSenderId: "145726564870"
  // };

  firebase.initializeApp({
  apiKey: "AIzaSyCSz2T3eruA7DdHh9NjXsiBW4Bma0q1Khk",
  authDomain: "health-companion-e4173.firebaseapp.com",
  projectId: "health-companion-e4173"
});

  // this will initialize firebase with out site.
  // firebase.initializeApp(config);

  var db = firebase.firestore();


// Reference Locations collection

document.getElementById('clinicForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  console.log(123);
  var bloodPressureBool = false;
  var bloodSugarBool = false;
  var cholesterolBool = false;
  var fluShotBool = false;
  var pneumoniaBool = false;
  var shinglesBool =  false;

  var clinicName = getInputVal('clinicName');
  var address = getInputVal('address');
  var city = getInputVal('city');
  var state = getInputVal('state');
  var phone = getInputVal('phone');
  var zip = getInputVal('zip');
  var hoursNormal = getInputVal('hoursNormal');
  var hoursSat = getInputVal('hoursSat');
  var hoursSun = getInputVal('hoursSun');
  var website = getInputVal('url');
  var latitude = getInputVal('lat');
  var longitude = getInputVal('longitude');
  var location = new firebase.firestore.GeoPoint(parseFloat(latitude), parseFloat(longitude));

  console.log(clinicName);

  // below will be the services in message
  var services = getInputVal('services');
  // var resultPartOne = services.toUpperCase();
  var resultPartTwo = services.toUpperCase();

  if(resultPartTwo.includes("BLOOD PRESSURE")) {
    bloodPressureBool = true;
  }

  if(resultPartTwo.includes("SUGAR")) {
    bloodSugarBool = true;
  }
  if(resultPartTwo.includes("CHOLESTEROL")) {
    cholesterolBool = true;
  }
  if(resultPartTwo.includes("FLU")) {
    fluShotBool = true;
  }
  if(resultPartTwo.includes("PNEUMONIA")) {
    pneumoniaBool = true;
  }
  if(resultPartTwo.includes("SHINGLES")) {
    shinglesBool = true;
}

db.collection("Locations").add({
  clinicName: clinicName,
  city: city,
  address: address,
  state: state,
  phone: phone,
  zip: zip,
  hoursNormal: hoursNormal,
  hoursSat: hoursSat,
  hoursSun: hoursSun,
  website: website,
  location: location,
  serviceBloodPressure: bloodPressureBool,
  serviceBloodSugar: bloodSugarBool,
  serviceCholesterol: cholesterolBool,
  serviceFlu: fluShotBool,
  servicePneumonia: pneumoniaBool,
  serviceShingles: shinglesBool
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});


// var setDoc = db.collection('Locations').doc(clinicName).set(saveLocation(clinicName, address, city, state, phone, zip, hours, website, location, bloodPressureBool, bloodSugarBool, cholesterolBool, fluShotBool, pneumoniaBool, shinglesBool));
// saveLocation(clinicName, address, city, state, phone, zip, hours, website, location, bloodPressureBool, bloodSugarBool, cholesterolBool, fluShotBool, pneumoniaBool, shinglesBool);

}

function getInputVal(id) {
  return document.getElementById(id).value;
}
