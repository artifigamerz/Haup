import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import strengthImage from '@assets/generated_images/strength-detail.jpg';

const reasons = [
  {
    title: 'Professional Environment',
    description: 'No distractions. No excuses. Just pure focus on your goals.',
  },
  {
    title: 'Premium Equipment',
    description: 'Top-tier machines and weights maintained to the highest standards.',
  },
  {
    title: 'Motivating Atmosphere',
    description: 'Train alongside dedicated athletes who inspire you to push harder.',
  },
  {
    title: 'Prime G-6 Location',
    description: 'Easy access in central Islamabad with convenient parking.',
  },
  {
    title: 'Results-Focused Community',
    description: 'Members who track progress, celebrate wins, and support each other.',
  },
  {
    title: 'Proven Track Record',
    description: '4.9-star rating from 454 members who transformed their lives here.',
  },
];

export function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="why-choose"
      ref={ref}
      className="relative py-24 md:py-32"
      data-testid="section-why-choose"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 lg:order-1"
          >
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider border border-primary/20 bg-primary/10 px-4 py-2 rounded-full inline-block mb-6">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                The Fitness Arena Advantage
              </h2>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex gap-4 group"
                  data-testid={`reason-${index}`}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:order-2"
          >
            <div className="relative aspect-[4/5] lg:aspect-square rounded-lg overflow-hidden">
              <img
                src={strengthImage}
                alt="Strength Training at Fitness Arena"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-6">
                  <p className="text-sm text-muted-foreground mb-2">Trusted by</p>
                  <p className="text-3xl font-bold">454+ Members</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'text-primary' : 'text-primary/50'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm font-semibold">4.9 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
