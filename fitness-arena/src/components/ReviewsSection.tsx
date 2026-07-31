import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Hassan',
    role: 'Athlete',
    rating: 5,
    text: 'Best gym in Islamabad. The equipment is top-notch and the atmosphere is incredibly motivating. Lost 15kg in 4 months here.',
    badge: 'Sample Review',
  },
  {
    name: 'Sara Khan',
    role: 'Fitness Enthusiast',
    rating: 5,
    text: 'Professional environment with zero distractions. The trainers know what they\'re doing and the community is supportive. Highly recommend!',
    badge: 'Sample Review',
  },
  {
    name: 'Bilal Siddiqui',
    role: 'Bodybuilder',
    rating: 5,
    text: 'Fitness Arena has everything I need for serious training. Premium equipment, great location in G-6, and members who actually care about results.',
    badge: 'Sample Review',
  },
  {
    name: 'Fatima Ali',
    role: 'Professional',
    rating: 5,
    text: 'Clean, well-maintained facility with excellent equipment. The staff is professional and the location is perfect for my daily routine.',
    badge: 'Sample Review',
  },
];

export function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative py-24 md:py-32"
      data-testid="section-reviews"
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
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            What Our Members Say
          </h2>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < 4 ? 'text-primary fill-primary' : 'text-primary/50 fill-primary/50'}`}
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-3xl font-bold">4.9</p>
              <p className="text-sm text-muted-foreground">Based on 454 reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
              data-testid={`card-review-${index}`}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                  {testimonial.badge}
                </span>
              </div>

              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            These are sample reviews. Our actual 4.9-star rating is based on 454 Google reviews.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
