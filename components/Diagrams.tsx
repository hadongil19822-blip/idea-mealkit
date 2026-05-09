
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Cpu, Palette, Globe, Layers, Database, X, ArrowRight, Activity, Terminal, Code, Sparkles, BarChart3, Settings2, Box, ClipboardList, PenTool, Server, Rocket, Music, TrendingUp, Play, Pause, SkipForward, Disc, Waves, Calendar, Heart, User, Search, Menu, Home, Signal, Wifi, Battery, ScrollText, BookOpen, CloudMoon, Snowflake, Diamond, PawPrint, HeartHandshake, UserPlus, UserMinus, Star, MessageCircle, Map, ExternalLink, Shirt, Sprout, Flag, GraduationCap, Download } from 'lucide-react';
import { FcCamera, FcReadingEbook, FcLandscape, FcSportsMode, FcGraduationCap as FcCap } from 'react-icons/fc';

const FLUTTERLOG_ICON_URL = "https://firebasestorage.googleapis.com/v0/b/studio-6323553811-9cc93.firebasestorage.app/o/FCMImages%2F1024-1024.png?alt=media&token=fdfb49fb-1423-4b77-8e97-e5cc75048ba8";

// --- SERVICE LIST: Technical Cards ---
export const ServiceList: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { id: '01', title: '합리적인 견적', sub: 'Cost-Effective', desc: '거품을 뺀 정직한 단가 설계로 비용 부담은 낮추고, 퀄리티는 극대화합니다.', icon: Diamond },
        { id: '02', title: '최신 AI 기술 접목', sub: 'AI Integration', desc: '기존 서비스에 최신 생성형 AI 모델과 기술을 융합해 혁신적인 가치를 만듭니다.', icon: Cpu },
        { id: '03', title: '압도적인 속도', sub: 'Agile Delivery', desc: '독창적인 개발 프레임워크와 모듈화를 통해 생각했던 아이디어를 누구보다 빠르게 런칭합니다.', icon: Rocket },
        { id: '04', title: '든든한 파트너십', sub: 'Team Collaboration', desc: '단순한 외주를 넘어, 마치 내부 팀원처럼 함께 고민하며 유연하게 협업합니다.', icon: HeartHandshake },
      ].map((service) => (
        <motion.div 
          key={service.id} 
          whileHover={{ y: -5 }}
          className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-700/50 hover:border-indigo-500/50 shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden backdrop-blur-sm"
        >
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] font-black text-6xl text-white font-sans tracking-tighter select-none -translate-y-2 translate-x-2">
                {service.id}
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all duration-300 shadow-inner">
                <service.icon size={26} strokeWidth={1.5} />
            </div>
            
            <div className="mt-auto">
                <h3 className="text-xl font-bold text-slate-100">{service.title}</h3>
                <span className="text-xs font-mono text-indigo-400 mb-2 block">{service.sub}</span>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{service.desc}</p>
            </div>
            
            {/* Hover Tech Line */}
            <div className="absolute bottom-0 left-0 h-1 bg-indigo-500 w-0 group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
        </motion.div>
      ))}
    </div>
);

// --- INGREDIENTS: Tech Spec Pills ---
export const IngredientsList: React.FC = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
            { icon: Code, title: "Web Architecture", desc: "React + TypeScript", tag: "Frontend" },
            { icon: Box, title: "App Solution", desc: "Flutter + Dart", tag: "Mobile" },
            { icon: Database, title: "Data Storage", desc: "Supabase / PostgreSQL", tag: "Backend" },
            { icon: Terminal, title: "Intelligence", desc: "Gemini / OpenAI / Grok", tag: "AI Model" }
        ].map((it, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 bg-slate-900/40 rounded-2xl border border-slate-700/50 shadow-lg hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all group backdrop-blur-sm">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-blue-400 border border-slate-700 transition-colors shrink-0">
                    <it.icon size={20} />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-950/50 text-blue-300 border border-blue-900/50 rounded-full uppercase tracking-wide">{it.tag}</span>
                    </div>
                    <h4 className="font-bold text-slate-200 text-sm">{it.title}</h4>
                    <p className="text-xs text-slate-400 font-mono mt-1">{it.desc}</p>
                </div>
            </div>
        ))}
    </div>
);

