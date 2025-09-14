import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselFuncStyle.css";
import img1 from "../../Assets/Home/Carousel-1.png";
import img2 from "../../Assets/Home/Carousel-2.png";
import img3 from "../../Assets/Home/Carousel-3.png";
import img4 from "../../Assets/Home/Carousel-4.png";
import img5 from "../../Assets/Home/Carousel-5.png";
// installed --  npm install react-slick slick-carousel
// npm install react-icons

const Carousel = () => {
  // Settings for react-slick carousel
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 4000, // Transition speed (in ms). More you put transition will take more slow
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 6000, // Auto-slide every 3 seconds
    pauseOnHover: true, // Pause autoplay when the user hovers over the carousel
    fade: true, // Enables fade-in/fade-out transition
    arrows: true, // Show navigation arrows
    prevArrow: (
      <div className="slick-arrow slick-prev">
        <span>&#10094;</span> {/* Left Arrow */}
      </div>
    ),
    nextArrow: (
      <div className="slick-arrow slick-next">
        <span>&#10095;</span> {/* Right Arrow */}
      </div>
    ),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            src={img1}
            alt="Image 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Image 2"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Image 3"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img4}
            alt="Image 4"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img5}
            alt="Image 5"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
