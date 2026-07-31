import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Dumbbell, Heart, Zap, User, TrendingUp, MapPin } from 'lucide-react';

const facilities = [
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    description: 'State-of-the-art machines and free weights from premium brands.',
  },
  {
    icon: TrendingUp,
    title: 'Strength Training',
    description: 'Dedicated powerlifting and strength zones with Olympic platforms.',
  },
  {
    icon: Heart,
    title: 'Cardio Area',
    description: 'Premium treadmills, rowers, and bikes with entertainment systems.',
  },
  {
    icon: User,
    title: 'Personal Training',
    description: 'Expert coaches to design custom programs and track your progress.',
  },
  {
    icon: Zap,
    title: 'Functional Training',
    description: 'Battle ropes, sleds, and plyometric equipment for athletic performance.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Conveniently located in G-6 Islamabad with accessible parking.',
  },
];

export function FacilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="facilities"
      ref={ref}
      className="relative py-24 md:py-32 bg-muted/30"
      data-testid="section-facilities"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-wider border border-primary/20 bg-primary/10 px-4 py-2 rounded-full inline-block mb-6">
            Facilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Everything You Need to Win
          </h2>
          <p className="text-lg text-foreground/70">
            World-class equipment and dedicated training zones designed for serious results.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                data-testid={`card-facility-${index}`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-lg"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
