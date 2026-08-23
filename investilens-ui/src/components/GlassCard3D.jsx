import React, { useRef, useState } from "react";

export default function GlassCard3D({
  children,
  className = "",
  glowColor = "emerald", // "emerald" | "cyan" | "amber" | "indigo" | "rose"
  onClick
}) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Subtle 3D tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    }
  };

  const glowMap = {
    emerald: "rgba(16, 185, 129, 0.15)",
    cyan: "rgba(6, 182, 212, 0.15)",
    amber: "rgba(245, 158, 11, 0.15)",
    indigo: "rgba(99, 102, 241, 0.15)",
    rose: "rgba(244, 63, 94, 0.15)"
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl bg-[#0a0f1d]/85 backdrop-blur-xl border border-white/[0.08] shadow-2xl transition-transform duration-200 ease-out ${className}`}
      style={{
        boxShadow: isHovered
          ? `0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px -5px ${glowMap[glowColor]}`
          : "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
      }}
    >
      {/* Dynamic Cursor Spotlight Radial Flare */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowMap[glowColor]}, transparent 70%)`
          }}
        />
      )}

      {/* Cybernetic Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/20 rounded-tl pointer-events-none" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/20 rounded-tr pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/20 rounded-bl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/20 rounded-br pointer-events-none" />

      {/* Card Body */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
