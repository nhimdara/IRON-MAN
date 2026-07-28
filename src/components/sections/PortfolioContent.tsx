import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const projects = [
  [
    "Elearning",
    "Full-stack e-learning platform for RUPP students, teachers, and administrators.",
    "/portfolio/projects/ProjectElearning.png",
    "React · Express · MySQL",
    "https://frontend-project-practicum-e-learni.vercel.app/",
    "https://github.com/nhimdara/Frontend-Project-Practicum-ELearning",
  ],
  [
    "StayEasy",
    "Hotel search, wishlists, reservations, secure payments, and management tools.",
    "/portfolio/projects/StayEasyHotel.png",
    "Vue 3 · Laravel · Sanctum",
    "https://frontend-hotel-booking-ten.vercel.app/",
    "https://github.com/nhimdara/Frontend_Hotel_Booking",
  ],
  [
    "Telegram Shop",
    "Verified Telegram auth, stock-aware carts, orders, and KHQR payments.",
    "/portfolio/projects/TelegramShop.png",
    "React · Laravel · PostgreSQL",
    "https://t.me/my_shop67_bot/shop_nw",
    "https://github.com/nhimdara/bot-telegram-test-website",
  ],
  [
    "Culinary Admin",
    "Restaurant dashboards for sales, orders, inventory, tables, and payments.",
    "/portfolio/projects/CulinaryAdminPOS.png",
    "Admin portal · REST API · POS",
    "https://mpos-seven.vercel.app/",
    "https://github.com/NalenSrin123/G2_SUN_11_MPOS",
  ],
  [
    "CineVault",
    "Movie search, genre filters, watchlists, authentication, and themes.",
    "/portfolio/projects/CineVault.webp",
    "React 19 · Vite · CSS",
    "",
    "https://github.com/nhimdara/Movie-Website-WCT",
  ],
  [
    "WOOD'S Cambodia",
    "Android product catalogue with branded discovery and direct contact.",
    "/portfolio/projects/WoodsAndroid.png",
    "React · Capacitor · Android",
    "/portfolio/woods-cambodia.apk",
    "https://github.com/nhimdara/Wood-s",
  ],
  [
    "Portfolio Website",
    "This personal portfolio site, built to showcase projects, skills, and experience with smooth scroll animations and a responsive layout.",
    "/portfolio/projects/Portfolio.png",
    "React · Tailwind CSS · Vite",
    "https://my-portfolio69.vercel.app/",
    "https://github.com/nhimdara/my_portfolio69",
  ],
];

const skills = [
  "React.js",
  "Vue.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Laravel",
  "PHP",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Git",
  "Figma",
  "Vite",
  "REST APIs",
];

const journey = [
  [
    "2024 — Present",
    "Bachelor of IT Engineering",
    "Royal University of Phnom Penh",
    "Software engineering and modern web technologies.",
  ],
  [
    "Jan — Jun 2026",
    "Backend Development",
    "ETEC Center",
    "PHP, OOP, MySQL, Laravel, and backend project development.",
  ],
  [
    "2025 — Jan 2026",
    "Frontend Development",
    "ETEC Center",
    "JavaScript, React, Bootstrap, and practical frontend projects.",
  ],
  [
    "2025",
    "Frontend Developer Trainee",
    "ETEC Center",
    "Responsive applications built with React and Tailwind CSS.",
  ],
  [
    "2024 — 2025",
    "Data Entry Volunteer",
    "MoEYS EdTech",
    "Accurate management of high-volume and confidential records.",
  ],
];

const certificates = [
  [
    "Frontend Development",
    "Professional certificate",
    "ETEC Center",
    "Jan 2026",
    "/portfolio/certificates/frontend-development.jpg",
  ],
  [
    "Backend Development",
    "Professional certificate",
    "ETEC Center",
    "Jun 2026",
    "/portfolio/certificates/backend-development.jpg",
  ],
  [
    "Frontend Internship",
    "Internship completion",
    "KRU IT & ETEC",
    "Jul 2026",
    "/portfolio/certificates/frontend-internship-completion.jpg",
  ],
  [
    "MoEYS Recognition",
    "Recognition award",
    "Royal University of Phnom Penh",
    "2025",
    "/portfolio/certificates/moeys-edtech-recognition.jpg",
  ],
  [
    "Academic Transcript",
    "Academic record",
    "Royal University of Phnom Penh",
    "2024 — 2025",
    "/portfolio/certificates/rupp-transcript.jpg",
  ],
];

