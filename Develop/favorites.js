//sets array for favorites data to be added into
var favorites = []

//selects the element in html
var favoritesButton = document.getElementById('favorit-btn');

//calls addToFavorites function 
favoritesButton.addEventListener('click', addToFavorites)

function addToFavorites() {
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];


favorites.push(window.location.href);

localStorage.setItem('favorites', JSON.stringify(favorites));
}

//retrieve favorites
var savedFavs = JSON.parse(localStorage.getItem('favorites')) || [];


