import { useCallback, useEffect, useRef, useState } from "react";
import { loadImageSequence } from "@/lib/loadImageSequence";

const FRAME_COUNT = 169;
const framePath = (index: number) =>
  `/frames2/frame_${String(index + 1).padStart(4, "0")}.jpg`;

const phases = [
  {
    at: 0.08,
    number: "01",
    date: "2024 — 2025",
    title: "Data Entry Volunteer",
    company: "MoEYS EdTech",
    copy: "Managed high-volume confidential records using Excel and databases, maintaining accuracy and an efficient workflow.",
  },
  {
    at: 0.38,
    number: "02",
    date: "2025",
    title: "Frontend Developer Trainee",
    company: "ETEC Center",
    copy: "Developed responsive web applications using React.js, Tailwind CSS, and modern JavaScript.",
  },
  {
    at: 0.7,
    number: "03",
    date: "2026",
    title: "Frontend Development Intern",
    company: "KRU IT Solution & ETEC Center",
    copy: "Completed a hands-on frontend internship focused on practical development, teamwork, and professional growth.",
  },
];

export function CinematicReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef(-1);
  const tickingRef = useRef(false);
  const [activePhase, setActivePhase] = useState(-1);
  const [loadProgress, setLoadProgress] = useState(0);
  const [shouldLoad, setShouldLoad] = useState(false);

  const draw = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const image = imagesRef.current[index];
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
    context.drawImage(image, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
  }, []);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * ratio);
    canvas.height = Math.round(window.innerHeight * ratio);
    draw(Math.max(0, lastFrameRef.current));
  }, [draw]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100% 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const sequence = loadImageSequence({
      count: FRAME_COUNT,
      path: framePath,
      onProgress: setLoadProgress,
      onFirstFrame: () => {
        lastFrameRef.current = 0;
        draw(0);
      },
    });
    imagesRef.current = sequence.images;

    return () => {
      sequence.cancel();
      imagesRef.current = [];
    };
  }, [draw, shouldLoad]);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  useEffect(() => {
    const update = () => {
      tickingRef.current = false;
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const range = section.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, range)));
      const index = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
      if (index !== lastFrameRef.current) {
        lastFrameRef.current = index;
        draw(index);
      }

      let phase = -1;
      phases.forEach((item, itemIndex) => {
        if (progress >= item.at && progress < item.at + 0.2) phase = itemIndex;
      });
      setActivePhase((current) => current === phase ? current : phase);
    };
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [draw]);

  return (
    <section ref={sectionRef} className="process-sequence">
      <div className="process-stage">
        <img
          src="/frames2/frame_0001.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="process-mask" />

        <div className="process-topline">
          <span>02 / EXPERIENCE ARCHIVE</span>
          <span>SCROLL TO ADVANCE</span>
        </div>

        <div className="process-intro">
          <p>Experience in practice</p>
          <h2>Learning by doing.<br /><span>Growing by building.</span></h2>
        </div>

        <div className="process-phases">
          {phases.map((phase, index) => (
            <article key={phase.number} className={activePhase === index ? "is-active" : ""}>
              <span>{phase.number}</span>
              <div>
                <div className="process-role-meta"><span>{phase.date}</span><span>{phase.company}</span></div>
                <h3>{phase.title}</h3>
                <p>{phase.copy}</p>
              </div>
            </article>
          ))}
        </div>

        {shouldLoad && loadProgress < 1 && (
          <div className="process-loading">
            <span style={{ transform: `scaleX(${loadProgress})` }} />
          </div>
        )}
      </div>
    </section>
  );
}
