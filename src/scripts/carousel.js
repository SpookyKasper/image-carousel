const createCarousel = (imageArray, currentSlide = 0) => {
  let numSlides = imageArray.length;
  let myCurrentSlide = currentSlide;

  const nextSlide = () => myCurrentSlide++;
  const previousSlide = () => myCurrentSlide--;
  const getNumSlides = () => numSlides;
  const getCurrentSlide = () => myCurrentSlide;

  return {
    nextSlide,
    previousSlide,
    getNumSlides,
    getCurrentSlide,
  };
};

export default createCarousel;
