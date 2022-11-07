let apiKey = "bddbfb355365507f1fd422abd1989d50";
let userForm = $('#user-form');
let search = $('#search');
let cityName = $('#city-name');
let cityTemp = $('#city-temp');
let windTemp = $('#wind-temp');
// let userInput = $('#city-search');
// let historyButtons = $('#historyBtns');
let humidityTemp = $('#humidity-temp');
// const kelvin = 0;
// const celsius = kelvin - 273;
// let fahrenheit = celsius * (9/5) +32;
// fahrenheit = Math.floor(fahrenheit);<---math worked worked

function getWeatherSearch() {
  let citySearch = userForm.val();
  let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;
  let prevSearch = JSON.parse(localStorage.getItem("userInput")) || [];
  console.log(prevSearch);
  getWeather(requestUrl);
  if (!prevSearch.includes(userInput.val())) {
    prevSearch.push(userInput.val());
}
localStorage.setItem("userInput", JSON.stringify(prevSearch));
location.assign(requestUrl);
userInput.val("");
}

function getWeather(requestUrl) {
  fetch(requestUrl)
  .then(function(data) {
    console.log(data);
    cityName.text(`City: ${data.name}`);
    cityTemp.text(`Temp: ${Math.round(data - 273.15)} + °F`);
    windTemp.text(`Wind: ${data.speed} MPH`);
    humidityTemp.text(`Humidity: ${data.humidity}%`);
  });
}
// Math.round(temperature - 273.15)
$(document).ready(function () {
  let searchHistory = JSON.parse(localStorage.getItem('userInput'));
  for (let i = 0; i < searchHistory.length; i++) {
      let searchAgain = $('<li>').text(searchHistory[i]);
      searchAgain.attr('class', 'prev-btns');
      historyButtons.append(searchAgain);
  }
});

// searchBtn.on('click', geCity);
// historyButtons.on('click', '.prev-btns', function (ev) {
//   userInput.val($(ev.target).text());
//   geCity();
// });

search.on('submit', function (event) {
  event.preventDefault();
  getWeatherSearch();
  userForm.val('');
});

