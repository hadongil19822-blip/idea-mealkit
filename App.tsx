/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Process } from './components/sections/Process';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { TypographyAnimation } from './components/sections/TypographyAnimation';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Navigation } from './components/sections/Navigation';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { FlutterLogDetail } from './components/FlutterLogDetail';
import { ProposalPage } from './components/ProposalPage';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<'main' | 'flutterlog'>('main');

    if (window.location.pathname === '/proposal') {
        return <ProposalPage />;
    }

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const handleOpenProject = (id: string) => {
        if (id === 'flutterlog') {
            setCurrentView('flutterlog');
            window.scrollTo(0, 0);
        }
    };

    const handleBackToMain = () => {
        setCurrentView('main');
        setTimeout(() => {
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'auto' });
            }
        }, 100);
    };

    return (
        <div className="min-h-screen bg-slate-950 selection:bg-blue-600 selection:text-white font-sans text-slate-100 overflow-x-hidden relative">

            <AnimatePresence>
                {currentView === 'flutterlog' && (
                    <FlutterLogDetail onBack={handleBackToMain} />
                )}
            </AnimatePresence>

            <div style={{ display: currentView === 'main' ? 'block' : 'none' }}>
                {/* Majestic Deep Dark Background Layer */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
                </div>

                <div className="relative z-10 w-full h-full">
                    <Navigation />
                    <Hero />
                    <About />
                    <Process />
                    <Services />
                    <TypographyAnimation />
                    <Portfolio onOpenProject={handleOpenProject} />
                    <Contact />
                    <Footer />
                    <ScrollToTop />
                </div>
            </div>
        </div>
    );
};

export default App;