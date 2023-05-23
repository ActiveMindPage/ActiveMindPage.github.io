window.onload = function () {
  var image = document.getElementById("centered-image");
  var textContainer = document.getElementById("text-container");
  var buttons = document.querySelectorAll(".button");

  image.style.opacity = "0"; // Start with transparent image
  textContainer.style.opacity = "0"; // Start with transparent text

  setTimeout(function () {
    image.style.pointerEvents = "none"; // Removes image entirely

    buttons.forEach(function (button) {
      button.style.opacity = "1"; // Fade-in for buttons
    });

    setTimeout(function () {
      textContainer.style.opacity = "1"; // Fade-in for text-container
    }, 500); // Fade-in delay
  }, 1000);
};

function handleButtonClick(buttonNumber) {
  console.log("Button " + buttonNumber + " clicked!");
}

window.addEventListener("load", function () {
  var image = document.getElementById("centered-image");
  image.addEventListener("animationend", function () {
    image.style.display = "none";
  });
});
