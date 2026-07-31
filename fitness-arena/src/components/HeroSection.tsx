import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Phone } from 'lucide-react';
import heroImage from '@assets/generated_images/hero-gym.jpg';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fitness Arena Gym Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/50"></div>
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Trust Badge */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
                <span className="ml-2 text-sm font-semibold text-foreground">4.9</span>
              </div>
              <span className="text-sm text-muted-foreground">
                Rated by 454 members
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
              <span className="block text-foreground">Transform.</span>
              <span className="block text-foreground">Dominate.</span>
              <span className="block text-gradient">Conquer.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Where champions are forged. Elite training, premium equipment, and a community
              that pushes limits. This is Fitness Arena Gym G6.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6"
                onClick={() => scrollToSection('contact')}
                data-testid="button-join-hero"
              >
                Join Now
              </Button>
              <a href="tel:03001033839" data-testid="button-call-hero">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 text-base px-8 py-6 w-full sm:w-auto border-foreground/20 hover:border-primary hover:text-primary"
                >
                  <Phone className="w-5 h-5" />
                  Call 0300 103 3839
                </Button>
              </a>
            </div>

            {/* Location Badge */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                AK Center, Aabpara G-6/1, Islamabad
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
