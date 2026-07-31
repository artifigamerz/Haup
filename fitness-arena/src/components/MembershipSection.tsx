import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    price: 'Contact Us',
    description: 'Essential access for dedicated individuals',
    features: [
      'Full gym access',
      'All equipment zones',
      'Locker facilities',
      'Standard hours access',
    ],
    highlighted: false,
  },
  {
    name: 'Standard',
    badge: 'Most Popular',
    price: 'Contact Us',
    description: 'Complete training package for serious athletes',
    features: [
      'Everything in Basic',
      'Extended hours access',
      'Group training sessions',
      'Fitness assessment',
      'Nutrition guidelines',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 'Contact Us',
    description: 'Elite membership for maximum results',
    features: [
      'Everything in Standard',
      '24/7 gym access',
      'Personal training sessions',
      'Custom workout plans',
      'Priority equipment access',
      'Guest passes',
    ],
    highlighted: false,
  },
];

export function MembershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="membership"
      ref={ref}
      className="relative py-24 md:py-32 bg-muted/30"
      data-testid="section-membership"
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
            Membership
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Choose Your Path to Greatness
          </h2>
          <p className="text-lg text-foreground/70">
            Flexible membership options designed to fit your training goals and schedule.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative bg-card border rounded-lg overflow-hidden ${
                plan.highlighted
                  ? 'border-primary shadow-xl scale-105 md:scale-110'
                  : 'border-border'
              }`}
              data-testid={`card-membership-${plan.name.toLowerCase()}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl">
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">PKR</span>
                    <span className="text-lg text-muted-foreground">{plan.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Contact us for current pricing
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary/90'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  data-testid={`button-select-${plan.name.toLowerCase()}`}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          All memberships include access to our premium equipment and facilities. Custom packages available.
        </motion.p>
      </div>
    </section>
  );
}
