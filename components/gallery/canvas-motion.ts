import gsap from 'gsap';

/** Normal document flow; each composition owns only its children's transforms. */
export function createCanvasMotion(root: HTMLElement, desktop: boolean) {
  const select = gsap.utils.selector(root);
  const entry = gsap.timeline({ defaults: { ease: 'power3.out' } });
  entry.from(select('.canvas-masthead path'), { yPercent: 105, rotation: (i: number) => [9, -8, 6, -7][i], scaleY: .65, duration: 1.15, stagger: .09 }, 0)
    .from(select('.cover-main'), { y: 160, rotationX: 65, opacity: 0, duration: 1.45 }, .3)
    .from(select('.cover-language'), { x: -160, y: 130, rotationX: 55, opacity: 0, duration: 1.3 }, .55)
    .from(select('.cover-web'), { x: 160, y: 100, rotationX: -55, opacity: 0, duration: 1.3 }, .7);
  const hero = gsap.timeline({ scrollTrigger: { trigger: '.cover-composition', start: 'top 30%', end: 'bottom top', scrub: true }, defaults: { ease: 'none' } });
  hero.to('.cover-main', { yPercent: -12, rotation: 4, scale: desktop ? 1.2 : 1.05 }, 0)
    .to('.cover-language', { yPercent: -27, rotation: -3 }, 0)
    .to('.cover-web', { yPercent: -32, rotation: -4 }, 0)
    .to('.cover-title', { xPercent: 5, yPercent: -20 }, 0);
  gsap.from(select('.index-heading h2'), { y: 65, opacity: 0, scrollTrigger: { trigger: '.canvas-index', start: 'top 88%', end: 'top 38%', scrub: true } });
  if (desktop) {
    const fold = gsap.timeline({ scrollTrigger: { trigger: '.canvas-fashion', start: 'top 85%', end: 'bottom bottom', scrub: true }, defaults: { ease: 'none' } });
    fold.from('.fashion-spread', { scale: .38, rotation: -12, y: 150 }, 0)
      .from('.fashion-left', { rotationY: 84 }, 0)
      .from('.fashion-right', { rotationY: -84 }, 0)
      .from('.fashion-word', { xPercent: -15 }, 0);
  } else {
    gsap.from('.fashion-spread', { y: 45, rotation: -3, scrollTrigger: { trigger: '.canvas-fashion', start: 'top 90%', end: 'top 25%', scrub: true } });
  }
  gsap.from('.sema-title>span:first-child', { xPercent: -14, scrollTrigger: { trigger: '.canvas-sema', start: 'top bottom', end: 'top 20%', scrub: true } });
  gsap.from('.sema-title>span:last-child', { xPercent: 14, scrollTrigger: { trigger: '.canvas-sema', start: 'top bottom', end: 'top 20%', scrub: true } });
  gsap.from('.sema-source', { rotation: -14, xPercent: -12, scrollTrigger: { trigger: '.sema-worktable', start: 'top 90%', end: 'bottom 50%', scrub: true } });
  gsap.from('.sema-output', { rotation: 14, xPercent: 12, y: 45, scrollTrigger: { trigger: '.sema-output', start: 'top 95%', end: 'top 30%', scrub: true } });
  gsap.from('.code-window>span', { opacity: .15, x: 16, stagger: .12, scrollTrigger: { trigger: '.sema-output', start: 'top 70%', end: 'center 40%', scrub: true } });
  gsap.to('.sema-ticker>span', { xPercent: -35, ease: 'none', scrollTrigger: { trigger: '.sema-ticker', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.from('.hangul-title>span', { yPercent: 75, scale: .6, rotation: (i: number) => (i - 1) * 22, stagger: .08, scrollTrigger: { trigger: '.canvas-hangul', start: 'top 85%', end: 'top 15%', scrub: true } });
  gsap.to('.app-print-one', { rotation: 2, y: -25, ease: 'none', scrollTrigger: { trigger: '.hangul-prints', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.to('.app-print-two', { rotation: -3, y: 30, ease: 'none', scrollTrigger: { trigger: '.hangul-prints', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.from('.cosmic-heading h2', { xPercent: -18, scrollTrigger: { trigger: '.canvas-cosmic', start: 'top bottom', end: 'top 15%', scrub: true } });
  gsap.from('.game-print', { y: 160, x: (i: number) => i === 0 ? 90 : -90, rotation: (i: number) => i === 0 ? 18 : -18, scale: .7, stagger: .15, scrollTrigger: { trigger: '.cosmic-contact-sheet', start: 'top 85%', end: 'center 40%', scrub: true } });
  gsap.fromTo('.brand-viewfinder', { scale: 1.16 }, { scale: .87, ease: 'none', scrollTrigger: { trigger: '.brand-study', start: 'top 85%', end: 'bottom 30%', scrub: true } });
  gsap.from('.brand-heading h2', { y: 40, scrollTrigger: { trigger: '.canvas-brand', start: 'top 90%', end: 'top 20%', scrub: true } });
  gsap.from('.canvas-outro h2>span:first-child', { xPercent: -16, scrollTrigger: { trigger: '.canvas-outro', start: 'top 90%', end: 'center 45%', scrub: true } });
  gsap.from('.canvas-outro h2>span:last-child', { xPercent: 16, scrollTrigger: { trigger: '.canvas-outro', start: 'top 90%', end: 'center 45%', scrub: true } });
}
