var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#city-search');

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }

    var queryString = './index.html?q=' + searchInputVal;

    location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);