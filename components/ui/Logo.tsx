import React from 'react';

const logoImg = "https://firebasestorage.googleapis.com/v0/b/studio-6323553811-9cc93.firebasestorage.app/o/FCMImages%2Flogo.png?alt=media&token=f2f46698-cf84-4d87-a6b7-54b764e89602";

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <img src={logoImg} alt="Idea Mealkit Logo" className={`object-contain ${className}`} />
);

export const logoUrl = logoImg;
