import React, { useMemo } from "react";
import "./AnimatedBackgroundStyles.css";

const ICONS = [
  // Briefcase
  ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <rect x="8" y="3" width="8" height="4" rx="1" />
      <rect x="11" y="12" width="2" height="2" rx="0.5" />
    </svg>
  ),
  // Bar chart
  ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="12" width="3" height="8" rx="1" />
      <rect x="10" y="9" width="3" height="11" rx="1" />
      <rect x="16" y="6" width="3" height="14" rx="1" />
    </svg>
  ),
  // Coin/currency
  ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 7v10M9 10c1-1.2 3-1.2 4.2 0s.8 2.8-1.2 3.4-2.2 2.2-1 3.6c.5.6 1.2.9 2 .9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  // Globe
  ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M3 12h18" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function BusinessParticles({
  color = "#00796b", // brand teal
  opacity = 0.1, // keep subtle
  countDesktop = 18,
  countMobile = 10,
  minSize = 14,
  maxSize = 28,
}) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const count = isMobile ? countMobile : countDesktop;

  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = rand(2, 98); // % from left
      const size = Math.round(rand(minSize, maxSize));
      const delay = -Math.round(rand(0, 30)); // negative so they start staggered
      const duration = Math.round(rand(26, 44)); // seconds
      const rot = Math.round(rand(-12, 12)); // degrees
      const Icon = ICONS[i % ICONS.length];
      return { id: i, left, size, delay, duration, rot, Icon };
    });
  }, [count, minSize, maxSize]);

  return (
    <div className="biz-particles" aria-hidden="true">
      {particles.map(({ id, left, size, delay, duration, rot, Icon }) => (
        <span
          key={id}
          className="biz-particle"
          style={{
            left: `${left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            "--rot": `${rot}deg`,
            color,
            opacity,
          }}
        >
          <Icon size={size} />
        </span>
      ))}
    </div>
  );
}
