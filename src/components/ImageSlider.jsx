import { useState } from "react";
import "../assets/style/info.scss";
import "../assets/style/banner.scss";

export default function ImageSlider({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const length = images.length;
  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };
  const previousSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };
  if (images.length < 2) {
    return (
      <>
        <img
          className="banner__location"
          src={images[currentImage]}
          alt="logement"
        />
      </>
    );
  } else {
    return (
      <>
        <span className="arrow-diaporama left" onClick={previousSlide}></span>
        <span className="arrow-diaporama right" onClick={nextSlide}></span>
        <p className="banner-text">
          {currentImage + 1}/{images.length}
        </p>
        <img
          className="banner__location"
          src={images[currentImage]}
          alt="logement"
        />
      </>
    );
  }
}
