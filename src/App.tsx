import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { PortfolioContent } from "@/components/sections/PortfolioContent";
import { Footer } from "@/components/sections/Footer";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

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
