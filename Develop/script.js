
APIKey = "716hc9i362cfpkvfqrvvo40o5f0p48uv"


document.querySelector("#search-button").addEventListener("click", function (e) {
    console.log(e)
    e.preventDefault();
    var searchInput = document.querySelector("#search-input").value;
    if (searchInput === "") {
        alert("enter a pet breed!")
        return;
    }
    callWiki(searchInput)

})

function callWiki(breed) {
    var wikiUrl = "https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=" + breed + "&limit=10&api=" + APIKey

    fetch(wikiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var petInfoLink = document.querySelector("#pet-info-link");

            if (data.pages.length > 0) {
                var pageTitle = data.pages[0].title;
                var pageUrl = "https://en.wikipedia.org/wiki/" + pageTitle;
                // petInfoLink.innerHTML = ``;
                petInfoLink.setAttribute('href', `https://en.wikipedia.org/wiki/${data.pages[0].title}`)
            } else {
                petInfoLink.innerHTML = "No results found";
            }
        })
}


// Beginning of Pet Finder portion of the of the javascript **************

var petFinderEl = document.querySelector('.pet-form');
var searchButtonEl = document.querySelector('.search-btn');

// Array of objects to store pet information to add cards 

var listOfPets = [
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
},
{
    name: 'placeholder',
    age: 'placeholder',
    sex: 'placeholder',
    breed: 'placeholder',
    city: 'placeholder',
    description: 'placeholder',
    phone: 'placeholder',
    photosrc: 'placeholder',
}

]


function findAPet(zipCode, petType) {
//Pet Finder Token Retrieval and API call using Fetch 

var key = 'qgajQp5Sh4wBqaiW1tYAfGUswfOhe6QFezqLK4RvTAbsQLaidf';
var secret = '3kKyNX18yAsbYwc31rTWewjvWxdUyFG0ostuqJJz';


var statusVar = 'adoptable';
var distanceFrom = '50';

//fetch token from pet finder
fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function (resp) {

	// Return the response as JSON
	return resp.json();

}).then(function (data) {

	// Logs the  token to the screen 
	console.log('token', data);

    // Second API call using the token that we recieved
	return fetch('https://api.petfinder.com/v2/animals?location=' + zipCode + '&status=' + statusVar + '&type=' + petType + '&distance=' + distanceFrom, {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

}).then(function (resp) {

	// Return the API response as JSON
	return resp.json();

}).then(function (data) {

	// Log the pet data by zip code and chosen pet type within a certain distance from zip code that are status 'adoptable'
	console.log('pets', data);

    if(data) {
    displayPetResults(data);
    }

}).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);

});

}
//function to update object array to display results from search
function displayPetResults(data) {

    for(var i=0; i < listOfPets.length; i++){
        
        //assign data to keys in object array 

        listOfPets[i].name = data.animals[i].name;
        listOfPets[i].age = data.animals[i].age;
        listOfPets[i].sex = data.animals[i].gender;
        listOfPets[i].breed = data.animals[i].breeds.primary;
        listOfPets[i].city = data.animals[i].contact.address.city;
        listOfPets[i].description = data.animals[i].description;
        listOfPets[i].phone = data.animals[i].contact.address.phone;

        //check to see if photo available
        if(data.animals[i].photos.length){
        listOfPets[i].photosrc = data.animals[i].photos[0].full;
        } else {
            listOfPets[i].photosrc = 'no photo available';
        }

    }
    //display listOfPets to verify information is stored
    console.log(listOfPets);
}

//on button click accept zip code and pet type selections and pass to find A Pet function call 
searchButtonEl.addEventListener('click', function(event){
    event.preventDefault();

    //store user zip code 
    var chosenZip = document.getElementById('pet-zip').value;
    console.log(chosenZip);

    //store users chosen pet type 
    var chosenType = document.getElementById('pet-type').value;
    console.log(chosenType);

    //calls find a pet function for api call 
    findAPet(chosenZip, chosenType);
});
