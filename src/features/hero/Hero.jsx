import {
  ArrowDown,
  DownloadSimple,
  GithubLogo,
  MapPin,
} from "@phosphor-icons/react";
import { IronManBackgroundSequence } from "@/features/hero/IronManBackgroundSequence";

export function Hero() {
  return (
    <section id="top" className="hero-new">
      <IronManBackgroundSequence />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-grid" />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-status">
            <span className="hero-status-dot" />
            Available for internships &amp; opportunities
          </div>

          <h1>
            I build digital
            <br />
            products that feel
            <br />
            <span>clear &amp; useful.</span>
          </h1>

          <p className="hero-intro">
            I&apos;m <strong>Nhim Dara</strong>, an IT Engineering student and
            full-stack developer turning ideas into polished web and mobile
            experiences.
          </p>

          <div className="hero-proof" aria-label="Portfolio highlights">
            <div><strong>07+</strong><span>Products built</span></div>
            <div><strong>15+</strong><span>Technologies</span></div>
            <div><strong>02</strong><span>Years learning</span></div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary">
              Explore my work <ArrowDown size={16} weight="bold" />
            </a>
            <a href="/portfolio/CV-Nhim-Dara.pdf" download className="hero-secondary">
              <DownloadSimple size={16} weight="bold" /> Download CV
            </a>
          </div>

          <div className="hero-meta">
            <span><MapPin size={15} /> Phnom Penh, Cambodia</span>
            <a href="https://github.com/nhimdara" target="_blank" rel="noreferrer">
              <GithubLogo size={16} /> github.com/nhimdara
            </a>
          </div>
        </div>

        <div className="hero-visual hero-hud" aria-hidden="true">
          <div className="hero-portrait">
            <img
              src="/portfolio/profile.jpg"
              alt=""
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="hero-portrait-shade" />
            <div className="hero-portrait-label">
              <span>Profile / 01</span>
              <strong>Nhim Dara</strong>
            </div>
          </div>
          <div className="hud-reticle">
            <span />
            <span />
            <div>MK.85</div>
          </div>
          <div className="hud-readout hud-readout-one">ARC // 100%</div>
          <div className="hud-readout hud-readout-two">BUILD // 2026</div>
          <div className="hud-scanline" />
          <div className="hud-corner hud-corner-top" />
          <div className="hud-corner hud-corner-bottom" />
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div>
          <span>REACT.JS</span><i>✦</i><span>VUE.JS</span><i>✦</i>
          <span>LARAVEL</span><i>✦</i><span>NODE.JS</span><i>✦</i>
          <span>PRODUCT THINKING</span><i>✦</i><span>REACT.JS</span><i>✦</i>
          <span>VUE.JS</span><i>✦</i><span>LARAVEL</span><i>✦</i>
        </div>
      </div>
    </section>
  );
}
