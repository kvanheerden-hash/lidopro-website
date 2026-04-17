import React from 'react';

export const MoleculePattern = ({ color = "currentColor", className = "" }: { color?: string, className?: string }) => {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Connecting Lines */}
      <path d="M50 50 L80 90 L120 80" stroke={color} strokeWidth="2" />
      <path d="M80 90 L60 140 L100 160" stroke={color} strokeWidth="2" />
      <path d="M200 200 L240 180 L280 220" stroke={color} strokeWidth="2" />
      <path d="M280 220 L320 200 L350 240" stroke={color} strokeWidth="2" />
      <path d="M120 300 L150 270 L190 310" stroke={color} strokeWidth="2" />
      <path d="M300 100 L330 130" stroke={color} strokeWidth="2" />
      
      {/* Large Nodes (Main ingredients) */}
      <circle cx="80" cy="90" r="12" fill={color} />
      <circle cx="280" cy="220" r="14" fill={color} />
      <circle cx="150" cy="270" r="10" fill={color} />
      <circle cx="330" cy="130" r="12" fill={color} />
      
      {/* Medium Nodes */}
      <circle cx="50" cy="50" r="6" fill={color} />
      <circle cx="120" cy="80" r="8" fill={color} />
      <circle cx="60" cy="140" r="7" fill={color} />
      <circle cx="100" cy="160" r="8" fill={color} />
      <circle cx="200" cy="200" r="8" fill={color} />
      <circle cx="240" cy="180" r="6" fill={color} />
      <circle cx="320" cy="200" r="7" fill={color} />
      <circle cx="350" cy="240" r="8" fill={color} />
      <circle cx="120" cy="300" r="6" fill={color} />
      <circle cx="190" cy="310" r="8" fill={color} />
      <circle cx="300" cy="100" r="6" fill={color} />

      {/* Tiny Satellite Particles (Opacity reduced) */}
      <circle cx="30" cy="80" r="3" fill={color} opacity="0.4" />
      <circle cx="140" cy="50" r="2" fill={color} opacity="0.4" />
      <circle cx="360" cy="180" r="3" fill={color} opacity="0.4" />
      <circle cx="220" cy="330" r="2" fill={color} opacity="0.4" />
    </svg>
  );
};