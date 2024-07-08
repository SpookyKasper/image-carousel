export function nextSlideButton(carouselObj, imageBand) {
  const nextSlideBtn = document.createElement("button");
  nextSlideBtn.textContent = ">";
  nextSlideBtn.classList.add("change-slide-btn");
  nextSlideBtn.addEventListener("click", () => {
    nextSlide(carouselObj, imageBand);
  });
  return nextSlideBtn;
}

export function previousSlideBtn(carouselObj, imageBand) {
  const previousSlideBtn = document.createElement("button");
  previousSlideBtn.textContent = "<";
  previousSlideBtn.classList.add("change-slide-btn");
  previousSlideBtn.addEventListener("click", () => {
    previousSlide(carouselObj, imageBand);
  });
  return previousSlideBtn;
}

function nextSlide(carouselObj, imageBand) {
  const currentSlide = carouselObj.getCurrentSlide();
  const initialPosition = -currentSlide * 500;
  const endPosition = initialPosition - 500;
  carouselObj.nextSlide();
  imageBand.style.transform = `translateX(${endPosition}px)`;
}

function previousSlide(carouselObj, imageBand) {
  const currentSlide = carouselObj.getCurrentSlide();
  const initialPosition = -currentSlide * 500;
  const endPosition = initialPosition + 500;
  carouselObj.previousSlide();
  imageBand.style.transform = `translateX(${endPosition}px)`;
}
