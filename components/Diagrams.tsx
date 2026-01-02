
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Cpu, Palette, Globe, Layers, Database, X, ArrowRight, Activity, Terminal, Code, Sparkles, BarChart3, Settings2, Box, ClipboardList, PenTool, Server, Rocket, Music, TrendingUp, Play, Pause, SkipForward, Disc, Waves, Calendar, Heart, User, Search, Menu, Home, Signal, Wifi, Battery, ScrollText, BookOpen, CloudMoon, Snowflake, Diamond, PawPrint, HeartHandshake, UserPlus, UserMinus, Star, MessageCircle } from 'lucide-react';

const FLUTTERLOG_ICON_URL = "https://firebasestorage.googleapis.com/v0/b/studio-6323553811-9cc93.firebasestorage.app/o/FCMImages%2F1024-1024.png?alt=media&token=fdfb49fb-1423-4b77-8e97-e5cc75048ba8";

// --- SERVICE LIST: Technical Cards ---
export const ServiceList: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { id: '01', title: 'Web Platform', sub: 'React / Next.js', desc: '고해상도 사용자 경험을 제공하는 모던 웹.', icon: Globe },
        { id: '02', title: 'Mobile App', sub: 'Flutter / Native', desc: '강력한 퍼포먼스의 크로스 플랫폼 솔루션.', icon: Smartphone },
        { id: '03', title: 'AI Integration', sub: 'LLM / Vector DB', desc: '비즈니스 로직에 지능을 더하는 AI 엔진.', icon: Cpu },
        { id: '04', title: 'UI/UX Design', sub: 'Figma / System', desc: '사용자 중심의 직관적이고 아름다운 설계.', icon: Palette },
      ].map((service) => (
        <motion.div 
          key={service.id} 
          whileHover={{ y: -5 }}
          className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-slate-300 font-sans tracking-tighter select-none -translate-y-2 translate-x-2">
                {service.id}
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-inner">
                <service.icon size={26} strokeWidth={1.5} />
            </div>
            
            <div className="mt-auto">
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <span className="text-xs font-mono text-blue-600 mb-2 block">{service.sub}</span>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{service.desc}</p>
            </div>
            
            {/* Hover Tech Line */}
            <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-500"></div>
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
            { icon: Terminal, title: "Intelligence", desc: "Gemini 2.5 Flash", tag: "AI Model" }
        ].map((it, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 group-hover:text-blue-600 transition-colors shrink-0">
                    <it.icon size={20} />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full uppercase tracking-wide">{it.tag}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">{it.title}</h4>
                    <p className="text-xs text-slate-500 font-mono mt-1">{it.desc}</p>
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
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                    <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg group hover:-translate-y-2 transition-transform duration-300"
                    >
                        {/* Step Number Badge */}
                        <div className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-4 border-slate-50">
                            {step.id}
                        </div>

                        <div className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center ${step.color} mb-5 shadow-inner`}>
                            <step.icon size={24} />
                        </div>
                        
                        <div className="mb-2">
                             <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">{step.sub}</span>
                             <h3 className="text-lg font-black text-slate-900">{step.title}</h3>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">{step.desc}</p>
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
}

const projects: Project[] = [
    {
        id: 'flutterlog',
        title: 'FlutterLog',
        category: 'Case Study',
        tag: 'BUILD_2025',
        desc: '40명의 AI 페르소나와 함께하는 리얼타임 채팅형 연애 시뮬레이션 게임.',
        icon: FLUTTERLOG_ICON_URL,
        bgColor: 'bg-slate-900',
        detailTitle: 'FlutterLog',
        detailSub: 'PROJECT_DETAIL_VIEW',
        techDesc: '사용자 경험을 극대화하기 위해 리액트와 플러터 하이브리드 아키텍처를 채택했습니다. 특히 LLM 응답 속도를 최적화하기 위해 자체적인 캐싱 레이어와 스트리밍 처리를 구현했습니다.',
        features: ['Real-time Emotion Analysis', 'Vector Database Memory', 'Dynamic Persona Generation', 'Cross-Platform Sync'],
        configSnippet: {
            var: 'engineConfig',
            model: 'gemini-pro',
            temp: '0.8',
            ctx: '32000',
            plugins: '["emotion", "memory"]'
        },
        statsComponent: <CoreEmotionStatsGrid />
    },
    {
        id: 'mirai',
        title: 'MIRAI',
        category: 'Lifestyle',
        tag: 'AI_FORTUNE',
        desc: '전통 명리학 데이터를 AI로 재해석하여 개인화된 일일 운세와 조언을 제공하는 서비스.',
        lucideIcon: Layers,
        bgColor: 'bg-[#F0F7FF]', 
        detailTitle: 'MIRAI Fortune',
        detailSub: 'AI_ASTROLOGY',
        techDesc: '만세력 데이터베이스와 LLM을 결합하여, 단순한 텍스트 출력을 넘어 사용자의 고민에 공감하고 구체적인 조언을 제시하는 AI 상담사를 구현했습니다.',
        features: ['정통 명리학 알고리즘 적용', 'LLM 기반 심층 운세 해석', '일일 바이오리듬 & 행운 분석', '개인 맞춤형 AI 조언 제공'],
        configSnippet: {
            var: 'fortuneModel',
            model: 'mystic-7b',
            temp: '0.7',
            ctx: '8192',
            plugins: '["saju_db", "tarot"]'
        }
    },
    {
        id: 'deepdive',
        title: 'DeepDive',
        category: 'EdTech',
        tag: 'UNDERWATER_LMS',
        desc: '스쿠버 다이빙 자격증 교육부터 로그북 관리까지, 다이버를 위한 올인원 플랫폼.',
        lucideIcon: Waves,
        bgColor: 'bg-sky-900',
        detailTitle: 'DeepDive Edu',
        detailSub: 'MARINE_PLATFORM',
        techDesc: '오프라인 환경에서도 작동하는 로그북 기능과 다이빙 포인트 GPS 매핑 기술을 적용했습니다. 동영상 강의 스트리밍 최적화를 통해 해양 환경에서도 끊김 없는 학습을 지원합니다.',
        features: ['Offline Logbook Sync', 'PADI/SSI Course Integration', 'Dive Site GPS Map', 'Community Feed'],
        configSnippet: {
            var: 'diveComputer',
            model: 'marine-ops-v1',
            temp: '0.2',
            ctx: '12000',
            plugins: '["gps", "offline_sync"]'
        }
    }
]

interface PortfolioGridProps {
    onOpenProject?: (id: string) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onOpenProject }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectClick = (project: Project) => {
        if (project.id === 'flutterlog' && onOpenProject) {
            onOpenProject(project.id);
        } else {
            setSelectedProject(project);
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
            {projects.map((project, index) => {
                // FlutterLog is always large (index 0)
                const isVertical = index === 0;
                
                return (
                    <motion.div 
                        key={project.id}
                        whileHover={{ y: -5 }}
                        onClick={() => handleProjectClick(project)}
                        className={`group relative bg-white rounded-[2.5rem] p-0 border border-slate-200 shadow-xl overflow-hidden cursor-pointer flex flex-col ${
                            isVertical ? 'lg:col-span-1 lg:row-span-2' : 'lg:col-span-2 md:flex-row'
                        }`}
                    >
                        {/* Banner Area - Updated Logic for New Previews */}
                        <div className={`
                            relative overflow-hidden flex items-center justify-center transition-colors duration-500
                            ${project.bgColor}
                            ${isVertical ? 'h-72 flex-1' : 'h-52 md:h-auto md:w-1/2'}
                        `}>
                            {/* Render Specific Previews based on ID */}
                            {project.id === 'flutterlog' && <LiveChatPreview />}
                            {project.id === 'mirai' && <MiraiPreview />}
                            {project.id === 'deepdive' && <DeepDivePreview />}
                        </div>

                        {/* Content Area */}
                        <div className={`
                            flex flex-col items-start justify-center
                            ${isVertical ? 'p-8' : 'p-8 md:w-1/2'}
                        `}>
                            <div className="flex items-center gap-3 mb-3">
                                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${
                                    project.id === 'mirai' ? 'bg-blue-100 text-blue-700' :
                                    project.id === 'deepdive' ? 'bg-sky-100 text-sky-700' :
                                    'bg-blue-100 text-blue-700'
                                }`}>{project.category}</span>
                                <span className="text-slate-400 text-xs font-mono">{project.tag}</span>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{project.title}</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 line-clamp-3">
                                {project.desc}
                            </p>
                            
                             <button className="text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1 group/btn">
                                View Case <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                             </button>
                        </div>
                    </motion.div>
                );
            })}

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setSelectedProject(null)} />
                        
                        {/* MIRAI SPECIFIC LAYOUT */}
                        {selectedProject.id === 'mirai' ? (
                            <motion.div 
                                initial={{ scale: 0.95, opacity: 0, y: 40 }} 
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 40 }}
                                className="w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[95vh] border border-slate-200"
                            >
                                {/* Header */}
                                <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-20">
                                    <div className="flex items-center gap-5">
                                        <MiraiLogo size="small" />
                                        <div>
                                            <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-none">{selectedProject.detailTitle}</h2>
                                            <span className="text-xs font-bold text-cyan-500 tracking-widest uppercase">{selectedProject.detailSub}</span>
                                        </div>
                                    </div>
                                    <button onClick={() => setSelectedProject(null)} className="p-3 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="flex-1 overflow-y-auto p-10 custom-scrollbar bg-slate-50/50">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                                        {/* Left: Execution Image (App Mockup) */}
                                        <div className="flex justify-center bg-slate-200/50 rounded-[3rem] p-10 border border-white shadow-inner">
                                            <MiraiAppMockup />
                                        </div>

                                        {/* Right: Technical Details */}
                                        <div className="space-y-10">
                                            <div>
                                                <h4 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                                                    <Settings2 size={20} className="text-cyan-500"/> 
                                                    기술적 접근 (Technical Approach)
                                                </h4>
                                                <p className="text-slate-600 leading-relaxed font-medium text-lg">
                                                    {selectedProject.techDesc}
                                                </p>
                                            </div>

                                            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                                                <h5 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wide flex items-center gap-2">
                                                    <Sparkles size={16} className="text-cyan-500" /> 핵심 기능 (Key Features)
                                                </h5>
                                                <ul className="space-y-4">
                                                    {selectedProject.features.map((feat, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                                                            {feat}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-[#1e293b] text-slate-300 p-8 rounded-3xl font-mono text-sm leading-relaxed shadow-xl relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-4 opacity-20">
                                                    <Code size={40} />
                                                </div>
                                                <div className="flex gap-2 mb-6 border-b border-slate-600 pb-4">
                                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                    <span className="ml-auto opacity-50 text-xs">config.json</span>
                                                </div>
                                                <p>
                                                    <span className="text-purple-400">const</span> <span className="text-blue-400">{selectedProject.configSnippet.var}</span> = {'{'}<br/>
                                                    &nbsp;&nbsp;model: <span className="text-green-400">"{selectedProject.configSnippet.model}"</span>,<br/>
                                                    &nbsp;&nbsp;temperature: <span className="text-orange-400">{selectedProject.configSnippet.temp}</span>,<br/>
                                                    &nbsp;&nbsp;context_window: <span className="text-orange-400">{selectedProject.configSnippet.ctx}</span>,<br/>
                                                    &nbsp;&nbsp;plugins: <span className="text-green-400">{selectedProject.configSnippet.plugins}</span><br/>
                                                    {'}'};
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            // DEFAULT LAYOUT (Existing)
                            <motion.div 
                                initial={{ scale: 0.95, opacity: 0, y: 40 }} 
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 40 }}
                                className="w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh] border border-slate-200"
                            >
                                <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                            <Layers size={20} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-none">{selectedProject.detailTitle}</h2>
                                            <span className="text-xs font-mono text-slate-400">{selectedProject.detailSub}</span>
                                        </div>
                                    </div>
                                    <button onClick={() => setSelectedProject(null)} className="p-3 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                                        <X size={24} />
                                    </button>
                                </div>
                                
                                <div className="flex-1 overflow-y-auto p-10 custom-scrollbar bg-slate-50/50">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                        <div>
                                            <div className="mb-8">
                                                <h4 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
                                                    <Settings2 size={20} className="text-blue-600"/> 
                                                    Technical Approach
                                                </h4>
                                                <p className="text-slate-600 leading-relaxed font-medium">
                                                    {selectedProject.techDesc}
                                                </p>
                                            </div>

                                            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm mb-6">
                                                <h5 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Key Features</h5>
                                                <ul className="space-y-3">
                                                    {selectedProject.features.map((feat, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                                            {feat}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col gap-6">
                                            <div className="bg-slate-900 text-slate-300 p-6 rounded-2xl font-mono text-xs leading-relaxed shadow-lg">
                                                <div className="flex gap-2 mb-4 border-b border-slate-700 pb-2">
                                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                    <span className="ml-auto opacity-50">config.json</span>
                                                </div>
                                                <p>
                                                    <span className="text-purple-400">const</span> <span className="text-blue-400">{selectedProject.configSnippet.var}</span> = {'{'}<br/>
                                                    &nbsp;&nbsp;model: <span className="text-green-400">"{selectedProject.configSnippet.model}"</span>,<br/>
                                                    &nbsp;&nbsp;temperature: <span className="text-orange-400">{selectedProject.configSnippet.temp}</span>,<br/>
                                                    &nbsp;&nbsp;context_window: <span className="text-orange-400">{selectedProject.configSnippet.ctx}</span>,<br/>
                                                    &nbsp;&nbsp;plugins: <span className="text-green-400">{selectedProject.configSnippet.plugins}</span><br/>
                                                    {'}'};
                                                </p>
                                            </div>
                                            {/* Optional custom component for specific projects */}
                                            {selectedProject.statsComponent}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
