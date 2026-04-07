import React from 'react';
import { ServiceList } from '../Diagrams';

export const Services = () => {
    return (
        <section id="services" className="py-32 bg-transparent relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="px-4 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-800/50 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4 inline-block shadow-[0_0_15px_rgba(99,102,241,0.3)]">Why Choose Us</span>
                    <h2 className="text-[1.7rem] sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-lg px-2 break-keep">
                        아이디어 밀키트의 <br className="min-[400px]:hidden" /> 특별한 경쟁력
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-slate-400 font-medium break-keep px-4">
                        최신 기술 요소들을 결합하여, <br className="sm:hidden" />
                        가장 빠르고 효율적으로 비즈니스를 돕습니다.
                    </p>
                </div>
                <ServiceList />
            </div>
        </section>
    );
};
