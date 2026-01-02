import React from 'react';
import { ServiceList } from '../Diagrams';

export const Services = () => {
    return (
        <section id="services" className="py-32 bg-white relative z-10 border-y border-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold tracking-widest uppercase mb-4 inline-block shadow-sm">Service Recipe</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">제공 서비스</h2>
                    <p className="text-slate-400 text-lg font-medium">비즈니스를 위한 4가지 핵심 디지털 솔루션</p>
                </div>
                <ServiceList />
            </div>
        </section>
    );
};
