const createCarousel = (imageArray, currentSlide = 0) => {
  let myImageArray = imageArray;
  let myCurrentSlide = currentSlide;

  const nextSlide = () => myCurrentSlide++;
  const previousSlide = () => myCurrentSlide--;
  const getImageArray = () => myImageArray;
  const getCurrentSlide = () => myCurrentSlide;
  const setCurrentSlide = (freshSlide) => (myCurrentSlide = freshSlide);

  return {
    nextSlide,
    previousSlide,
    getImageArray,
    getCurrentSlide,
    setCurrentSlide,
  };
};

export default createCarousel;
