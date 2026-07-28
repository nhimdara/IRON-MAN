import { useEffect, useRef } from "react";
import Lenis from "lenis";

type Props = { children: React.ReactNode };

export function SmoothScrollProvider({ children }: Props) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.1,
    });
    lenisRef.current = lenis;

    let rafId: number | null = null;
    const raf = (time: number) => {
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

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
