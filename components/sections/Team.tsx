
import React from 'react';
import { motion } from 'framer-motion';

const TeamMemberCard: React.FC<{ member: any }> = ({ member }) => (
    <div className="flex-shrink-0 w-[300px] mx-4 bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
        <div className="h-40 bg-slate-200">
            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
            <h3 className="font-bold text-xl mb-1">{member.name}</h3>
            <p className="text-blue-500 font-semibold text-sm mb-3">{member.role}</p>
            <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
        </div>
    </div>
);

const CustomTicker = ({ children, duration = 40 }: { children: React.ReactNode, duration?: number }) => {
    return (
        <div className="flex overflow-hidden w-full relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
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
        <section id="team" className="py-32 relative z-10 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4 inline-block shadow-sm">Our Chefs</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Meet the Team</h2>
                    <p className="text-slate-400 text-lg font-medium">디지털 요리를 만드는 전문가들</p>
                </div>
            </div>
            <TeamCarousel />
        </section>
    );
};
