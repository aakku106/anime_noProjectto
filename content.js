function blinkNavbarArtLink() {
  var navArtLink = document.getElementById("navArtLink");

  // Add a class to initiate the blinking effect
  navArtLink.classList.add("blink");

  // Remove the class after a delay (e.g., 500ms)
  setTimeout(function () {
    navArtLink.classList.remove("blink");
  }, 5050);
}
