export default function changeSlideBtn(direction, carouselObj, imageBand) {
  const changeSlideButton = document.createElement("button");
  changeSlideButton.textContent = direction === 1 ? "<" : ">";
  changeSlideButton.classList.add("change-slide-btn");
  changeSlideButton.addEventListener("click", () => {
    changeSlide(direction, carouselObj, imageBand);
  });
  return changeSlideButton;
}

function changeSlide(direction, carouselObj, imageBand) {
  const currentSlide = carouselObj.getCurrentSlide();
  const initialPosition = -currentSlide * 500;
  const endPosition = direction * 500 + initialPosition;
  direction === 1 ? carouselObj.previousSlide() : carouselObj.nextSlide();
  imageBand.style.transform = `translateX(${endPosition}px)`;
}
