
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
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Logo className="w-9 h-9 group-hover:rotate-12 transition-transform duration-500" />
                    <span className="font-bold text-xl tracking-tight text-slate-900">Idea Mealkit</span>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            onClick={(e) => scrollToSection(e, item.toLowerCase())}
                            className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors tracking-wide"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
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
                        className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                        <Sparkles size={14} className="text-blue-400" />
                        Order Now
                    </MagneticButton>
                    <button className="md:hidden p-2 text-slate-900" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-lg font-semibold text-slate-700"
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
