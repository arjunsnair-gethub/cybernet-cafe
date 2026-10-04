import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { MapPin, Clock, Star, Navigation, Phone, MessageCircle, ShieldCheck, CheckCircle } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = `https://wa.me/91${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappMessage
  )}`;

  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-slate-50">
      
      {/* Decorative ambient background blur spots */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-32 left-1/3 w-72 h-72 bg-sky-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headings, Info Chips, Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust badge with brand logo */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-purple-200 shadow-soft-sm">
              <img 
                src={BUSINESS_CONFIG.images.logo} 
                alt="Cybernet Logo" 
                className="w-5 h-5 object-contain rounded-full"
              />
              <span className="text-xs font-bold uppercase tracking-wider text-cyber-purple-900">
                Official Digital Service Centre
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-emerald-700">Open Today</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Your Trusted <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-900 via-cyber-purple-700 to-cyber-blue-700">
                Digital Service
              </span> &amp; <br />
              Computer Centre
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Fast, Reliable &amp; Convenient Digital Services at H.S. Junction, Adoor.
              From high-clarity Xerox and colour printing to Kerala PSC, Passport Seva,
              and project documentation under one roof.
            </p>

            {/* Info Chips mandated by brief */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {/* Chip 1: Location */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-soft-sm text-xs sm:text-sm font-semibold text-slate-700">
                <MapPin className="w-4 h-4 text-cyber-purple-700 flex-shrink-0" />
                <span>?? H.S. Junction, Adoor</span>
              </div>

              {/* Chip 2: Working Days */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-soft-sm text-xs sm:text-sm font-semibold text-slate-700">
                <Clock className="w-4 h-4 text-cyber-gold-600 flex-shrink-0" />
                <span>?? Monday - Saturday</span>
              </div>

              {/* Chip 3: Customer-focused */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-soft-sm text-xs sm:text-sm font-semibold text-slate-700">
                <Star className="w-4 h-4 text-cyber-gold-500 fill-cyber-gold-400 flex-shrink-0" />
                <span>? Customer-focused service</span>
              </div>
            </div>

            {/* Action Buttons: Get Directions, Call Now, WhatsApp Us */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              
              {/* Button 1: Get Directions */}
              <a
                href={BUSINESS_CONFIG.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-cyber-purple-900 hover:bg-cyber-purple-800 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 border border-cyber-purple-800 min-h-[48px]"
                id="hero-directions-btn"
              >
                <Navigation className="w-4 h-4 text-cyber-gold-400 fill-cyber-gold-400/20" />
                <span>Get Directions</span>
              </a>

              {/* Button 2: Call Now */}
              <a
                href={`tel:${BUSINESS_CONFIG.contact.mobilePrimary}`}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-soft-sm hover:shadow-md border border-slate-300 transition-all duration-200 transform hover:-translate-y-0.5 min-h-[48px]"
                id="hero-call-btn"
              >
                <Phone className="w-4 h-4 text-cyber-purple-700" />
                <span>Call Now</span>
              </a>

              {/* Button 3: WhatsApp Us */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 min-h-[48px]"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick trust reassurance */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyber-purple-700" />
                Real Shop at H.S. Junction
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyber-gold-600" />
                Instant Assistance
              </span>
              <span className="flex items-center gap-1.5 hidden sm:flex">
                <CheckCircle className="w-4 h-4 text-cyber-blue-600" />
                Transparent &amp; Reliable
              </span>
            </div>

          </div>

          {/* Right Column: Visual Showcase of Real Shop Interior & Official Logo */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background gradient decorative card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyber-purple-600 via-cyber-gold-500 to-cyber-blue-500 rounded-3xl opacity-20 blur-lg"></div>

              {/* Main Container Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-soft-lg border border-slate-200/90">
                
                {/* Shop Photo Header Badge */}
                <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="font-semibold tracking-wide">Cybernet Shop Front</span>
                  </div>
                  <span className="text-slate-400">H.S. Junction, Adoor</span>
                </div>

                {/* Real Shop Photograph (No distortion, crisp preview) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 group">
                  <img 
                    src={BUSINESS_CONFIG.images.interior} 
                    alt="Cybernet Computers real interior workstation and counter in Adoor" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    width="608"
                    height="616"
                    loading="eager"
                  />
                  
                  {/* Subtle photo gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                  {/* Caption on the photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-white text-xs font-semibold drop-shadow">
                      Official Jana Seva Desk &amp; Workstations
                    </p>
                    <p className="text-slate-300 text-[11px] drop-shadow-sm">
                      Walk-in counter for registrations, typing, and printing
                    </p>
                  </div>
                </div>

                {/* Bottom Panel with Official Logo & Core Badges */}
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    
                    {/* Official Circular Logo with original aspect ratio */}
                    <div className="flex-shrink-0">
                      <img 
                        src={BUSINESS_CONFIG.images.logo} 
                        alt="Cybernet Official Logo" 
                        className="w-16 h-16 sm:w-18 sm:h-18 object-contain rounded-full ring-4 ring-purple-50 shadow-md"
                        width="72"
                        height="72"
                      />
                    </div>

                    {/* Logo Description & Contact snapshot */}
                    <div className="flex-1 min-w-0 text-left">
                      <h2 className="font-display font-bold text-slate-900 text-base sm:text-lg truncate">
                        Cybernet Computers
                      </h2>
                      <p className="text-xs font-medium text-cyber-purple-700">
                        H.S. Junction, Adoor, Pathanamthitta
                      </p>
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-700">?? 8589898957</span>
                        <span>.</span>
                        <span>04734 221204</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center text-cyber-purple-800">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 font-medium leading-none">Complete Digital Hub</p>
                  <p className="text-xs font-bold text-slate-800 leading-tight">Fast Service &amp; Guidance</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
