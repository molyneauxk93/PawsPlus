
    
    
    var displayPet = document.getElementById("display-pets");
    var items = JSON.parse(localStorage.getItem("favorite"));
  
    if (Array.isArray(items)) { 
      items.forEach(item => { 

      for (i = 0; i < items.length; i++) {
        // Creates figure element to display pet
        var figure = document.createElement("figure");
        
        // Creates image element to display pet's image
        var img = document.createElement("img");
        img.setAttribute("src", items.photo); 
        
        // Creates caption element to display pet's name
        var caption = document.createElement("figcaption");
        caption.textContent = items.name; 
        
        figure.append(img, caption);
        
        
        displayPet.append(displayPet);
      };

      console.log(items)
    })
}
   
    

  
    
  
