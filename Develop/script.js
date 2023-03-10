
APIKey = "716hc9i362cfpkvfqrvvo40o5f0p48uv"


// https://rapidapi.com/myapos--FqlEzvrlv/api/dog-breeds2/pricing
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0faeda962fmshec8c2de07f90c17p1dd82bjsn9fe65b1319a5',
// 		'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
// 	}
// };

// fetch('https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/Cretan%20Hound', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


document.querySelector("#search-button").addEventListener("click", function(e){
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
            petInfoLink.setAttribute('href',`https://en.wikipedia.org/wiki/${data.pages[0].title}`)
        } else {
            petInfoLink.innerHTML = "No results found";
        }
    })
}


