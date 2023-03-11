
APIKey = "716hc9i362cfpkvfqrvvo40o5f0p48uv"

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