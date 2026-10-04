import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { Phone, Mail, Clock, MapPin, MessageCircle, Navigation, PhoneCall, Calendar } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = `https://wa.me/91${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappMessage
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-cyber-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Direct Reach</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Cybernet Computers
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Have questions about an online registration, DTP job, or bulk printing? Reach out to us directly or visit our shop.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Address */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-cyber-purple-800 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                Our Location
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {BUSINESS_CONFIG.address.full}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <span className="text-xs font-semibold text-cyber-purple-700">H.S. Junction, Adoor</span>
            </div>
          </div>

          {/* Card 2: Mobile Numbers */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-cyber-purple-800 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                Mobile Numbers
              </h3>
              <p className="text-sm font-bold text-slate-900">
                <a href={`tel:${BUSINESS_CONFIG.contact.mobilePrimary}`} className="hover:text-cyber-purple-700 transition-colors">
                  {BUSINESS_CONFIG.contact.mobilePrimary}
                </a>
              </p>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                <a href={`tel:${BUSINESS_CONFIG.contact.mobileSecondary}`} className="hover:text-cyber-purple-700 transition-colors">
                  {BUSINESS_CONFIG.contact.mobileSecondary}
                </a>
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-500">WhatsApp: {BUSINESS_CONFIG.contact.whatsappNumber}</span>
            </div>
          </div>

          {/* Card 3: Landline & Email */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-cyber-purple-800 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                Landline &amp; Email
              </h3>
              <p className="text-sm font-bold text-slate-900">
                Landline: {BUSINESS_CONFIG.contact.landline}
              </p>
              <p className="text-xs text-slate-600 mt-1 break-all">
                <a href={`mailto:${BUSINESS_CONFIG.contact.email}`} className="hover:text-cyber-purple-700 transition-colors">
                  {BUSINESS_CONFIG.contact.email}
                </a>
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-500">Official Shop Communications</span>
            </div>
          </div>

          {/* Card 4: Working Hours */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-cyber-purple-800 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                Working Hours
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                {BUSINESS_CONFIG.hours.days}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                {BUSINESS_CONFIG.hours.timing}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                <Calendar className="w-3 h-3" />
                Sunday: Holiday
              </span>
            </div>
          </div>

        </div>

        {/* 4 Working Action Buttons Mandated by Brief */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-soft-md">
          <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
            Instant One-Tap Actions
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Button 1: Call Now */}
            <a
              href={`tel:${BUSINESS_CONFIG.contact.mobilePrimary}`}
              className="inline-flex items-center justify-center gap-2.5 bg-cyber-purple-900 hover:bg-cyber-purple-800 text-white font-bold text-sm px-5 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 min-h-[48px]"
              id="contact-call-btn"
            >
              <Phone className="w-4 h-4 text-cyber-gold-400" />
              <span>Call Now</span>
            </a>

            {/* Button 2: WhatsApp Us */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 min-h-[48px]"
              id="contact-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </a>

            {/* Button 3: Email Us */}
            <a
              href={`mailto:${BUSINESS_CONFIG.contact.email}`}
              className="inline-flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm px-5 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 min-h-[48px]"
              id="contact-email-btn"
            >
              <Mail className="w-4 h-4 text-purple-300" />
              <span>Email Us</span>
            </a>

            {/* Button 4: Get Directions */}
            <a
              href={BUSINESS_CONFIG.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm px-5 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 min-h-[48px]"
              id="contact-directions-btn"
            >
              <Navigation className="w-4 h-4 text-slate-900" />
              <span>Get Directions</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
