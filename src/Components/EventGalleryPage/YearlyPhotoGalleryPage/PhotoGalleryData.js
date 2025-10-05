import "./PhotoGalleryStyles.css";
import { Link } from "react-router-dom";

function PhotoGalleryData(props) {
  const handleClick = () => {};
  return (
    <div className="PhotoGalleryDataCart">
      <div className="PhotoGalleryDataCart-image">
        <img src={props.image} alt="image" />
      </div>
      <h2>{props.heading}</h2>

      <Link to={props.url} className="no-underline">
        <button onClick={handleClick} className="event-button">
          Event Photo Gallery
        </button>
      </Link>
    </div>
  );
}

export default PhotoGalleryData;
