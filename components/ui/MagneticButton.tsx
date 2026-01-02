import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const MagneticButton = ({ children, className, onClick }: { children?: React.ReactNode, className?: string, onClick?: React.MouseEventHandler<HTMLButtonElement> }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 200, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 200, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        x.set((e.clientX - (left + width / 2)) * 0.3);
        y.set((e.clientY - (top + height / 2)) * 0.3);
    };

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            className={className}
            style={{ x: mouseX, y: mouseY }}
        >
            {children}
        </motion.button>
    );
};
