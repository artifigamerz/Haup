import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#membership', label: 'Membership' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
            : 'bg-transparent'
        }`}
        data-testid="navbar"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center space-x-2 group"
              data-testid="link-logo"
            >
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">FA</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-lg font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                  Fitness Arena
                </h1>
                <p className="text-xs text-muted-foreground">Gym G6</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:03001033839" data-testid="button-call-nav">
                <Button variant="outline" size="sm" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} data-testid="button-join-nav">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Join Now
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-card border-l border-border lg:hidden shadow-2xl"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-6">
              <nav className="flex-1 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="space-y-3 pt-6 border-t border-border">
                <a href="tel:03001033839" className="block" data-testid="button-call-mobile">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="block" data-testid="button-join-mobile">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Join Now
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
