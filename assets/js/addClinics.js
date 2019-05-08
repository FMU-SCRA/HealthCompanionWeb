'use strict';

$(document).ready(function(){

  // slider
  var slider = $('#slider').slideReveal(); // slideReveal return $('#slider')

  var confirmModalBtn = '<button type="button" id="confirmButtonFinal" class="btn btn-danger" data-dismiss="modal">I Have My ID</button>';

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

    // For the services text area
    $('#characterLeft').text('140 characters left');
    $('#services').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });


});

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

  if(resultPartTwo.includes("ALL")) {
    bloodPressureBool = true;
    bloodSugarBool = true;
    cholesterolBool = true;
    shinglesBool = true;
    pneumoniaBool = true;
    fluShotBool = true;
  }

  if(resultPartTwo.includes("BLOOD PRESSURE")) {
    bloodPressureBool = true;
  }

  if(resultPartTwo.includes("BP")) {
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

    var confirmModalBtn = '<button type="button" id="confirmButtonFinal" class="btn btn-primary" data-dismiss="modal">I Have My ID</button>';

    function openIDModal() {
      createModal('idModal', 'Clinic Code', false,
        "Please write down or save for furture reference." + "<br>Clinic ID: <b>" + docRef.id+"</b>", false, confirmModalBtn); // create reset modal for future use
      // makes the modal open
      $('#idModal').modal({
        keyboard: false
      });
      // resets the form
      document.getElementById('clinicForm').reset();
    }

    openIDModal();

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

function createModal(ID, title, forceStay, modalBody, cancel, submitBtn) {
    // create the modal html in string representation
    var modal = '<div class="modal fade" id="' + ID + '" tabindex="-1" role="dialog" aria-labelledby="Clinic ID" aria-hidden="false" data-keyboard="false">';
    if (forceStay) {
      modal = '<div class="modal fade" id="' + ID + '" tabindex="-1" role="dialog" aria-labelledby="Clinic ID" aria-hidden="false" data-backdrop="static" data-keyboard="false" >';
    }
    modal += '<div class="modal-dialog modal-dialog-centered" role="document">';
    modal += '<div class="modal-content">';
    modal += '<div class="modal-header">';
    modal += '<h5 class="modal-title">' + title + '</h5>';
    modal += '</div>';
    modal += '<div class="modal-body">';
    modal += modalBody;
    modal += '</div>';
    modal += '<div class="modal-footer">';
    // add the cancel button if it is wanted
    if (cancel) {
      modal += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>';
    }
    modal += submitBtn;
    modal += '</div></div></div></div>';
    // makes the modal appear by converting the strings above into HTML
    document.body.insertAdjacentHTML('beforeend', modal);
    // handles if there are any page size changes
    $('#' + ID).modal('handleUpdate');
  }

  function openIDModal() {
    createModal('idModal', 'Clinic Code', false,
      "Please write down or save for furture reference.", true, confirmModalBtn); // create reset modal for future use
    // makes the modal open
    $('#idModal').modal({
      keyboard: false
    });
    // resets the form
    document.getElementById('clinicForm').reset();
  }
