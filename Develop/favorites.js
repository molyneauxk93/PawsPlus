window.onload = () => {
    var = document.getElementById("favorite");
    const items = JSON.parse(localStorage.getItem("favorite"));
    
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      myList.appendChild(li);
    });
  };