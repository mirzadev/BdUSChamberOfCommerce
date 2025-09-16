import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
//install react-leaflet    npm install react-leaflet leaflet

const MapComponent = () => {
  // Latitude and Longitude for the location
  const location = [26.3616645, -80.2344257];

  return (
    <div style={{ height: "100vh" }}>
      <MapContainer
        center={location}
        zoom={15}
        style={{ height: "70%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={location}
          icon={L.icon({
            iconUrl:
              "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
          })}
        >
          <Popup>
            This is the location at lat: {location[0]}, lon: {location[1]}.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;

/*

// npm install react-leaflet leaflet
// npm install leaflet@1.7.1
//  import 'leaflet/dist/leaflet.css'; in index.js or App.js file:
*/
