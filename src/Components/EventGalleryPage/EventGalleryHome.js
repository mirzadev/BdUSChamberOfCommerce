import React, { useState } from "react";
import "./EventGalleryHomeStyles.css";
import BACC_Logo_Events from "../../Assets/Home/bacc_logo.png";
import image1 from "../../Assets/EventGallery/fobana1.jpg";
import image2 from "../../Assets/EventGallery/fobana2.jpg";
import image3 from "../../Assets/EventGallery/fobana3.jpg";
import image4 from "../../Assets/EventGallery/fobana1.jpg";

const EventGalleryHome = () => {
  // Array to hold image file paths
  const images = [image1, image2, image3, image4];

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Index for current image in modal

  // Open modal and set the selected image
  const openModal = (index) => {
    setIsModalOpen(true);
    setCurrentImageIndex(index);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="Event-container">
      <div className="Event-hero-section">
        <div className="hero-overlay">
          <h1>EVENTS GALLERY</h1>
        </div>
      </div>
      <div className="BACC_Logo_Event">
        <img id="BACC-logo" src={BACC_Logo_Events} alt="BACC logo" />
      </div>
      <h1>BACC EVENTS GALLERY</h1>
      <p className="Event-intro-text">
        Explore unforgettable moments captured in our gallery and relive the
        spirit of togetherness.
      </p>

      {/* Display the image thumbnails in a grid */}
      <div className="Event_gallery">
        {images.map((image, index) => (
          <div
            className="thumbnail"
            key={index}
            onClick={() => openModal(index)}
          >
            <img src={image} alt={`thumbnail-${index}`} />
          </div>
        ))}
      </div>

      {/* Modal for image enlargement */}
      {isModalOpen && (
        <div
          className="modal"
          onClick={(e) => e.target.classList.contains("modal") && closeModal()}
        >
          <div className="modal-content">
            <div className="image-wrapper" onClick={(e) => e.stopPropagation()}>
              {/* Prev */}
              <button
                className="arrow-button prev"
                onClick={prevImage}
                aria-label="Previous image"
              >
                &lsaquo;
              </button>

              <img
                src={images[currentImageIndex]}
                alt={`modal-img-${currentImageIndex}`}
                className="modal-image"
              />

              {/* Next */}
              <button
                className="arrow-button next"
                onClick={nextImage}
                aria-label="Next image"
              >
                &rsaquo;
              </button>

              {/* Close */}
              <button className="close" onClick={closeModal} aria-label="Close">
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGalleryHome;