// --- NEW WORK PROCESS COMPONENT ---
export const WorkProcess: React.FC = () => {
    const steps = [
        { id: 1, title: 'Order Ticket', sub: 'Consulting', desc: '요구사항 분석 및 견적 산출', icon: ClipboardList, color: 'text-orange-500', bg: 'bg-orange-50' },
        { id: 2, title: 'Prep Ingredients', sub: 'Planning & Design', desc: '기획 및 UI/UX 설계', icon: PenTool, color: 'text-pink-500', bg: 'bg-pink-50' },
        { id: 3, title: 'Main Cooking', sub: 'Development', desc: '프론트/백엔드 개발 구현', icon: Server, color: 'text-blue-500', bg: 'bg-blue-50' },
        { id: 4, title: 'Plating & Serve', sub: 'QA & Launch', desc: '테스트 및 스토어 배포', icon: Rocket, color: 'text-green-500', bg: 'bg-green-50' },
    ];

    return (
        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-800 -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                    <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative bg-slate-900/60 p-6 rounded-[2rem] border border-slate-700/50 shadow-xl group hover:-translate-y-2 transition-transform duration-300 backdrop-blur-md hover:border-indigo-500/30"
                    >
                        {/* Step Number Badge */}
                        <div className="absolute -top-4 -right-4 w-10 h-10 bg-slate-950 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-slate-700 group-hover:border-indigo-500 transition-colors">
                            {step.id}
                        </div>

                        <div className={`w-14 h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center ${step.color} mb-5 shadow-inner group-hover:bg-slate-700 transition-colors`}>
                            <step.icon size={24} />
                        </div>
                        
                        <div className="mb-2">
                             <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1 group-hover:text-indigo-400 transition-colors">{step.sub}</span>
                             <h3 className="text-lg font-black text-slate-100">{step.title}</h3>
                        </div>
                        <p className="text-slate-400 text-sm font-medium">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// --- NEW MIRAI ASSETS ---
const MiraiLogo = ({ size = "large" }: { size?: "small" | "large" }) => (
    <div className={`${size === "large" ? "w-28 h-28" : "w-12 h-12"} rounded-full bg-gradient-to-br from-[#A7E6E3] to-[#36B3C6] flex items-center justify-center shadow-lg relative group overflow-hidden`}>
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className={`text-white font-black ${size === "large" ? "text-3xl" : "text-sm"} tracking-tighter drop-shadow-sm`}>MIRAI</span>
    </div>
);

const MiraiAppMockup = () => {
    const MenuCard = ({ icon, color, label }: { icon: any, color: string, label: string }) => (
        <div className="bg-white p-3 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors border border-slate-50/50">
            <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center shrink-0`}>
                {icon}
            </div>
            <span className="text-xs font-bold text-slate-700 tracking-tight">{label}</span>
        </div>
    );

    const NavIcon = ({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
        <div className={`flex flex-col items-center gap-1 ${active ? 'text-rose-500' : 'text-slate-400'} cursor-pointer hover:text-rose-400 transition-colors`}>
            {icon}
            <span className="text-[9px] font-bold">{label}</span>
        </div>
    );

    return (
        <div className="w-[300px] h-[580px] bg-[#F7F8FA] rounded-[2.5rem] border-[8px] border-slate-900 overflow-hidden relative shadow-2xl mx-auto flex flex-col select-none ring-1 ring-slate-900/50 font-sans">
            {/* Status Bar */}
            <div className="h-8 bg-[#F7F8FA] flex justify-between items-center px-5 text-[10px] font-bold text-slate-900 z-10 sticky top-0">
                <span>9:41</span>
                <div className="flex gap-1.5">
                    <Signal size={10} />
                    <Wifi size={10} />
                    <Battery size={10} />
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
                
                {/* Section 1: AI 운세상담 */}
                <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-3 px-1">AI 운세상담</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2 bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors border border-slate-50/50">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
                                    <ScrollText size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-slate-900">정통사주</div>
                                    <div className="text-[10px] text-slate-400 mt-0.5">나의 평생 총운 풀이</div>
                                </div>
                             </div>
                             <ArrowRight size={14} className="text-slate-300" />
                        </div>
                        <MenuCard icon={<BookOpen size={18} />} color="text-amber-500 bg-amber-50" label="토정비결" />
                        <MenuCard icon={<CloudMoon size={18} />} color="text-sky-500 bg-sky-50" label="꿈해몽" />
                    </div>
                </div>

                {/* Section 2: 타고난 운명 */}
                <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-3 px-1">타고난 운명</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <MenuCard icon={<Snowflake size={18} />} color="text-cyan-500 bg-cyan-50" label="태어난 계절운" />
                        <MenuCard icon={<Diamond size={18} />} color="text-purple-500 bg-purple-50" label="탄생석" />
                        <MenuCard icon={<Sparkles size={18} />} color="text-pink-500 bg-pink-50" label="태몽" />
                        <MenuCard icon={<PawPrint size={18} />} color="text-orange-500 bg-orange-50" label="띠별 운세" />
                        <MenuCard icon={<Star size={18} />} color="text-indigo-500 bg-indigo-50" label="별자리 운세" />
                        <MenuCard icon={<PawPrint size={18} />} color="text-lime-500 bg-lime-50" label="반려동물 운세" />
                    </div>
                </div>

                 {/* Section 3: 궁합 */}
                <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-3 px-1">궁합</h3>
                    <div className="grid grid-cols-2 gap-3 pb-4">
                        <MenuCard icon={<HeartHandshake size={18} />} color="text-rose-500 bg-rose-50" label="짝궁합" />
                        <MenuCard icon={<Heart size={18} />} color="text-red-500 bg-red-50" label="정통궁합" />
                        <MenuCard icon={<UserPlus size={18} />} color="text-blue-500 bg-blue-50" label="나의 인연운" />
                        <MenuCard icon={<UserMinus size={18} />} color="text-slate-500 bg-slate-50" label="피해야 할 상대" />
                    </div>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="h-[60px] bg-white border-t border-slate-100 flex justify-between items-center px-6 pb-2 relative z-20">
                <NavIcon icon={<Home size={20} />} label="홈" active />
                <NavIcon icon={<ScrollText size={20} />} label="사주명식" />
                <NavIcon icon={<Calendar size={20} />} label="2026운세" />
                <NavIcon icon={<MessageCircle size={20} />} label="AI상담" />
                <NavIcon icon={<User size={20} />} label="마이" />
            </div>
        </div>
    )
}

// --- PREVIEW COMPONENTS ---

// 1. FlutterLog: Kinetic Typography & Logo Animation
const LiveChatPreview = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-[#050505] overflow-hidden group">
            {/* 1. Kinetic Typography Background (Marquee) */}
            <div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-10 pointer-events-none select-none">
                <motion.div 
                    className="flex whitespace-nowrap text-[6rem] font-black text-white leading-none tracking-tighter"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    FLUTTERLOG AI UNIVERSE FLUTTERLOG AI UNIVERSE
                </motion.div>
                <motion.div 
                    className="flex whitespace-nowrap text-[6rem] font-black text-white leading-none tracking-tighter"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    INTERACTIVE STORYTELLING ENGINE INTERACTIVE STORYTELLING ENGINE
                </motion.div>
            </div>

            {/* 2. Central Floating White Logo Box */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                <motion.div
                    animate={{ 
                        y: [-10, 10, -10],
                        rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="w-32 h-32 bg-white rounded-[2rem] flex items-center justify-center shadow-[0_0_60px_rgba(244,63,94,0.4)] relative transition-shadow duration-500"
                >
                    {/* Subtle Internal Highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent rounded-t-[2rem] opacity-80"></div>
                    
                    {/* The Logo */}
                    <img 
                        src={FLUTTERLOG_ICON_URL} 
                        alt="FlutterLog Logo" 
                        className="w-20 h-20 object-contain drop-shadow-md relative z-10" 
                    />

                    {/* Pulse Ring (Subtle internal glow) */}
                    <div className="absolute inset-0 rounded-[2rem] border-2 border-rose-500/10 animate-ping opacity-20"></div>
                </motion.div>
            </div>
        </div>
    );
};

// 4. MIRAI: Saju/Fortune Telling (Match Screenshot Style)
const MiraiPreview = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden group">
            {/* Soft Blue Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#eff6ff_0%,transparent_50%)]"></div>
            
            <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 flex flex-col items-center"
            >
                {/* Logo Icon Area */}
                <div className="flex items-center gap-4 mb-2">
                    <MiraiLogo size="large" />
                </div>
            </motion.div>
        </div>
    )
}

// 5. DeepDive: Scuba Diving (Underwater)
const DeepDivePreview = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-[#0c4a6e] overflow-hidden group">
            {/* Water Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0284c7] to-[#082f49] opacity-80"></div>
            
            {/* Rising Bubbles */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
                        initial={{ y: "120%", x: Math.random() * 100 + "%", opacity: 0 }}
                        animate={{ y: "-20%", opacity: [0, 1, 0] }}
                        transition={{ 
                            duration: Math.random() * 5 + 5, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: Math.random() * 5 
                        }}
                    />
                ))}
            </div>

            {/* App Interface Element */}
            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-40 h-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Waves size={16} className="text-cyan-300" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Logbook</span>
                        </div>
                        <span className="text-[8px] text-cyan-200">#042</span>
                    </div>
                    
                    <div className="space-y-2">
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-cyan-400 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-[8px] text-white/80 font-mono">
                            <span>Depth: 18m</span>
                            <span>Time: 42min</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

const CoreEmotionStatsGrid = () => (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm mt-2">
        <h5 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-wide flex items-center gap-2">
            <Activity size={14} className="text-rose-500" /> Live Emotion Engine
        </h5>
        <div className="grid grid-cols-2 gap-4">
            {[
                { label: "Affection", val: 88, color: "bg-rose-500" },
                { label: "Trust", val: 92, color: "bg-blue-500" },
                { label: "Dependence", val: 45, color: "bg-purple-500" },
                { label: "Allure", val: 78, color: "bg-pink-500" },
            ].map((stat, i) => (
                <div key={i}>
                    <div className="flex justify-between text-[10px] mb-1.5 font-bold text-slate-500">
                        <span>{stat.label}</span>
                        <span>{stat.val}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${stat.val}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className={`h-full ${stat.color}`} 
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// --- PORTFOLIO: App Store / Product Card Style ---

interface Project {
    id: string;
    title: string;
    category: string;
    tag: string;
    desc: string;
    url?: string;
    icon?: string;
    lucideIcon?: any;
    bgColor: string;
    detailTitle: string;
    detailSub: string;
    techDesc: string;
    features: string[];
    configSnippet: {
        var: string;
        model: string;
        temp: string;
        ctx: string;
        plugins: string;
    }
    statsComponent?: React.ReactNode;
    previewImage?: string;
    deviceMode?: 'desktop' | 'mobile';
    iframeScale?: number;
    iconColor?: string;
}

const projects: Project[] = [
    {
        id: 'flutterlog',
        title: 'FlutterLog',
        category: 'Simulation',
        tag: 'AI_CHAT',
        desc: '사용자의 선택에 따라 전개가 달라지는 리얼타임 AI 연애 시뮬레이션 플랫폼. 자연스러운 대화형 LLM 엔진을 통해 몰입감 깊은 인터랙티브 스토리텔링을 제공합니다.',
        url: 'https://flutterlog.com',
        icon: FLUTTERLOG_ICON_URL,
        bgColor: 'bg-rose-900',
        detailTitle: 'FlutterLog Interactive',
        detailSub: 'REAL-TIME AI SIMULATION',
        techDesc: '초거대 언어 모델(LLM)을 활용하여 캐릭터의 페르소나를 극도로 자연스럽게 구현했습니다. 리액트와 플러터 하이브리드 설계로 제작되었습니다.',
        features: ['Multi-branch Storytelling', 'Real-time GPT-based AI Chat', 'Dynamic Emotion & Affinity System', 'Smooth Cross-platform UI', 'User State Persistence'],
        configSnippet: { var: 'flutterlog', model: 'gpt-4o', temp: '0.8', ctx: '16000', plugins: '["emotion_analyzer"]' },
        statsComponent: <CoreEmotionStatsGrid />,
        deviceMode: 'mobile'
    },
    {
        id: 'metalook',
        title: 'MetaLook',
        category: 'Fashion AI',
        tag: 'GENERATIVE',
        desc: '시공간 제약 없이 브랜드 세계관을 완벽히 시각화하는 가상 모델 피팅 솔루션. 생성형 AI 기술을 통해 가장 현실적인 룩북을 자동 생성합니다.',
        url: 'https://metalook.store',
        icon: '/metalook.png',
        bgColor: 'bg-indigo-900', 
        detailTitle: 'MetaLook Studio',
        detailSub: 'AI VIRTUAL MODEL PLATFORM',
        techDesc: '최신 AI 기술 파이프라인을 구축하여, 의류 텍스처와 인체 비율을 극도로 사실적으로 세분화하여 렌더링합니다.',
        features: ['Generative AI Virtual Try-On', 'Automated Lookbook Synthesis', 'Brand Concept Customization', 'High-res Texture Restoration'],
        configSnippet: { var: 'metaVision', model: 'stable-diffusion-xl', temp: '0.6', ctx: '2048', plugins: '["controlnet", "fashion"]' },
        iframeScale: 0.5
    },
    {
        id: 'onlystar',
        title: 'OnlyStar',
        category: 'Game',
        tag: 'NOVEL_CHAT',
        desc: '웹소설의 주인공이 되어 세계관 내 캐릭터들과 직접 소통하는 체험형 인터랙티브 AI 소설 플랫폼. 새로운 형태의 재미를 설계합니다.',
        url: 'https://onlystar-web.web.app',
        lucideIcon: FcReadingEbook,
        bgColor: 'bg-purple-900',
        detailTitle: 'OnlyStar Novel App',
        detailSub: 'INTERACTIVE FICTION',
        techDesc: '기존의 단방향 웹소설 소비 방식을 탈피하여, 유저의 채팅과 행동이 작품 진행에 직접적인 영향을 미치도록 시나리오 다이내믹 브랜칭(Dynamic Branching) AI 엔진을 도입했습니다.',
        features: ['Context-Aware Persona AI', 'Interactive Novel Reader', 'Scenario Dynamic Branching', 'Character Memory System'],
        configSnippet: { var: 'novelEngine', model: 'claude-3-haiku', temp: '0.7', ctx: '32000', plugins: '["story_branching"]' },
        iframeScale: 0.5
    },
    {
        id: 'afarm',
        title: 'AFarm',
        category: 'Social Game',
        tag: 'WEB3_FARM',
        desc: '유저간의 상호작용과 작물 재배 메커니즘을 결합한 멀티플레이어 소셜 게임. PWA 아키텍처로 모바일 친화적으로 제공됩니다.',
        url: 'https://afarm-a283b.web.app',
        lucideIcon: FcLandscape,
        bgColor: 'bg-green-900',
        detailTitle: 'AFarm Social Game',
        detailSub: 'WEB-BASED MULTIPLAYER',
        techDesc: '웹 환경에서도 네이티브 수준의 부드러움을 유지하기 위해 최적화된 상태 동기화 웹소켓(WebSocket) 단방향 통신과 PWA 기반 로컬 캐싱 기술을 적용했습니다.',
        features: ['Real-time Multiplayer Sync', 'Progressive Web App (PWA)', 'Virtual Economy Engine', 'Interactive Elements'],
        configSnippet: { var: 'gameServer', model: 'multiplayer-sync', temp: '0.0', ctx: '0', plugins: '["websocket", "state_sync"]' },
        deviceMode: 'mobile'
    },
    {
        id: 'golfcaddy',
        title: 'Golf Caddy',
        category: 'Sports',
        tag: 'AI_CADDY',
        desc: '필드 데이터와 유저의 플레이 기록을 바탕으로 최적 클럽과 전략을 제시하는 초개인화 AI 골프 비서 플랫폼입니다.',
        url: 'https://golf-6ac26.web.app',
        lucideIcon: FcSportsMode,
        bgColor: 'bg-emerald-900',
        detailTitle: 'Personal Golf Caddy',
        detailSub: 'SMART SPORTS ASSISTANT',
        techDesc: 'GPS 기반 지형 데이터와 실시간 기상 데이터 API를 융합했습니다. 사용자의 과거 스윙 이력을 머신러닝 알고리즘으로 분석하여 각 홀마다 공략법을 제안합니다.',
        features: ['GPS Course Mapping', 'Dynamic Weather Integration', 'AI Club Recommendation', 'User Analytics Dashboard'],
        configSnippet: { var: 'caddyBrain', model: 'sports-analyzer-v1', temp: '0.3', ctx: '8000', plugins: '["gps", "weather"]' },
        deviceMode: 'mobile'
    },
    {
        id: 'hangulwave',
        title: 'HangulWave',
        category: 'Education',
        tag: 'KOREAN_LMS',
        desc: '글로벌 유저를 위한 스마트 한국어 학습 플랫폼. 다양한 게이미피케이션 요소와 음성인식을 결합해 개인화된 에듀테크 환경을 제공합니다.',
        url: 'https://fluted-lambda-470312-v4.web.app',
        icon: '/HangulWave_icon_512.png',
        bgColor: 'bg-blue-900',
        detailTitle: 'HangulWave Platform',
        detailSub: 'EDUTECH LMS SOLUTION',
        techDesc: '외국인 학습자를 위해 음성 인식(STT) 기반의 발음 평가 시스템과 AI 한국어 튜터 기능을 연동하였습니다. 실시간 DB를 통해 학습 진척도를 관리합니다.',
        features: ['Interactive Speech Recognition', 'Gamified Learning Modules', 'Real-time Grading System', 'Cloud Content Sync'],
        configSnippet: { var: 'eduEngine', model: 'tutor-llm-v4', temp: '0.4', ctx: '12000', plugins: '["stt", "tts"]' },
        deviceMode: 'mobile'
    },
    {
        id: 'videodownloader',
        title: 'Video Downloader',
        category: 'Utility Tool',
        tag: 'DESKTOP_APP',
        desc: '다양한 플랫폼의 영상을 고화질로 저장할 수 있는 글로벌 비디오 다운로더 솔루션. Windows 및 macOS 환경을 완벽하게 지원합니다.',
        url: 'https://videodown-lilac.vercel.app/',
        icon: '/videodown.png',
        bgColor: 'bg-slate-900',
        detailTitle: 'Global Video Downloader',
        detailSub: 'CROSS-PLATFORM DESKTOP APP',
        techDesc: '효율적인 크로스 플랫폼 데스크톱 애플리케이션으로 기획되어, 다국어 지원 및 최적화된 비디오 파싱 엔진을 탑재했습니다. 빠르고 안정적인 다운로드 경험을 제공합니다.',
        features: ['Cross-platform Support (Win/Mac)', 'Multi-language Localization', 'Automated License Verification', 'Optimized Download Engine'],
        configSnippet: { var: 'downloadEngine', model: 'av19-parser', temp: '0.1', ctx: '2048', plugins: '["video_extractor", "license_manager"]' },
        iframeScale: 0.8,
        previewImage: '/video.png'
    }
]

interface PortfolioGridProps {
    onOpenProject?: (id: string) => void;
}

const CardBanner: React.FC<{ project: Project }> = ({ project }) => {
    const Icon = project.lucideIcon || Layers;
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#0A0A0A]">
            <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none opacity-[0.04]">
                <span className="text-[80px] md:text-[90px] font-black text-white uppercase leading-[0.85] tracking-tighter w-full text-center whitespace-nowrap overflow-hidden">{project.title}</span>
                <span className="text-[80px] md:text-[90px] font-black text-white uppercase leading-[0.85] tracking-tighter w-full text-center whitespace-nowrap overflow-hidden">INTERACTIVE</span>
            </div>
            
            <div className="relative z-10 w-28 h-28 bg-white rounded-[2rem] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                {project.icon ? (
                    <img src={project.icon} alt={project.title} className="w-[65%] h-[65%] object-contain rounded-2xl" />
                ) : (
                    <Icon size={44} className={project.iconColor || "text-slate-800"} strokeWidth={1.5} />
                )}
            </div>
        </div>
    );
};

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onOpenProject }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectClick = (project: Project) => {
        // 모든 프로젝트가 동일한 심플 모달뷰(setSelectedProject)를 사용하도록 통일
        setSelectedProject(project);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {projects.map((project) => {
                return (
                    <motion.div 
                        key={project.id}
                        whileHover={{ y: -5 }}
                        onClick={() => handleProjectClick(project)}
                        className="group relative bg-[#050510] rounded-[2.5rem] p-0 border border-slate-800/80 shadow-2xl overflow-hidden cursor-pointer flex flex-col col-span-1 min-h-[460px] backdrop-blur-md"
                    >
                        <div className="relative overflow-hidden flex items-center justify-center transition-colors duration-500 h-64 shrink-0 bg-[#0A0A0A]">
                            <CardBanner project={project} />
                        </div>

                        <div className="flex flex-col items-start justify-start p-8 flex-1 text-left bg-gradient-to-b from-[#050510] to-[#0A0A15]">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                                    {project.category}
                                </span>
                                <span className="text-slate-400 text-xs font-black uppercase tracking-widest">{project.tag}</span>
                            </div>
                            <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:text-white/90 transition-colors">{project.title}</h3>
                            <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8 line-clamp-3">
                                {project.desc}
                            </p>
                            
                             <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 group/btn mt-auto">
                                View Details <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform ml-1" />
                             </button>
                        </div>
                    </motion.div>
                );
            })}

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#020617]/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
                        
                        <motion.div 
                                initial={{ scale: 0.95, opacity: 0, y: 40 }} 
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 40 }}
                                className="w-full max-w-7xl bg-[#090b16] rounded-[3rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] relative z-10 overflow-hidden flex flex-col max-h-[92vh] border border-slate-700/80 backdrop-blur-md"
                            >
                                <div className="p-8 px-10 border-b border-slate-800/80 flex justify-between items-center bg-[#090b16] sticky top-0 z-20">
                                    <div className="flex items-center gap-5">
                                        <div className={`w-14 h-14 ${selectedProject.bgColor} rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] border border-slate-700/50`}>
                                            {selectedProject.lucideIcon ? (
                                                <selectedProject.lucideIcon size={26} /> 
                                            ) : selectedProject.icon ? (
                                                <img src={selectedProject.icon} className="w-full h-full object-cover scale-110 rounded-2xl" alt="logo" />
                                            ) : (
                                                <Layers size={26} />
                                            )}
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-black text-white tracking-tight leading-none mb-1 shadow-black drop-shadow-sm">{selectedProject.detailTitle}</h2>
                                            <span className="text-xs font-black tracking-widest text-indigo-400 uppercase">{selectedProject.detailSub}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        {selectedProject.url && (
                                            <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-full transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                                                <ExternalLink size={16} /> 사이트 방문
                                            </a>
                                        )}
                                        <button onClick={() => setSelectedProject(null)} className="p-3 hover:bg-slate-800 rounded-full transition-colors text-slate-400">
                                            <X size={24} />
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
                                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                                        
                                        {/* Left Column: Descriptions */}
                                        <div className="lg:col-span-2 flex flex-col space-y-12">
                                            <div>
                                                <h4 className="flex items-center gap-2 text-2xl font-black text-white mb-5 tracking-tight">
                                                    <Settings2 size={24} className="text-indigo-400"/> 
                                                    Technical Approach
                                                </h4>
                                                <p className="text-slate-300 leading-relaxed font-medium text-[15px]">
                                                    {selectedProject.techDesc}
                                                </p>
                                            </div>

                                            <div className="p-8 bg-[#02040a] rounded-[2rem] border border-slate-800 shadow-inner h-full">
                                                <h5 className="font-black text-white mb-6 text-sm uppercase tracking-widest flex items-center gap-3">
                                                    <Sparkles size={18} className="text-indigo-400" /> Key Features
                                                </h5>
                                                <ul className="space-y-5">
                                                    {selectedProject.features.map((feat, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-slate-400 text-[15px] font-medium leading-normal">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] mt-2 shrink-0"></div>
                                                            {feat}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        {/* Right Column: Interactive Live Preview Block */}
                                        <div className="lg:col-span-3 flex flex-col items-center justify-center min-h-[450px]">
                                            {selectedProject.deviceMode === 'mobile' ? (
                                                <div className="relative w-[340px] h-[680px] rounded-[2.5rem] border-[12px] border-[#1a1a24] shadow-[0_0_80px_rgba(0,0,0,0.6)] bg-white overflow-hidden flex flex-col shrink-0">
                                                    {/* Dynamic Island Mock */}
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a24] rounded-b-3xl z-30"></div>
                                                    {/* Mobile App View */}
                                                    <div className="flex-1 w-full relative bg-white pb-5"> {/* Simulated bottom safe area */}
                                                        {selectedProject.previewImage ? (
                                                            <div className="absolute inset-0 overflow-hidden bg-[#111]">
                                                                <img src={selectedProject.previewImage} alt="Preview" className="w-full h-full object-cover object-top" />
                                                            </div>
                                                        ) : selectedProject.url ? (
                                                            <div className="absolute inset-0 overflow-hidden bg-white">
                                                                <iframe 
                                                                    src={selectedProject.url} 
                                                                    style={{
                                                                        width: '125%', /* 100 / 0.8 */
                                                                        height: '125%',
                                                                        transform: 'scale(0.8)',
                                                                        transformOrigin: 'top left'
                                                                    }}
                                                                    className="border-none absolute top-0 left-0 bg-white" 
                                                                    title={selectedProject.title} 
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700 bg-[#050510]">
                                                                <Globe size={48} className="opacity-20 mb-4" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    {/* Fake Home Indicator */}
                                                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black/20 rounded-full z-30 pointer-events-none"></div>
                                                </div>
                                            ) : (
                                                <div className="w-full h-[500px] lg:h-[600px] flex-1 rounded-[2rem] overflow-hidden flex flex-col border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.4)] bg-[#02040a]">
                                                    {/* MacOS Window Control Bar */}
                                                    <div className="h-12 border-b border-slate-800 flex items-center px-5 gap-2 shrink-0 bg-[#090b16]">
                                                        <div className="flex gap-2">
                                                            <div className="w-3.5 h-3.5 rounded-full bg-rose-500/80"></div>
                                                            <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80"></div>
                                                            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80"></div>
                                                        </div>
                                                        <div className="mx-auto px-6 py-1.5 rounded-full bg-[#02040a] text-[11px] font-bold text-slate-400 tracking-widest font-mono border border-slate-800 truncate mix-blend-screen shadow-inner max-w-sm">
                                                            {selectedProject.url?.replace('https://', '') || 'localhost'}
                                                        </div>
                                                        <div className="w-10"></div> {/* spacer for centering */}
                                                    </div>
                                                    
                                                    {/* Render IFrame Live Browser View */}
                                                    <div className="flex-1 w-full bg-[#050510] relative group">
                                                        {selectedProject.previewImage ? (
                                                            <div className="absolute inset-0 overflow-hidden bg-[#111]">
                                                                <img src={selectedProject.previewImage} alt="Preview" className="w-full h-full object-cover object-top" />
                                                            </div>
                                                        ) : selectedProject.url ? (
                                                            <div className="absolute inset-0 overflow-hidden bg-white">
                                                                <iframe 
                                                                    src={selectedProject.url} 
                                                                    style={{
                                                                        width: selectedProject.iframeScale ? `${100 / selectedProject.iframeScale}%` : '100%',
                                                                        height: selectedProject.iframeScale ? `${100 / selectedProject.iframeScale}%` : '100%',
                                                                        transform: selectedProject.iframeScale ? `scale(${selectedProject.iframeScale})` : 'none',
                                                                        transformOrigin: 'top left'
                                                                    }}
                                                                    className="border-none absolute top-0 left-0 bg-white" 
                                                                    title={selectedProject.title} 
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700">
                                                                <Globe size={64} className="opacity-20 mb-4" />
                                                                <span className="text-sm font-black uppercase tracking-widest text-slate-500">Live Preview Unavailable</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
