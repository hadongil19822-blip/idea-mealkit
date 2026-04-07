
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

const TeamMemberCard: React.FC<{ member: any }> = ({ member }) => (
    <div className="flex-shrink-0 w-[300px] mx-4 bg-slate-900/40 rounded-2xl shadow-xl overflow-hidden border border-slate-700/50 backdrop-blur-md group hover:border-indigo-500/50 transition-colors cursor-pointer">
        <div className="h-40 bg-slate-800 relative overflow-hidden">
            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
        </div>
        <div className="p-6 relative z-10">
            <h3 className="font-bold text-xl mb-1 text-slate-100 group-hover:text-indigo-300 transition-colors">{member.name}</h3>
            <p className="text-blue-500 font-bold tracking-widest text-xs mb-3 uppercase">{member.role}</p>
            <p className="text-slate-400 text-xs leading-relaxed font-medium">{member.bio}</p>
        </div>
    </div>
);

// Fix: Made children optional in the props type to resolve TS error when children are passed via JSX.
const CustomTicker = ({ children, duration = 40 }: { children?: React.ReactNode, duration?: number }) => {
    return (
        <div className="flex overflow-hidden w-full relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
            <motion.div
                className="flex"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: duration,
                    repeat: Infinity,
                }}
                style={{ width: "fit-content", display: "flex" }}
            >
                <div className="flex">{children}</div>
                <div className="flex">{children}</div>
            </motion.div>
        </div>
    );
};

const TeamCarousel = () => {
    const teamMembers = [
        { name: "민준", role: "AI & ML 엔지니어", bio: "인공지능과 머신러닝을 통해 비즈니스의 가능성을 확장합니다.", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "서연", role: "UX/UI 디자이너", bio: "사용자 중심의 직관적이고 아름다운 디자인을 설계합니다.", imageUrl: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "도현", role: "리드 개발자", bio: "견고하고 확장 가능한 시스템 아키텍처를 구축합니다.", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "지우", role: "프로젝트 매니저", bio: "아이디어의 시작부터 완성까지, 프로젝트의 모든 과정을 책임집니다.", imageUrl: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "하은", role: "데이터 분석가", bio: "데이터를 통해 비즈니스 성장을 위한 인사이트를 발굴합니다.", imageUrl: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "민준", role: "AI & ML 엔지니어", bio: "인공지능과 머신러닝을 통해 비즈니스의 가능성을 확장합니다.", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "서연", role: "UX/UI 디자이너", bio: "사용자 중심의 직관적이고 아름다운 디자인을 설계합니다.", imageUrl: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "도현", role: "리드 개발자", bio: "견고하고 확장 가능한 시스템 아키텍처를 구축합니다.", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "지우", role: "프로젝트 매니저", bio: "아이디어의 시작부터 완성까지, 프로젝트의 모든 과정을 책임집니다.", imageUrl: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "하은", role: "데이터 분석가", bio: "데이터를 통해 비즈니스 성장을 위한 인사이트를 발굴합니다.", imageUrl: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];

    return (
        <div className="h-[350px]">
            <CustomTicker duration={60}>
                {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index} member={member} />
                ))}
            </CustomTicker>
        </div>
    );
};

export const Team = () => {
    return (
        <section id="team" className="py-32 relative z-10 bg-transparent border-t border-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="px-4 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-800/50 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4 inline-block shadow-[0_0_15px_rgba(99,102,241,0.3)]">Our Chefs</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 drop-shadow-lg">Meet the Team</h2>
                    <p className="text-slate-400 text-lg font-medium">디지털 웹을 창조하는 마에스트로들</p>
                </div>
            </div>
            <TeamCarousel />
        </section>
    );
};