export function PortfolioContent() {
  return (
    <>
      <section id="about" className="section-shell">
        <div className="section-grid">
          <AnimatedSection className="about-statement">
            <p className="about-quote">
              “Great products happen when clean code, thoughtful design, and
              real user needs meet.”
            </p>
            <div className="about-numbers">
              <div>
                <strong>7+</strong>
                <span>Projects shipped</span>
              </div>
              <div>
                <strong>15+</strong>
                <span>Technologies</span>
              </div>
              <div>
                <strong>2024</strong>
                <span>Journey started</span>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="flex flex-col justify-center gap-7">
            <AnimatedItem>
              <EyebrowBadge>PROFILE // ABOUT ME</EyebrowBadge>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title">
                Curious by nature.
                <br />
                <span className="text-accent">Driven by building.</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="section-copy">
                I&apos;m Nhim Dara, an IT Engineering student and full-stack
                developer based in Phnom Penh. I care about the full
                product—from a clear interface and responsive frontend to
                dependable APIs and well-structured data.
              </p>
            </AnimatedItem>
            <AnimatedItem className="flex flex-wrap gap-3">
              <a
                href="/portfolio/CV-Nhim-Dara.pdf"
                download
                className="primary-link"
              >
                <DownloadSimple size={16} />
                Download CV
              </a>
              <a
                href="mailto:daracombodia54@gmail.com"
                className="secondary-link"
              >
                Let&apos;s talk <ArrowUpRight size={15} />
              </a>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <AnimatedSection className="mx-auto max-w-[1400px]">
          <AnimatedItem>
            <EyebrowBadge>DEPLOYMENTS // SELECTED WORK</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem className="section-heading-row mt-7">
            <h2 className="section-title max-w-[13ch]">
              Products built to{" "}
              <span className="text-accent">solve real problems.</span>
            </h2>
            <div>
              <span className="section-count">01 / WORK</span>
              <p className="section-copy max-w-[38ch]">
                Full-stack platforms, focused tools, and mobile experiences from
                recent work.
              </p>
            </div>
          </AnimatedItem>
          <div className="project-grid mt-12">
            {projects.map(
              ([title, description, image, stack, live, source], i) => (
                <AnimatedItem
                  key={title}
                  className={`project-slot project-slot-${i + 1}`}
                >
                  <article className="project-card group">
                    <div className="project-image relative aspect-[16/10] overflow-hidden bg-zinc-900">
                      <img
                        src={image}
                        alt={`${title} preview`}
                        loading={i === 0 ? "eager" : "lazy"}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="project-image-overlay" />
                      <span className="project-index">0{i + 1} / 2026</span>
                      {i === 0 && (
                        <span className="project-featured">
                          Featured case study
                        </span>
                      )}
                    </div>
                    <div className="project-content">
                      <p className="font-mono text-[9px] uppercase tracking-[.22em] text-accent">
                        {stack}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                        {description}
                      </p>
                      <div className="project-actions">
                        {live && (
                          <a
                            href={live}
                            target="_blank"
                            className="project-link"
                          >
                            View project <ArrowUpRight size={12} />
                          </a>
                        )}
                        <a
                          href={source}
                          target="_blank"
                          className="project-link"
                        >
                          Source code <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>
                  </article>
                </AnimatedItem>
              ),
            )}
          </div>
        </AnimatedSection>
      </section>

      <section id="skills" className="section-shell">
        <div className="section-grid">
          <AnimatedSection className="flex flex-col gap-7">
            <AnimatedItem>
              <EyebrowBadge>CAPABILITIES // TECH STACK</EyebrowBadge>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="section-title">
                From interface to{" "}
                <span className="text-accent">infrastructure.</span>
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="section-copy">
                A practical toolkit for designing, building, and shipping
                complete digital products. I choose tools for the problem, not
                the trend.
              </p>
            </AnimatedItem>
          </AnimatedSection>
          <AnimatedSection className="grid grid-cols-2 border-l border-t border-white/8 sm:grid-cols-3">
            {skills.map((skill, i) => (
              <AnimatedItem key={skill}>
                <div className="skill-cell">
                  <span className="font-mono text-[9px] text-zinc-600">
                    SYS.{String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{skill}</span>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section id="journey" className="section-shell">
        <AnimatedSection className="mx-auto max-w-[1400px]">
          <AnimatedItem>
            <EyebrowBadge>LOGBOOK // JOURNEY</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="section-title mt-7">
              Learning through <span className="text-accent">building.</span>
            </h2>
          </AnimatedItem>
          <div className="mt-12 border-t border-white/8">
            {journey.map(([date, title, place, detail]) => (
              <AnimatedItem key={date + title}>
                <article className="journey-row">
                  <span className="date-label">{date}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{place}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {detail}
                  </p>
                </article>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section id="certificates" className="section-shell">
        <AnimatedSection className="mx-auto max-w-[1400px]">
          <AnimatedItem className="credential-heading">
            <div>
              <EyebrowBadge>VERIFIED // CREDENTIALS</EyebrowBadge>
              <h2 className="section-title mt-7">
                Certificates &amp;{" "}
                <span className="text-accent">recognition.</span>
              </h2>
            </div>
            <p>
              Selected training, academic, and professional milestones.
              <br />
              Open any document to view it at full size.
            </p>
          </AnimatedItem>
          <div className="credential-grid">
            {certificates.map(([title, type, issuer, date, image], index) => (
              <AnimatedItem
                key={title}
                className={`credential-slot credential-slot-${index + 1}`}
              >
                <a
                  href={image}
                  target="_blank"
                  className="credential-card group"
                >
                  <div className="credential-topline">
                    <span>DOC.{String(index + 1).padStart(2, "0")}</span>
                    <span className="credential-verified">
                      <i /> Verified
                    </span>
                  </div>
                  <div className="credential-document">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                    <div className="credential-open">
                      <ArrowUpRight size={16} weight="bold" />
                    </div>
                  </div>
                  <div className="credential-info">
                    <div>
                      <p>{type}</p>
                      <h3>{title}</h3>
                    </div>
                    <div className="credential-meta">
                      <span>{issuer}</span>
                      <span>{date}</span>
                    </div>
                  </div>
                </a>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <p className="contact-kicker">
            Have a project, internship, or opportunity?
          </p>
          <h2>
            Let&apos;s make something
            <br />
            <span>worth using.</span>
          </h2>
          <div className="contact-actions">
            <a href="mailto:daracombodia54@gmail.com">
              Start a conversation <ArrowUpRight size={18} weight="bold" />
            </a>
            <span>Phnom Penh · Cambodia</span>
          </div>
        </div>
      </section>
    </>
  );
}
