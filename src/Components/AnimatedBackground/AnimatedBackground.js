import React from "react";
import "./AnimatedBackground.css";

const BASE_COUNT = 13; // your original density
const TYPES = ["circle", "square", "triangle", "oval", "star"];

const rand = (min, max) => min + Math.random() * (max - min);

export default function AnimatedBackground({ densityMultiplier = 2 }) {
  const total = Math.max(1, Math.round(BASE_COUNT * densityMultiplier)); // doubled by default

  return (
    <div className="animated-background" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => {
        const type = TYPES[i % TYPES.length];
        const top = `${Math.floor(rand(4, 92))}%`;
        const left = `${Math.floor(rand(4, 92))}%`;
        const dur = `${rand(7, 12).toFixed(2)}s`; // varied speed
        const delay = `${(-rand(0, 12)).toFixed(2)}s`; // negative = desync start
        const scale = rand(0.9, 1.4);
        const baseOpacity = rand(0.16, 0.28);

        return (
          <div
            key={i}
            className={`shape ${type}`}
            style={{
              top,
              left,
              animationDuration: dur,
              animationDelay: delay,
              // CSS vars used in keyframes so transform/opacity don’t conflict
              "--s": scale,
              "--o": baseOpacity,
            }}
          />
        );
      })}
    </div>
  );
}
