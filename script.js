
// Get the menu button and the menu
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");
// check if the element exists and is a DOM element


// Add an event listener to the menu button to toggle the menu on and off
menuButton.addEventListener("click", function() {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menuButton.src = "./assets/close.svg";
  } else {
    menu.classList.add("hidden");
    menuButton.src = "./assets/open.svg";
  }
});
