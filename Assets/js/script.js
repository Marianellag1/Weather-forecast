var searchCityEl = document.getElementById("city-search");
var  primarySearchbtnEl = document.getElementById("search-btn");

primarySearchbtnEl.addEventListener("click", function (e) {//search button works!
    e.preventDefault();
    alert("hello");
    let searchCity = searchCityEl.value;
    console.log(searchCity);// console log shows what ever user puts
})