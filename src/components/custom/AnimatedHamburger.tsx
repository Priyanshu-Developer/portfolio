import React from "react";

interface AnimatedHamburgerProps {
  isOpen: boolean;
  toggle: () => void;
  size?: number;
}

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({
  isOpen,
  toggle,
  size = 20, // made smaller (was 32)
}) => {
  const barH = size / 8;
  const gap = (size - 3 * barH) / 2; // equal gaps between bars
  const topClosed = 0;
  const middleClosed = barH + gap;
  const bottomClosed = 2 * (barH + gap);
  const center = (size - barH) / 2;

  const barStyle: React.CSSProperties = {
    width: size,
    height: barH,
    borderRadius: barH / 2,
    background: "#fff",
    position: "absolute",
    left: 0,
    transition: "all 0.35s cubic-bezier(0.65, 0, 0.35, 1)",
  };

  return (
    <button
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={toggle}
      style={{
        width: size,
        height: size,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        position: "relative",
        display: "inline-block",
        padding: 0,
        zIndex: 100,
      }}
    >
      {/* Top Line */}
      <div
        style={{
          ...barStyle,
          top: isOpen ? center : topClosed,
          transform: isOpen ? "rotate(45deg)" : "rotate(0)",
        }}
      />
      {/* Middle Line */}
      <div
        style={{
          ...barStyle,
          top: middleClosed,
          opacity: isOpen ? 0 : 1,
          transition:
            "opacity 0.2s 0.1s, all 0.35s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      />
      {/* Bottom Line */}
      <div
        style={{
          ...barStyle,
          top: isOpen ? center : bottomClosed,
          transform: isOpen ? "rotate(-45deg)" : "rotate(0)",
        }}
      />
    </button>
  );
};
