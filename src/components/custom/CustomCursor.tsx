"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  });
  return (
    <div className=" w-full h-full pointer-events-none top-0 left-0 z-99999 ">
      <div
        className="w-20 h-20 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"
        style={{
          transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
          position: "absolute",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
