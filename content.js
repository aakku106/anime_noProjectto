window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("blackHole").style.display = "block";

  setTimeout(() => {
    document.getElementById("blackHole").style.display = "none";
  }, 1690);
});
function blinkNavbarArtLink() {
  var navArtLink = document.getElementById("navArtLink");

  navArtLink.classList.add("blink");

  setTimeout(function () {
    navArtLink.classList.remove("blink");
  }, 5000);
}
