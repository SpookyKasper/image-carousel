import "../styles/imageBand.css";

// Given an image array create a wide container with all the images inside
export default function imageBand(imageArray) {
  const imageBand = document.createElement("div");
  imageBand.classList.add("image-band");
  imageArray.forEach((img) => imageBand.append(createImageEl(img)));
  return imageBand;
}

function createImageEl(imageFile) {
  const image = document.createElement("img");
  image.src = imageFile;
  return image;
}
