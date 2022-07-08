console.log("I'm a JavaScript file linked to this CALCULATOR page!");

var countryEl = $('#country');
var country = "USA";
var GDP;
var wbURL1 = 'http://api.worldbank.org/v2/country/'
var wbURL2 = '/indicator/NY.GDP.MKTP.CD?date=2021:2021&format=json'
var testURL = 'http://api.worldbank.org/v2/country/BRA/indicator/NY.GDP.MKTP.CD?date=2021:2021&format=json'

function collectCountry () {
    country = countryEl.val()
}

function getGDP() {
    fetch(wbURL1 + countryEl.val() + wbURL2)
    // fetch(testURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data){
        console.log(data);
      })
}