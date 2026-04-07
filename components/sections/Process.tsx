import React from 'react';
import { WorkProcess } from '../Diagrams';

export const Process = () => {
    return (
        <section id="process" className="py-32 relative z-10 bg-[#020617]/50 backdrop-blur-3xl border-y border-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/50 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 inline-block shadow-[0_0_15px_rgba(59,130,246,0.3)]">Work Flow</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 drop-shadow-lg px-2">Service Pipeline</h2>
                    <p className="text-slate-400 text-lg font-medium">아이디어가 현실이 되는 4단계 공정</p>
                </div>
                <WorkProcess />
            </div>
        </section>
    );
};
