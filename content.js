function blinkNavbarArtLink() {
  var navArtLink = document.getElementById("navArtLink");

  // Add a class to initiate the blinking effect
  navArtLink.classList.add("blink");

 
  setTimeout(function () {
    navArtLink.classList.remove("blink");
  }, 5000);
}
