
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MessageCircle, Heart, Globe, Bell, ShoppingBag, Brain, Zap, Clock, Users, Activity, X, ChevronLeft, ChevronRight, Lock, MapPin, Search, Smartphone, Share, Share2, MoreVertical, PlusSquare, Download, Shield, Star, Smile, Coffee, Crown, Mail, Gift, User, Ghost, Signal, Wifi, Battery, Home, BookLock, Unlock } from 'lucide-react';
import { characterData } from './data/characters';

// New Logo URL (Bright Pink F)
const logoImg = "https://firebasestorage.googleapis.com/v0/b/studio-6323553811-9cc93.firebasestorage.app/o/FCMImages%2F1024-1024.png?alt=media&token=fdfb49fb-1423-4b77-8e97-e5cc75048ba8";

// --- Sub-components ---

const StatBar = ({ label, value, color }: { label: string, value: number, color: string }) => (
    <div className="flex items-center gap-3 mb-2">
        <span className="w-16 text-xs font-bold text-slate-400">{label}</span>
        <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 1, ease: "circOut" }}
                className={`h-full rounded-full ${color}`}
            />
        </div>
        <span className="w-8 text-xs font-mono text-slate-500 text-right">{value}</span>
    </div>
);

const CharacterStatModal = ({ character, onClose }: { character: any, onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#111] border border-white/10 rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
                onClick={e => e.stopPropagation()}
            >
                {/* Left: Image & Basic Info */}
                <div className="w-full md:w-2/5 bg-slate-900 relative p-0 overflow-hidden flex flex-col">
                    <img src={character.avatar} alt={character.name} className="w-full h-64 md:h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-3xl font-black mb-1">{character.name}</h3>
                        <p className="text-sm opacity-80 mb-2">{character.job}</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] border border-white/10">{character.mbti}</span>
                            <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] border border-white/10">{character.age}세</span>
                        </div>
                    </div>
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-rose-500/80 text-white rounded-full transition-colors backdrop-blur-md z-10">
                        <X size={20} />
                    </button>
                </div>

                {/* Right: Detailed Stats */}
                <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto custom-scrollbar">
                    <div className="mb-8">
                        <h4 className="flex items-center gap-2 text-sm font-bold text-rose-500 uppercase tracking-widest mb-3">
                            <Brain size={16} /> Personality
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed font-medium">
                            {character.personality}
                        </p>
                    </div>

                    {character.stats && (
                        <>
                            <div className="mb-8">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-rose-400 uppercase tracking-widest mb-4">
                                    <Activity size={16} /> Core Stats
                                </h4>
                                <div className="space-y-1">
                                    <StatBar label="호감도" value={character.stats.affection || 50} color="bg-rose-500" />
                                    <StatBar label="신뢰" value={character.stats.trust || 50} color="bg-blue-500" />
                                    <StatBar label="소유욕" value={character.stats.possessiveness || 50} color="bg-purple-500" />
                                    <StatBar label="불안" value={character.stats.anxiety || 50} color="bg-amber-500" />
                                    <StatBar label="매혹" value={character.stats.allure || 50} color="bg-pink-400" />
                                </div>
                            </div>


                            <div className="mt-8 rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-black">
                                <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">Voice / Video Teaser</span>
                                </div>
                                <div className="aspect-video w-full bg-black relative flex items-center justify-center group overflow-hidden">
                                    {character.video ? (
                                        <div className="w-full h-full relative pointer-events-none">
                                            <iframe
                                                src={`https://player.vimeo.com/video/${character.video}?autoplay=1&muted=1&background=1&loop=1&byline=0&title=0&portrait=0`}
                                                title="Character Video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                                allowFullScreen
                                                className="absolute inset-0 w-full h-full scale-[1.35]" // Slight scale to remove possible black edges/ui
                                            ></iframe>
                                        </div>
                                    ) : character.youtubeId ? (
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${character.youtubeId}?autoplay=0&controls=1&rel=0&modestbranding=1`}
                                            title="Character Video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full"
                                        ></iframe>
                                    ) : (
                                        <div className="text-center p-6">
                                            <p className="text-slate-500 text-xs">등록된 영상이 없습니다.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}

// --- NEW VISUAL COMPONENTS ---

// --- Secret Diary Component ---
const SecretDiaryViewer = ({ entries = [] }: { entries?: any[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {entries.length > 0 ? (
                entries.map((entry, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative p-6 rounded-2xl border ${entry.isLocked ? 'bg-[#1a1a1a] border-white/5' : 'bg-white/5 border-rose-500/30'} overflow-hidden group`}
                    >
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <span className="px-2 py-1 rounded-md bg-white/10 text-[10px] font-bold text-slate-300">{entry.date}</span>
                            {entry.isLocked ? (
                                <Lock size={16} className="text-slate-500" />
                            ) : (
                                <Unlock size={16} className="text-rose-500" />
                            )}
                        </div>
                        
                        <h4 className={`text-sm font-bold mb-2 relative z-10 ${entry.isLocked ? 'text-slate-500 blur-sm' : 'text-white'}`}>
                            {entry.isLocked ? '비밀 일기' : entry.title}
                        </h4>
                        
                        <p className={`text-xs leading-relaxed relative z-10 ${entry.isLocked ? 'text-slate-600 blur-sm select-none' : 'text-slate-300'}`}>
                            {entry.isLocked ? '이 내용을 확인하려면 캐릭터와의 신뢰도가 더 필요합니다. 관계를 발전시켜 비밀을 해제하세요.' : entry.content}
                        </p>

                        {/* Lock Overlay */}
                        {entry.isLocked && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] z-20">
                                <div className="px-4 py-2 bg-black/80 rounded-full border border-white/10 flex items-center gap-2">
                                    <Lock size={12} className="text-rose-500" />
                                    <span className="text-[10px] font-bold text-white">LOCKED</span>
                                </div>
                            </div>
                        )}

                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
                    </motion.div>
                ))
            ) : (
                <div className="col-span-full text-center py-10 text-slate-500 text-xs">
                    아직 작성된 일기가 없습니다.
                </div>
            )}
        </div>
    );
};


