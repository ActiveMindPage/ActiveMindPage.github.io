window.onload = function () {
  var image = document.getElementById("centered-image");
  var buttons = document.querySelectorAll(".button");

  setTimeout(function () {
    image.style.opacity = "0";
    buttons.forEach(function (button) {
      button.classList.add("fade-in");
    });
  }, 2000);
};
