import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Hero } from "@/features/hero/Hero";
import { CinematicReveal } from "@/features/cinematic/CinematicReveal";
import { PortfolioContent } from "@/features/portfolio/PortfolioContent";
import { BackgroundFX } from "@/shared/components/BackgroundFX";
import { SmoothScrollProvider } from "@/shared/providers/SmoothScrollProvider";

export default function App() {
  return (
    <SmoothScrollProvider>
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <CinematicReveal />
        <PortfolioContent />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
