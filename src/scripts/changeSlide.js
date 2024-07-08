export default function changeSlideBtn(direction, carouselObj, imageBand) {
  const changeSlideButton = document.createElement("button");
  changeSlideButton.textContent = direction === 1 ? "<" : ">";
  changeSlideButton.classList.add("change-slide-btn");
  changeSlideButton.addEventListener("click", () => {
    changeSlide(direction, carouselObj, imageBand);
    displayCurrentSlide(carouselObj, imageBand);
  });
  return changeSlideButton;
}

function changeSlide(direction, carouselObj) {
  direction === 1 ? carouselObj.previousSlide() : carouselObj.nextSlide();
}

export function displayCurrentSlide(carouselObj, imageBand) {
  const currentSlide = carouselObj.getCurrentSlide();
  const initialPosition = -currentSlide * 500;
  imageBand.style.transform = `translateX(${initialPosition}px)`;
}
