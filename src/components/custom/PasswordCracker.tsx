"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  target: string | string[]; // Single or multiple words
  speed?: number; // Speed of animation (lower = faster)
  cycles?: number; // How many times to loop A-Z + 0-9 per letter
  delayBetween?: number; // Delay before switching to next word
  loop?: boolean; // Should loop through all words
  run?: boolean; // Whether the animation should run
  className?: string; // Custom classes for styling
  colorLocked?: string; // Final letter color
  colorActive?: string; // During animation
  showCursor?: boolean; // Toggle cursor animation
};

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function PasswordCrack({
  target,
  speed = 35,
  cycles = 2,
  delayBetween = 1500,
  loop = true,
  run = true,
  className = "",
  showCursor = true,
}: Props) {
  const targets = Array.isArray(target) ? target : [target];
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState<string[]>([]);
  const [animating, setAnimating] = useState(false);

  const intervalsRef = useRef<number[]>([]);
  const mainTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // clear any previous intervals/timeouts
    intervalsRef.current.forEach(clearInterval);
    intervalsRef.current = [];
    if (mainTimeoutRef.current) {
      clearTimeout(mainTimeoutRef.current);
      mainTimeoutRef.current = null;
    }

    const word = targets[index] ?? "";

    if (!run) {
      // show final word immediately and stop animating
      setAnimating(false);
      setDisplay(word.split("").map((c) => (c === " " ? " " : c)));
      return () => {
        intervalsRef.current.forEach(clearInterval);
        intervalsRef.current = [];
        if (mainTimeoutRef.current) {
          clearTimeout(mainTimeoutRef.current);
          mainTimeoutRef.current = null;
        }
      };
    }

    const animateWord = (w: string) => {
      setAnimating(true);
      setDisplay(Array(w.length).fill(""));
      intervalsRef.current = [];

      w.split("").forEach((char, i) => {
        if (char === " ") {
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

        intervalsRef.current.push(interval);
      });

      // ensure we clear any remaining intervals and flip animating flag after duration
      mainTimeoutRef.current = window.setTimeout(() => {
        intervalsRef.current.forEach(clearInterval);
        intervalsRef.current = [];
        setAnimating(false);
      }, speed * CHARSET.length * cycles + delayBetween);
    };

    animateWord(word);

    if (targets.length > 1) {
      const totalDuration = speed * CHARSET.length * cycles + delayBetween * 2;
      const cycleTimeout = window.setTimeout(() => {
        if (loop) {
          setIndex((prev) => (prev + 1) % targets.length);
        } else if (index < targets.length - 1) {
          setIndex(index + 1);
        }
      }, totalDuration);

      return () => {
        clearTimeout(cycleTimeout);
        intervalsRef.current.forEach(clearInterval);
        intervalsRef.current = [];
        if (mainTimeoutRef.current) {
          clearTimeout(mainTimeoutRef.current);
          mainTimeoutRef.current = null;
        }
      };
    }

    return () => {
      intervalsRef.current.forEach(clearInterval);
      intervalsRef.current = [];
      if (mainTimeoutRef.current) {
        clearTimeout(mainTimeoutRef.current);
        mainTimeoutRef.current = null;
      }
    };
  }, [index, targets, speed, cycles, delayBetween, loop, run]);

  return (
    <div className={`inline-flex items-center flex-wrap ${className}`}>
      {display.map((char, i) => (
        <span
          key={i}
          className={`transition-colors duration-200 ${
            char === " "
              ? "inline-block w-[0.6em]"
              : char === (targets[index] ?? "")[i]
              ? "text-white"
              : "text-gray-400"
          }`}
        >
          {char === " " ? "\u00A0" : char || "•"}
        </span>
      ))}

      {showCursor && (
        <span
          className={`ml-1.5 w-1.5 h-[1em] ${
            animating ? "bg-gray-400 animate-pulse" : "bg-transparent"
          }`}
        />
      )}
    </div>
  );
}
