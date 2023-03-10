//element for search button
var searchButtonEl = document.querySelector('#search-button');


//on button click accept zip code and pet type selections link to the petinfo html file 
searchButtonEl.addEventListener('click', function (event) {
    event.preventDefault();

    //store user zip code 
    var chosenZip = document.getElementById('search-input').value;
    console.log(chosenZip);

    //store users chosen pet type 
    var chosenType = document.getElementById('pet-type').value;
    console.log(chosenType);

    //pass search parameters with link to petinfo.html
    if(chosenZip && chosenType != null){
    var queryString = './petinfo.html?q=' + chosenZip + '&type=' + chosenType;
    location.assign(queryString);
    } else{
        alert('Please enter your zip code and select from the dropdown.');
        return;
    }
});