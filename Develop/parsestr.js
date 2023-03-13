// Get the text content of the element that displays the pet breed

var breedElement = document.querySelector('#breed');
var breedName = breedElement.textContent.trim();
// Call a function to create the link to the Wikipedia page
const wikipediaLink = createWikipediaLink(breedName);

function createWikipediaLink(breedName) {
    const wikipediaUrl = `https://en.wikipedia.org/wiki/${breedName}`;
    const link = document.createElement('a');
    link.href = wikipediaUrl;
    link.textContent = `Learn more about ${breedName} on Wikipedia`;
    return link;
  }

const wikipediaLink = createWikipediaLink(breedName);
const container = document.querySelector('#link-container');
container.appendChild(wikipediaLink);

  