const IdealTypeMatcher = ({ characters, onSelect }: { characters: any[], onSelect: (char: any) => void }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const questions = [
        {
            q: "선호하는 데이트 스타일은?",
            options: [
                { tea: "함께 땀 흘리며 운동하기", val: "active" },
                { tea: "조용한 카페에서 대화하기", val: "calm" },
                { tea: "맛집 탐방하러 다니기", val: "food" },
                { tea: "집에서 넷플릭스 보기", val: "home" }
            ]
        },
        {
            q: "나의 연애 성향은?",
            options: [
                { tea: "내가 리드하는 게 편해", val: "leader" },
                { tea: "상대방에게 맞추는 편이야", val: "follower" },
                { tea: "친구처럼 편한 게 좋아", val: "friend" }
            ]
        },
        {
            q: "상대방에게 가장 바라는 점은?",
            options: [
                { tea: "나만 바라보는 헌신", val: "devotion" },
                { tea: "배울 점이 있는 존경심", val: "respect" },
                { tea: "티키타카가 잘 되는 재미", val: "fun" }
            ]
        }
    ];

    const handleAnswer = (val: string) => {
        const newAnswers = [...answers, val];
        setAnswers(newAnswers);
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setLoading(true);
            setTimeout(() => {
                const randomChar = characters[Math.floor(Math.random() * characters.length)];
                setResult(randomChar);
                setLoading(false);
            }, 1500);
        }
    };

    const reset = () => {
        setStep(0);
        setAnswers([]);
        setResult(null);
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-[#111] rounded-[2.5rem] border border-white/10 p-8 md:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-center text-center">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.05)_0%,transparent_50%)] pointer-events-none"></div>

            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="w-16 h-16 border-4 border-rose-500/30 border-t-rose-500 rounded-full animate-spin"></div>
                        <p className="text-rose-400 font-bold animate-pulse">운명의 데이터를 분석 중...</p>
                    </motion.div>
                ) : result ? (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center"
                    >
                        <h3 className="text-xl font-bold text-white mb-6">당신의 운명의 짝은?</h3>
                        <div className="w-32 h-32 rounded-full border-4 border-rose-500 p-1 mb-4 relative group cursor-pointer" onClick={() => onSelect(result)}>
                            <img src={result.smallAvatar} alt="result" className="w-full h-full rounded-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-bold text-white">프로필 보기</span>
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-white mb-2">{result.name}</h2>
                        <p className="text-rose-400 font-bold text-sm mb-6">{result.job}</p>
                        <p className="text-slate-400 text-sm mb-8 max-w-sm leading-relaxed">"{result.personality.substring(0, 50)}..."</p>
                        <button onClick={reset} className="px-6 py-2 rounded-full border border-white/20 text-slate-400 text-sm hover:bg-white/5 transition-colors">다시 하기</button>
                    </motion.div>
                ) : (
                    <motion.div
                        key={step}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <div className="flex justify-center mb-8 gap-2">
                            {questions.map((_, i) => (
                                <div key={i} className={`h-1 flex-1 rounded-full px-1 ${i <= step ? 'bg-rose-500' : 'bg-slate-800'}`}></div>
                            ))}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-tight">
                            Q{step + 1}.<br />
                            {questions[step].q}
                        </h3>
                        <div className="grid gap-3">
                            {questions[step].options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleAnswer(opt.val)}
                                    className="w-full py-4 rounded-xl bg-white/5 border border-white/5 text-slate-200 font-bold hover:bg-rose-600 hover:border-rose-500 hover:text-white transition-all duration-200 shadow-sm active:scale-95"
                                >
                                    {opt.tea}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const LiveWorldMap = ({ characters }: { characters: any[] }) => {
    // Define locations with coordinates (percentages)
    const locations = [
        { name: "Gym", x: 20, y: 30, color: "bg-rose-500" },
        { name: "Cafe", x: 70, y: 20, color: "bg-amber-500" },
        { name: "Home", x: 50, y: 80, color: "bg-purple-500" },
        { name: "Park", x: 80, y: 60, color: "bg-green-500" },
        { name: "Library", x: 15, y: 65, color: "bg-blue-500" },
        { name: "Bar", x: 85, y: 35, color: "bg-indigo-500" },
        { name: "Cinema", x: 35, y: 15, color: "bg-red-500" },
        { name: "Office", x: 60, y: 45, color: "bg-slate-500" },
    ];

    return (
        <div className="w-full h-[400px] bg-[#0a0a0a] rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {locations.map((loc, i) => (
                <div key={i} className="absolute flex flex-col items-center z-10" style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -50%)' }}>
                    <div className={`w-3 h-3 rounded-full ${loc.color} shadow-lg shadow-${loc.color.split('-')[1]}-500/50`}></div>
                    <span className="text-[9px] text-slate-500 font-bold mt-1 uppercase tracking-wider bg-black/50 backdrop-blur-sm px-1 rounded">{loc.name}</span>
                </div>
            ))}

            {characters.slice(0, 15).map((char, i) => {
                // Generate a random path for this character
                // Path: LocA -> LocA (Stay) -> LocB -> LocB (Stay) -> ...
                const pathLength = 4 + Math.floor(Math.random() * 3); // 4-6 stops
                const travelPath = Array.from({ length: pathLength }, () => {
                    const loc = locations[Math.floor(Math.random() * locations.length)];
                    // Add small jitter so they don't stack perfectly
                    return {
                        x: loc.x + (Math.random() * 6 - 3),
                        y: loc.y + (Math.random() * 6 - 3)
                    };
                });

                // Flatten for keyframes: [Pos1, Pos1, Pos2, Pos2, ...]
                const keyframesX: string[] = [];
                const keyframesY: string[] = [];
                const times: number[] = [];

                travelPath.forEach((pt, idx) => {
                    // Let's just use simple interpolation points.
                    // We insert the same point twice to simulate staying.
                    keyframesX.push(`${pt.x}%`);
                    keyframesY.push(`${pt.y}%`);

                    keyframesX.push(`${pt.x}%`);
                    keyframesY.push(`${pt.y}%`);
                });

                return (
                    <motion.div
                        key={char.id + i}
                        className="absolute w-8 h-8 rounded-full border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.3)] overflow-hidden z-20"
                        animate={{
                            left: keyframesX,
                            top: keyframesY,
                        }}
                        transition={{
                            duration: 30 + Math.random() * 20, // 30-50s full cycle
                            repeat: Infinity,
                            ease: "easeInOut", // Smooth start/stop
                            times: Array.from({ length: keyframesX.length }, (_, k) => k / (keyframesX.length - 1)) // Evenly distributed for now, simplified
                        }}
                    >
                        <img src={char.smallAvatar} alt={char.name} className="w-full h-full object-cover" />
                    </motion.div>
                );
            })}

            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 z-30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] text-white font-bold">LIVE: 1,204 Users Online</span>
            </div>
        </div>
    );
}

