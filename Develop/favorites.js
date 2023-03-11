//sets array for favorites data to be added into
var favorites = JSON.parse(localSotage.getItem('favorites')) || [];

//selects the element in html
var favoritesButton = document.getElementById('favorit-btn');

//calls addToFavorites function 
favoritesButton.addEventListener('click', addToFavorites)

function addToFavorites() {
    /* var data = {pet: selectedPet }; */
    favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(data);
    localStorage.setItem('favorites', HSON.stringify(favorites))
}


//retrieve favorites
var savedFavs = JSON.parse(localStorage.getItem('favorites')) || [];


//display on favorites 
localStorage.setItem('selectedPet',JSON.stringify(currentPet));



var selectedPet = JSON.parse(localStorage.getItem('selectedPet'));


function saveToLocalStorage(petData) {
    localStorage.setItem('savedPet', JSON.stringify(petData))

    }
    
function savePetResults(data){
    for (var i = 0; i < 20; i++) {
        listOfPets.push(emptyOject)
    }
    console.log(listOfPets);
}
