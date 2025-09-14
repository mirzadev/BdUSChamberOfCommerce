import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurMembersCarouselFuncStyle.css";
import img1 from "../../Assets/OurMembers/AmeBdBusinessAssn.png";
import img2 from "../../Assets/OurMembers/AnandaMela.png";
import img3 from "../../Assets/OurMembers/Bangladesh-Association-Of-Montreal-logo.png";
import img4 from "../../Assets/OurMembers/BangladeshAssociationOfFlorida.jpg";
import img5 from "../../Assets/OurMembers/BdAssnOfGreaterChicago.png";
import img6 from "../../Assets/OurMembers/BdAssnOfMichigan.png";
import img7 from "../../Assets/OurMembers/BdAssnOfPittsburg.png";
import img8 from "../../Assets/OurMembers/BdAssnOfSanAntonio.png";
import img9 from "../../Assets/OurMembers/Canada-Bangladesh-Solidarity-CBS.png";
import img10 from "../../Assets/OurMembers/shatadal_logo.png";

const MemberCarousel = () => {
  // Settings for react-slick carousel
  const settings = {
    dots: false, // Disable the default dots
    infinite: true, // Infinite looping
    speed: 800, // Transition speed (in ms)
    slidesToShow: 5, // Show 5 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Auto-slide every 5 seconds
    pauseOnHover: true, // Pause autoplay when the user hovers over the carousel
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
    responsive: [
      {
        breakpoint: 1024, // iPhone screens
        settings: {
          slidesToShow: 1, // Show only 1 slide at a time on smaller screens
          autoplaySpeed: 3000, // Speed up autoplay for better experience on mobile
        },
      },
    ],
  };

  // List of images and titles
  const images = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
    { src: img9 },
    { src: img10 },
  ];

  return (
    <div className="memPart-carousel-container">
      <div className="memPat-title">
        <h1 id="memPart-com-title">Our Proud Members</h1>
        <p>
          Join one of the largest networks of companies and professionals
          working to expand their business internationally.
        </p>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="memPart-carousel-item">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              style={{ width: "95%", height: "auto" }}
            />
            <div className="memPart-appt-title">{image.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MemberCarousel;
