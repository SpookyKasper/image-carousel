import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import "../styles/carousel.css";

const images = [image1, image2, image3];

// Make an very wide image with all the other images
export default function carousel() {
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");
  images.forEach((img) => carousel.append(createImageEl(img)));
  return carousel;
}

function createImageEl(imageFile) {
  const image = document.createElement("img");
  image.src = imageFile;
  return image;
}
