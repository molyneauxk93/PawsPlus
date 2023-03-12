window.onload = () => {
    var displayPet = document.getElementById("display-pets");
    var items = JSON.parse(localStorage.getItem("favorite"));
  
    if (Array.isArray(items)) {
        items.forEach(items => {
            var figure = document.createElement("")
        })
    }




    items.forEach(item => {
      // Create a figure element to display the pet
      var figure = document.createElement("figure");
      
      // Create an image element to display the pet's image
      var img = document.createElement("img");
      img.src = item.image; // Replace "image" with the key for the image in your object
      
      // Create a caption element to display the pet's name
      var caption = document.createElement("figcaption");
      caption.textContent = item.name; // Replace "name" with the key for the name in your object
      
      // Add the image and caption elements to the figure element
      figure.appendChild(img);
      figure.appendChild(caption);
      
      // Add the figure element to the displayPet element
      displayPet.appendChild(figure);
    });
  };
  