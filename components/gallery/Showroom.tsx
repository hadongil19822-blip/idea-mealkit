import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { projects, type Project } from './projects';
import { ProjectCover } from './ProjectCover';
import './reference-site.css';
import './mealkit-identity.css';
import { MealkitMark, InfoBar, OpeningComposition, ProjectScenes, ClosingScene, ContactSection } from './ReferenceScenes';
import { createReferenceMotion, chapterStops } from './reference-motion';
import { createMobileMotion } from './mobile-motion';
import { installPointerDepth } from './interactive-motion';
import './motion-refinements.css';
import './experience-v2.css';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export default function Showroom() {
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const smoothScroll = useRef<Lenis | null>(null);
  const [notes, setNotes] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let lenis: Lenis | undefined;
    const media = gsap.matchMedia();
    let alive = true;
    const context = gsap.context(() => {
      media.add({ desktop: '(min-width:768px)', mobile: '(max-width:767px)', reduced: '(prefers-reduced-motion: reduce)' }, condition => {
        const { desktop, reduced } = condition.conditions!;
        const element = root.current!;
        element.dataset.layout = desktop ? 'desktop' : 'mobile';
        if (reduced) return () => { delete element.dataset.layout; };
        element.dataset.motion = 'on';
        let tick: ((time: number) => void) | undefined;
        if (desktop) {
          lenis = new Lenis({ duration: 1.05, autoRaf: false, anchors: false });
          smoothScroll.current = lenis;
          tick = (time: number) => lenis?.raf(time * 1000);
          lenis.on('scroll', ScrollTrigger.update);
          gsap.ticker.add(tick);
          createReferenceMotion();
        } else createMobileMotion(element);
        const visibility = () => document.hidden ? lenis?.stop() : lenis?.start();
        document.addEventListener('visibilitychange', visibility);
        return () => {
          document.removeEventListener('visibilitychange', visibility);
          if (tick) gsap.ticker.remove(tick);
          lenis?.destroy(); lenis = undefined; smoothScroll.current = null;
          delete element.dataset.motion; delete element.dataset.layout;
        };
      });
      media.add('(min-width:768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => installPointerDepth(root.current!));
    }, root);
    const refresh = () => { if (alive) ScrollTrigger.refresh(); };
    document.fonts.ready.then(refresh);
    const images = Array.from(root.current!.querySelectorAll('img'));
    images.forEach(image => image.addEventListener('load', refresh));
    return () => { alive = false; images.forEach(image => image.removeEventListener('load', refresh)); media.revert(); context.revert(); };
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

  useEffect(() => { ScrollTrigger.refresh(); }, [notes]);

  function navigateSection(event: React.MouseEvent<HTMLDivElement>) {
    const anchor = (event.target as HTMLElement).closest('a');
    const hash = anchor?.getAttribute('href');
    if (!hash || (!['#top', '#projects', '#contact'].includes(hash) && !hash.startsWith('#project-'))) return;
    const element = document.getElementById(hash.slice(1));
    if (!element) return;
    event.preventDefault();
    // A pinned element's DOM position changes as it scrolls; use the trigger's start.
    const trigger = ScrollTrigger.getById('project-sequence');
    const chapterTime = chapterStops[hash.slice('#project-'.length)];
    const pinnedChapter = hash.startsWith('#project-') && trigger && chapterTime !== undefined;
    const destination = hash === '#top' ? 0 : pinnedChapter ? trigger.start + (trigger.end - trigger.start) * chapterTime / trigger.animation!.duration() : hash === '#projects' && trigger ? trigger.start : element.getBoundingClientRect().top + window.scrollY - (hash.startsWith('#project-') ? 108 : 0);
    const focusTarget = () => element.focus({ preventScroll: true });
    history.replaceState(null, '', hash);
    if (smoothScroll.current) smoothScroll.current.scrollTo(destination, { onComplete: focusTarget });
    else { window.scrollTo({ top: destination, behavior: 'auto' }); focusTarget(); }
  }

  function open(project: Project) { returnFocus.current = document.activeElement as HTMLElement; setSelected(project); }

  return <div className={`format-site${notes ? ' notes-on' : ''}`} ref={root} onClick={navigateSection}>
    <a className="skip-link" href="#projects">프로젝트로 건너뛰기</a>
    <InfoBar notes={notes} setNotes={setNotes} floating />
    <main>
      <section className="reference-hero" id="top" tabIndex={-1} aria-labelledby="hero-title">
        <h1 id="hero-title" className="sr-only">아이디어밀키트 — 웹, 앱, AI로 아이디어를 현실로 만드는 스튜디오</h1>
        <img className="opening-background" src="/projects/editorial/botanical.jpg" alt="" aria-hidden="true" />
        <div className="reference-masthead"><MealkitMark className="reference-mark" word="IDEA" /><span className="masthead-signature">작은 생각에서,<br />새로운 가능성으로.<span>Independent studio / KR</span></span><InfoBar notes={notes} setNotes={setNotes} /></div>
        <div className="hero-statement" aria-hidden="true"><span>FIVE IDEAS.</span><span>ONE <i>KIT.</i></span><small>생각을 꺼내, 가능성을 만듭니다.<br />Scroll to unpack ↓</small></div>
        <OpeningComposition open={open} />
        <div className="hero-transition-label" aria-hidden="true">IDEAS → REAL.</div>
      </section>
      <ProjectScenes open={open} />
      <ClosingScene />
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
