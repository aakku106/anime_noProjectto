function toggleMenu() {
  console.log("toggleMenu function executed");

  var menuIcon = document.getElementById("menu-icon");
  var menuBtnClose = document.getElementById("menu-btn-close");
  var openedImage = document.getElementById("opened-image");
  var navigationText = document.getElementById("navigation-text"); // Get the navigation text element
  var body = document.body;

  openedImage.classList.toggle("active"); // Toggle the 'active' class
  body.classList.toggle("active"); // Toggle the 'active' class on the body
  navigationText.classList.toggle("active"); // Toggle the 'active' class on the navigation text

  if (menuIcon.style.display !== "none") {
    // If menu icon is visible, hide it and show close menu button
    menuIcon.style.display = "none";
    menuBtnClose.style.display = "block";
    openedImage.src = "https://naruto-official.com/common/header/menu.png";
    openedImage.style.display = "block";
    navigationText.style.display = "block"; // Display the navigation text
    return;
  }

  // If close menu button is visible, hide it and show menu icon
  menuIcon.style.display = "block";
  menuBtnClose.style.display = "none";
  openedImage.style.display = "none";
  navigationText.style.display = "none"; // Hide the navigation text
}
