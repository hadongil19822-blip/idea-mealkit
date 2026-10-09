import gsap from 'gsap';

export function createReferenceMotion() {
  gsap.from('.reference-mark path', { yPercent: 105, stagger: .055, duration: 1.1, ease: 'power3.out' });
  gsap.from('.opening-composition', { opacity: .5, duration: 1.3, ease: 'power3.out' });
  gsap.from('.opening-app-preview,.opening-wide>div,.opening-mini,.opening-game>strong', { z: -90, rotationX: -9, opacity: 0, stagger: .08, duration: 1.1, ease: 'power3.out' });
  gsap.set('.floating-info', { autoAlpha: 0 });
  gsap.to('.floating-info', { autoAlpha: 1, duration: .25, scrollTrigger: { trigger: '.reference-hero', start: 'top -180px', toggleActions: 'play none none reverse' } });
  const opening = gsap.timeline({ scrollTrigger: { id: 'opening', trigger: '.reference-hero', start: 'top top', end: '+=200%', pin: true, scrub: .7, invalidateOnRefresh: true, anticipatePin: 1 } });
  opening.to('.reference-masthead', { yPercent: -20, opacity: .16, duration: .8, ease: 'none' }, 0)
    .to('.reference-masthead .reference-info', { autoAlpha: 0, duration: .3 }, 0)
    .fromTo('.opening-background', { autoAlpha: 0, scale: 1.12, yPercent: 3 }, { autoAlpha: .75, scale: 1.3, yPercent: -3, duration: 1.5, ease: 'none' }, .2)
    .to('.opening-composition', { y: () => -innerHeight * 1.05, duration: 3, ease: 'none' }, 0)
    .to('.opening-portrait', { yPercent: -32, duration: 2, ease: 'none' }, .15)
    .to('.opening-wide', { scale: 1.08, rotation: -2, duration: 2, ease: 'none' }, .2)
    .to('.wide-type>span', { yPercent: -12, duration: 2.5, ease: 'none' }, .2)
    .to('.opening-mini-left', { xPercent: -35, duration: 1.5, ease: 'none' }, .4)
    .to('.opening-mini-right', { xPercent: 35, duration: 1.5, ease: 'none' }, .4)
    .to('.opening-circle', { scale: 1.25, duration: 1.3, ease: 'none' }, 1.7);

  gsap.set('.project-scene:not(.scene-hangul)', { autoAlpha: 0 });
  gsap.set('.brand-disc', { x: 0, y: 0, xPercent: -50, yPercent: -50 });
  const sequence = gsap.timeline({ scrollTrigger: { id: 'project-sequence', trigger: '.project-sequence', start: 'top top', end: '+=550%', pin: true, scrub: .7, anticipatePin: 1, invalidateOnRefresh: true } });
  sequence.from('.vertical-specimen', { y: 120, scale: .7, duration: 1, ease: 'power2.out' }, 0)
    .from('.scene-huge-type .type-line>span', { yPercent: 115, rotation: 4, stagger: .1, duration: .85, ease: 'power3.out' }, .05)
    .from('.vertical-columns', { clipPath: 'inset(0% 0% 100% 0%)', duration: .9, ease: 'power2.out' }, .15)
    .to('.scene-hangul', { yPercent: -35, rotation: -3, scale: .85, autoAlpha: 0, duration: .8, ease: 'power2.inOut' }, 1.4)
    .fromTo('.scene-metalook', { yPercent: 35, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: .8, ease: 'power2.inOut' }, 1.5)
    .fromTo('.horizontal-specimen', { scale: .75 }, { scale: 1, duration: 1.2, ease: 'none' }, 1.5)
    .from('.horizontal-specimen>.poster-photo', { rotationY: 75, transformOrigin: 'right center', opacity: .2, duration: .85, ease: 'power2.out' }, 1.6)
    .from('.horizontal-copy', { rotationX: -35, transformOrigin: 'center bottom', opacity: .2, duration: .8, ease: 'power2.out' }, 1.7)
    .from('.horizontal-image', { rotationY: -75, transformOrigin: 'left center', opacity: .2, duration: .85, ease: 'power2.out' }, 1.8)
    .fromTo('.horizontal-image img', { yPercent: 8, scale: 1.2 }, { yPercent: -8, scale: 1.2, duration: 1.6, ease: 'none' }, 1.6)
    .fromTo('.scene-running-type', { xPercent: 15 }, { xPercent: -20, duration: 1.8, ease: 'none' }, 1.5)
    .to('.scene-metalook', { yPercent: -100, autoAlpha: 0, duration: .8, ease: 'power2.inOut' }, 3.1)
    .fromTo('.scene-sema', { autoAlpha: 0 }, { autoAlpha: 1, duration: .3 }, 3.2)
    .fromTo('.sema-strip', { xPercent: (i: number) => i % 2 ? 80 : -80, yPercent: 25, rotation: (i: number) => i % 2 ? 4 : -4 }, { xPercent: 0, yPercent: 0, rotation: 0, stagger: .14, duration: .9, ease: 'power2.out' }, 3.2)
    .from('.sema-image-fragments>span', { yPercent: (i: number) => i % 2 ? -130 : 130, xPercent: (i: number) => (i % 4 - 1.5) * 40, rotation: (i: number) => (i % 3 - 1) * 18, scale: .65, opacity: 0, stagger: { each: .06, from: 'center' }, duration: .8, ease: 'power3.out' }, 3.4)
    .from('.sema-strip:nth-child(3)>strong', { clipPath: 'inset(0% 100% 0% 0%)', duration: .7, ease: 'power2.out' }, 4)
    .to('.sema-strip:nth-child(1)', { xPercent: -15, duration: 1.3, ease: 'none' }, 3.6)
    .to('.sema-strip:nth-child(3)', { xPercent: 15, duration: 1.3, ease: 'none' }, 3.6)
    .to('.scene-sema', { scale: .5, autoAlpha: 0, duration: .8 }, 4.9)
    .fromTo('.scene-brand', { autoAlpha: 0 }, { autoAlpha: 1, duration: .5 }, 5)
    .fromTo('.brand-disc', { scale: .7, rotation: -8, clipPath: 'inset(0% round 8%)' }, { scale: 1, rotation: 0, clipPath: 'inset(0% round 30% 8% 30% 8%)', duration: 1.1, ease: 'power2.inOut' }, 5)
    .from('.brand-disc-content .type-line>span', { yPercent: 110, stagger: .12, duration: .8, ease: 'power3.out' }, 5.3)
    .fromTo('.brand-focus-frame', { scaleX: .65, scaleY: 1.4, autoAlpha: 0 }, { scaleX: 1, scaleY: 1, autoAlpha: .65, duration: 1.1, ease: 'power2.out' }, 5.45)
    .fromTo('.brand-scan-beam', { y: 0, autoAlpha: 0 }, { y: () => document.querySelector<HTMLElement>('.brand-disc')!.offsetHeight * .72, autoAlpha: .55, duration: 1.3, ease: 'none' }, 5.3)
    .to('.brand-scan-beam', { autoAlpha: 0, duration: .2 }, 6.6)
    .to('.brand-disc-ring', { rotation: 18, duration: 1.9, ease: 'none' }, 5.1)
    .fromTo('.brand-underlay', { xPercent: -20 }, { xPercent: 15, duration: 1.9, ease: 'none' }, 5)
    .to('.brand-disc', { scale: 1.65, rotation: 7, duration: .8, ease: 'power2.in' }, 6.6)
    .to('.scene-brand', { autoAlpha: 0, duration: .5 }, 6.9)
    .fromTo('.scene-cosmic', { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: .8 }, 6.95)
    .fromTo('.cosmic-gates>span', { scale: .45, rotation: -14, opacity: .45 }, { scale: 2.6, rotation: 8, opacity: 0, stagger: .08, duration: 1.75, ease: 'power1.in' }, 6.95)
    .fromTo('.cosmic-triangle', { clipPath: 'polygon(0% 0%,100% 0%,100% 0%,100% 100%,0% 100%,0% 100%)' }, { clipPath: 'polygon(0% 0%,86% 0%,100% 14%,100% 100%,14% 100%,0% 86%)', duration: 1.05 }, 7)
    .from('.triangle-words', { y: 60, opacity: 0, duration: .7 }, 7.2)
    .fromTo('.cosmic-side-left', { yPercent: 30, rotation: -10 }, { yPercent: -20, rotation: 0, duration: 1.7, ease: 'none' }, 7)
    .fromTo('.cosmic-side-right', { yPercent: -20, rotation: 10 }, { yPercent: 20, rotation: 0, duration: 1.7, ease: 'none' }, 7)
    .to('.cosmic-ribbon', { xPercent: -30, duration: 1.8, ease: 'none' }, 7)
    .to('.scene-cosmic', { scale: .78, duration: .6, ease: 'none' }, 8.5)
    .to('.sequence-index>div', { y: -9, duration: .15 }, 1.5)
    .to('.sequence-index>div', { y: -18, duration: .15 }, 3.2)
    .to('.sequence-index>div', { y: -27, duration: .15 }, 5)
    .to('.sequence-index>div', { y: -36, duration: .15 }, 6.95);
  gsap.fromTo('.sequence-background img', { yPercent: 3, scale: 1.16 }, { yPercent: -3, scale: 1.3, ease: 'none', scrollTrigger: { trigger: '.project-sequence', start: 'top top', end: '+=550%', scrub: .8 } });

  const closing = gsap.timeline({ scrollTrigger: { id: 'closing', trigger: '.closing-sequence', start: 'top top', end: '+=160%', pin: true, scrub: .7, invalidateOnRefresh: true, anticipatePin: 1 } });
  closing.from('.closing-letter', { y: (i: number) => (i % 3 - 1) * 90, x: (i: number) => (i % 4 - 1.5) * 25, rotation: (i: number) => (i % 2 ? 1 : -1) * 35, stagger: .025, duration: 1.1, ease: 'power2.out' }, 0)
    .from('.closing-poster-content', { y: 80, opacity: 0, duration: .8 }, .2)
    .to('.closing-poster', { scale: () => innerWidth < 600 ? .55 : .38, xPercent: () => innerWidth < 600 ? 12 : 24, rotation: -5, duration: 1.3, ease: 'power2.inOut' }, 1.5)
    .from('.closing-grid', { opacity: 0, scale: 1.4, duration: 1.3 }, 1.5)
    .from('.closing-caption', { y: 30, opacity: 0, duration: .6 }, 2.3);
  gsap.from('.contact-intro,.contact-method', { y: 45, opacity: 0, stagger: .13, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: '.contact-section', start: 'top 85%', toggleActions: 'play none none reverse' } });
  gsap.from('.reference-footer-mark path', { yPercent: 110, stagger: .04, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: '.reference-footer', start: 'top 95%' } });
}
