let searchBtn = $('#search-btn');
let userInput = $('#city-search');
let historyButtons = $('#historyBtns');

function geCity() {
    let userSearch = userInput.val();
    let prevSearch = JSON.parse(localStorage.getItem("userInput")) || [];

    if (!prevSearch.includes(userInput.val())) {
        prevSearch.push(userInput.val());
    }
    localStorage.setItem("userInput", JSON.stringify(prevSearch));
    location.assign('/display.html' + `q=${userSearch}`);
    userInput.val("");
}

$(document).ready(function () {
    let searchHistory = JSON.parse(localStorage.getItem('userInput'));
    for (let i = 0; i < searchHistory.length; i++) {
        let searchAgain = $('<li>').text(searchHistory[i]);
        searchAgain.attr('class', 'prev-btns');
        historyButtons.append(searchAgain);
    }
});

searchBtn.on('click', geCity);
historyButtons.on('click', '.prev-btns', function (ev) {
    userInput.val($(ev.target).text());
    geCity();
});