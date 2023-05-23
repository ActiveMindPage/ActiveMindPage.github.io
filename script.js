window.onload = function () {
  var image = document.getElementById("centered-image");
  var buttons = document.querySelectorAll(".button");

  setTimeout(function () {
    image.style.opacity = "0"; // Disappears the image
    image.style.pointerEvents = "none"; // Removes image entirely
    buttons.forEach(function (button) {
      button.classList.add("fade-in");
    });
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
