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
    loopSlides();
  };
  const loopSlides = () => {
    if (myCurrentSlide < 0) {
      setCurrentSlide(imageArray.length - 1);
    }
    if (myCurrentSlide > imageArray.length - 1) {
      setCurrentSlide(0);
    }
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
