import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { MapPin, Clock, CheckCircle2, ShieldCheck, Navigation } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Real Shop Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative accent border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-200 to-amber-200 rounded-2xl blur-sm -z-10 opacity-70"></div>
              
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-soft-lg border border-slate-200">
                <img 
                  src={BUSINESS_CONFIG.images.interior} 
                  alt="Cybernet Computers real shop counter and interior in Adoor" 
                  className="w-full h-auto object-cover max-h-[480px]"
                  width="608"
                  height="616"
                  loading="lazy"
                />
                
                {/* Photo caption overlay */}
                <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-slate-100 text-left">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyber-purple-700 flex-shrink-0" />
                    <p className="text-xs font-bold text-slate-800">
                      Inside Cybernet Computers . H.S. Junction, Adoor
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Equipped with workstations for online applications, Malayalam/English DTP and printing
                  </p>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-md border border-slate-200 hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Operating Hours</p>
                  <p className="text-xs font-bold text-slate-800">Mon-Sat 9AM-7:30PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Mandated About Us Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 border border-purple-200 text-cyber-purple-900 text-xs font-bold uppercase tracking-wider">
              Local Service Profile
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {BUSINESS_CONFIG.about.title}
            </h2>

            {/* Exactly mandated text from prompt */}
            <div className="relative pl-4 border-l-4 border-cyber-purple-800 my-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                "{BUSINESS_CONFIG.about.description}"
              </p>
            </div>

            {/* Key Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {BUSINESS_CONFIG.about.highlights.map((point, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyber-purple-700 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Location & Directions Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_CONFIG.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyber-purple-900 hover:bg-cyber-purple-800 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-colors min-h-[44px]"
              >
                <Navigation className="w-4 h-4 text-cyber-gold-400" />
                <span>Get Directions to Our Shop</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Sunday Holiday</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
