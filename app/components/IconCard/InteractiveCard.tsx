"use client";
import React, { useRef, useState } from "react";
import { cardData } from "./product-data";

type InteractiveCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  className: string;
};

export function InteractiveCard({
  icon,
  title,
  description,
  linkText,
  linkHref,
  className,
}: InteractiveCardProps) {
  const [gradientPos, setGradientPos] = useState({ x: 100, y: 100 });
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGradientPos({ x, y });
  }

  const gradientStyle = {
    backgroundImage: `radial-gradient(800px circle at ${gradientPos.x}px ${gradientPos.y}px, rgba(255,255,255,0.07), transparent 40%)`,
  };
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`flex border-primary/60 border flex-col bg-white/5 z-10 w-full p-8 relative group rounded-2xl shadow-md ${className} `}
    >
      {/* Gradient background layer */}
      <div
        className="opacity-0 group-hover:opacity-90 absolute w-full h-full top-0 left-0 z-0 pointer-events-none transition-all duration-100"
        style={gradientStyle}
      />
      {/* Icon */}
      <div className="mb-[120px]">{icon}</div>

      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>

        {/* Description */}
        <p className="text-secondary text-body-1 mb-4">{description}</p>

        {/* Link */}
        <a
          href={linkHref}
          className="text-blue-600 font-medium hover:underline"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}

export function InteractiveCardList() {
  return (
    <div className="grid grid-cols-3 gap-3 mt-24">
      {cardData.map((card, index) => (
        <InteractiveCard
          key={index}
          icon={<span>{card.icon}</span>}
          title={card.title}
          description={card.description}
          linkText="View in Github"
          linkHref={card.linkHref}
          className=""
        />
      ))}
    </div>
  );
}
