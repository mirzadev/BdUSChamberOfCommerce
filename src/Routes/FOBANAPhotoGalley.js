import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import FOBPhotoGallery from "../Components/Multimedia/PhotoGallery/FOBPhotoGallery";
import PhotoGalleryAll from "../Components/Multimedia/PhotoGalleryYearly/PhotoGalleryAll/PhotoGalleryHome";

function PhotoGallery() {
  return (
    <>
      <Navbar />
      <FOBPhotoGallery />
      <PhotoGalleryAll />
      <Footer />
    </>
  );
}

export default PhotoGallery;
