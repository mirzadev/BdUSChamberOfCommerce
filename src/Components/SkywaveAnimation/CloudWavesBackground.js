// src/components/CloudWavesBackground/CloudWavesBackground.jsx
import React from "react";
import "./CloudWavesBackgroundStyles.css";

export default function CloudWavesBackground() {
  return (
    <div className="cloud-waves" aria-hidden="true">
      <span className="wave-layer wave-1" />
      <span className="wave-layer wave-2" />
      <span className="wave-layer wave-3" />
    </div>
  );
}
