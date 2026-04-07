import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
    "INNOVATION",
    "APP",
    "WEB",
    "FUTURE",
    "VALUE",
    "EXPERIENCE",
    "DREAMS",
    "SOLUTIONS",
    "CREATIVITY"
];

export const TypographyAnimation: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-32 bg-[#020617] relative overflow-hidden flex justify-center items-center select-none cursor-default border-y border-slate-800/50">
            <div className="relative z-10 text-5xl md:text-8xl font-black tracking-tighter flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <span>IM MAKE</span>
                <div className="h-[1.1em] overflow-hidden relative min-w-[300px] md:min-w-[600px] text-center md:text-left">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={index}
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like ease
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                        >
                            [{words[index]}]
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-900/30 to-indigo-900/30 rounded-full blur-[120px] opacity-80"></div>
            </div>
        </section>
    );
}
