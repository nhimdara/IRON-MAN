import { useCallback, useEffect, useRef, useState } from "react";
import { loadImageSequence } from "@/lib/loadImageSequence";

const FRAME_COUNT = 169;
const framePath = (index: number) =>
  `/frames/frame_${String(index + 1).padStart(4, "0")}.jpg`;

export function IronManBackgroundSequence() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef(-1);
  const tickingRef = useRef(false);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const image = framesRef.current[index];
    if (!canvas || !image?.complete || !image.naturalWidth) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const imageRatio = image.naturalWidth / image.naturalHeight;
    const canvasRatio = canvas.width / canvas.height;
    let width = canvas.width;
    let height = width / imageRatio;

    if (canvasRatio < imageRatio) {
      height = canvas.height;
      width = height * imageRatio;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
      image,
      (canvas.width - width) / 2,
      (canvas.height - height) / 2,
      width,
      height,
    );
  }, []);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * ratio);
    canvas.height = Math.round(window.innerHeight * ratio);
    drawFrame(Math.max(0, lastFrameRef.current));
  }, [drawFrame]);

  useEffect(() => {
    const sequence = loadImageSequence({
      count: FRAME_COUNT,
      path: framePath,
      onProgress: setProgress,
      onFirstFrame: () => {
        lastFrameRef.current = 0;
        drawFrame(0);
        setReady(true);
      },
    });
    framesRef.current = sequence.images;

    return () => {
      sequence.cancel();
      framesRef.current = [];
    };
  }, [drawFrame]);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  useEffect(() => {
    const update = () => {
      tickingRef.current = false;
      const root = rootRef.current;
      if (!root) return;
      const hero = root.closest(".hero-new");
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const range = Math.max(window.innerHeight * 0.9, hero.clientHeight);
      const scrollProgress = Math.min(1, Math.max(0, -rect.top / range));
      const index = Math.min(
        FRAME_COUNT - 1,
        Math.floor(scrollProgress * FRAME_COUNT),
      );

      if (index !== lastFrameRef.current) {
        lastFrameRef.current = index;
        drawFrame(index);
      }
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [drawFrame]);

  return (
    <div ref={rootRef} className="hero-ironman">
      <img
        src="/frames/frame_0001.jpg"
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${ready ? "opacity-0" : "opacity-100"}`}
      />
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
      />
      <div className="hero-ironman-mask" />
      {progress < 1 && (
        <div className="sequence-loader">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      )}
    </div>
  );
}
