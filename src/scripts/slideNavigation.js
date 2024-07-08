import "../styles/slideNav.css";
import { displayCurrentSlide } from "./changeSlide";

export default function slideNavigation(carouselObj, imageBand) {
  const container = createSlideNavContainer();
  populateNavWithBtns(container, carouselObj, imageBand);
  return container;
}

function createSlideNavContainer() {
  const navContainer = document.createElement("nav");
  return navContainer;
}

function createNavButton(imageIndex, carouselObj, imageBand) {
  const navBtn = document.createElement("button");
  navBtn.classList.add("slide-nav-btn");
  navBtn.addEventListener("click", () => {
    carouselObj.setCurrentSlide(imageIndex);
    displayCurrentSlide(carouselObj, imageBand);
  });
  return navBtn;
}

function populateNavWithBtns(navContainer, carouselObj, imageBand) {
  const myImgArray = carouselObj.getImageArray();
  myImgArray.forEach((element, idx) => {
    const myBtn = createNavButton(idx, carouselObj, imageBand);
    myBtn.classList.add(idx);
    navContainer.append(myBtn);
  });
}
