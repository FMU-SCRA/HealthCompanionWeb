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

document.getElementById('clinicForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log(123);

var clinicName = getInputVal('clinicName');
var address = getInputVal('address');
var city = getInputVal('city');
var state = getInputVal('state');
var phone = getInputVal('phone');
var zip = getInputVal('zip');
var hours = getInputVal('hours');
var website = getInputVal('url');
var latitude = getInputVal('lat');
var longitude = getInputVal('longitude');

console.log(clinicName);

// below will be the services in message
var services = getInputVal('services');

}

function getInputVal(id) {
  return document.getElementById(id).value;
}
