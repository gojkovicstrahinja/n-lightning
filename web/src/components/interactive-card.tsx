"use client";

import { useRef } from "react";

type InteractiveCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function InteractiveCard({
  children,
  className = "",
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const updatePointer = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const rotateX = (0.5 - y / 100) * 8;
    const rotateY = (x / 100 - 0.5) * 10;

    node.style.setProperty("--mx", `${x}%`);
    node.style.setProperty("--my", `${y}%`);
    node.style.setProperty("--rx", `${rotateX}deg`);
    node.style.setProperty("--ry", `${rotateY}deg`);
    node.style.setProperty("--glow-opacity", "1");
  };

  const resetPointer = () => {
    const node = cardRef.current;
    if (!node) return;
    node.style.setProperty("--mx", "50%");
    node.style.setProperty("--my", "50%");
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ry", "0deg");
    node.style.setProperty("--glow-opacity", "0");
  };

  return (
    <div
      ref={cardRef}
      className={`interactive-card ${className}`}
      onPointerMove={updatePointer}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
      onPointerDown={updatePointer}
    >
      <div className="interactive-card__light pointer-events-none" />
      <div className="interactive-card__outline pointer-events-none" />
      {children}
    </div>
  );
}
