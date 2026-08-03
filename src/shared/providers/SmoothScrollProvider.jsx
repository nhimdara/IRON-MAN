import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    let dispose = () => {};
    const setup = () => {
      dispose();
      if (document.documentElement.dataset.motion === "reduced") return;

      const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.1,
    });
      lenisRef.current = lenis;

    let rafId = null;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    const start = () => {
      if (rafId === null) rafId = requestAnimationFrame(raf);
    };
    const stop = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
    };
    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };

      start();
      document.addEventListener("visibilitychange", onVisibilityChange);
      dispose = () => {
        stop();
        document.removeEventListener("visibilitychange", onVisibilityChange);
        lenis.destroy();
        lenisRef.current = null;
      };
    };

    setup();
    window.addEventListener("portfolio-motion-change", setup);

    return () => {
      window.removeEventListener("portfolio-motion-change", setup);
      dispose();
    };
  }, []);

  return <>{children}</>;
}
