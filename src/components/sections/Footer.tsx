import { ArrowUpRight } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer
      id="footer"
      className="site-footer"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 py-12 md:px-10 md:py-14">
        <div className="footer-title-row">
          <span>End of transmission</span>
          <strong>Nhim Dara <i>/</i> Portfolio</strong>
        </div>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,181,71,0.75)]"
              />
              ND<span className="text-accent">.</span>
            </div>
            <p className="max-w-[38ch] font-sans text-sm leading-relaxed text-zinc-400">
              Full-stack developer and IT Engineering student based in Phnom
              Penh, Cambodia. Let&apos;s build something useful together.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-3">
            {[
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Journey", "#journey"],
              ["GitHub", "https://github.com/nhimdara"],
              ["Email", "mailto:daracombodia54@gmail.com"],
            ].map(([name, note]) => (
              <a
                key={name}
                href={note}
                className="group flex flex-col gap-1"
              >
                <span className="font-sans text-[13px] font-medium text-foreground transition-colors group-hover:text-accent">
                  {name}
                  <ArrowUpRight
                    size={11}
                    weight="bold"
                    className="ml-1 inline-block align-baseline opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                  {note.startsWith("#") ? "Explore section" : "Open link"}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <span>&copy; 2026 Nhim Dara &nbsp;&middot;&nbsp; Portfolio online</span>
          <span>Designed and engineered in Phnom Penh</span>
        </div>
      </div>
    </footer>
  );
}
