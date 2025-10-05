import "./PhotoGalleryStyles.css";
import PhotoGalleryData from "./PhotoGalleryData";
import PhotoGallery1 from "../../../Assets/EventGallery/PhotoGalleryMain/Photo-1.jpg";
import PhotoGallery2 from "../../../Assets/EventGallery/PhotoGalleryMain/Photo-2.jpg";
import PhotoGallery3 from "../../../Assets/EventGallery/PhotoGalleryMain/Photo-3.jpg";
import PhotoGallery4 from "../../../Assets/EventGallery/PhotoGalleryMain/Photo-4.jpg";
import PhotoGallery5 from "../../../Assets/EventGallery/PhotoGalleryMain/Photo-5.jpg";
import PhotoGallery6 from "../../../Assets/EventGallery/PhotoGalleryMain/Photo-6.jpg";
import PhotoGallery7 from "../../../Assets/EventGallery/PhotoGalleryMain/Photo-7.jpg";
import PhotoGallery8 from "../../../Assets/EventGallery/PhotoGalleryMain/Photo-8.jpg";
import PhotoGallery9 from "../../../Assets/EventGallery/PhotoGalleryMain/Photo-9.jpg";
import PhotoGallery10 from "../../../Assets/EventGallery/PhotoGalleryMain/Photo-10.jpg";
import PhotoGallery11 from "../../../Assets/EventGallery/PhotoGalleryMain/Photo-11.jpg";

function PhotoGalleryAll() {
  return (
    <div className="page-container">
      <h1>YEARLY PHOTO GALLERY</h1>
      <p>Select Your Galery To View</p>
      <div className="page-overview-cart">
        <PhotoGalleryData
          image={PhotoGallery1}
          heading="YEAR-2015"
          url="/year2015"
        />
        <PhotoGalleryData
          image={PhotoGallery2}
          heading="YEAR-2016"
          url="/year2016"
        />
        <PhotoGalleryData
          image={PhotoGallery3}
          heading="YEAR-2017"
          url="/year2017"
        />
        <PhotoGalleryData
          image={PhotoGallery4}
          heading="YEAR-2018"
          url="/year2018"
        />
        <PhotoGalleryData
          image={PhotoGallery5}
          heading="YEAR-2019"
          url="/year2019"
        />
        <PhotoGalleryData
          image={PhotoGallery6}
          heading="YEAR-2020"
          url="/year2020"
        />

        <PhotoGalleryData
          image={PhotoGallery7}
          heading="YEAR-2021"
          url="/year021"
        />
        <PhotoGalleryData
          image={PhotoGallery8}
          heading="YEAR-2022"
          url="/year2022"
        />
        <PhotoGalleryData
          image={PhotoGallery9}
          heading="YEAR-2023"
          url="/year2023"
        />

        <PhotoGalleryData
          image={PhotoGallery10}
          heading="YEAR-2024"
          url="/year024"
        />
        <PhotoGalleryData
          image={PhotoGallery11}
          heading="YEAR-2025"
          url="/year025"
        />
      </div>
    </div>
  );
}

export default PhotoGalleryAll;
