import { Phone, MapPin, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#membership', label: 'Membership' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">FA</span>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">Fitness Arena</h3>
                <p className="text-xs text-muted-foreground">Gym G6</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Where serious people train seriously. Transform your body, elevate your life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>AK Center, Aabpara G 6/1, G-6, Islamabad, 44000, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:03001033839"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  0300 103 3839
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Rating */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? 'text-primary' : 'text-primary/50'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9 (454 reviews)</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Premium fitness facility in the heart of G-6, Islamabad
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Fitness Arena Gym G6. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
