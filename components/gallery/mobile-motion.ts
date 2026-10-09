import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Native-scroll chapters on phones. No gallery pin and no second scroll engine. */
export function createMobileMotion(root: HTMLElement) {
  gsap.from('.reference-mark path', { yPercent: 100, duration: .85, stagger: .06, ease: 'power3.out' });
  gsap.from('.hero-statement>span', { y: 25, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out' });
  gsap.from('.opening-portrait', { y: 35, opacity: 0, rotation: -3, duration: 1, ease: 'power3.out' });
  gsap.from('.opening-wide', { y: 65, rotation: 4, scale: .92, scrollTrigger: { trigger: '.opening-wide', start: 'top 95%', end: 'top 45%', scrub: true } });
  gsap.set('.floating-info', { autoAlpha: 0 });
  gsap.to('.floating-info', { autoAlpha: 1, duration: .2, scrollTrigger: { trigger: '.reference-hero', start: 'top -130px', toggleActions: 'play none none reverse' } });
  gsap.set('.brand-disc', { x: 0, y: 0, xPercent: -50, yPercent: -50 });

  const navLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>('.mobile-project-nav a'));
  root.querySelectorAll<HTMLElement>('.project-scene').forEach(scene => {
    const card = scene.querySelector('.vertical-specimen,.horizontal-specimen,.sema-strips,.brand-disc,.cosmic-triangle');
    const entrance = gsap.timeline({ scrollTrigger: { trigger: scene, start: 'top 78%', end: 'top 12%', scrub: true } });
    if (card) entrance.from(card, { y: 65, scale: .88, rotation: -3, duration: 1, ease: 'power2.out' }, 0);
    entrance.from(scene.querySelector('.chapter-number'), { x: -40, opacity: 0, duration: 1 }, 0)
      .from(scene.querySelectorAll('.mobile-project-caption>*'), { y: 25, opacity: .4, stagger: .08, duration: .65 }, .2);
    ScrollTrigger.create({ trigger: scene, start: 'top 45%', end: 'bottom 45%', onToggle: self => {
      if (self.isActive) navLinks.forEach(link => { if (link.hash === `#${scene.id}`) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current'); });
    } });
  });
  gsap.from('.scene-huge-type .type-line>span', { yPercent: 110, stagger: .12, duration: .8, scrollTrigger: { trigger: '.scene-hangul', start: 'top 80%', end: 'top 20%', scrub: true } });
  gsap.from('.horizontal-specimen>.poster-photo', { xPercent: -25, opacity: .5, scrollTrigger: { trigger: '.scene-metalook', start: 'top 75%', end: 'top 10%', scrub: true } });
  gsap.from('.sema-image-fragments>span', { x: (i: number) => (i % 4 - 1.5) * 22, y: (i: number) => i % 2 ? -45 : 45, opacity: .2, scale: .75, stagger: .04, scrollTrigger: { trigger: '.scene-sema', start: 'top 70%', end: 'top 10%', scrub: true } });
  gsap.fromTo('.brand-focus-frame', { scale: 1.25, opacity: 0 }, { scale: 1, opacity: .65, scrollTrigger: { trigger: '.scene-brand', start: 'top 75%', end: 'top 10%', scrub: true } });
  gsap.fromTo('.brand-scan-beam', { y: 0, opacity: .5 }, { y: () => root.querySelector<HTMLElement>('.brand-disc')!.offsetHeight * .72, opacity: 0, scrollTrigger: { trigger: '.scene-brand', start: 'top 50%', end: 'bottom 80%', scrub: true } });
  gsap.fromTo('.cosmic-gates>span', { scale: .45, rotation: -12, opacity: .4 }, { scale: 2.5, rotation: 8, opacity: 0, stagger: .12, scrollTrigger: { trigger: '.scene-cosmic', start: 'top 75%', end: 'bottom 75%', scrub: true } });
  gsap.from('.closing-letter', { y: 55, rotation: 12, stagger: .06, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.closing-sequence', start: 'top 75%' } });
  gsap.from('.closing-poster-content', { y: 35, opacity: 0, duration: .8, scrollTrigger: { trigger: '.closing-sequence', start: 'top 60%' } });
  gsap.from('.contact-intro,.contact-method', { y: 30, opacity: 0, stagger: .1, duration: .7, scrollTrigger: { trigger: '.contact-section', start: 'top 85%' } });
}
