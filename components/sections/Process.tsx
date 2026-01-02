import React from 'react';
import { WorkProcess } from '../Diagrams';

export const Process = () => {
    return (
        <section id="process" className="py-32 relative z-10 bg-slate-50/80">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4 inline-block shadow-sm">Work Flow</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Service Pipeline</h2>
                    <p className="text-slate-400 text-lg font-medium">아이디어가 현실이 되는 4단계 공정</p>
                </div>
                <WorkProcess />
            </div>
        </section>
    );
};
