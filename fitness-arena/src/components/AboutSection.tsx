import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '@assets/generated_images/about-gym.jpg';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="section-about"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded overflow-hidden">
              <img
                src={aboutImage}
                alt="Fitness Arena Training Floor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">4.9</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Google Rating</p>
                  <p className="text-xs text-muted-foreground">454 Reviews</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-sm font-bold text-primary uppercase tracking-wider border border-primary/20 bg-primary/10 px-4 py-2 rounded-full">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Built for Champions
            </h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                Fitness Arena Gym G6 isn't just a gym — it's a proving ground. Located in the
                heart of Islamabad's G-6 sector, we've built a premium training facility where
                serious athletes and dedicated individuals come to achieve extraordinary results.
              </p>

              <p>
                Our state-of-the-art equipment, expert-designed training zones, and results-driven
                environment create the perfect ecosystem for transformation. Whether you're
                building strength, burning fat, or pushing athletic performance to new heights,
                you'll find everything you need here.
              </p>

              <p>
                We don't believe in shortcuts. We believe in hard work, smart training, and a
                community that holds each other accountable. That's the Fitness Arena difference.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                'Premium Equipment',
                'Expert Guidance',
                'Results-Driven',
                'Elite Community',
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
