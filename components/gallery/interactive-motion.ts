import gsap from 'gsap';

/** Event-driven depth: no animation loop, custom cursor, or touch interception. */
export function installPointerDepth(root: HTMLElement) {
  const cleanups: Array<() => void> = [];
  root.querySelectorAll<HTMLElement>('[data-depth]').forEach(card => {
    const tiltX = gsap.quickTo(card, 'rotationX', { duration: .65, ease: 'power3.out' });
    const tiltY = gsap.quickTo(card, 'rotationY', { duration: .65, ease: 'power3.out' });
    const reset = () => { tiltX(0); tiltY(0); };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || document.hidden || root.querySelector('dialog[open]')) return;
      const bounds = card.getBoundingClientRect();
      const x = gsap.utils.clamp(-1, 1, (event.clientX - bounds.left) / bounds.width * 2 - 1);
      const y = gsap.utils.clamp(-1, 1, (event.clientY - bounds.top) / bounds.height * 2 - 1);
      tiltX(-y * 4);
      tiltY(x * 5);
    };
    card.addEventListener('pointermove', move);
    card.addEventListener('pointerleave', reset);
    card.addEventListener('pointerdown', reset);
    card.addEventListener('focus', reset);
    window.addEventListener('blur', reset);
    document.addEventListener('visibilitychange', reset);
    cleanups.push(() => {
      card.removeEventListener('pointermove', move);
      card.removeEventListener('pointerleave', reset);
      card.removeEventListener('pointerdown', reset);
      card.removeEventListener('focus', reset);
      window.removeEventListener('blur', reset);
      document.removeEventListener('visibilitychange', reset);
      tiltX.tween.kill();
      tiltY.tween.kill();
    });
  });
  return () => cleanups.forEach(cleanup => cleanup());
}
