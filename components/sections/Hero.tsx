
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Terminal, Sparkles, Signal, Wifi, Battery } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { logoUrl } from '../ui/Logo';

const LogItem: React.FC<{ delay: number, text: string, color: string }> = ({ delay, text, color }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.3 }}
        className={`flex items-center gap-2 ${color} text-[10px] font-mono tracking-tight`}
    >
        <span className="opacity-30 select-none">{">"}</span> {text}
    </motion.div>
);

const PhoneScreen = () => {
    const [progress, setProgress] = useState(0);
    const frameRef = useRef<number>(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const logs = [
        { text: "Booting System Kernel...", color: "text-slate-500", delay: 0.2 },
        { text: "Mounting File System...", color: "text-slate-400", delay: 0.6 },
        { text: "Loading Core Modules...", color: "text-blue-300", delay: 1.0 },
        { text: "Verifying Integrity...", color: "text-blue-500", delay: 1.4 },
        { text: "Establishing Secure Link...", color: "text-purple-300", delay: 1.8 },
        { text: "Handshake Authorized.", color: "text-purple-400", delay: 2.2 },
        { text: "Allocating Memory Heap...", color: "text-indigo-300", delay: 2.6 },
        { text: "Hydrating UI Components...", color: "text-indigo-400", delay: 3.0 },
        { text: "Compiling Assets...", color: "text-yellow-300", delay: 3.4 },
        { text: "Optimizing Routes...", color: "text-yellow-500", delay: 3.8 },
        { text: "Connecting to Database...", color: "text-pink-300", delay: 4.2 },
        { text: "Syncing User Data...", color: "text-pink-500", delay: 4.6 },
        { text: "Applying Configuration...", color: "text-cyan-300", delay: 5.0 },
        { text: "Starting Services...", color: "text-cyan-500", delay: 5.4 },
        { text: "Server Ready (Port 3000)", color: "text-emerald-400", delay: 5.8 },
        { text: "Launching Application...", color: "text-white", delay: 6.2 },
    ];

    useEffect(() => {
        const startDelay = 6500;
        const duration = 2000;

        timeoutRef.current = setTimeout(() => {
            let start: number | null = null;
            const animate = (timestamp: number) => {
                if (!start) start = timestamp;
                const runtime = timestamp - start;
                const relativeProgress = Math.min(runtime / duration, 1);

                setProgress(Math.floor(relativeProgress * 100));

                if (runtime < duration) {
                    frameRef.current = requestAnimationFrame(animate);
                }
            };
            frameRef.current = requestAnimationFrame(animate);
        }, startDelay);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, []);

    return (
        <div className="w-full h-full bg-[#0B0F19] rounded-[2rem] relative flex flex-col overflow-hidden z-10">
            <div className="flex-1 flex flex-col p-6 pt-20 relative z-10">
                <div className="flex flex-col items-center mb-6">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700/50 flex items-center justify-center mb-4 relative group shadow-2xl"
                    >
                        <img src={logoUrl} alt="App Logo" className="w-10 h-10 object-contain z-10" />
                        <div className="absolute inset-0 bg-blue-500/20 rounded-2xl animate-pulse"></div>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-white font-bold text-lg mb-0.5"
                    >
                        Idea Mealkit
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-500 text-[10px] font-mono tracking-widest uppercase"
                    >
                        System Boot v2.1.0
                    </motion.p>
                </div>

                <div className="w-full bg-black/40 rounded-xl border border-slate-800/50 p-4 mb-auto shadow-inner backdrop-blur-sm overflow-hidden flex flex-col h-[180px]">
                    <div className="flex gap-1.5 mb-3 opacity-40">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-1.5 flex-1 overflow-hidden relative">
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
                        {logs.map((log, idx) => (
                            <LogItem key={idx} delay={log.delay} text={log.text} color={log.color} />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 6.5 }}
                    className="w-full h-12 relative bg-slate-800 rounded-xl overflow-hidden shadow-lg shadow-blue-500/10 cursor-pointer group mt-4 border border-slate-700/50"
                >
                    <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-indigo-500 transition-all ease-out duration-75"
                        style={{ width: `${progress}%` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10 text-white font-bold text-xs tracking-wide">
                        {progress === 100 ? (
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2"
                            >
                                <Sparkles size={12} className="text-yellow-300" /> Launching...
                            </motion.span>
                        ) : (
                            <span className="text-blue-100/80 font-mono">
                                Installing... {progress}%
                            </span>
                        )}
                    </div>
                </motion.div>
            </div>

            <div className="absolute top-[-10%] right-[-20%] w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-20%] w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none"></div>
        </div>
    )
}

const PhoneMockup = () => {
    const [cycleKey, setCycleKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCycleKey(prev => prev + 1);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-[280px] h-[580px] md:w-[320px] md:h-[640px] bg-[#0B0F19] rounded-[3.5rem] border-[10px] border-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-900/50"
        >
            <div className="absolute top-0 inset-x-0 h-7 bg-slate-900 z-[60] flex justify-center pointer-events-none">
                <div className="w-32 h-full bg-slate-900 rounded-b-2xl"></div>
            </div>

            <div className="absolute top-3 left-0 right-0 px-8 z-[70] flex justify-between items-center text-white text-[10px] font-bold tracking-wide select-none pointer-events-none">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                    <Signal size={12} className="fill-white" />
                    <Wifi size={12} strokeWidth={3} />
                    <Battery size={12} className="fill-white" />
                </div>
            </div>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={cycleKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full bg-[#0B0F19]"
                >
                    <PhoneScreen />
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-0">
                <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-blue-100 shadow-sm">
                            <Terminal size={12} />
                            Premium Digital Cuisine
                        </div>
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                            DEFINING<br />
                            DIGITAL<br />
                            <span className="text-blue-500">REALITY.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed mb-10">
                            아이디어만 준비하세요. 복잡한 기술은 저희가 다듬어 드립니다.<br className="hidden md:block" />
                            <span className="text-slate-900 font-bold">아이디어 밀키트</span>는 비즈니스 성공을 위한 가장 신선한 레시피입니다.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 group"
                            >
                                Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button 
                                onClick={() => scrollToSection('portfolio')}
                                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm"
                            >
                                View Portfolio
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="flex-1 w-full max-w-md lg:max-w-full lg:flex lg:justify-center relative">
                    <PhoneMockup />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full blur-3xl -z-10 opacity-60"></div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-300 animate-bounce hidden lg:block">
                <ChevronDown size={32} />
            </div>
        </header>
    );
};
