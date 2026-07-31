import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const googleFormData = new FormData();
    googleFormData.append('entry.111000770', formData.name);
    googleFormData.append('entry.1033856794', formData.email);
    googleFormData.append('entry.1982960349', formData.phone);
    googleFormData.append('entry.684639551', formData.message);

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSfEqQtdhGDOmCQXvaAbYw1mE7e2RtTpjsTig4GvFuOcCqWXbA/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: googleFormData,
        }
      );

      setFormData({ name: '', email: '', phone: '', message: '' });
      toast({
        title: 'Message sent successfully!',
      });
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or call us directly.',
        variant: 'destructive',
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 bg-muted/30"
      data-testid="section-contact"
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
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Start Your Transformation Today
          </h2>
          <p className="text-lg text-foreground/70">
            Visit us, call us, or send a message. We're here to help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    AK Center, Aabpara G 6/1, G-6, Islamabad, 44000, Pakistan
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <a
                    href="tel:03001033839"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-contact-phone"
                  >
                    0300 103 3839
                  </a>
                </div>
              </div>

              <a href="tel:03001033839" className="block" data-testid="button-call-contact">
                <Button className="w-full bg-primary hover:bg-primary/90 gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border h-80">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=AK+Center,+Aabpara+G+6/1,+G-6,+Islamabad&key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fitness Arena Gym G6 Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="03XX XXXXXXX"
                  data-testid="input-phone"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  rows={5}
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                data-testid="button-send"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
