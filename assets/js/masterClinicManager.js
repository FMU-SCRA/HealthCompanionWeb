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


const clinicListButtons = document.querySelector('#clinic-button');
// const clinicList = document.querySelector('#clinic-list');
// const contentDiv = document.querySelector('#content');

function renderClinic(doc) {
  let button = document.createElement('button');

  let content = document.createElement('div');


  content.setAttribute('class', "content")

  let li = document.createElement('li');

  let clinicID = document.createElement('span');

  let clinicName = document.createElement('span');

  let addressTitle = document.createElement('span');

  let address = document.createElement('span');

  let city = document.createElement('span');

  let state = document.createElement('span');

  let zip = document.createElement('span');

  let phoneTitle = document.createElement('span');

  let phone = document.createElement('span');

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

  button.setAttribute('class', "collapsible")

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

  console.log("BP:"+ bloodPressureBool.textContent);
  console.log("BS:"+ bloodSugarBool.textContent);
  console.log("C:"+ cholesterolBool.textContent);
  console.log("FS:"+ fluShotBool.textContent);
  console.log("P:"+ pneumoniaBool.textContent);
  console.log("S:"+ shinglesBool.textContent);

  button.appendChild(clinicName);
  button.appendChild(addressTitle);
  button.appendChild(address);
  button.appendChild(city);
  button.appendChild(state);
  button.appendChild(zip);
  content.appendChild(clinicID);
  content.appendChild(phoneTitle);
  content.appendChild(phone);
  content.appendChild(hoursNormalTitle);
  content.appendChild(hoursNormal);
  content.appendChild(hoursSatTitle);
  content.appendChild(hoursSat);
  content.appendChild(hoursSunTitle);
  content.appendChild(hoursSun);
  // website title and value
  content.appendChild(websiteTitle);
  content.appendChild(website);
  // content.appendChild(location);

  services.textContent = "Services: "

  content.appendChild(services);

if (bloodPressureBool.textContent == 'true') {
  bloodPressureBool.textContent = "Blood Pressure";
  content.appendChild(bloodPressureBool);
  console.log("BP:"+ bloodPressureBool.textContent);
}

if (bloodSugarBool.textContent == "true") {
  bloodSugarBool.textContent = "Blood Sugar";
  content.appendChild(bloodSugarBool);
  console.log("BS:"+ bloodSugarBool.textContent);
}

if (cholesterolBool.textContent == "true") {
  cholesterolBool.textContent = "Cholesterol";
  content.appendChild(cholesterolBool);
  console.log("C:"+cholesterolBool.textContent);
}

if (fluShotBool.textContent == "true") {
  fluShotBool.textContent = "Flu Shot";
  content.appendChild(fluShotBool);
  console.log("FS:"+fluShotBool.textContent);

}

if (pneumoniaBool.textContent == "true") {
  pneumoniaBool.textContent = "Pneumonia";
  content.appendChild(pneumoniaBool);
  console.log("P:"+pneumoniaBool.textContent);
}

if (shinglesBool.textContent == "true") {
  shinglesBool.textContent = "Shingles";
  content.appendChild(shinglesBool);
  console.log("S:"+shinglesBool.textContent);
}


  clinicListButtons.appendChild(button);

  // clinicList.appendChild(li);

// this appends one element to another perfectly.
  // button.appendChild(content);

  clinicListButtons.appendChild(content);


  // adds the func() to each button on render function call.
  button.addEventListener("click", function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show")
    var content = this.nextElementSibling;

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// getting data
db.collection('Locations').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderClinic(doc);

    });
});
