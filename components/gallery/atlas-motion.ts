import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { atlasScenes, atlasDuration, selectAtlasScene } from './atlas-scenes';

export { atlasStops, atlasDuration } from './atlas-scenes';

/** Scroll selects a scene; a time-based transition always completes its composition. */
export function createAtlasMotion(root: HTMLElement, onProgress?: (progress: number) => void) {
  const $ = gsap.utils.selector(root);
  const acts = $('.atlas-act') as HTMLElement[];
  gsap.set(acts.slice(1), { autoAlpha: 0 });
  gsap.set('.atlas-cover', { autoAlpha: 1 });
  gsap.set('.atlas-chapters', { autoAlpha: 0 });
  gsap.from('.atlas-masthead path', { yPercent: 105, rotation: -8, stagger: .075, duration: 1.05, ease: 'power4.out' });

  // Reset the loop's local transforms when matchMedia rebuilds after a resize.
  gsap.set('.kit-type-track,.idea-surface,.meal-surface>span,.kit-slice', { clearProps: 'transform' });
  gsap.set('.kit-type-track', { x: 0, y: 0, xPercent: 0, yPercent: 0 });
  // Separate surfaces from type: shapes can turn while the words remain legible.
  const identityLoop = gsap.timeline({ repeat: -1, repeatDelay: .55, paused: true, defaults: { duration: 1.2, ease: 'expo.inOut' } })
    .to('.idea-surface', { borderRadius: '8%', rotation: 90, scale: .86 }, .7)
    .to('.meal-surface>span', { rotation: (i: number) => i % 2 ? -18 : 18, scaleY: .77, xPercent: (i: number) => (i - 1.5) * 12, stagger: .065 }, .7)
    .to('.slice-a', { xPercent: -13, yPercent: -13 }, .7)
    .to('.slice-b', { xPercent: 13, yPercent: 13 }, .7)
    .to('.kit-type-track', { yPercent: -100 / 3, stagger: .12 }, .85)
    .to('.idea-surface', { rotation: 135, borderRadius: '0%', scale: .7 }, 2.7)
    .to('.meal-surface>span', { rotation: 0, scaleY: 1, xPercent: 0, stagger: .065 }, 2.7)
    .to('.kit-slice', { rotation: 90, xPercent: 0, yPercent: 0, scale: .83 }, 2.7)
    .to('.kit-type-track', { yPercent: -200 / 3, stagger: .12 }, 2.85)
    .to('.idea-surface', { borderRadius: '50%', rotation: 180, scale: 1 }, 4.7)
    .to('.kit-slice', { rotation: 0, scale: 1 }, 4.7)
    .set('.kit-type-track', { yPercent: 0 }, 6);
  const fashionLoop = gsap.to('.fashion-kinetic-line', { xPercent: -50, duration: 11, ease: 'none', repeat: -1, paused: true });
  const flightLoop = gsap.timeline({ repeat: -1, paused: true }).fromTo('.cosmic-flight>span', { scale: .18, rotation: -25, opacity: 0 }, { keyframes: [{ opacity: .8, duration: .35 }, { scale: 3.5, rotation: 20, opacity: 0, duration: 3.3 }], stagger: .65, ease: 'none' });
  const scanLoop = gsap.fromTo('.brand-scanner', { y: 0, opacity: 0 }, { y: () => (root.querySelector('.brand-target') as HTMLElement).offsetHeight * .8, opacity: .65, duration: 2.5, repeat: -1, yoyo: true, ease: 'power1.inOut', paused: true });
  // The studio poster plays in place. Scroll owns its frame, this loop owns only its contents.
  const mobile = root.dataset.layout === 'mobile';
  gsap.set('.studio-word,.studio-word>span,.studio-web-shutters>span,.studio-app-disc,.studio-service-grid,.studio-service-grid>span', { clearProps: 'transform,opacity,visibility,borderRadius' });
  gsap.set('.studio-app,.studio-service', { autoAlpha: 0 });
  const studioLoop = gsap.timeline({ repeat: -1, paused: true, defaults: { ease: 'power3.inOut' } })
    .to('.studio-web-shutters>span', { rotation: (i: number) => i % 2 ? 24 : -24, scaleY: .72, duration: 1.1, stagger: .07 }, .45)
    .to('.studio-web .studio-word>span', { yPercent: (i: number) => i % 2 ? 15 : -15, rotation: (i: number) => (i - 1) * 8, duration: 1.1, stagger: .08 }, .45)
    .to('.studio-web-shutters>span', { scaleY: .015, rotation: 90, duration: .9, stagger: .07 }, 2.05)
    .to('.studio-web .studio-word>span', { yPercent: -130, rotation: -12, autoAlpha: 0, duration: .8, stagger: .08 }, 2.05)
    .set('.studio-web', { autoAlpha: 0 }, 3.25)
    .set('.studio-app', { autoAlpha: 1 }, 2.75)
    .fromTo('.studio-app-disc', { scale: .05, rotation: -90, xPercent: 0 }, { scale: 1, rotation: 0, duration: 1.05 }, 2.75)
    .fromTo('.studio-app .studio-word>span', { yPercent: 130, rotation: 12, autoAlpha: 0 }, { yPercent: 0, rotation: 0, autoAlpha: 1, duration: 1, stagger: .08 }, 2.9)
    .to('.studio-app-disc', { xPercent: mobile ? 35 : 130, rotation: 270, duration: 1.65, ease: 'power2.inOut' }, 3.8)
    .to('.studio-app-disc', { scale: .03, rotation: 360, duration: .8 }, 5.55)
    .to('.studio-app .studio-word>span', { xPercent: (i: number) => (i-1)*120, scale: .3, autoAlpha: 0, duration: .8 }, 5.65)
    .set('.studio-app', { autoAlpha: 0 }, 6.5)
    .set('.studio-service', { autoAlpha: 1 }, 6.05)
    .fromTo('.studio-service-grid>span', { scale: .05, rotation: -90, xPercent: (i: number) => i%2?85:-85, yPercent: (i: number) => i<2?-85:85 }, { scale: 1, rotation: 0, xPercent: 0, yPercent: 0, duration: 1.05, stagger: .08 }, 6.05)
    .fromTo('.studio-service .studio-word', { scaleX: .1, autoAlpha: 0 }, { scaleX: 1, autoAlpha: 1, duration: .9 }, 6.35)
    .to('.studio-service-grid', { rotation: 90, duration: 1.4 }, 7.45)
    .to('.studio-service-grid>span', { borderRadius: '50%', scale: .8, duration: 1.4, stagger: .08 }, 7.45)
    .to('.studio-service .studio-word', { scaleX: 1.3, autoAlpha: 0, duration: .75 }, 9.15)
    .to('.studio-service-grid>span', { scale: .01, duration: .8, stagger: .06 }, 9.15)
    .set('.studio-service', { autoAlpha: 0 }, 10.2)
    .set('.studio-web', { autoAlpha: 1 }, 9.75)
    .to('.studio-web-shutters>span', { scaleY: 1, rotation: 0, duration: 1, stagger: .05 }, 9.75)
    .to('.studio-web .studio-word>span', { yPercent: 0, rotation: 0, autoAlpha: 1, duration: 1, stagger: .05 }, 9.75);
  let active = 0;
  const loops = [identityLoop, fashionLoop, null, null, flightLoop, scanLoop, null, studioLoop];
  const syncLoops = () => loops.forEach((loop, i) => { if (!loop) return; if (!document.hidden && root.dataset.motionPaused !== 'true' && root.dataset.dialogOpen !== 'true' && i === active) loop.resume(); else loop.pause(); });
  const controls = $('.atlas-chapters a') as HTMLAnchorElement[];
  controls.forEach(link => link.setAttribute('aria-current', 'false'));
  const timeline = gsap.timeline({ paused: true, defaults: { ease: 'power2.inOut' },
    onUpdate: () => {
      const time = timeline.time();
      const next = time < 1.35 ? 0 : time < 4.55 ? 7 : time < 6.65 ? 1 : time < 8.65 ? -1 : time < 10.95 ? 2 : time < 13.05 ? -1 : time < 15.2 ? 3 : time < 17.35 ? -1 : time < 19.45 ? 4 : time < 21.45 ? -1 : time < 23.85 ? 5 : 6;
      if (next !== active) {
        active = next;
        syncLoops();
        controls.forEach((link, i) => link.setAttribute('aria-current', String(i + 1 === next)));
      }
    },
  });
  timeline.to('.atlas-masthead', { yPercent: -110, scaleY: .35, duration: 1.05, ease: 'power2.in' }, 0)
    .to('.atlas-cover-meta,.atlas-cover-copy,.atlas-cover-foot', { autoAlpha: 0, y: -35, duration: .55 }, .1)
    .to('.kinetic-engine', { scale: 4.5, rotation: -35, duration: 1.4, ease: 'power2.in' }, 0)
    .to('.atlas-cover', { autoAlpha: 0, duration: .15 }, 1.4)
    .set('.atlas-index', { autoAlpha: 1 }, 1.1)
    .from('.atlas-index', { clipPath: 'inset(48% 38% 48% 38%)', duration: .8 }, 1.1)
    .from('.index-heading,.index-footer', { autoAlpha: 0, y: 25, duration: .6 }, 1.75)
    .from('.studio-motion', { rotation: -12, scale: .4, duration: 1.1 }, 1.35)
    .from('.studio-services>div', { y: 30, autoAlpha: 0, stagger: .09, duration: .65 }, 1.85)
    .to('.index-heading,.index-footer,.studio-services', { autoAlpha: 0, y: -30, duration: .5 }, 3.45)
    .to('.studio-motion', { scale: 2.8, rotation: -20, duration: 1, ease: 'power2.in' }, 3.7)
    .to('.atlas-index', { autoAlpha: 0, duration: .35 }, 4.35)
    .set('.atlas-metalook', { autoAlpha: 1 }, 4.3)
    .to('.atlas-chapters', { autoAlpha: 1, duration: .35 }, 4.6)
    .fromTo('.fashion-aperture', { scale: .06, rotation: 90, clipPath: 'inset(0% round 35%)' }, { scale: 1, rotation: 0, clipPath: 'inset(0% round 0%)', duration: 1.05 }, 4.3)
    .from('.fashion-image-a', { rotationY: 85, duration: .8 }, 4.85)
    .from('.fashion-image-b', { rotationY: -85, duration: .8 }, 4.85)
    .from('.fashion-type-panel h2', { yPercent: 90, autoAlpha: 0, duration: .6 }, 5.05)
    .from('.fashion-kinetic-line', { yPercent: 180, autoAlpha: 0, duration: .65 }, 4.9)
    .to('.atlas-fashion-panel', { yPercent: (i: number) => i % 2 ? 145 : -145, rotation: (i: number) => i % 2 ? 12 : -12, duration: .85, stagger: .08 }, 6.05)
    .to('.fashion-kinetic-line', { yPercent: 180, duration: .5 }, 6.2)
    .to('.atlas-metalook', { autoAlpha: 0, duration: .2 }, 6.8)
    .set('.atlas-semapage', { autoAlpha: 1 }, 8.55)
    .from('.atlas-semapage', { clipPath: 'inset(50% 0% 50% 0%)', duration: .5 }, 8.55)
    .from('.pixel-assembly>span', { xPercent: (i: number) => (i%3-1)*220, yPercent: (i: number) => i<3?-220:220, rotation: (i: number) => (i%2?1:-1)*50, scale: .25, opacity: 0, stagger: .045, duration: .65 }, 8.65)
    .to('.pixel-assembly', { rotation: -90, scale: .5, autoAlpha: 0, duration: .65 }, 9.3)
    .from('.html-ribbon', { xPercent: (i: number) => i%2?110:-110, rotation: (i: number) => i%2?-12:12, stagger: .1, duration: .8 }, 9.25)
    .to('.html-ribbon', { xPercent: (i: number) => i%2?-115:115, rotation: (i: number) => i%2?18:-18, stagger: .07, duration: .75 }, 10.4)
    .to('.atlas-semapage', { autoAlpha: 0, duration: .25 }, 11.15)
    .set('.atlas-hangulwave', { autoAlpha: 1 }, 12.95)
    .from('.atlas-hangulwave', { clipPath: 'inset(0% 50% 0% 50%)', duration: .65 }, 12.95)
    .from('.hangul-kinetic-type>span', { yPercent: 40, autoAlpha: 0, stagger: .1, duration: .6, ease: 'power3.out' }, 13.1)
    .from('.language-frame', { yPercent: 35, autoAlpha: 0, stagger: .1, duration: .6, ease: 'power3.out' }, 13.5)
    .from('.atlas-language-copy', { y: 70, autoAlpha: 0, duration: .55 }, 13.75)
    .to('.hangul-kinetic-type>span', { yPercent: -35, autoAlpha: 0, stagger: .06, duration: .5 }, 14.85)
    .to('.language-frame', { yPercent: -25, autoAlpha: 0, stagger: .08, duration: .5 }, 14.9)
    .to('.atlas-language-copy', { autoAlpha: 0, duration: .3 }, 14.8)
    .to('.atlas-hangulwave', { autoAlpha: 0, duration: .25 }, 15.35)
    .set('.atlas-cosmicspell', { autoAlpha: 1 }, 17.15)
    .from('.atlas-cosmicspell', { clipPath: 'inset(45% 45% 45% 45% round 10%)', duration: .8 }, 17.15)
    .from('.cosmic-kinetic-title>span', { xPercent: (i: number) => i?110:-110, skewX: (i: number) => i?-20:20, stagger: .1, duration: .85 }, 17.35)
    .from('.atlas-game-shot', { yPercent: (i: number) => i?-130:130, rotation: (i: number) => i?20:-20, stagger: .1, duration: .75 }, 17.65)
    .from('.atlas-game-copy', { autoAlpha: 0, y: 35, duration: .4 }, 18.1)
    .to('.cosmic-kinetic-title', { scale: 3, autoAlpha: 0, duration: .8 }, 18.9)
    .to('.atlas-game-shot', { xPercent: (i: number) => i?180:-180, rotation: (i: number) => i?30:-30, duration: .7 }, 18.95)
    .to('.atlas-game-copy', { autoAlpha: 0, duration: .3 }, 19.2)
    .to('.atlas-cosmicspell', { autoAlpha: 0, duration: .25 }, 19.7)
    .set('.atlas-brandeye', { autoAlpha: 1 }, 21.4)
    .from('.brand-paper', { scale: .08, rotation: -45, duration: .85 }, 21.4)
    .from('.brand-target', { scale: .3, rotation: 90, autoAlpha: 0, duration: .9 }, 21.65)
    .from('.brand-kinetic-type>span', { xPercent: (i: number) => i?120:-120, duration: .8 }, 21.75)
    .from('.atlas-brand-copy', { y: 50, autoAlpha: 0, duration: .6 }, 22.1)
    .to('.brand-target', { rotation: -90, scale: 4, autoAlpha: 0, duration: .85 }, 23.25)
    .to('.brand-kinetic-type>span', { yPercent: (i: number) => i?150:-150, duration: .65 }, 23.3)
    .to('.atlas-brand-copy', { autoAlpha: 0, duration: .3 }, 23.4)
    .to('.atlas-brandeye', { autoAlpha: 0, duration: .25 }, 24.0)
    .set('.atlas-finale', { autoAlpha: 1 }, 23.85)
    .from('.atlas-finale h2>span', { xPercent: (i: number) => i?110:-110, rotation: (i: number) => i?15:-15, stagger: .15, duration: .9 }, 23.85)
    .from('.atlas-finale>a,.atlas-finale>span', { autoAlpha: 0, y: 30, duration: .5 }, 24.55)
    .to('.atlas-progress>span', { scaleX: 1, ease: 'none', duration: atlasDuration }, 0);
  // Interludes have their own complete resting poses, just like project scenes.
  const bridge = (name: string, at: number) => {
    const scene = `.interlude-${name}`;
    timeline.set(scene, { autoAlpha: 1 }, at)
      .from(scene, { clipPath: 'inset(48% 0% 48% 0%)', duration: .4 }, at)
      .from(`${scene} .interlude-caption,${scene} .interlude-signature`, { autoAlpha: 0, y: 20, duration: .35 }, at + .3)
      .to(`${scene} .interlude-caption,${scene} .interlude-signature`, { autoAlpha: 0, duration: .3 }, at + 1.65)
      .to(scene, { autoAlpha: 0, duration: .3 }, at + 2.1);
  };
  bridge('fold', 6.55);
  timeline.from('.fold-panel', { rotationY: 85, rotation: (i: number) => (i - 1.5) * 28, yPercent: (i: number) => i % 2 ? 120 : -120, duration: .95, stagger: .075 }, 6.7)
    .to('.fold-panel', { rotation: 0, rotationY: 0, duration: .2 }, 7.8)
    .to('.fold-panel', { rotation: 90, scaleX: .015, scaleY: 2.8, yPercent: (i: number) => (i-1.5)*45, duration: .75, stagger: .05 }, 8.05);
  bridge('flow', 10.95);
  timeline.from('.flow-rings>span', { scale: .65, autoAlpha: 0, rotation: (i: number) => i * 45 - 90, duration: .6, stagger: .06 }, 11.1)
    .from('.flow-title', { yPercent: 45, autoAlpha: 0, duration: .55, ease: 'power3.out' }, 11.25)
    .to('.flow-rings', { rotation: 100, duration: .85, ease: 'power2.inOut' }, 11.65)
    .to('.flow-rings', { scale: 1.3, autoAlpha: 0, duration: .45 }, 12.8)
    .to('.flow-title', { yPercent: -25, autoAlpha: 0, duration: .4 }, 12.85);
  bridge('play', 15.15);
  timeline.from('.play-tiles>span', { scale: .01, rotationX: 90, rotation: (i: number) => i%2?45:-45, duration: .75, stagger: { each: .035, from: 'center' } }, 15.3)
    .from('.interlude-play .interlude-word>span', { yPercent: 150, rotation: 35, duration: .85, stagger: .09 }, 15.45)
    .to('.play-tiles', { rotation: 45, scale: .88, duration: .45 }, 16.2)
    .to('.play-tiles>span', { xPercent: (i: number) => (i%4-1.5)*180, yPercent: (i: number) => (Math.floor(i/4)-1.5)*180, rotation: 90, scale: .1, borderRadius: '50%', duration: .8, stagger: .018 }, 16.7)
    .to('.interlude-play .interlude-word', { scale: 2, autoAlpha: 0, duration: .6 }, 16.8);
  bridge('connect', 19.4);
  timeline.from('.connect-ribbons>span', { xPercent: (i: number) => i%2?120:-120, rotation: (i: number) => i%2?-35:35, duration: .95, stagger: .08 }, 19.55)
    .from('.interlude-connect .interlude-word', { scaleX: .05, autoAlpha: 0, duration: .8 }, 19.8)
    .to('.connect-ribbons>span', { rotation: (i: number) => (i-1)*25, scaleX: .8, duration: .3, stagger: .06 }, 20.5)
    .to('.connect-ribbons>span', { rotation: 0, scaleX: 1.4, scaleY: 4, duration: .7, stagger: .04 }, 21.05)
    .to('.interlude-connect .interlude-word', { autoAlpha: 0, scale: .7, duration: .5 }, 21.1);
  let selectedScene = 0;
  let transition: gsap.core.Tween | undefined;
  const motionDisabled = () => document.hidden || root.dataset.motionPaused === 'true' || root.dataset.dialogOpen === 'true';
  const settleScene = () => {
    transition?.kill();
    transition = undefined;
    timeline.time(atlasScenes[selectedScene].time, false);
  };
  const selectScene = (progress: number, immediate = false) => {
    onProgress?.(progress);
    const next = selectAtlasScene(progress, selectedScene);
    if (next === selectedScene && !immediate) return;
    const previous = selectedScene;
    selectedScene = next;
    transition?.kill();
    const target = atlasScenes[next].time;
    const distance = Math.abs(target - timeline.time());
    // Native scrollbar drags, deep links and fast flings skip obsolete scenes.
    // Never queue animations or move the user's scroll position to finish one.
    if (immediate || motionDisabled() || Math.abs(next - previous) > 1 || distance > 4) {
      settleScene();
    } else {
      transition = timeline.tweenTo(target, {
        duration: Math.min(1.25, Math.max(.65, distance * .45)),
        ease: 'none',
        onComplete: () => { transition = undefined; },
      });
    }
  };
  const trigger = ScrollTrigger.create({
    id: 'motion-atlas', trigger: root.querySelector('.motion-experience'),
    start: 'top top', end: 'bottom bottom',
    onUpdate: self => selectScene(self.progress),
    onRefresh: self => selectScene(self.progress, true),
  });
  const syncMotion = () => {
    if (motionDisabled()) settleScene();
    syncLoops();
  };
  syncMotion();
  document.addEventListener('visibilitychange', syncMotion);
  const pauseObserver = new MutationObserver(syncMotion);
  pauseObserver.observe(root, { attributes: true, attributeFilter: ['data-motion-paused', 'data-dialog-open'] });
  return () => { pauseObserver.disconnect(); document.removeEventListener('visibilitychange', syncMotion); transition?.kill(); trigger.kill(); loops.forEach(loop=>loop?.kill()); timeline.kill(); };
}
