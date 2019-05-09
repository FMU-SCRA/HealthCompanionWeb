'use strict';

$(document).ready(function(){


});

// connection to the Firebase Database
firebase.initializeApp({
apiKey: "AIzaSyCSz2T3eruA7DdHh9NjXsiBW4Bma0q1Khk",
authDomain: "health-companion-e4173.firebaseapp.com",
projectId: "health-companion-e4173"
});

  var db = firebase.firestore();


const clinicList = document.querySelector('#clinic-list');

function renderClinic(doc) {
  let li = document.createElement('li');

  let clinicID = document.createElement('span');

  let clinicName = document.createElement('span');

  let addressTitle = document.createElement('span');

  let address = document.createElement('span');

  let city = document.createElement('span');

  let state = document.createElement('span');

  let phoneTitle = document.createElement('span');

  let phone = document.createElement('span');

  let zip = document.createElement('span');

  let hoursNormalTitle = document.createElement('span');
  let hoursNormal = document.createElement('span');

  let hoursSatTitle = document.createElement('span');
  let hoursSat = document.createElement('span');

  let hoursSunTitle = document.createElement('span');
  let hoursSun = document.createElement('span');

  let websiteTitle = document.createElement('span');
  let website = document.createElement('span');
  // let location = document.createElement('span');

  // services
  let services = document.createElement('span');
  let bloodPressureBool = document.createElement('span');
  let bloodSugarBool = document.createElement('span');
  let cholesterolBool = document.createElement('span');
  let fluShotBool = document.createElement('span');
  let pneumoniaBool = document.createElement('span');
  let shinglesBool = document.createElement('span');

  li.setAttribute('data-id', doc.id);

  clinicID.textContent = doc.id;

  clinicName.textContent = doc.data().clinicName;

  addressTitle.textContent = "Address:";

  address.textContent = doc.data().address;

  city.textContent = doc.data().city;

  state.textContent = doc.data().state;

  zip.textContent = doc.data().zip;

  phoneTitle.textContent = "Phone:"

  phone.textContent = doc.data().phone;

  hoursNormalTitle.textContent = "Normal Hours:";
  hoursNormal.textContent = doc.data().hoursNormal;

  hoursSatTitle.textContent = "Saturday Hours:"
  hoursSat.textContent = doc.data().hoursSat;

  hoursSunTitle.textContent = "Sunday Hours:"
  hoursSun.textContent = doc.data().hoursSun;
  // website title and value
  websiteTitle.textContent = "Website:";
  website.textContent = doc.data().website;
  // location.textContent = doc.data().location;


  bloodPressureBool.textContent = doc.data().serviceBloodPressure;
  bloodSugarBool.textContent = doc.data().serviceBloodSugar;
  cholesterolBool.textContent = doc.data().serviceCholesterol;
  fluShotBool.textContent = doc.data().serviceFlu;
  pneumoniaBool.textContent = doc.data().servicePneumonia;
  shinglesBool.textContent = doc.data().serviceShingles;

  li.appendChild(clinicID);
  li.appendChild(clinicName);
  li.appendChild(addressTitle);
  li.appendChild(address);
  li.appendChild(city);
  li.appendChild(state);
  li.appendChild(zip);
  li.appendChild(phoneTitle);
  li.appendChild(phone);
  li.appendChild(hoursNormalTitle);
  li.appendChild(hoursNormal);
  li.appendChild(hoursSatTitle);
  li.appendChild(hoursSat);
  li.appendChild(hoursSunTitle);
  li.appendChild(hoursSun);
  // website title and value
  li.appendChild(websiteTitle);
  li.appendChild(website);
  // li.appendChild(location);

  services.textContent = "Services: "

  li.appendChild(services);

if (bloodPressureBool.textContent == "true") {
  bloodPressureBool.textContent = "Blood Pressure";
  li.appendChild(bloodPressureBool);
}

if (bloodSugarBool.textContent == "true") {
  bloodPressureBool.textContent = "Blood Sugar";
  li.appendChild(bloodSugarBool);
}

if (cholesterolBool.textContent == "true") {
  cholesterolBool.textContent = "Cholesterol";
  li.appendChild(cholesterolBool);
}

if (fluShotBool.textContent == "true") {
  fluShotBool.textContent = "Flu Shot";
  li.appendChild(fluShotBool);
}

if (pneumoniaBool.textContent == "true") {
  pneumoniaBool.textContent = "Pneumonia";
  li.appendChild(pneumoniaBool);
}

if (shinglesBool.textContent == "true") {
  shinglesBool.textContent = "Shingles";
  li.appendChild(shinglesBool);
}

  // li.appendChild(bloodSugarBool);
  // li.appendChild(cholesterolBool);
  // li.appendChild(fluShotBool);
  // li.appendChild(pneumoniaBool);
  // li.appendChild(shinglesBool);


  clinicList.appendChild(li);
}

// getting data
db.collection('Locations').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderClinic(doc);
    });
});
