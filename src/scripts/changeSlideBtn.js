import displayCurrentSlide from "./displayCurrentSlide";

export default function changeSlideBtn(direction, carouselObj, imageBand) {
  const changeSlideButton = document.createElement("button");
  changeSlideButton.textContent = direction === 1 ? "<" : ">";
  changeSlideButton.classList.add("change-slide-btn");
  changeSlideButton.addEventListener("click", () => {
    carouselObj.moveOneSlide(direction, carouselObj);
    displayCurrentSlide(carouselObj, imageBand);
  });
  return changeSlideButton;
}
