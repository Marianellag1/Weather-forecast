var searchButton = document.getElementById("search");

$(document).ready(function () {
    var date = moment().format('L');
})
//submit button, when city is searched
searchButton.addEventListener("click", function (e) {
    e.preventDefault();
})

function redenerLastCity() {
    
}
// var dateDisplayEl = $('#date-display');

// function displayDate() {
//     var rightNow = moment('00/00/00', 'MM-DD-YY').format('MMM DD, YYYY');
//     dateDisplayEl.text(rightNow);
// }
// function getParams() {
//     var searchParamsArr = document.location.search.split('&');
//     console.log(searchParamsArr);

//     var query = searchParamsArr[0].split('=').pop();
//     var format = searchParamsArr[1].split('=').pop();

//     searchApi(query, forma);
// }

// function printResults(resultObj) {
//     console.log(resultObj);

//     var bodyContentEl = document.createElement('p');
//     bodyContentEl.innerHTML =
//     '<strong>Temp:</strong>' + resultObj.temp;
// }

// function searchApi(query, format) {

//     // var queryURL = "https://api.openweathermap.org/data/2.5/weather? " q=" + city + "&appid=" + APIKey;

//     if (format) {
//         queryURL ="https://api.openweathermap.org/data/2.5/weather?" + format
//     }
// }
// var searchCityEl = document.getElementById("city-search");
// var primarySearchbtnEl = document.getElementById("search-btn");
// var cityName = document.querySelector(".card-title");
// var displayTimeEl = document.querySelector(".day-display");
// var kelvinFor = (""-273.15)*9/5+32;
// var APIKey = "bddbfb355365507f1fd422abd1989d50";
// var city = 'Chicago';


// function displayTime() {
//     var rightNow = moment().format('l');
//     displayTimeEl.text(rightNow);
//     console.log(displayTimeEl);
// }

// // fetch(queryURL)
// // .then(function(response){
// // response.json();
// // })
// // .then(function(data){
// //     console.log(data)
// // })
// primarySearchbtnEl.addEventListener("click", function (e) {//search button works!
//     e.preventDefault();
//     alert("hello");
//     let searchCity = searchCityEl.value;
//     console.log(searchCity);// console log shows what ever user puts
// })
// //kelvin formula: (K − 273.15) × 9/5 + 32 = °F

function getParams() {
    var searchParamsArr = document.location.search.split('&');
    console.log(searchParamsArr);
}