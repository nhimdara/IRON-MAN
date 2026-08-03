import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { DisplayControls } from "@/shared/components/DisplayControls";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const progressRef = useRef(null);

  useEffect(() => {
    let frameId = null;
    const onScroll = () => {
      if (frameId !== null) return;
      frameId = requestAnimationFrame(() => {
        frameId = null;
        const isScrolled = window.scrollY > 40;
        setScrolled((current) => current === isScrolled ? current : isScrolled);
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${progress})`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const sections = ["about", "projects", "skills", "journey", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`site-navbar fixed inset-x-0 top-0 z-[100] transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#08090b]/85 shadow-[0_12px_40px_rgba(0,0,0,.28)] backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-white/[0.04] bg-black/15 backdrop-blur-sm"
      }`}
    >
      <div className="navbar-inner mx-auto max-w-[1400px] px-6 py-4 md:px-8 md:py-5">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,181,71,0.75)]"
          />
          ND<span className="text-accent">.</span>
        </a>

        <nav className="navbar-links hidden items-center md:flex" aria-label="Primary navigation">
          <a
            href="#about"
            className={activeSection === "about" ? "is-active" : ""}
          >
            About
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "is-active" : ""}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "is-active" : ""}
          >
            Skills
          </a>
          <a
            href="#journey"
            className={activeSection === "journey" ? "is-active" : ""}
          >
            Journey
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "is-active" : ""}
          >
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <DisplayControls />
        <a
          href="mailto:daracombodia54@gmail.com"
          className="talk-button group inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.1] active:translate-y-[1px]"
        >
          Let&apos;s talk
          <ArrowUpRight
            size={14}
            weight="bold"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
        </div>
      </div>
      <div className="nav-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
    </header>
  );
}
