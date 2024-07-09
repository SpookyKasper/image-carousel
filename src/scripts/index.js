import "../styles/index.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import frame from "./frame";
import imageBand from "./imageBand";
import changeSlideBtn from "./changeSlideBtn";
import createCarousel from "./carousel";
import slideNavigation from "./slideNavigation";
import displayCurrentSlide from "./displayCurrentSlide";

const myImages = [image1, image2, image3];
const myFrame = frame();
const myImgBand = imageBand(myImages);
const myCarousel = createCarousel(myImages);
const mySlideNavigation = slideNavigation(myCarousel, myImgBand);
const previousSlideBtn = changeSlideBtn(1, myCarousel, myImgBand);
const nextSlideBtn = changeSlideBtn(-1, myCarousel, myImgBand);
const frameWithButtons = document.createElement("div");
frameWithButtons.classList.add("frame-with-buttons");
frameWithButtons.append(previousSlideBtn, myFrame, nextSlideBtn);

myFrame.append(myImgBand);
document.body.append(frameWithButtons, mySlideNavigation);
displayCurrentSlide(myCarousel, myImgBand);

// setInterval(() => {
//   nextSlideBtn.click();
// }, 5000);
