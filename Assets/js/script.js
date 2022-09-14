var searchCityEl = document.getElementById("city-search");
var primarySearchbtnEl = document.getElementById("search-btn");
var cityName = document.querySelector(".card-title");
var displayTimeEl = document.getElementById("day-display");
var APIKey = "bddbfb355365507f1fd422abd1989d50";
var city = 'Chicago';
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


function displayTime() {
    var rightNow = moment().format('l');
    displayTimeEl.text(rightNow);
}

primarySearchbtnEl.addEventListener("click", function (e) {//search button works!
    e.preventDefault();
    alert("hello");
    let searchCity = searchCityEl.value;
    console.log(searchCity);// console log shows what ever user puts
  
    fetch(queryURL)
    .then(function(response){
    response.json();
    })
    .then(function(data){
        console.log(data)
    })
})