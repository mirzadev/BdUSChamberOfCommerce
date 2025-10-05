import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/FooterItems/Footer";
import EventGalleryHome from "../Components/EventGalleryPage/EventGalleryHome";
import PhotoGalleryAll from "../Components/EventGalleryPage/YearlyPhotoGalleryPage/PhotoGalleryHome";

function EventGallery() {
  return (
    <>
      <Navbar />
      <EventGalleryHome />
      <PhotoGalleryAll />
      <Footer />
    </>
  );
}

export default EventGallery;
