APIKey = "716hc9i362cfpkvfqrvvo40o5f0p48uv"


// document.querySelector("#search-button").addEventListener("click", function (e) {
//     console.log(e)
//     e.preventDefault();
//     var searchInput = document.querySelector("#search-input").value;
//     if (searchInput === "") {
//         alert("enter a pet breed!")
//         return;
//     }
//     callWiki(searchInput)

// })

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


// Beginning of Pet Finder portion of the of the javascript *********

function getParams() {
    //get search parameters from the url
    var getParams = document.location.search.split('&');
    
    //get the search zip specifically
    var searchZip = getParams[0].split('=');
    console.log(searchZip);

    //get the search type specifically
    var searchType = getParams[1].split('=');
    console.log(searchType);

    findAPet(searchZip[1],searchType[1]);
}

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

// Array of objects to store pet information to add cards 

var listOfPets = [
    
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

        if (data) {
            savePetResults(data);
        }

    }).catch(function (err) {

        // Log any errors
        console.log('something went wrong', err);

    });

}

//function to update object array to display results from search
function savePetResults(data) {

    for (var i = 0; i < 20; i++) {
        var isPhoto = '';

        //check to see if photo available
        if (data.animals[i].photos.length) {
            isPhoto = data.animals[i].photos[0].full;
        } else {
            isPhoto = 'no photo available';
        }

        //check to see if phone number is listed 
        if(data.animals[i].contact.phone != null){
            var isPhone = data.animals[i].contact.phone;
        } else {
            isPhone = 'no phone number listed';
        }

        //check to see if email is listed 
        if(data.animals[i].contact.email != null){
            var isEmail = data.animals[i].contact.email;
        } else {
            isEmail = 'No e-mail listed';
        }

        //assign data to keys in object array 
        const object = {
        name: data.animals[i].name,
        age: data.animals[i].age,
        sex: data.animals[i].gender,
        breed: data.animals[i].breeds.primary,
        city: data.animals[i].contact.address.city,
        description: data.animals[i].description,
        phone: isPhone,
        photo: isPhoto,
        email: isEmail,
    };
        //push new index to array of objects
        listOfPets.push(object);

    }

    //display listOfPets to verify information is stored
    console.log(listOfPets);
}

function renderPetResults() {
    
    //checks to makesure the results control variable is less than the listOfPets object array length
    if (resultsControl < listOfPets.length) {
        //sets variable LoadPets to the index of listOfPets based on the value of results Control
        var loadPets = listOfPets[resultsControl];

        //loads pet details to the screen 
        petNameEL.textContent = loadPets.name;
        petAgeEL.textContent = loadPets.age;
        petSexEL.textContent = loadPets.sex;
        petBreedEl.textContent = loadPets.breed;
        petCityEl.textContent = loadPets.city;
        petDescrEl.textContent = loadPets.description;
        petPhoneEl.textContent = loadPets.phone;
        // petEmailEl.textContent = loadPets.email;
        document.getElementById('pet-image').src = loadPets.photo;
    }

}

//event listener for pet results slide control
resultsEL.addEventListener('click', function (event) {
    event.preventDefault();

    var element = event.target;

    if (element.matches("button")) {
        var selectedButton = element.getAttribute("id");
        console.log(selectedButton);
    }

    //if the right arrow is selected add one to the results control variable and calls the render Pet function
    if (selectedButton === 'next-btn' && resultsControl < 20) {
        resultsControl++;
        renderPetResults();
        //if the left arrow button is selected and the results control variable is not equal to 0, then subtract 1 from the results control and calls the render pet function
    } else if (selectedButton === 'prev-btn' && resultsControl != 0) {
        resultsControl--;
        renderPetResults();
    }

    console.log(resultsControl);
});

//function call for get params
getParams();