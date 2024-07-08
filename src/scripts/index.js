import frame from "./frame";
import "../styles/index.css";
import imageBand from "./imageBand";
import { nextSlideButton, previousSlideBtn } from "./changeSlide";
import createCarousel from "./carousel";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

const myImages = [image1, image2, image3];
const myFrame = frame();
const myImgBand = imageBand(myImages);
const myCarousel = createCarousel(myImages);
const myPreviousBtn = previousSlideBtn(myCarousel, myImgBand);
const myNextBtn = nextSlideButton(myCarousel, myImgBand);

myFrame.append(myImgBand);
document.body.append(myPreviousBtn, myFrame, myNextBtn);
