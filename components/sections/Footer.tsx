import React from 'react';
import { Logo } from '../ui/Logo';

export const Footer = () => {
    return (
        <footer className="py-20 bg-white border-t border-slate-100 relative z-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-3 opacity-80">
                    <Logo className="w-8 h-8 grayscale" />
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-900 leading-tight">아이디어 밀키트</span>
                        <span className="text-[10px] text-slate-400 font-mono">DIGITAL KITCHEN</span>
                    </div>
                </div>
                <div className="text-slate-400 text-sm font-medium">
                    &copy; 2024 Idea Mealkit Studio. All rights reserved.
                </div>
                <div className="flex gap-8">
                    {['Instagram', 'LinkedIn', 'Github'].map(sns => (
                        <a key={sns} href="#" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors">{sns}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
