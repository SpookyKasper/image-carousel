export default function displayCurrentSlide(carouselObj, imageBand) {
  const currentSlide = carouselObj.getCurrentSlide();
  const initialPosition = -currentSlide * 500;
  imageBand.style.transform = `translateX(${initialPosition}px)`;
  highlightNavBtn(carouselObj);
}

function highlightNavBtn(carouselObj) {
  const navButtons = document.querySelectorAll(".slide-nav-btn");
  const currentS = carouselObj.getCurrentSlide();
  navButtons.forEach((btn) => {
    btn.classList.remove("selected");
  });
  navButtons[currentS].classList.add("selected");
}
