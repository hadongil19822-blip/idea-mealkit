import React from 'react';
import { PortfolioGrid } from '../Diagrams';

interface PortfolioProps {
    onOpenProject: (id: string) => void;
}

export const Portfolio = ({ onOpenProject }: PortfolioProps) => {
    return (
        <section id="portfolio" className="py-32 relative z-10 bg-slate-50/50">
            <div className="container mx-auto px-6">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Signature Dishes</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Featured Projects</h2>
                    </div>
                    <p className="text-slate-400 max-w-md font-medium">
                        최신 기술 트렌드와 사용자 경험을 결합하여, 가장 맛있는 디지털 경험을 요리합니다.
                    </p>
                </div>
                {/* Update PortfolioGrid with handler */}
                <PortfolioGrid onOpenProject={onOpenProject} />
            </div>
        </section>
    );
};
