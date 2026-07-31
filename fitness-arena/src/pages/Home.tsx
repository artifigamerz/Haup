import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { MembershipSection } from '@/components/MembershipSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Update page title and meta description
    document.title = 'Fitness Arena Gym G6 | Premium Gym in G-6, Islamabad';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Transform your body at Fitness Arena Gym G6 - Islamabad\'s premier fitness facility. 4.9★ rated with state-of-the-art equipment, expert training, and a results-driven community. Located in G-6, Aabpara.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform your body at Fitness Arena Gym G6 - Islamabad\'s premier fitness facility. 4.9★ rated with state-of-the-art equipment, expert training, and a results-driven community. Located in G-6, Aabpara.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FacilitiesSection />
        <WhyChooseSection />
        <MembershipSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
