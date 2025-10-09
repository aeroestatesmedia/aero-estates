import { HeroSection } from '@/components/home/hero-section';
import { ServicesGrid } from '@/components/home/services-grid';
import { AboutSection } from '@/components/home/about-section';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { CTASection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <AboutSection />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
