import gsap from 'gsap';

// Navigation lands on fully assembled chapters, not on their transition frames.
export const chapterStops: Record<string, number> = { hangulwave: 1.5, metalook: 3.9, semapage: 7, brandeye: 9.9, cosmicspell: 13.1 };

export function createReferenceMotion() {
  gsap.from('.reference-mark path', { yPercent: 105, stagger: .075, duration: 1.2, ease: 'power4.out' });
  gsap.from('.hero-statement>span', { yPercent: 80, opacity: 0, stagger: .12, duration: 1.1, ease: 'power3.out' });
  gsap.from('.opening-app-preview,.opening-wide>div', { z: -120, rotationX: -12, opacity: 0, stagger: .1, duration: 1.2, ease: 'power3.out' });
  gsap.set('.floating-info', { autoAlpha: 0 });
  gsap.to('.floating-info', { autoAlpha: 1, duration: .25, scrollTrigger: { trigger: '.reference-hero', start: 'top -180px', toggleActions: 'play none none reverse' } });

  const opening = gsap.timeline({ scrollTrigger: { id: 'opening', trigger: '.reference-hero', start: 'top top', end: '+=220%', pin: true, scrub: .6, invalidateOnRefresh: true, anticipatePin: 1 } });
  opening.to('.reference-masthead', { yPercent: -28, opacity: .12, duration: .8, ease: 'none' }, 0)
    .to('.reference-masthead .reference-info', { autoAlpha: 0, duration: .3 }, 0)
    .to('.hero-statement', { xPercent: -28, yPercent: -35, opacity: 0, duration: .9, ease: 'none' }, 0)
    .fromTo('.opening-background', { autoAlpha: 0, scale: 1.05 }, { autoAlpha: .7, scale: 1.3, duration: 1.8, ease: 'none' }, .15)
    .to('.opening-composition', { y: () => -innerHeight * 1.2, duration: 3.1, ease: 'none' }, 0)
    .to('.opening-portrait', { yPercent: -30, scale: 1.3, rotation: -5, duration: 1.1, ease: 'power1.inOut' }, .1)
    .to('.opening-wide', { scale: 1.24, rotation: -4, duration: 1.6, ease: 'power1.inOut' }, .4)
    .to('.wide-type>span', { yPercent: -18, duration: 2.5, ease: 'none' }, .3)
    .to('.opening-mini-left', { xPercent: -70, rotation: -9, duration: 1.5, ease: 'none' }, .4)
    .to('.opening-mini-right', { xPercent: 70, rotation: 9, duration: 1.5, ease: 'none' }, .4)
    .to('.opening-circle', { scale: 1.65, rotation: 8, duration: 1.2, ease: 'power1.inOut' }, 1.7)
    .fromTo('.hero-transition-label', { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: .7, ease: 'power3.out' }, 2.6)
    .to('.hero-transition-label', { xPercent: -12, opacity: 0, duration: .4 }, 3.3);

  gsap.set('.project-scene:not(.scene-hangul)', { autoAlpha: 0 });
  gsap.set('.brand-disc', { x: 0, y: 0, xPercent: -50, yPercent: -50 });
  const sequence = gsap.timeline({ scrollTrigger: { id: 'project-sequence', trigger: '.project-sequence', start: 'top top', end: '+=800%', pin: true, scrub: .55, anticipatePin: 1, invalidateOnRefresh: true } });
  sequence.from('.vertical-specimen', { y: 180, rotation: -10, scale: .52, duration: 1.25, ease: 'power3.out' }, 0)
    .from('.scene-huge-type .type-line>span', { yPercent: 115, rotation: 5, stagger: .15, duration: 1, ease: 'power3.out' }, .1)
    .from('.vertical-columns', { clipPath: 'inset(0% 0% 100% 0%)', duration: .9, ease: 'power2.out' }, .25)
    .to('.scene-hangul', { yPercent: -28, scale: .8, autoAlpha: 0, duration: .7 }, 2.2)
    .fromTo('.scene-metalook', { autoAlpha: 0 }, { autoAlpha: 1, duration: .35 }, 2.4)
    .from('.horizontal-specimen', { yPercent: 25, scale: .65, rotation: 5, duration: 1.15, ease: 'power3.out' }, 2.4)
    .from('.horizontal-specimen>.poster-photo', { rotationY: 88, transformOrigin: 'right center', opacity: .2, duration: 1, ease: 'power3.out' }, 2.65)
    .from('.horizontal-copy', { rotationX: -65, transformOrigin: 'center bottom', opacity: .2, duration: .9, ease: 'power3.out' }, 2.7)
    .from('.horizontal-image', { rotationY: -88, transformOrigin: 'left center', opacity: .2, duration: 1, ease: 'power3.out' }, 2.8)
    .fromTo('.horizontal-image img', { yPercent: 8, scale: 1.2 }, { yPercent: -8, scale: 1.2, duration: 2.3, ease: 'none' }, 2.5)
    .fromTo('.scene-running-type', { xPercent: 15 }, { xPercent: -25, duration: 2.6, ease: 'none' }, 2.4)
    .to('.scene-metalook', { yPercent: -45, autoAlpha: 0, duration: .7 }, 4.8)
    .fromTo('.scene-sema', { autoAlpha: 0 }, { autoAlpha: 1, duration: .3 }, 5.2)
    .fromTo('.sema-strip', { xPercent: (i: number) => i % 2 ? 105 : -105, rotation: (i: number) => i % 2 ? 8 : -8 }, { xPercent: 0, rotation: 0, stagger: .16, duration: 1, ease: 'power3.out' }, 5.2)
    .from('.sema-image-fragments>span', { yPercent: (i: number) => i % 2 ? -180 : 180, xPercent: (i: number) => (i % 4 - 1.5) * 80, rotation: (i: number) => (i % 3 - 1) * 28, scale: .4, opacity: 0, stagger: { each: .08, from: 'center' }, duration: .95, ease: 'power3.out' }, 5.5)
    .from('.sema-strip:nth-child(3)>strong', { clipPath: 'inset(0% 100% 0% 0%)', duration: .8 }, 6.25)
    .to('.sema-strip', { xPercent: (i: number) => i % 2 ? -100 : 100, rotation: (i: number) => i % 2 ? -5 : 5, stagger: .06, duration: .7, ease: 'power2.in' }, 7.8)
    .to('.scene-sema', { autoAlpha: 0, duration: .3 }, 8.3)
    .fromTo('.scene-brand', { autoAlpha: 0 }, { autoAlpha: 1, duration: .35 }, 8.3)
    .fromTo('.brand-disc', { scale: .35, rotation: -20, clipPath: 'inset(0% round 6%)' }, { scale: 1, rotation: 0, clipPath: 'inset(0% round 30% 8% 30% 8%)', duration: 1.3, ease: 'power3.out' }, 8.3)
    .from('.brand-disc-content .type-line>span', { yPercent: 110, stagger: .16, duration: .95, ease: 'power3.out' }, 8.65)
    .fromTo('.brand-focus-frame', { scaleX: .5, scaleY: 1.6, autoAlpha: 0 }, { scaleX: 1, scaleY: 1, autoAlpha: .65, duration: 1.3 }, 8.8)
    .fromTo('.brand-scan-beam', { y: 0, autoAlpha: 0 }, { y: () => document.querySelector<HTMLElement>('.brand-disc')!.offsetHeight * .72, autoAlpha: .65, duration: 1.7, ease: 'none' }, 8.8)
    .to('.brand-scan-beam', { autoAlpha: 0, duration: .2 }, 10.5)
    .to('.brand-disc-ring', { rotation: 24, duration: 2.5, ease: 'none' }, 8.5)
    .fromTo('.brand-underlay', { xPercent: -20 }, { xPercent: 20, duration: 2.7, ease: 'none' }, 8.3)
    .to('.brand-disc', { scale: 2.6, rotation: 12, duration: .8, ease: 'power2.in' }, 10.8)
    .to('.scene-brand', { autoAlpha: 0, duration: .35 }, 11.5)
    .fromTo('.scene-cosmic', { autoAlpha: 0, yPercent: 30 }, { autoAlpha: 1, yPercent: 0, duration: .8 }, 11.3)
    .fromTo('.cosmic-gates>span', { scale: .4, rotation: -18, opacity: .55 }, { scale: 3, rotation: 12, opacity: 0, stagger: .16, duration: 2.1, ease: 'power1.in' }, 11.5)
    .fromTo('.cosmic-triangle', { scale: .55, rotation: -10, clipPath: 'polygon(0% 0%,100% 0%,100% 0%,100% 100%,0% 100%,0% 100%)' }, { scale: 1, rotation: 0, clipPath: 'polygon(0% 0%,86% 0%,100% 14%,100% 100%,14% 100%,0% 86%)', duration: 1.3, ease: 'power3.out' }, 11.5)
    .from('.triangle-words', { y: 100, opacity: 0, duration: 1 }, 11.8)
    .fromTo('.cosmic-side-left', { yPercent: 40, rotation: -16 }, { yPercent: -15, rotation: -3, duration: 2.8, ease: 'none' }, 11.5)
    .fromTo('.cosmic-side-right', { yPercent: -40, rotation: 16 }, { yPercent: 15, rotation: 3, duration: 2.8, ease: 'none' }, 11.5)
    .to('.cosmic-ribbon', { xPercent: -35, duration: 2.8, ease: 'none' }, 11.5)
    .to('.scene-cosmic', { scale: .78, autoAlpha: 0, duration: .8, ease: 'power1.inOut' }, 13.8);

  const curtain = (at: number) => {
    sequence.fromTo('.sequence-curtain>span', { scaleY: 0, transformOrigin: 'center bottom' }, { scaleY: 1, stagger: .045, duration: .3, ease: 'power2.in', immediateRender: false }, at)
      .to('.sequence-curtain>span', { scaleY: 0, transformOrigin: 'center top', stagger: { each: .045, from: 'end' }, duration: .45, ease: 'power3.out' }, at + .44);
  };
  [2.15, 4.95, 8.05, 11.25].forEach(curtain);
  ['hangul', 'metalook', 'sema', 'brand', 'cosmic'].forEach((name, i) => {
    const at = [0, 2.4, 5.2, 8.3, 11.5][i];
    sequence.from(`.scene-${name} .chapter-number`, { xPercent: -20, scale: 1.4, opacity: 0, duration: 1.2, ease: 'power2.out' }, at);
    if (i) sequence.to('.sequence-index>div', { y: -9 * i, duration: .15 }, at);
  });
  sequence.fromTo('.sequence-progress>span', { scaleX: 0 }, { scaleX: 1, duration: 14.6, ease: 'none' }, 0);

  const closing = gsap.timeline({ scrollTrigger: { id: 'closing', trigger: '.closing-sequence', start: 'top top', end: '+=170%', pin: true, scrub: .6, invalidateOnRefresh: true, anticipatePin: 1 } });
  closing.from('.closing-letter', { y: (i: number) => (i % 3 - 1) * 140, x: (i: number) => (i % 4 - 1.5) * 60, rotation: (i: number) => (i % 2 ? 1 : -1) * 55, stagger: .045, duration: 1.2, ease: 'power3.out' }, 0)
    .from('.closing-poster-content', { y: 100, opacity: 0, duration: .9 }, .3)
    .to('.closing-poster', { scale: .44, xPercent: 24, rotation: -9, duration: 1.3, ease: 'power2.inOut' }, 1.7)
    .from('.closing-grid', { opacity: 0, scale: 1.5, duration: 1.3 }, 1.7)
    .from('.closing-caption', { y: 30, opacity: 0, duration: .6 }, 2.5);
  gsap.from('.contact-intro,.contact-method', { y: 50, opacity: 0, stagger: .13, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: '.contact-section', start: 'top 85%', toggleActions: 'play none none reverse' } });
  gsap.from('.reference-footer-mark path', { yPercent: 110, stagger: .05, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.reference-footer', start: 'top 95%' } });
}
