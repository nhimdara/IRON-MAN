# Nhim Dara Portfolio

An interactive Iron Man-inspired portfolio built with React, JavaScript, Vite,
Framer Motion, Lenis, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Vite serves the site at `http://localhost:5173` by default.

## Project structure

```text
src/
├── app/                 # Root application composition
├── features/            # Self-contained page features
│   ├── cinematic/       # Cinematic scroll sequence and configuration
│   ├── hero/            # Hero section, image sequence, and configuration
│   ├── portfolio/       # About, work, skills, journey, and credentials
│   └── systems/         # Systems status section
├── layout/              # Site-wide navigation and footer
├── shared/
│   ├── components/      # Reusable presentation components
│   ├── lib/             # Framework-independent helpers
│   └── providers/       # React context and behavior providers
├── main.jsx             # Browser entry point
└── styles.css           # Global styles and Tailwind entry point
```

Keep feature-specific code inside its feature folder. Move a component or
helper into `shared/` only when more than one feature uses it.

## Commands

```bash
npm run dev      # Start the development server
npm run build    # Type-check and create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build
```

Static files such as portfolio images, certificates, downloadable documents,
fonts, and animation frames live in `public/`.
