import frame from "./frame";
import carousel from "./carousel";
import "../styles/index.css";

const myCarousel = carousel();
const myFrame = frame();
myFrame.append(myCarousel);
document.body.append(myFrame);

function nextSlide(frame, carousel) {
  const frameWidth = frame.clientWidth;
  const slideMovement = -frameWidth;
  carousel.style.transform = `translateX(${slideMovement}px)`;
}

nextSlide(myFrame, myCarousel);
