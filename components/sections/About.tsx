import React from 'react';
import { Code2 } from 'lucide-react';
import { IdeaOrbScene } from '../QuantumScene';
import { IngredientsList } from '../Diagrams';

export const About = () => {
    return (
        <section id="about" className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative w-full aspect-square bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 group ring-1 ring-slate-100">
                        <IdeaOrbScene />
                        {/* Tech Overlay for 3D Scene */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 flex justify-between items-center shadow-lg">
                            <div className="flex gap-3 items-center">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-xs font-mono font-bold text-slate-600">RENDER_ENGINE: ACTIVE</span>
                            </div>
                            <Code2 size={16} className="text-slate-400" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-[1px] bg-blue-600"></div>
                            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Core Ingredients</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                            공간을 채우는 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">완벽한 기술력.</span>
                        </h2>
                        <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium border-l-4 border-slate-100 pl-6">
                            아이디어 밀키트는 0과 1 사이의 깊은 질감을 현실로 구현합니다. <br />
                            최적의 성능을 위한 Engineering Stack을 확인하세요.
                        </p>
                        <IngredientsList />
                    </div>
                </div>
            </div>
        </section>
    );
};
