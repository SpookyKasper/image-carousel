const createCarousel = (imageArray, currentSlide = 0) => {
  let myImageArray = imageArray;
  let myCurrentSlide = currentSlide;

  const nextSlide = () => myCurrentSlide++;
  const previousSlide = () => myCurrentSlide--;
  const getImageArray = () => myImageArray;
  const getCurrentSlide = () => myCurrentSlide;
  const setCurrentSlide = (freshSlide) => (myCurrentSlide = freshSlide);
  const moveOneSlide = (direction) => {
    direction === 1 ? previousSlide() : nextSlide();
  };

  return {
    nextSlide,
    previousSlide,
    getImageArray,
    getCurrentSlide,
    setCurrentSlide,
    moveOneSlide,
  };
};

export default createCarousel;
