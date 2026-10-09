import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { type Project } from './projects';
import { ProjectCover } from './ProjectCover';
import { MealkitMark, ContactSection } from './StudioChrome';
import { MotionAtlas } from './MotionAtlas';
import { createAtlasMotion } from './atlas-motion';
import { atlasAnchors } from './atlas-scenes';
import './showroom-shell.css';
import './motion-atlas.css';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

// GSAP exposes these lifecycle hooks at runtime; its bundled types omit them.
const mediaEvents = gsap as typeof gsap & {
  addEventListener: (event: 'matchMediaInit' | 'matchMedia', callback: () => void) => void;
  removeEventListener: (event: 'matchMediaInit' | 'matchMedia', callback: () => void) => void;
};


function sectionDestination(hash: string, element: HTMLElement) {
  if (hash === '#top') return 0;
  const atlas = ScrollTrigger.getById('motion-atlas');
  const chapter = hash === '#projects' ? atlasAnchors.projects : atlasAnchors[hash.slice('#project-'.length)];
  if (atlas && chapter !== undefined) return atlas.start + (atlas.end - atlas.start) * chapter;
  return element.getBoundingClientRect().top + window.scrollY - (hash.startsWith('#project-') ? 64 : 0);
}

export default function Showroom() {
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const smoothScroll = useRef<Lenis | null>(null);
  const [motionPaused, setMotionPaused] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const initialSection = useRef(location.hash || '#top');

  useEffect(() => {
    let lenis: Lenis | undefined;
    const media = gsap.matchMedia();
    let alive = true;
    let anchorFrame = 0;
    let resizeFrame = 0;
    let resizeSettled: ReturnType<typeof setTimeout> | undefined;
    let lastSceneProgress = 0;
    let lastContactOffset: number | null = null;
    let measuredWidth = window.innerWidth;
    let measuredHeight = window.innerHeight;
    const rememberContactPosition = () => {
      if (mediaPosition || window.innerWidth !== measuredWidth || window.innerHeight !== measuredHeight) return;
      const top = document.getElementById('contact')!.getBoundingClientRect().top;
      lastContactOffset = top < measuredHeight * .5 ? -top : null;
    };
    let mediaPosition: { progress: number; contactOffset: number | null } | undefined;
    const settleViewport = () => {
      clearTimeout(resizeSettled);
      resizeSettled = setTimeout(() => {
        if (!alive || mediaPosition) return;
        measuredWidth = window.innerWidth;
        measuredHeight = window.innerHeight;
        rememberContactPosition();
      }, 250);
    };
    const rememberProgress = (progress: number) => { if (!mediaPosition) lastSceneProgress = progress; };
    // matchMedia temporarily removes the tall sticky stage. Preserve the scene before
    // that layout collapse, then map it onto the new desktop/mobile scroll distance.
    const beforeMediaChange = () => {
      mediaPosition = { progress: lastSceneProgress, contactOffset: lastContactOffset };
    };
    const afterMediaChange = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        if (!alive || !mediaPosition) return;
        const position = mediaPosition;
        const atlas = ScrollTrigger.getById('motion-atlas');
        let top = 0;
        if (position.contactOffset !== null) {
          top = document.getElementById('contact')!.getBoundingClientRect().top + window.scrollY + position.contactOffset;
        } else if (atlas) {
          top = atlas.start + (atlas.end - atlas.start) * position.progress;
        } else if (position.progress > .01) {
          // Reduced motion has normal document flow; restore the nearest readable section.
          const nearest = Object.entries(atlasAnchors).reduce((a, b) => Math.abs(b[1] - position.progress) < Math.abs(a[1] - position.progress) ? b : a);
          const id = nearest[0] === 'projects' ? 'projects' : `project-${nearest[0]}`;
          top = document.getElementById(id)!.getBoundingClientRect().top + window.scrollY - 64;
        }
        if (smoothScroll.current) {
          smoothScroll.current.resize();
          smoothScroll.current.scrollTo(top, { immediate: true });
        } else window.scrollTo({ top, behavior: 'auto' });
        lastSceneProgress = position.progress;
        mediaPosition = undefined;
        measuredWidth = window.innerWidth;
        measuredHeight = window.innerHeight;
        rememberContactPosition();
        ScrollTrigger.update();
      });
    };
    window.addEventListener('scroll', rememberContactPosition, { passive: true });
    window.addEventListener('resize', settleViewport, { passive: true });
    mediaEvents.addEventListener('matchMediaInit', beforeMediaChange);
    mediaEvents.addEventListener('matchMedia', afterMediaChange);
    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    const initialHash = initialSection.current;
    // Restore deep links after fonts and responsive compositions settle.
    history.replaceState(null, '', location.pathname + location.search);
    window.scrollTo({ top: 0, behavior: 'auto' });
    const context = gsap.context(() => {
      media.add({ desktop: '(min-width:768px)', mobile: '(max-width:767px)', reduced: '(prefers-reduced-motion: reduce)' }, condition => {
        const { desktop, reduced } = condition.conditions!;
        const element = root.current!;
        element.dataset.layout = desktop ? 'desktop' : 'mobile';
        if (reduced) return () => { delete element.dataset.layout; };
        element.dataset.motion = 'on';
        let tick: ((time: number) => void) | undefined;
        let releaseMotion: (() => void) | undefined;
        let releaseNativeInput: (() => void) | undefined;
        if (desktop) {
          lenis = new Lenis({ lerp: .16, autoRaf: false, anchors: false });
          smoothScroll.current = lenis;
          tick = (time: number) => lenis?.raf(time * 1000);
          lenis.on('scroll', ScrollTrigger.update);
          gsap.ticker.add(tick);
          releaseMotion = createAtlasMotion(element, rememberProgress);
          // A new drag or navigation key takes over from any wheel inertia.
          const releaseInertia = () => lenis?.scrollTo(window.scrollY, { immediate: true });
          const navigationKey = (event: KeyboardEvent) => {
            const target = event.target as HTMLElement | null;
            if (target?.closest('input,textarea,select,[contenteditable=true]')) return;
            if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) releaseInertia();
          };
          window.addEventListener('pointerdown', releaseInertia, { passive: true });
          window.addEventListener('keydown', navigationKey);
          releaseNativeInput = () => {
            window.removeEventListener('pointerdown', releaseInertia);
            window.removeEventListener('keydown', navigationKey);
          };
        } else releaseMotion = createAtlasMotion(element, rememberProgress);
        const visibility = () => document.hidden ? lenis?.stop() : lenis?.start();
        document.addEventListener('visibilitychange', visibility);
        return () => {
          document.removeEventListener('visibilitychange', visibility);
          releaseNativeInput?.();
          releaseMotion?.();
          if (tick) gsap.ticker.remove(tick);
          lenis?.destroy(); lenis = undefined; smoothScroll.current = null;
          delete element.dataset.motion; delete element.dataset.layout;
        };
      });
    }, root);
    const refresh = () => { if (alive) ScrollTrigger.refresh(); };
    document.fonts.ready.then(() => {
      if (!alive) return;
      // Let responsive media frames enter layout before measuring anchor positions.
      anchorFrame = requestAnimationFrame(() => {
        anchorFrame = requestAnimationFrame(() => {
          if (!alive) return;
          refresh();
          const hash = location.hash || initialHash;
          const target = document.getElementById(hash.slice(1));
          if (!target || (!['#top', '#projects', '#contact'].includes(hash) && !hash.startsWith('#project-'))) return;
          const top = sectionDestination(hash, target);
          history.replaceState(null, '', hash);
          if (smoothScroll.current) {
            smoothScroll.current.resize();
            smoothScroll.current.scrollTo(top, { immediate: true });
          } else window.scrollTo({ top, behavior: 'auto' });
        });
      });
    });
    // Media use fixed aspect ratios, so lazy decoding does not change scroll geometry.
    return () => {
      alive = false;
      cancelAnimationFrame(anchorFrame);
      cancelAnimationFrame(resizeFrame);
      clearTimeout(resizeSettled);
      window.removeEventListener('scroll', rememberContactPosition);
      window.removeEventListener('resize', settleViewport);
      mediaEvents.removeEventListener('matchMediaInit', beforeMediaChange);
      mediaEvents.removeEventListener('matchMedia', afterMediaChange);
      history.scrollRestoration = previousRestoration;
      media.revert(); context.revert();
    };
  }, []);

  useEffect(() => {
    if (!selected) return;
    const element = dialog.current!;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    smoothScroll.current?.stop();
    element.showModal();
    const context = gsap.context(() => {
      if (!matchMedia('(prefers-reduced-motion: reduce)').matches) gsap.from('.project-dialog-content', { y: 65, opacity: 0, duration: 0.65, ease: 'power3.out' });
    }, element);
    return () => { context.revert(); element.close(); document.body.style.overflow = previousOverflow; if (!document.hidden) smoothScroll.current?.start(); returnFocus.current?.focus({ preventScroll: true }); };
  }, [selected]);

  function navigateSection(event: React.MouseEvent<HTMLDivElement>) {
    const anchor = (event.target as HTMLElement).closest('a');
    const hash = anchor?.getAttribute('href');
    if (!hash || (!['#top', '#projects', '#contact'].includes(hash) && !hash.startsWith('#project-'))) return;
    const element = document.getElementById(hash.slice(1));
    if (!element) return;
    event.preventDefault();
    const destination = sectionDestination(hash, element);
    const focusTarget = () => element.focus({ preventScroll: true });
    history.replaceState(null, '', hash);
    if (smoothScroll.current) smoothScroll.current.scrollTo(destination, { onComplete: focusTarget });
    else { window.scrollTo({ top: destination, behavior: 'auto' }); focusTarget(); }
  }

  function open(project: Project) { returnFocus.current = document.activeElement as HTMLElement; setSelected(project); }

  return <div className="format-site" data-motion-paused={motionPaused || undefined} data-dialog-open={Boolean(selected) || undefined} ref={root} onClick={navigateSection}>
    <a className="skip-link" href="#projects">프로젝트로 건너뛰기</a>
    <header className="canvas-nav"><a href="#top" aria-label="IDEA MEALKIT 처음으로">IDEA MEALKIT</a><div><a href="#projects">STUDIO & WORK</a><button className="motion-pause" aria-pressed={motionPaused} onClick={() => setMotionPaused(!motionPaused)}>{motionPaused ? '모션 재생' : '모션 정지'}</button><a href="#contact">LET’S TALK ↗</a></div></header>
    <main>
      <MotionAtlas open={open} />
      <ContactSection />
    </main>
    <footer className="reference-footer"><MealkitMark className="reference-footer-mark" word="MEALKIT" /><div className="footer-info"><span>© {new Date().getFullYear()} IDEA MEALKIT — Web, App & AI Studio</span><a href="mailto:hadongil19822@gmail.com">hadongil19822@gmail.com ↗</a><a href="https://pf.kakao.com/_mxbzgn/chat" target="_blank" rel="noopener noreferrer">프로젝트 문의 ↗</a><a href="#top">Back to top ↑</a></div></footer>

    <dialog ref={dialog} className="project-dialog" aria-labelledby="project-dialog-title" data-lenis-prevent onCancel={event => { event.preventDefault(); setSelected(null); }} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }} onKeyDown={event => {
      if (event.key !== 'Tab') return;
      const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button'));
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }}>
      {selected && <div className="project-dialog-content"><div className="dialog-heading"><span>(Selected experience)</span><button onClick={() => setSelected(null)} autoFocus aria-label="프로젝트 상세 닫기">Close ×</button></div><h2 id="project-dialog-title">{selected.name}</h2><div className="dialog-project-media"><ProjectCover project={selected} eager /></div><div className="dialog-project-copy"><p>{selected.description}</p><ul>{selected.services.map(service => <li key={service}>{service}</li>)}</ul></div><a className="dialog-visit" href={selected.url} target="_blank" rel="noopener noreferrer">{selected.linkLabel || '라이브 사이트 방문'} <span>↗</span></a></div>}
    </dialog>
  </div>;
}
