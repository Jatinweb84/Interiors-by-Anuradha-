import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let globalLenis: Lenis | null = null;

export function initSmoothScroll(): { lenis: Lenis; destroy: () => void } {
  // If already initialized, destroy previous instance
  if (globalLenis) {
    globalLenis.destroy();
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  globalLenis = lenis;

  // Synchronize Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  let rafId: number;
  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  gsap.ticker.lagSmoothing(0);

  // Initialize data-speed differential velocity parallax engine
  setupDataSpeed();

  return {
    lenis,
    destroy: () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      globalLenis = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    },
  };
}

export function setupDataSpeed() {
  if (typeof window === 'undefined') return;
  // Apply on screens >= 768px (desktop and tablet)
  if (window.innerWidth < 768) return;

  // Clear previous data-speed ScrollTriggers
  ScrollTrigger.getAll()
    .filter((st) => (st.vars as { id?: string }).id?.startsWith('data-speed-'))
    .forEach((st) => st.kill());

  const speedElements = document.querySelectorAll<HTMLElement>('[data-speed]');
  speedElements.forEach((el, idx) => {
    const speedAttr = el.getAttribute('data-speed');
    if (!speedAttr) return;

    const speed = parseFloat(speedAttr);
    if (isNaN(speed) || speed === 1) return;

    // Noticeable travel distance:
    // For speed = 0.8: travel is +56px (drifts slower)
    // For speed = 1.25: travel is -70px (floats faster)
    const distance = (1 - speed) * 260;

    gsap.fromTo(
      el,
      { y: -distance },
      {
        y: distance,
        ease: 'none',
        scrollTrigger: {
          id: `data-speed-${idx}`,
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1, // responsive smooth scrub
          invalidateOnRefresh: true,
        },
      }
    );
  });
}

export function refreshScrollTrigger() {
  setTimeout(() => {
    setupDataSpeed();
    ScrollTrigger.refresh();
  }, 100);
}
