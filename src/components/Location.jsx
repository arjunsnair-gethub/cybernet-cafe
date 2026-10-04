import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { MapPin, Navigation, ExternalLink, Compass, Clock, Phone, Building } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-cyber-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Visit Our Centre</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find Us at H.S. Junction, Adoor
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Conveniently situated in Adoor for quick walk-in access, student projects, and official registrations.
          </p>
        </div>

        {/* Location Showcase Card */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-purple-50/40 rounded-3xl border border-slate-200 shadow-soft-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between text-left space-y-8">
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={BUSINESS_CONFIG.images.logo} 
                    alt="Cybernet Logo" 
                    className="w-12 h-12 object-contain rounded-full shadow-sm"
                  />
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900">
                      {BUSINESS_CONFIG.name}
                    </h3>
                    <p className="text-xs font-semibold text-cyber-purple-700">
                      {BUSINESS_CONFIG.tagline}
                    </p>
                  </div>
                </div>

                {/* Address Box */}
                <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 shadow-soft-sm space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyber-purple-800 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Shop Address</p>
                      <p className="text-base font-bold text-slate-800 mt-0.5">
                        {BUSINESS_CONFIG.address.full}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Landmark: Right at H.S. Junction, Adoor town
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours & Contact Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-soft-sm text-xs">
                    <div className="flex items-center gap-2 text-cyber-gold-600 font-bold mb-1">
                      <Clock className="w-4 h-4" />
                      <span>Opening Hours</span>
                    </div>
                    <p className="font-semibold text-slate-800">{BUSINESS_CONFIG.hours.days}</p>
                    <p className="text-slate-500">{BUSINESS_CONFIG.hours.timing}</p>
                    <p className="text-[11px] text-amber-700 font-semibold mt-0.5">Sunday Holiday</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-soft-sm text-xs">
                    <div className="flex items-center gap-2 text-cyber-purple-700 font-bold mb-1">
                      <Phone className="w-4 h-4" />
                      <span>Contact Numbers</span>
                    </div>
                    <p className="font-semibold text-slate-800">{BUSINESS_CONFIG.contact.mobilePrimary}</p>
                    <p className="text-slate-600">{BUSINESS_CONFIG.contact.mobileSecondary}</p>
                    <p className="text-slate-500 mt-0.5">Landline: {BUSINESS_CONFIG.contact.landline}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Get Directions & View on Google Maps (Strictly using exact link) */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_CONFIG.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-cyber-purple-900 hover:bg-cyber-purple-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 min-h-[48px]"
                  id="find-us-get-directions-btn"
                >
                  <Navigation className="w-4 h-4 text-cyber-gold-400" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-300 shadow-soft-sm hover:shadow-md transition-all duration-200 min-h-[48px]"
                  id="find-us-view-maps-btn"
                >
                  <ExternalLink className="w-4 h-4 text-cyber-purple-700" />
                  <span>View on Google Maps</span>
                </a>
              </div>

            </div>

            {/* Right Map Block / Visual Showcase */}
            <div className="lg:col-span-6 bg-slate-900 p-8 sm:p-10 flex flex-col justify-between text-white relative overflow-hidden">
              
              {/* Abstract Map Grid Graphic Background */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
              </div>

              {/* Top Card inside visual map block */}
              <div className="relative z-10 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm text-xs font-semibold text-purple-200 mb-4 border border-white/10">
                  <Building className="w-3.5 h-3.5" />
                  <span>Kerala . Pathanamthitta District</span>
                </div>
                <h4 className="font-display text-2xl font-bold">
                  Adoor High School (H.S.) Junction
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Located near major schools, colleges, and transit points. Walk in directly for all government forms, online fee payments, DTP, and fast Xerox services.
                </p>
              </div>

              {/* Visual Map Pin Graphic Element */}
              <div className="relative z-10 my-8 py-8 flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-cyber-purple-600/30 animate-ping absolute inset-0"></div>
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-cyber-purple-600 to-cyber-purple-800 border-4 border-cyber-gold-400 flex items-center justify-center shadow-2xl">
                    <img 
                      src={BUSINESS_CONFIG.images.logo} 
                      alt="Cybernet Pin" 
                      className="w-12 h-12 object-contain rounded-full"
                    />
                  </div>
                </div>
                <div className="mt-4 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold text-cyber-gold-300">
                  Cybernet Computers . H.S. Junction
                </div>
              </div>

              {/* Bottom Quick Directions Link */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Click to open Google Maps app or browser navigation
                </span>
                <a
                  href={BUSINESS_CONFIG.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-cyber-gold-400 hover:text-cyber-gold-300 flex items-center gap-1"
                >
                  <span>Open Maps</span>
                  <span>?</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
