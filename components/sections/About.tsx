import React from 'react';
import { Code2, Zap, Layers, Cpu, Database } from 'lucide-react';
import { IngredientsList } from '../Diagrams';

export const About = () => {
    return (
        <section id="about" className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-[1px] bg-indigo-500/50"></div>
                        <span className="text-indigo-400 font-bold tracking-[0.3em] text-xs uppercase drop-shadow-md">Professional Tech Stack</span>
                        <div className="w-12 h-[1px] bg-indigo-500/50"></div>
                    </div>
                    
                    <h2 className="text-[1.6rem] sm:text-4xl md:text-6xl font-black text-white mb-8 leading-[1.3] tracking-tight drop-shadow-lg px-2 break-keep">
                        탄탄한 기술력을 바탕으로 <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 sm:ml-2">최상의 퍼포먼스.</span>
                    </h2>
                    
                    <p className="text-sm sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-16 font-medium max-w-2xl px-4 break-keep">
                        아이디어 밀키트는 겉으로 보이는 화려함에만 집중하지 않습니다. <br className="hidden md:block" />
                        내부 구조부터 단단하게 설계된 최신 기술 스택들이 사용자에게는 <br className="hidden md:block" />
                        가장 쉽고 직관적인 디지털 경험으로 다가갈 수 있도록 세밀하게 구성합니다.
                    </p>
                    
                    <div className="w-full text-left">
                        <IngredientsList />
                    </div>
                </div>
            </div>
        </section>
    );
};
