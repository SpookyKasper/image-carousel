import "../styles/index.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import frame from "./frame";
import imageBand from "./imageBand";
import changeSlideBtn from "./changeSlide";
import createCarousel from "./carousel";
import slideNavigation from "./slideNavigation";

const myImages = [image1, image2, image3];
const myFrame = frame();
const myImgBand = imageBand(myImages);
const myCarousel = createCarousel(myImages);
const previousSlideBtn = changeSlideBtn(1, myCarousel, myImgBand);
const nextSlideBtn = changeSlideBtn(-1, myCarousel, myImgBand);
const mySlideNavigation = slideNavigation(myCarousel, myImgBand);

myFrame.append(myImgBand);
document.body.append(
  previousSlideBtn,
  myFrame,
  nextSlideBtn,
  mySlideNavigation
);
