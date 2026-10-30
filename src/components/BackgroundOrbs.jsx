import React from 'react';

export default function BackgroundOrbs({ currentSlide }) {
  // Pure Apple Blue luminous ambient lighting (NO RAINBOW, NO GRID)
  const blueTones = [
    { o1: '#60a5fa', o2: '#38bdf8', o3: '#93c5fd' }, // Soft Sky & Royal Blue
    { o1: '#3b82f6', o2: '#60a5fa', o3: '#0284c7' }, // Classic Apple Blue
    { o1: '#2563eb', o2: '#38bdf8', o3: '#93c5fd' }, // Deep Blue & Ice
    { o1: '#1d4ed8', o2: '#60a5fa', o3: '#0ea5e9' }, // High-tech Blue
    { o1: '#3b82f6', o2: '#0284c7', o3: '#7dd3fc' }, // Pure Azure
    { o1: '#2563eb', o2: '#38bdf8', o3: '#60a5fa' }, // Electric Blue
    { o1: '#1e40af', o2: '#3b82f6', o3: '#93c5fd' }, // Deep Navy & Cyan
  ];

  const current = blueTones[(currentSlide - 1) % blueTones.length] || blueTones[0];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft Blue Liquid Orbs (NO GRID, PURE BLUE) */}
      <div
        className="morpheus-orb w-[650px] h-[650px] -top-32 -left-32"
        style={{
          background: `radial-gradient(circle, ${current.o1} 0%, rgba(240,244,249,0) 70%)`,
          transform: `translate(${currentSlide * 10}px, ${currentSlide * 8}px)`
        }}
      />
      <div
        className="morpheus-orb w-[700px] h-[700px] -bottom-40 -right-40"
        style={{
          background: `radial-gradient(circle, ${current.o2} 0%, rgba(240,244,249,0) 70%)`,
          transform: `translate(${-currentSlide * 14}px, ${-currentSlide * 10}px)`
        }}
      />
      <div
        className="morpheus-orb w-[500px] h-[500px] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{
          background: `radial-gradient(circle, ${current.o3} 0%, rgba(240,244,249,0) 70%)`,
        }}
      />
    </div>
  );
}
