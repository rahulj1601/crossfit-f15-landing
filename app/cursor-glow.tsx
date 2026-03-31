"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let x = 0;
    let y = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY + window.scrollY;
    };

    const animate = () => {
      currentX += (x - currentX) * 0.15;
      currentY += (y - currentY) * 0.15;
      glow.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-40 w-[400px] h-[400px] rounded-full opacity-0 sm:opacity-100 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(circle, rgba(217, 28, 28, 0.12) 0%, rgba(217, 28, 28, 0.05) 30%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