const VisionHeroBackground = () => (
    <div className="absolute inset-0 overflow-hidden bg-[#050505] -z-10">
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-rose-600/20 blur-[120px]"
        />
        <motion.div
            animate={{
                x: [-50, 50, -50],
                y: [-50, 50, -50],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/10 blur-[100px]"
        />
        {/* Grid overlay for 3D feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                    initial={{ x: Math.random() * 100 + "vw", y: Math.random() * 100 + "vh" }}
                    animate={{ y: [Math.random() * 100 + "vh", Math.random() * 100 + "vh"] }}
                    transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
                />
            ))}
        </div>
    </div>
)

const FlutterLogAppMockup = () => {
    return (
        <div className="w-[300px] h-[600px] bg-white rounded-[2.5rem] border-[8px] border-[#222] overflow-hidden relative shadow-2xl mx-auto">
            {/* Status Bar */}
            <div className="h-6 bg-white flex justify-between items-center px-4 text-[10px] font-bold text-slate-900 z-10 relative">
                <span>9:41</span>
                <div className="flex gap-1">
                    <div className="w-3 h-3 bg-slate-900 rounded-full opacity-20"></div>
                    <div className="w-3 h-3 bg-slate-900 rounded-full opacity-20"></div>
                    <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
                </div>
            </div>

            {/* App Content */}
            <div className="h-full overflow-y-auto pb-10 bg-slate-50 text-slate-900 hide-scrollbar">
                {/* NEW BRANDING HEADER */}
                <div className="flex flex-col items-center pt-8 pb-6 px-6 text-center bg-white rounded-b-[2rem] shadow-sm mb-4 border-b border-slate-100">
                    <motion.div
                        animate={{
                            y: [0, -5, 0],
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-20 h-20 bg-white rounded-2xl shadow-[0_10px_30px_rgba(244,63,94,0.2)] flex items-center justify-center mb-4 border border-rose-50 relative z-10"
                    >
                        <img src={logoImg} alt="FlutterLog" className="w-12 h-12 object-contain" />
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 bg-rose-500/10 rounded-2xl animate-ping opacity-20"></div>
                    </motion.div>

                    <h2 className="text-2xl font-black text-slate-900 tracking-tighter mb-2">FlutterLog</h2>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                        40명의 AI 페르소나와 함께하는<br/>
                        <span className="text-rose-500 font-bold">리얼타임 인터랙티브 유니버스</span>
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 px-4 mb-4">
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                        <span className="text-[10px] text-slate-400 font-bold mb-1">오늘</span>
                        <span className="text-sm font-bold">12월 28일 (일)</span>
                    </div>
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                        <span className="text-[10px] text-slate-400 font-bold mb-1">내 크레딧</span>
                        <span className="text-sm font-bold text-rose-500">17,169</span>
                    </div>
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                        <span className="text-[10px] text-slate-400 font-bold mb-1">새 메시지</span>
                        <span className="text-sm font-bold text-green-500">3</span>
                    </div>
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                        <span className="text-[10px] text-slate-400 font-bold mb-1">오늘의 약속</span>
                        <span className="text-sm font-bold text-blue-500">0</span>
                    </div>
                </div>

                {/* Banner */}
                <div className="mx-4 mb-4 p-4 bg-gradient-to-r from-purple-500 to-rose-500 rounded-2xl text-white shadow-lg shadow-rose-200">
                    <h3 className="font-bold text-sm mb-0.5">사용방법 필독!</h3>
                    <p className="text-[10px] opacity-90">FlutterLog의 숨겨진 기능들을 확인해보세요.</p>
                </div>

                {/* World Event */}
                <div className="mx-4 mb-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="font-bold text-sm">월드 이벤트</h4>
                        <span className="text-[10px] font-bold text-green-500 flex items-center gap-1">● LIVE</span>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex -space-x-2 shrink-0 h-8">
                            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                                <img src="https://firebasestorage.googleapis.com/v0/b/studio-6323553811-9cc93.firebasestorage.app/o/%EB%8F%84%EC%A7%80%EC%95%A0%2Fsmall.webp?alt=media&token=a089c2eb-f055-4259-bd53-ee55728236bf" className="w-full h-full object-cover" alt="User 1" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                                <img src="https://firebasestorage.googleapis.com/v0/b/studio-6323553811-9cc93.firebasestorage.app/o/%EA%B0%95%ED%83%9C%ED%98%84%2Fsmall.webp?alt=media&token=e231b0d0-d241-4d1e-96eb-aa118f98e30c" className="w-full h-full object-cover" alt="User 2" />
                            </div>
                        </div>
                        <div className="text-xs text-slate-600 leading-relaxed">
                            <p className="mb-1 line-clamp-2">회전목마 앞에서 유라가 어릴 적 추억에 잠겨 잠시 멍하니 있는 사이...</p>
                            <span className="text-[10px] text-slate-400">12:37 @ 잠실월드 어드벤처</span>
                        </div>
                    </div>
                </div>

                {/* Rumors */}
                <div className="mx-4 mb-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="font-bold text-sm">뜬소문</h4>
                        <span className="text-[10px] font-bold text-purple-500 flex items-center gap-1">● RUMORS</span>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex -space-x-2 shrink-0 h-8">
                            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                                <img src="https://firebasestorage.googleapis.com/v0/b/studio-6323553811-9cc93.firebasestorage.app/o/%EB%A5%98%EC%84%B8%EB%A6%B0%2Fsmall.webp?alt=media&token=eb4325df-02a6-4a07-bfee-c5d5b4013545" className="w-full h-full object-cover" alt="User 3" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
                                <img src="https://firebasestorage.googleapis.com/v0/b/studio-6323553811-9cc93.firebasestorage.app/o/%EA%B0%95%EC%A7%80%ED%98%81%2Fsmall.webp?alt=media&token=4931ac5c-5308-496c-aa1f-c092040639e1" className="w-full h-full object-cover" alt="User 4" />
                            </div>
                        </div>
                        <div className="text-xs text-slate-600 leading-relaxed">
                            <p className="mb-1 line-clamp-2">도현쌤, 있잖아요. 동일 씨...처음엔 제가 좀 챙겨줬거든요. 힘들어하는 것 같길래...</p>
                            <span className="text-[10px] text-slate-400">8일 전</span>
                        </div>
                    </div>
                </div>

                {/* Love Signal */}
                <div className="mx-4 mb-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="font-bold text-sm">나의 연애 시그널</h4>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                            <img src="https://firebasestorage.googleapis.com/v0/b/studio-6323553811-9cc93.firebasestorage.app/o/%EB%82%98%EA%B2%BD%2Fsmall.webp?alt=media&token=8889ffb9-b3a2-4686-bb2b-a8a656ab6819" className="w-full h-full object-cover" alt="User 5" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-bold">나경</span>
                                <span className="text-[10px] text-rose-500 font-bold">85%</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-rose-500 w-[85%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SystemLogViewer = () => {
    // Define logs outside or useMemo to prevent unnecessary recreation
    const logs = [
        { time: "14:55", user: "강지수", action: "혼잣말", desc: '"오늘 날씨 너무 좋다, 뛰러 가고 싶네."', icon: MessageCircle, color: "text-rose-400" },
        { time: "15:00", user: "시스템", action: "이동", desc: "강지수님이 '스타벅스 연남점'에 도착했습니다.", icon: MapPin, color: "text-blue-400" },
        { time: "15:05", user: "시스템", action: "조우", desc: "강지수님과 이선재님이 카페에서 마주쳤습니다!", icon: Users, color: "text-purple-400" },
        { time: "15:10", user: "이선재", action: "대화", desc: '"어? 지수씨 여기서 뵙네요. 커피 드시러 오셨어요?"', icon: MessageCircle, color: "text-indigo-400" },
        { time: "15:12", user: "강지수", action: "대화", desc: '"네! 선재씨도요? 합석하실래요?"', icon: MessageCircle, color: "text-rose-400" },
        { time: "16:00", user: "시스템", action: "이벤트", desc: "강지혁과 아나스타샤가 헬스장에서 만났습니다.", icon: Zap, color: "text-yellow-400" },
    ];

    const [visibleLogs, setVisibleLogs] = useState<any[]>([]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const runSequence = (index: number) => {
            if (index < logs.length) {
                // Check if log exists before adding to avoid undefined errors
                const nextLog = logs[index];
                if (nextLog) {
                    setVisibleLogs(prev => [...prev, nextLog]);
                }
                timeoutId = setTimeout(() => runSequence(index + 1), 1200);
            } else {
                // Sequence finished, wait then reset
                timeoutId = setTimeout(() => {
                    setVisibleLogs([]);
                    // Start over
                    timeoutId = setTimeout(() => runSequence(0), 1000);
                }, 3000);
            }
        };

        // Start initial
        runSequence(0);

        return () => clearTimeout(timeoutId);
    }, []);

    // Auto-scroll effect
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: scrollContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [visibleLogs]);

    return (
        <div className="bg-[#1a1a1a]/80 backdrop-blur-md rounded-3xl p-4 border border-white/5 shadow-2xl h-[100px] flex flex-col relative overflow-hidden font-mono text-sm">
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#1a1a1a] to-transparent z-10"></div>
            <div
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pt-2 pb-10"
            >
                <AnimatePresence>
                    {visibleLogs.map((log, i) => {
                        // Guard clause to prevent crash if log is undefined
                        if (!log) return null;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex gap-3"
                            >
                                <span className="text-slate-500 text-[10px] mt-0.5 shrink-0">[{log.time}]</span>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className={`font-bold text-xs ${log.color}`}>{log.user}</span>
                                        <span className="text-[9px] px-1 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">{log.action}</span>
                                    </div>
                                    <span className="text-slate-300 text-xs leading-relaxed">{log.desc}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
            {/* Input simulation */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#1a1a1a] border-t border-white/5">
                <div className="flex items-center gap-2 text-slate-500">
                    <span className="animate-pulse">_</span>
                    <span className="text-[10px]">System monitoring active...</span>
                </div>
            </div>
        </div>
    )
}

const FeatureSection = ({ title, desc, children, align = "left" }: { title: string, desc: string, children?: React.ReactNode, align?: "left" | "right" }) => (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20 ${align === "right" ? "lg:flex-row-reverse" : ""}`}>
        <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                {title.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
                {desc}
            </p>
        </div>
        <div className="flex-1 w-full max-w-lg lg:max-w-xl">
            {children}
        </div>
    </div>
);

export const FlutterLogDetail: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [selectedChar, setSelectedChar] = useState<any>(null);
    
    // Framer Motion Drag Slider setup
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (carouselRef.current) {
            // Calculate total scrollable width: scrollWidth - clientWidth
            // Adding a small buffer or checking scrollWidth correctly ensures we can scroll to the end
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, [carouselRef.current, characterData]); // Recalculate if data changes

    // Navigation Sections
    const sections = [
        { id: "home", label: "Home", icon: <Home size={14} /> },
        { id: "app", label: "App", icon: <Smartphone size={14} /> },
        { id: "core", label: "The Core", icon: <Brain size={14} /> },
        { id: "stats", label: "Stats", icon: <Activity size={14} /> },
        { id: "diary", label: "Secret", icon: <BookLock size={14} /> },
        { id: "world", label: "World", icon: <Globe size={14} /> },
        { id: "proactive", label: "Proactive", icon: <MessageCircle size={14} /> },
        { id: "rumors", label: "Rumors", icon: <Share2 size={14} /> },
        { id: "shop", label: "Item", icon: <ShoppingBag size={14} /> },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed inset-0 bg-black z-[200] overflow-y-auto custom-scrollbar-dark"
        >
            <div className="fixed inset-0 z-0 pointer-events-none">
                <VisionHeroBackground />
            </div>
            <div className="relative z-10 transition-colors duration-500">
                <AnimatePresence>
                    {selectedChar && (
                        <CharacterStatModal character={selectedChar} onClose={() => setSelectedChar(null)} />
                    )}
                </AnimatePresence>

                {/* Sticky Navigation - Seamless Gradient */}
                {/* Sticky Navigation - Seamless Gradient */}
                <div className="sticky top-0 z-[100] bg-gradient-to-b from-black/90 to-transparent border-none px-6 py-6 flex items-center justify-between pointer-events-none">
                    <div className="pointer-events-auto flex items-center gap-4">
                        <button
                            onClick={onBack}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <span className="font-bold text-white text-lg hidden md:block">FlutterLog</span>
                    </div>

                    <div className="pointer-events-auto flex items-center gap-1 md:gap-2 overflow-x-auto no-scrollbar max-w-[calc(100vw-120px)] md:max-w-none">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="group px-3 md:px-4 py-2 text-xs md:text-sm font-bold text-white/50 hover:text-white transition-all flex items-center gap-2 relative whitespace-nowrap"
                            >
                                <span className="opacity-50 group-hover:opacity-100 transition-opacity">{section.icon}</span>
                                <span>{section.label}</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </button>
                        ))}
                    </div>

                    <div className="w-10"></div> {/* Spacer */}
                </div>

                <div className="pt-0" id="home">
                    {/* Hero Section (Vision Pro Style) */}
                    <section className="relative flex items-start overflow-hidden pt-28 pb-10">

                        <div className="container mx-auto px-6 relative z-10 w-full">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                                {/* Left: Text Content */}
                                <div className="flex-1 text-center lg:text-left">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-widest mb-6 border border-rose-500/30">
                                        Next Gen Persona Engine
                                    </span>
                                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white tracking-tight drop-shadow-xl">
                                        40인의 거대한 세계관,<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-600">그 중심에 당신이 있습니다.</span>
                                    </h1>
                                    <div className="flex gap-4 justify-center lg:justify-start">
                                        <button onClick={onBack} className="px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors shadow-lg flex items-center gap-2">
                                            <ArrowLeft size={18} /> 이전으로
                                        </button>
                                        <a
                                            href="https://flutterlog.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-8 py-3.5 rounded-full bg-rose-600 text-white font-bold hover:bg-rose-500 transition-all shadow-lg shadow-rose-900/50 flex items-center gap-2"
                                        >
                                            <Globe size={18} /> 사이트 방문하기
                                        </a>
                                    </div>
                                </div>

                                {/* Right: App Mockup */}
                                <div className="flex-1 flex justify-center lg:justify-end perspective-1000">
                                    <motion.div
                                        initial={{ rotateY: 15, rotateX: 5 }}
                                        animate={{ rotateY: -5, rotateX: 0 }}
                                        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                    >
                                        <FlutterLogAppMockup />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Character Grid Section (Moved to Top) */}
                    {/* Character Slider Section (Top) */}
                    <div className="relative">
                        {/* Character Slider Section (Top) */}
                        <section className="py-24 bg-transparent relative border-b border-white/5 z-10">
                            <div className="container mx-auto px-6 mb-10">
                                <div>
                                    <span className="text-rose-500 font-bold tracking-widest text-xs uppercase mb-2 block">The Core</span>
                                    <h2 className="text-4xl font-black text-white mb-2">40 Unique Personas</h2>
                                    <p className="text-slate-400 text-lg">당신을 기다리는 40명의 특별한 인연들</p>
                                </div>
                            </div>

                            {/* Scroll Container with Drag Support (Framer Motion) */}
                            <motion.div 
                                ref={carouselRef} 
                                className="cursor-grab overflow-hidden active:cursor-grabbing"
                            >
                                <motion.div
                                    drag="x"
                                    dragConstraints={{ right: 0, left: -width }}
                                    dragElastic={0.1}
                                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                                    onDragStart={() => setIsDragging(true)}
                                    onDragEnd={() => setTimeout(() => setIsDragging(false), 100)} // Small delay to prevent immediate click
                                    className="flex gap-6 px-6 md:px-20 pb-12 w-max"
                                >
                                    {characterData.map((char, index) => (
                                        <motion.div
                                            key={`${char.id}-${index}`}
                                            className="min-w-[280px] w-[280px] bg-[#111] rounded-[2rem] border border-white/10 shadow-lg relative overflow-hidden group hover:shadow-2xl hover:shadow-rose-900/20 transition-all duration-300"
                                            whileHover={{ y: -10 }}
                                            onClick={(e) => {
                                                // Prevent click if dragging
                                                if (isDragging) {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    return;
                                                }
                                                setSelectedChar(char);
                                            }}
                                        >
                                            <div className="h-[360px] relative overflow-hidden bg-[#222]">
                                                <img
                                                    src={char.avatar}
                                                    alt={char.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                                                    loading="lazy"
                                                    draggable="false"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                                                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Activity size={16} />
                                                </div>

                                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="px-2 py-0.5 bg-rose-600 rounded-md text-[10px] font-bold uppercase shadow-sm">
                                                            {char.mbti}
                                                        </span>
                                                        {char.isPremium && (
                                                            <span className="px-2 py-0.5 bg-yellow-400 text-black rounded-md text-[10px] font-bold uppercase shadow-sm">
                                                                PREMIUM
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h3 className="text-2xl font-bold leading-none mb-1">{char.name}</h3>
                                                    <p className="text-xs text-white/70 font-medium">{char.job} ({char.age}세)</p>
                                                </div>
                                            </div>
                                            <div className="p-6 bg-[#151515] relative z-10 h-[120px] border-t border-white/5 pointer-events-none select-none">
                                                <p className="text-xs text-rose-400 font-bold mb-3 block tracking-wide">{char.description}</p>
                                                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                                                    {char.personality}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </section>

                        {/* Feature 0.5: Ideal Type Matcher */}
                        <section className="py-12 bg-transparent relative z-10 w-full mb-20 border-b border-white/5 pb-20">
                            <div className="container mx-auto px-6">
                                <h4 className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-6 text-center">Find Your Perfect Match</h4>
                                <IdealTypeMatcher characters={characterData} onSelect={setSelectedChar} />
                            </div>
                        </section>

                        <section className="py-24 bg-transparent relative z-10">
                            {/* ... Rest of the sections remain unchanged ... */}
                            <div className="container mx-auto px-6">

                                {/* Feature 1: The Core (Chat System) */}
                                <div id="core">
                                    <FeatureSection
                                        title="실시간 감정 연산: 살아있는 자아의 탄생"
                                        desc="단순한 응답이 아닙니다. 캐릭터는 당신과의 대화 맥락을 분석하고, 현재 시간과 위치, 직업, MBTI, 그리고 주변 캐릭터들과의 관계까지 고려합니다. 호감도, 신뢰 등 10가지 감정을 실시간으로 조절하며 살아있는 자아를 형성합니다."
                                    >
                                        {/* ... Content ... */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                            className="relative mx-auto w-[280px] h-[540px] bg-[#050505] rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col items-center justify-center font-mono"
                                        >
                                            {/* Boot Status Bar */}
                                            <div className="absolute top-0 inset-x-0 h-6 bg-transparent z-20 flex justify-between px-6 items-center">
                                                <span className="text-[10px] text-zinc-500 font-bold">9:41</span>
                                                <div className="flex gap-1">
                                                    <Signal size={10} className="text-zinc-500" />
                                                    <Wifi size={10} className="text-zinc-500" />
                                                    <Battery size={10} className="text-zinc-500" />
                                                </div>
                                            </div>

                                            {/* Boot Logo */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2, duration: 0.8 }}
                                                className="mb-12 text-center"
                                            >
                                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-[0_0_30px_rgba(244,63,94,0.3)]">
                                                    <img src={logoImg} alt="Idea Mealkit Logo" className="w-full h-full object-cover" />
                                                </div>
                                                <h3 className="text-white font-bold text-lg tracking-wider">Emotion Engine</h3>
                                                <p className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mt-1">Ver 2.1.0 Loaded</p>
                                            </motion.div>

                                            {/* Boot Logs */}
                                            <div className="w-full px-6 space-y-2 mb-12">
                                                {[
                                                    { text: "> 감정 코어 초기화 중...", color: "text-zinc-400" },
                                                    { text: "> 대화 맥락 분석 중...", color: "text-zinc-400" },
                                                    { text: "> 성격 데이터(ESFP) 로드...", color: "text-rose-400 font-bold" },
                                                    { text: "> 현재 시간/위치 동기화...", color: "text-zinc-400" },
                                                    { text: "> 관계 데이터 마운트...", color: "text-purple-400" },
                                                    { text: "> 자아 형성 완료.", color: "text-green-500 dim" },
                                                ].map((log, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.8 + (i * 0.4), duration: 0.3 }}
                                                        className={`text-[10px] ${log.color} flex items-center gap-2`}
                                                    >
                                                        {log.text}
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="w-[80%] bg-zinc-900 h-10 rounded-xl overflow-hidden relative border border-white/5 flex items-center px-4">
                                                <div className="absolute left-0 top-0 bottom-0 w-full bg-rose-600 opacity-20"></div>
                                                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-rose-500"></div>
                                                <div className="relative z-10 w-full flex justify-between items-center">
                                                    <span className="text-[10px] text-white font-bold">시스템 동기화 완료</span>
                                                    <span className="text-[10px] text-rose-400 font-bold">100%</span>
                                                </div>
                                            </div>

                                            {/* Dynamic Island */}
                                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30"></div>
                                        </motion.div>
                                    </FeatureSection>
                                </div>

                                <div className="w-full h-px bg-white/5 my-10"></div>

                                {/* Feature 2: Emotion & Relationship */}
                                <div id="stats">
                                    <FeatureSection
                                        title="10가지 감정과 관계의 미학"
                                        desc="호감도, 신뢰, 의존, 예민... 10가지 감정 스탯이 대화에 따라 실시간으로 요동칩니다. 관계가 깊어질수록 캐릭터의 행동과 수위가 달라지며, 당신의 선택에 따라 미묘한 감정 변화가 일어납니다."
                                        align="right"
                                    >
                                        <div className="bg-[#151515] rounded-3xl p-8 border border-white/5 shadow-xl relative overflow-hidden">
                                            {/* Background decoration */}
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                                            <h4 className="flex items-center gap-2 text-sm font-bold text-rose-400 uppercase tracking-widest mb-8">
                                                <Activity size={16} /> Real-time Stats
                                            </h4>

                                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                                {[
                                                    { label: "호감도 (Affection)", val: 85, color: "bg-rose-500", text: "text-rose-400" },
                                                    { label: "신뢰 (Trust)", val: 92, color: "bg-blue-500", text: "text-blue-400" },
                                                    { label: "의존 (Dependence)", val: 45, color: "bg-purple-500", text: "text-purple-400" },
                                                    { label: "예민 (Sensitivity)", val: 20, color: "bg-green-500", text: "text-green-400" },
                                                    { label: "소유욕 (Possessiveness)", val: 78, color: "bg-red-500", text: "text-red-400" },
                                                    { label: "불안 (Anxiety)", val: 15, color: "bg-orange-500", text: "text-orange-400" },
                                                    { label: "리드 (Lead)", val: 60, color: "bg-amber-500", text: "text-amber-400" },
                                                    { label: "변덕 (Fickleness)", val: 30, color: "bg-indigo-500", text: "text-indigo-400" },
                                                    { label: "매혹 (Allure)", val: 88, color: "bg-pink-500", text: "text-pink-400" },
                                                    { label: "스트레스 (Stress)", val: 10, color: "bg-slate-500", text: "text-slate-400" },
                                                ].map((stat, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: i * 0.05 }}
                                                    >
                                                        <div className="flex justify-between text-[11px] mb-1.5 text-slate-400 font-bold uppercase tracking-wider">
                                                            <span>{stat.label.split('(')[0]}</span>
                                                            <span className={stat.text}>{stat.val}%</span>
                                                        </div>
                                                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                whileInView={{ width: `${stat.val}%` }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 1, delay: 0.2 + (i * 0.05), ease: "easeOut" }}
                                                                className={`h-full ${stat.color} shadow-[0_0_10px_rgba(0,0,0,0.3)]`}
                                                            ></motion.div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </FeatureSection>
                                </div>

                                <div className="w-full h-px bg-white/5 my-10"></div>

                                {/* Feature 2.5: Secret Diary */}
                                <div id="diary">
                                    <FeatureSection
                                        title="은밀한 속마음, 비밀 일기장"
                                        desc="캐릭터들이 혼자만 간직했던 이야기들을 훔쳐보세요. 당신에 대한 설렘, 질투, 그리고 남들에게 말하지 못한 은밀한 욕망까지. 신뢰도가 높아질수록 더 깊은 속마음을 확인할 수 있습니다."
                                    >
                                        <div className="bg-[#111] rounded-3xl p-6 md:p-8 border border-white/5 shadow-2xl relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                                            
                                            <div className="flex items-center justify-between mb-8">
                                                <h4 className="flex items-center gap-2 text-sm font-bold text-purple-400 uppercase tracking-widest">
                                                    <BookLock size={16} /> Character's Secret
                                                </h4>
                                                <span className="text-[10px] text-slate-500 font-mono">Last updated: 10 mins ago</span>
                                            </div>

                                            <SecretDiaryViewer entries={[
                                                { date: "D+5", title: "그 사람...", content: "오늘 회식 자리에서 계속 눈이 마주쳤다. 우연일까? 술기운 때문인지 얼굴이 화끈거린다. 집에 가는 길에 자꾸 생각나서 미치겠네.", mood: "Fluttering", isLocked: false },
                                                { date: "D+18", title: "질투", content: "다른 팀 여자랑 웃으면서 얘기하는 걸 봤다. 짜증 난다. 내가 왜 이러지? 확 넥타이를 잡아당겨서 키스해 버리고 싶었다.", mood: "Jealous", isLocked: true },
                                                { date: "D+30", title: "상상", content: "꿈에 나왔다. 내 위에서 거친 숨을 몰아쉬는 모습이... 아, 적으면서도 얼굴이 빨개진다. 내일 얼굴 어떻게 보지?", mood: "Secret", isLocked: true }
                                            ]} />
                                        </div>
                                    </FeatureSection>
                                </div>

                                <div className="w-full h-px bg-white/5 my-10"></div>

                                {/* Feature 3: World & Schedule */}
                                <div id="world">
                                    <FeatureSection
                                        title="24시간 살아 숨쉬는 오픈 월드"
                                        desc="캐릭터들은 당신이 없어도 출근하고, 운동하고, 서로 만납니다. 우연히 마주친 3자 대화(Multi-Chat)와 매일 달라지는 '오늘의 사건'을 실시간 로그로 확인하세요."
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <div className="flex flex-col gap-6">
                                                <LiveWorldMap characters={characterData} />
                                                <div className="w-full h-auto bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden relative">
                                                    <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>
                                                    <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
                                                    <div className="p-6">
                                                        <SystemLogViewer />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </FeatureSection>
                                </div>

                                <div className="w-full h-px bg-white/5 my-10"></div>



                                {/* Feature 4: Proactive Interaction (First Message Only) */}
                                <div id="proactive">
                                    <FeatureSection
                                        title="먼저 찾아오는 설렘, 선톡"
                                        desc="기다리지 마세요. 그리움이 쌓이면 캐릭터가 먼저 연락하고 푸시 알림을 보냅니다. 단순한 알림이 아닌, 캐릭터의 목소리가 들리는 듯한 설렘을 느껴보세요."
                                        align="right"
                                    >
                                        <motion.div
                                            className="space-y-6"
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            {/* Push Notification Banner */}
                                            <motion.div
                                                initial={{ y: -20, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.5, type: "spring" }}
                                                className="bg-[#2a2a2a]/90 backdrop-blur-md p-3 rounded-2xl flex items-center gap-3 shadow-2xl border border-white/10 relative z-20 mx-4 translate-y-2"
                                            >
                                                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
                                                    <img src={characterData[0].smallAvatar} alt="Avatar" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-center mb-0.5">
                                                        <span className="text-[10px] font-bold text-white">강지수</span>
                                                        <span className="text-[9px] text-slate-400">방금 전</span>
                                                    </div>
                                                    <p className="text-[11px] text-slate-300 truncate">오빠, 자? 안 자면 나랑 잠깐 통화해...</p>
                                                </div>
                                            </motion.div>

                                            {/* First Message Item (Kakao/Message Style) */}
                                            <div className="bg-[#151515] rounded-[2rem] p-6 border border-white/5 relative overflow-hidden mt-[-20px] pt-10">
                                                <div className="flex items-center justify-between mb-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-lg relative">
                                                            <img src={characterData[0].smallAvatar} alt="Avatar" className="w-full h-full object-cover" />
                                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#151515]"></div>
                                                        </div>
                                                        <div>
                                                            <p className="text-base font-bold text-white">강지수</p>
                                                            <p className="text-xs text-rose-400 font-medium">지금 활동 중</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-xs text-slate-500 font-mono">22:23</span>
                                                </div>

                                                <div className="space-y-2 mb-6">
                                                    <div className="flex gap-2 items-end">
                                                        <div className="bg-[#2a2a2a] p-3 px-4 rounded-2xl rounded-tl-none text-sm text-slate-200 shadow-sm max-w-[85%] leading-relaxed">
                                                            오빠, 자? 안 자면 나랑 잠깐 통화해...
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 items-end">
                                                        <div className="bg-[#2a2a2a] p-3 px-4 rounded-2xl rounded-tl-none text-sm text-slate-200 shadow-sm max-w-[85%] leading-relaxed">
                                                            보고싶어서 잠이 안 와 🥺
                                                        </div>
                                                        <span className="text-[9px] text-slate-600 mb-1">읽음</span>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-3">
                                                    <button className="py-3 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-500 transition-all shadow-lg shadow-rose-900/20 active:scale-95">답장하기</button>
                                                    <button className="py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 transition-all active:scale-95">무시하기</button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </FeatureSection>
                                </div>

                                <div className="w-full h-px bg-white/5 my-10"></div>

                                {/* Feature 4.5: Rumors (New Section) */}
                                <div id="rumors">
                                    <FeatureSection
                                        title="퍼져나가는 소문과 평판"
                                        desc="당신의 행동은 즉시 소문이 되어 40명의 캐릭터 사이로 퍼져나갑니다. 좋은 짓을 하면 칭송받지만, 실수를 하면 뒷담화의 대상이 되기도 합니다."
                                    >
                                        <div className="relative w-full h-[400px] rounded-3xl bg-[#111] border border-white/5 overflow-hidden flex items-center justify-center">
                                            {/* Network / Bubble Animation */}
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1)_0%,transparent_70%)]"></div>
                                            {[
                                                { text: "걔 진짜 다정하더라...💕", x: 20, y: 30, delay: 0 },
                                                { text: "어제 강지수랑 싸웠대?", x: 60, y: 20, delay: 1 },
                                                { text: "선물 센스 완전 꽝이야 ㅋㅋ", x: 30, y: 60, delay: 2 },
                                                { text: "나한테도 먼저 연락왔어!", x: 70, y: 70, delay: 3 },
                                                { text: "이번 주말에 데이트 신청해볼까?", x: 40, y: 40, delay: 4 },
                                            ].map((rumor, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                    transition={{ delay: i * 0.5, duration: 0.5 }}
                                                    className="absolute px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold shadow-xl"
                                                    style={{ left: `${rumor.x}%`, top: `${rumor.y}%` }}
                                                >
                                                    <div className="absolute -bottom-1 left-4 w-2 h-2 bg-white/10 rotate-45"></div>
                                                    "{rumor.text}"
                                                </motion.div>
                                            ))}
                                        </div>
                                    </FeatureSection>
                                </div>

                                <div className="w-full h-px bg-white/5 my-10"></div>

                                {/* Feature 5: Shop & Economy */}
                                <div id="shop">
                                    <FeatureSection
                                        title="마음을 전하는 선물"
                                        desc="크레딧으로 명품, 커피, 장난감 등 다양한 선물을 보내보세요. 단순한 선물이 아닙니다. 특정 아이템은 캐릭터의 숨겨진 욕망을 깨우는 강력한 버프(Buff) 효과를 발휘합니다."
                                    >
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {[
                                                { name: "장미꽃다발", stat: "호감도 +10", desc: "관계의 가장 기본적인 시작입니다.", price: 100, icon: <Heart size={20} />, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
                                                { name: "진솔한 편지", stat: "신뢰 +10", desc: "깊은 관계를 위한 필수품입니다.", price: 100, icon: <Shield size={20} />, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                                                { name: "비밀의 향수", stat: "매혹 +10", desc: "로맨틱한 분위기를 만듭니다.", price: 100, icon: <Star size={20} />, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                                                { name: "강아지 인형", stat: "의존 +10", desc: "당신에게 더 기대게 만듭니다.", price: 100, icon: <Smile size={20} />, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
                                                { name: "위로의 곰인형", stat: "예민 -10", desc: "예민함을 낮춰주고 안정감을 줍니다.", price: 100, icon: <Smile size={20} />, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
                                                { name: "족쇄 모양 커플링", stat: "소유욕 +10", desc: "때로는 구속이 사랑의 표현이 됩니다.", price: 100, icon: <Lock size={20} />, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
                                                { name: "따뜻한 코코아", stat: "불안 -10", desc: "불안감을 낮춰주고 편안한 대화를.", price: 100, icon: <Coffee size={20} />, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
                                                { name: "리더의 포커칩", stat: "리드 +10", desc: "대화의 주도권을 가져옵니다.", price: 100, icon: <Crown size={20} />, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                                            ].map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ y: -5, scale: 1.05 }}
                                                    className={`bg-[#151515] p-6 rounded-3xl border border-white/5 relative group overflow-hidden hover:border-opacity-50 transition-all aspect-square flex flex-col items-center justify-center ${item.border.replace('/20', '/50')}`}
                                                >
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-20 transition-opacity`}></div>

                                                    <div className={`p-4 rounded-2xl ${item.bg} ${item.color} mb-4 relative z-10 bg-opacity-20`}>
                                                        {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                                                    </div>

                                                    <h4 className="text-white font-bold text-base mb-1 relative z-10">{item.name}</h4>
                                                    <p className={`text-xs font-bold ${item.color} relative z-10`}>{item.stat}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </FeatureSection>
                                </div>

                            </div>
                        </section>

                        {/* Install Guide Section */}
                        <section className="py-24 bg-transparent border-t border-white/5 relative z-10" id="app">
                            <div className="container mx-auto px-6">
                                <div className="text-center mb-16">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-slate-300 text-xs font-bold uppercase tracking-widest mb-4 border border-white/10">
                                        Install & Dive Deeper
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                                        홈 화면에 추가하고<br /><span className="text-rose-500">앱처럼 사용하세요</span>
                                    </h2>
                                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                                        FlutterLog는 설치가 필요 없는 차세대 웹앱(PWA)입니다.<br />
                                        홈 화면에 추가하면 전체 화면으로 더 몰입감 있게 즐길 수 있습니다.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                    {/* iOS Guide */}
                                    <div className="bg-[#151515] p-8 rounded-[2rem] border border-white/5 flex flex-col items-center text-center group hover:border-rose-500/30 transition-colors">
                                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-rose-500 group-hover:text-white transition-all">
                                            <Share size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">iOS (Safari)</h3>
                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                            브라우저 하단의 <span className="text-white font-bold inline-flex items-center gap-1 mx-1"><Share size={12} /> 공유</span> 버튼을 누르고<br />
                                            메뉴에서 <span className="text-white font-bold inline-flex items-center gap-1 mx-1"><PlusSquare size={12} /> 홈 화면에 추가</span>를 선택하세요.
                                        </p>
                                        <span className="text-[10px] font-mono text-rose-400 bg-rose-900/20 px-3 py-1 rounded-full">
                                            Tip: 사파리 브라우저에서만 가능합니다.
                                        </span>
                                    </div>

                                    {/* Android Guide */}
                                    <div className="bg-[#151515] p-8 rounded-[2rem] border border-white/5 flex flex-col items-center text-center group hover:border-rose-500/30 transition-colors">
                                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-rose-500 group-hover:text-white transition-all">
                                            <Download size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Android (Chrome)</h3>
                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                            우측 상단의 <span className="text-white font-bold inline-flex items-center gap-1 mx-1"><MoreVertical size={12} /> 더보기</span> 버튼을 누르고<br />
                                            메뉴에서 <span className="text-white font-bold inline-flex items-center gap-1 mx-1"><Download size={12} /> 홈 화면에 추가</span>를 선택하세요.
                                        </p>
                                        <span className="text-[10px] font-mono text-rose-400 bg-rose-900/20 px-3 py-1 rounded-full">
                                            Tip: 설치 후 앱 서랍에서도 확인 가능합니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
