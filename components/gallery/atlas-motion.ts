import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const atlasStops: Record<string, number> = { metalook: 2.45, semapage: 4.9, hangulwave: 7.05, cosmicspell: 9.25, brandeye: 11.55 };
export const atlasDuration = 14;

/** One continuous timeline; loops own children, scroll owns their parent frames. */
export function createAtlasMotion(root: HTMLElement) {
  const $ = gsap.utils.selector(root);
  const acts = $('.atlas-act') as HTMLElement[];
  gsap.set(acts.slice(1), { autoAlpha: 0 });
  gsap.set('.atlas-cover', { autoAlpha: 1 });
  gsap.from('.atlas-masthead path', { yPercent: 105, rotation: -8, stagger: .075, duration: 1.05, ease: 'power4.out' });

  const glyphs = $('.kinetic-glyph');
  gsap.set(glyphs, { x: 0, y: 0, xPercent: (i: number) => i % 2 ? 55 : -55, yPercent: (i: number) => i < 2 ? -50 : 50 });
  const identityLoop = gsap.timeline({ repeat: -1, paused: true, defaults: { duration: 1.4, ease: 'expo.inOut' } })
    .to(glyphs, { rotation: (i: number) => i % 2 ? 90 : -90, xPercent: (i: number) => i < 2 ? 55 : -55, yPercent: (i: number) => i % 2 ? 50 : -50, stagger: .06 }, .6)
    .to(glyphs, { rotation: 0, xPercent: (i: number) => (i - 1.5) * 88, yPercent: 0, scale: .7, stagger: .05 }, 2.7)
    .to(glyphs, { rotation: (i: number) => i % 2 ? -180 : 180, scale: .45, xPercent: (i: number) => (i % 2 ? 1 : -1) * 38, yPercent: (i: number) => (i < 2 ? -1 : 1) * 38 }, 4.8)
    .to(glyphs, { rotation: 0, scale: 1, xPercent: (i: number) => i % 2 ? 55 : -55, yPercent: (i: number) => i < 2 ? -50 : 50, stagger: .06 }, 6.7);
  const fashionLoop = gsap.to('.fashion-kinetic-line', { xPercent: -50, duration: 11, ease: 'none', repeat: -1, paused: true });
  const flightLoop = gsap.timeline({ repeat: -1, paused: true }).fromTo('.cosmic-flight>span', { scale: .18, rotation: -25, opacity: 0 }, { keyframes: [{ opacity: .8, duration: .35 }, { scale: 3.5, rotation: 20, opacity: 0, duration: 3.3 }], stagger: .65, ease: 'none' });
  const scanLoop = gsap.fromTo('.brand-scanner', { y: 0, opacity: 0 }, { y: () => (root.querySelector('.brand-target') as HTMLElement).offsetHeight * .8, opacity: .65, duration: 2.5, repeat: -1, yoyo: true, ease: 'power1.inOut', paused: true });
  let active = 0;
  const loops = [identityLoop, fashionLoop, null, null, flightLoop, scanLoop];
  const syncLoops = () => loops.forEach((loop, i) => { if (!loop) return; if (!document.hidden && root.dataset.motionPaused !== 'true' && root.dataset.dialogOpen !== 'true' && i === active) loop.resume(); else loop.pause(); });
  const controls = $('.atlas-chapters a') as HTMLAnchorElement[];
  controls.forEach(link => link.setAttribute('aria-current', 'false'));
  const timeline = gsap.timeline({ defaults: { ease: 'power2.inOut' }, scrollTrigger: {
    id: 'motion-atlas', trigger: '.motion-experience', start: 'top top', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true,
    onUpdate: self => {
      const time = self.progress * atlasDuration;
      const next = time < 1.35 ? 0 : time < 3.45 ? 1 : time < 5.85 ? 2 : time < 8 ? 3 : time < 10.25 ? 4 : time < 12.65 ? 5 : 6;
      if (next !== active) { active = next; syncLoops(); }
      controls.forEach((link, i) => link.setAttribute('aria-current', String(i + 1 === next)));
    },
  } });
  timeline.to('.atlas-masthead', { yPercent: -110, scaleY: .35, duration: 1.05, ease: 'power2.in' }, 0)
    .to('.atlas-cover-meta,.atlas-cover-copy,.atlas-cover-foot', { autoAlpha: 0, y: -35, duration: .55 }, .1)
    .to('.kinetic-engine', { scale: 4.5, rotation: -90, duration: 1.4, ease: 'power2.in' }, 0)
    .to('.atlas-cover', { autoAlpha: 0, duration: .15 }, 1.4)
    .set('.atlas-metalook', { autoAlpha: 1 }, 1.1)
    .fromTo('.fashion-aperture', { scale: .06, rotation: 90, clipPath: 'inset(0% round 35%)' }, { scale: 1, rotation: 0, clipPath: 'inset(0% round 0%)', duration: 1.05 }, 1.1)
    .from('.fashion-image-a', { rotationY: 85, duration: .8 }, 1.65)
    .from('.fashion-image-b', { rotationY: -85, duration: .8 }, 1.65)
    .from('.fashion-type-panel h2', { yPercent: 90, autoAlpha: 0, duration: .6 }, 1.85)
    .from('.fashion-kinetic-line', { yPercent: 180, autoAlpha: 0, duration: .65 }, 1.7)
    .to('.atlas-fashion-panel', { yPercent: (i: number) => i % 2 ? 145 : -145, rotation: (i: number) => i % 2 ? 12 : -12, duration: .85, stagger: .08 }, 2.85)
    .to('.fashion-kinetic-line', { yPercent: 180, duration: .5 }, 3)
    .to('.atlas-metalook', { autoAlpha: 0, duration: .2 }, 3.6)
    .set('.atlas-semapage', { autoAlpha: 1 }, 3.35)
    .from('.atlas-semapage', { clipPath: 'inset(50% 0% 50% 0%)', duration: .5 }, 3.35)
    .from('.pixel-assembly>span', { xPercent: (i: number) => (i%3-1)*220, yPercent: (i: number) => i<3?-220:220, rotation: (i: number) => (i%2?1:-1)*50, scale: .25, opacity: 0, stagger: .045, duration: .65 }, 3.45)
    .to('.pixel-assembly', { rotation: -90, scale: .5, autoAlpha: 0, duration: .65 }, 4.1)
    .from('.html-ribbon', { xPercent: (i: number) => i%2?110:-110, rotation: (i: number) => i%2?-12:12, stagger: .1, duration: .8 }, 4.05)
    .to('.html-ribbon', { xPercent: (i: number) => i%2?-115:115, rotation: (i: number) => i%2?18:-18, stagger: .07, duration: .75 }, 5.2)
    .to('.atlas-semapage', { autoAlpha: 0, duration: .25 }, 5.95)
    .set('.atlas-hangulwave', { autoAlpha: 1 }, 5.75)
    .from('.atlas-hangulwave', { clipPath: 'inset(0% 50% 0% 50%)', duration: .65 }, 5.75)
    .from('.hangul-kinetic-type>span', { yPercent: (i: number) => i%2?-160:160, rotation: (i: number) => i%2?45:-45, stagger: .08, duration: .85 }, 5.85)
    .from('.language-frame', { yPercent: 170, rotation: (i: number) => i?25:-25, scale: .6, stagger: .12, duration: .9 }, 6.2)
    .from('.atlas-language-copy', { y: 70, autoAlpha: 0, duration: .55 }, 6.55)
    .to('.hangul-kinetic-type>span', { xPercent: (i: number) => (i-1)*190, rotation: (i: number) => (i-1)*75, scale: 1.6, duration: .9 }, 7.4)
    .to('.language-frame', { yPercent: -130, rotation: (i: number) => i?-20:20, stagger: .08, duration: .8 }, 7.55)
    .to('.atlas-language-copy', { autoAlpha: 0, duration: .3 }, 7.6)
    .to('.atlas-hangulwave', { autoAlpha: 0, duration: .25 }, 8.15)
    .set('.atlas-cosmicspell', { autoAlpha: 1 }, 7.95)
    .from('.atlas-cosmicspell', { clipPath: 'inset(45% 45% 45% 45% round 10%)', duration: .8 }, 7.95)
    .from('.cosmic-kinetic-title>span', { xPercent: (i: number) => i?110:-110, skewX: (i: number) => i?-20:20, stagger: .1, duration: .85 }, 8.15)
    .from('.atlas-game-shot', { yPercent: (i: number) => i?-130:130, rotation: (i: number) => i?20:-20, stagger: .1, duration: .75 }, 8.45)
    .from('.atlas-game-copy', { autoAlpha: 0, y: 35, duration: .4 }, 8.9)
    .to('.cosmic-kinetic-title', { scale: 3, autoAlpha: 0, duration: .8 }, 9.7)
    .to('.atlas-game-shot', { xPercent: (i: number) => i?180:-180, rotation: (i: number) => i?30:-30, duration: .7 }, 9.75)
    .to('.atlas-game-copy', { autoAlpha: 0, duration: .3 }, 10)
    .to('.atlas-cosmicspell', { autoAlpha: 0, duration: .25 }, 10.5)
    .set('.atlas-brandeye', { autoAlpha: 1 }, 10.2)
    .from('.brand-paper', { scale: .08, rotation: -45, duration: .85 }, 10.2)
    .from('.brand-target', { scale: .3, rotation: 90, autoAlpha: 0, duration: .9 }, 10.45)
    .from('.brand-kinetic-type>span', { xPercent: (i: number) => i?120:-120, duration: .8 }, 10.55)
    .from('.atlas-brand-copy', { y: 50, autoAlpha: 0, duration: .6 }, 10.9)
    .to('.brand-target', { rotation: -90, scale: 4, autoAlpha: 0, duration: .85 }, 12.05)
    .to('.brand-kinetic-type>span', { yPercent: (i: number) => i?150:-150, duration: .65 }, 12.1)
    .to('.atlas-brand-copy', { autoAlpha: 0, duration: .3 }, 12.2)
    .to('.atlas-brandeye', { autoAlpha: 0, duration: .25 }, 12.8)
    .set('.atlas-finale', { autoAlpha: 1 }, 12.65)
    .from('.atlas-finale h2>span', { xPercent: (i: number) => i?110:-110, rotation: (i: number) => i?15:-15, stagger: .15, duration: .9 }, 12.65)
    .from('.atlas-finale>a,.atlas-finale>span', { autoAlpha: 0, y: 30, duration: .5 }, 13.35)
    .to('.atlas-progress>span', { scaleX: 1, ease: 'none', duration: atlasDuration }, 0);
  syncLoops();
  document.addEventListener('visibilitychange', syncLoops);
  const pauseObserver = new MutationObserver(syncLoops);
  pauseObserver.observe(root, { attributes: true, attributeFilter: ['data-motion-paused', 'data-dialog-open'] });
  return () => { pauseObserver.disconnect(); document.removeEventListener('visibilitychange', syncLoops); loops.forEach(loop=>loop?.kill()); timeline.kill(); };
}
