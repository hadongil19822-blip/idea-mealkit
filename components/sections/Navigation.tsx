
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { MagneticButton } from '../ui/MagneticButton';

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['About', 'Process', 'Services', 'Portfolio', 'Team', 'Contact'];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
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
        setMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Logo className="w-6 h-6 sm:w-9 sm:h-9 group-hover:rotate-12 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] filter brightness-0 invert flex-shrink-0" />
                    <span className="font-bold text-sm sm:text-xl tracking-widest text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] whitespace-nowrap">Idea Mealkit</span>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            onClick={(e) => scrollToSection(e, item.toLowerCase())}
                            className="text-xs font-semibold text-slate-300 hover:text-white transition-all tracking-[0.2em] uppercase hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <MagneticButton 
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if(contactSection) {
                                const headerOffset = 80;
                                const elementPosition = contactSection.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                            }
                        }}
                        className="px-4 py-2 sm:px-6 sm:py-2.5 bg-white hover:bg-slate-200 text-slate-950 rounded-full text-[10px] sm:text-xs uppercase tracking-wider font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center gap-1 sm:gap-2 whitespace-nowrap"
                    >
                        <Sparkles size={12} className="text-blue-600 sm:w-3.5 sm:h-3.5" />
                        Order Now
                    </MagneticButton>
                    <button className="md:hidden p-1.5 sm:p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-lg font-bold text-slate-200 uppercase tracking-widest hover:text-white transition-colors"
                            onClick={(e) => scrollToSection(e, item.toLowerCase())}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};
