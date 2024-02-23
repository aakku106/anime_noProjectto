function updateDateTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  document.getElementById("currentDateTime").textContent = formattedDateTime;
}

function updateStatusAnimation() {
  const updateStatusElement = document.getElementById("updateStatus");
  let dots = 0;

  setInterval(() => {
    dots = (dots + 1) % 4;
    updateStatusElement.textContent = "Updating" + ".".repeat(dots);
  }, 500);
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Start the updating animation
updateStatusAnimation();

// Initial update
updateDateTime();
function blinkNavbarArtLink() {
  var navArtLink = document.getElementById("navArtLink");

  // Add a class to initiate the blinking effect
  navArtLink.classList.add("blink");

  // Remove the class after a delay
  setTimeout(function () {
    navArtLink.classList.remove("blink");
  }, 5069);
}
//
//
// JavaScript
document.querySelector(".buttonOnLast").addEventListener("click", function () {
  // Move the button downward by changing its top margin
  this.style.marginTop = "80px";

  // Shrink the button by reducing its padding
  this.style.padding = "0.1vw";

  // fading effect by adding a class
  this.classList.add("clicked");

  // Set a delay before redirecting the page
  setTimeout(() => {
    window.location.href = "./content.html";
  }, 3000); 
});
