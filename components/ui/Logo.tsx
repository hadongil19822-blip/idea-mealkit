import React from 'react';
const logoImg = "/logo.png";
export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <img src={logoImg} alt="Idea Mealkit Logo" className={`object-contain ${className}`} />
);

export const logoUrl = logoImg;
