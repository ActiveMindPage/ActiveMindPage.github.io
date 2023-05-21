window.onload = function () {
  var image = document.getElementById("centered-image");
  image.classList.add("animate");

  function animateImage() {
    image.style.transform = "scale(1.5)";
    image.style.opacity = "0.5";
    setTimeout(function () {
      image.style.transform = "scale(1)";
      image.style.opacity = "1";
    }, 2000);
    setTimeout(animateImage, 4000);
  }

  animateImage();
};
