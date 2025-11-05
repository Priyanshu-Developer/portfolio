"use client";
import { useEffect, useState } from "react";

type Props = {
  target: string;
  speed?: number; // Speed of animation (lower = faster)
  cycles?: number; // How many times to loop A-Z + 0-9
  className?: string; // Custom classes for styling
  showCursor?: boolean; // Toggle cursor animation
  run?: boolean; // only run animation when true
};

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function PasswordCrackerAnimation({
  target,
  speed = 35,
  cycles = 2,
  className = "",
  showCursor = true,
  run = true,
}: Props) {
  const [display, setDisplay] = useState<string[]>(
    Array(target.length).fill("")
  );

  useEffect(() => {
    const intervals: number[] = [];

    // If run is false, immediately show the target (preserving spaces) and skip animation
    if (!run) {
      setDisplay(target.split("").map((ch) => (ch === " " ? " " : ch)));
      return () => {
        // nothing to clear because we didn't start intervals
      };
    }

    // Ensure display length matches target and reset for a fresh animation
    setDisplay(Array(target.length).fill(""));

    target.split("").forEach((char, i) => {
      if (char === " ") {
        // Immediately set and skip animation for spaces
        setDisplay((prev) => {
          const copy = [...prev];
          copy[i] = " ";
          return copy;
        });
        return;
      }

      let step = 0;
      const totalSteps = CHARSET.length * cycles;

      const interval = window.setInterval(() => {
        step++;
        const randomChar =
          CHARSET[Math.floor(Math.random() * CHARSET.length)];
        const displayChar = /[a-z]/.test(char)
          ? randomChar.toLowerCase()
          : randomChar;

        setDisplay((prev) => {
          const copy = [...prev];
          copy[i] = displayChar;
          return copy;
        });

        if (step >= totalSteps) {
          clearInterval(interval);
          setDisplay((prev) => {
            const copy = [...prev];
            copy[i] = char;
            return copy;
          });
        }
      }, speed);

      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [target, speed, cycles, run]);

  return (
    <div className={`inline-flex items-center flex-wrap ${className}`}>
      {display.map((char, i) => (
        <span
          key={i}
          className={`transition-colors duration-200 ${
            char === " "
              ? "inline-block w-[0.6em]" // ensures space keeps width
              : char === target[i]
              ? "text-white"
              : "text-gray-400"
          }`}
        >
          {char === " " ? "\u00A0" : char || "•"}
        </span>
      ))}

      {showCursor && (
        <span className="ml-1.5 w-1.5 h-[1em] bg-gray-400 animate-pulse" />
      )}
    </div>
  );
}
