//array to store objects retrieved from local storage
var favoritePets = [];

//for loop to go through local storage and retrieve all items listed as favorite followed by a count number from key naming convention
for (var i = 0; i < 50; i++) {

  var favListing = localStorage.getItem('favorite' + i);
  //is favListing is not equal to null push to the favorite Pets object array
  if (favListing) {
    favListing = JSON.parse(favListing);
    favoritePets.push(favListing);
  }

}
//console log to check object array 
console.log(favoritePets);

//Wikipedia API call
APIKey = "716hc9i362cfpkvfqrvvo40o5f0p48uv"

function callWiki(petBreed) {
  var wikiUrl = "https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=" + petBreed + "&limit=10&api=" + APIKey

  fetch(wikiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      var petInfoLink = document.querySelector("#wiki-btn");

      if (data.pages.length > 0) {
        var pageTitle = data.pages[0].title;
        var pageUrl = "https://en.wikipedia.org/wiki/" + pageTitle;
        // petInfoLink.innerHTML = ``;
        // petInfoLink.setAttribute('href', `https://en.wikipedia.org/wiki/${data.pages[0].title}`)
        // window.location.href = `https://en.wikipedia.org/wiki/${data.pages[0].title}`;

        //change to open wiki page in new tab, commented section above opens wiki in same window.
        window.open(`https://en.wikipedia.org/wiki/${data.pages[0].title}`, '_blank').focus();
      } else {
        petInfoLink.innerHTML = "No results found";
      }
    })
}

var clearButtonEl = document.getElementById('clear-btn');

var resultsEL = document.querySelector('.button-control');


//elements to render pet information to the card 
var petNameEL = document.querySelector('#pet-name');
var petAgeEL = document.querySelector('#pet-age');
var petSexEL = document.querySelector('#pet-sex');
var petBreedEl = document.querySelector('#pet-breed');
var petCityEl = document.querySelector('#pet-city');
var petDescrEl = document.querySelector('#pet-description');
var petPhoneEl = document.querySelector('#pet-phone');
var petEmailEl = document.querySelector('#pet-email');


var resultsControl = 0;

function renderPetResults() {

  //checks to makesure the results control variable is less than the favoritePets object array length
  if (resultsControl < favoritePets.length) {
    //sets variable LoadPets to the index of favoritePets based on the value of results Control
    var loadPets = favoritePets[resultsControl];

    //loads pet details to the screen 
    petNameEL.textContent = loadPets.name;
    petAgeEL.textContent = loadPets.age;
    petSexEL.textContent = loadPets.sex;
    petBreedEl.textContent = loadPets.breed;
    petCityEl.textContent = loadPets.city;
    petDescrEl.textContent = loadPets.description;
    petPhoneEl.textContent = loadPets.phone;
    petEmailEl.textContent = loadPets.email;
    document.getElementById('pet-image').src = loadPets.photo;
  }

}

resultsEL.addEventListener('click', function (event) {
  event.preventDefault();

  var element = event.target;

  if (element.matches("button")) {
    var selectedButton = element.getAttribute("id");
    console.log(selectedButton);
  }

  //if the right arrow is selected add one to the results control variable and calls the render Pet function
  if (selectedButton === 'next-btn' && resultsControl < favoritePets.length) {
    resultsControl++;
    renderPetResults();
    //if the left arrow button is selected and the results control variable is not equal to 0, then subtract 1 from the results control and calls the render pet function
  } else if (selectedButton === 'prev-btn' && resultsControl != 0) {
    resultsControl--;
    renderPetResults();
  }

  console.log(resultsControl);
});

//event listener for wiki api call on more info button click
var wikiEl = document.querySelector("#wiki-btn");
wikiEl.addEventListener("click", function (e) {
  console.log(e)
  e.preventDefault();
  var petBreed = favoritePets[resultsControl].breed
  callWiki(petBreed)

});

//clear favorites button for local storage
clearButtonEl.addEventListener('click', function (event) {
  event.preventDefault();

  //clear local storage and array and reload page
  localStorage.clear();
  favoritePets = [];
  location.reload();
});


//function call to render favorite pets 
renderPetResults();






