export function nextSlideButton(carouselObj, imageBand) {
  const nextSlideBtn = document.createElement("button");
  nextSlideBtn.textContent = ">";
  nextSlideBtn.classList.add("change-slide-btn");
  nextSlideBtn.addEventListener("click", () => {
    changeSlide(-1, carouselObj, imageBand);
  });
  return nextSlideBtn;
}

export function previousSlideBtn(carouselObj, imageBand) {
  const previousSlideBtn = document.createElement("button");
  previousSlideBtn.textContent = "<";
  previousSlideBtn.classList.add("change-slide-btn");
  previousSlideBtn.addEventListener("click", () => {
    changeSlide(1, carouselObj, imageBand);
  });
  return previousSlideBtn;
}

function changeSlide(direction, carouselObj, imageBand) {
  const currentSlide = carouselObj.getCurrentSlide();
  const initialPosition = -currentSlide * 500;
  const endPosition = direction * 500 + initialPosition;
  direction === 1 ? carouselObj.previousSlide() : carouselObj.nextSlide();
  imageBand.style.transform = `translateX(${endPosition}px)`;
}
