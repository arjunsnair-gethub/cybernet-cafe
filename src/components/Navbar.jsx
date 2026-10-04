import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { Menu, X, MapPin, Phone, Navigation } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section for nav highlight
      const sections = ['hero', 'services', 'why-us', 'about', 'gallery', 'reviews', 'location', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5' 
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
    }`}>
      {/* Top micro-bar for quick contact on desktop */}
      <div className="hidden lg:block border-b border-slate-100/80 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-slate-600">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 font-medium text-cyber-purple-900">
              <MapPin className="w-3.5 h-3.5 text-cyber-gold-600" />
              {BUSINESS_CONFIG.address.full}
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="text-slate-600">
              {BUSINESS_CONFIG.hours.fullHours}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${BUSINESS_CONFIG.contact.mobilePrimary}`}
              className="flex items-center gap-1.5 font-semibold text-cyber-purple-900 hover:text-cyber-purple-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyber-purple-600" />
              <span>Ph: {BUSINESS_CONFIG.contact.formattedMobile}</span>
            </a>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">Landline: {BUSINESS_CONFIG.contact.landline}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Logo & Brand Title (Preserving original aspect ratio) */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyber-purple-600 rounded-lg pr-2"
            onClick={closeMenu}
          >
            <div className="relative flex-shrink-0">
              <img 
                src={BUSINESS_CONFIG.images.logo} 
                alt={`${BUSINESS_CONFIG.name} Official Logo`}
                className="h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-full shadow-sm ring-2 ring-cyber-purple-100 group-hover:scale-105 transition-transform duration-300"
                width="48"
                height="48"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-cyber-purple-900 group-hover:text-cyber-purple-700 transition-colors">
                  Cybernet
                </span>
                <span className="font-display font-semibold text-xs uppercase tracking-widest text-cyber-gold-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60">
                  Computers
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 hidden sm:inline-block">
                {BUSINESS_CONFIG.tagline} . Adoor
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {BUSINESS_CONFIG.navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-cyber-purple-900 bg-purple-50 font-bold'
                      : 'text-slate-600 hover:text-cyber-purple-900 hover:bg-slate-100/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Get Directions Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_CONFIG.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyber-purple-900 to-cyber-purple-800 hover:from-cyber-purple-800 hover:to-cyber-purple-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 border border-cyber-purple-700 focus:outline-none focus:ring-2 focus:ring-cyber-gold-400"
              id="nav-get-directions-btn"
            >
              <Navigation className="w-4 h-4 text-cyber-gold-400 fill-cyber-gold-400/20" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_CONFIG.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center justify-center p-2 rounded-lg bg-purple-50 text-cyber-purple-900 border border-purple-200"
              aria-label="Get Directions"
            >
              <Navigation className="w-4 h-4 text-cyber-purple-900" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-700 hover:text-cyber-purple-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyber-purple-600 min-h-[44px] min-w-[44px]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          id="mobile-menu"
        >
          <div className="px-4 pt-3 pb-6 space-y-1">
            {/* Mobile Header card inside drawer */}
            <div className="p-3 mb-3 bg-purple-50/70 rounded-xl border border-purple-100 flex items-center gap-3">
              <img 
                src={BUSINESS_CONFIG.images.logo} 
                alt={`${BUSINESS_CONFIG.name} Logo`} 
                className="w-10 h-10 object-contain rounded-full"
              />
              <div>
                <p className="font-bold text-sm text-cyber-purple-900">{BUSINESS_CONFIG.name}</p>
                <p className="text-xs text-slate-500">{BUSINESS_CONFIG.address.line1}, {BUSINESS_CONFIG.address.city}</p>
              </div>
            </div>

            {BUSINESS_CONFIG.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-semibold text-slate-700 hover:text-cyber-purple-900 hover:bg-purple-50/60 min-h-[44px]"
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-400 font-normal">?</span>
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100 space-y-2.5">
              <a
                href={BUSINESS_CONFIG.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 bg-cyber-purple-900 hover:bg-cyber-purple-800 text-white font-semibold py-3 px-4 rounded-xl shadow-sm min-h-[44px]"
              >
                <Navigation className="w-4 h-4 text-cyber-gold-400" />
                <span>Get Directions on Maps</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.contact.mobilePrimary}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-cyber-purple-900" />
                <span>Call {BUSINESS_CONFIG.contact.mobilePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
