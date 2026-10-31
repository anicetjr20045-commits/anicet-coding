import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StudioPlayground } from '@/components/StudioPlayground';
import { BentoGrid } from '@/components/BentoGrid';
import { Methodology } from '@/components/Methodology';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050608]">
      <Navbar />
      <Hero />
      <StudioPlayground />
      <BentoGrid />
      <Methodology />
      <FaqSection />
      <Footer />
    </main>
  );
}
