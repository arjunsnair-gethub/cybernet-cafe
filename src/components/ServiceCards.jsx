import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { ServiceBadge } from './ServiceBadges';
import { Check, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';

export default function ServiceCards() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? BUSINESS_CONFIG.serviceCategories 
    : BUSINESS_CONFIG.serviceCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 border border-purple-200 text-cyber-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
            Comprehensive Digital Solutions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-base sm:text-lg font-medium text-cyber-purple-800">
            Digital, Printing, Documentation, Registration and Computer Services Under One Roof
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Visit our centre at H.S. Junction, Adoor for prompt, personalized assistance with all your digital and documentation needs.
          </p>

          {/* Category Filter Pills for easy navigation */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 min-h-[40px] ${
                selectedCategory === 'all'
                  ? 'bg-cyber-purple-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-cyber-purple-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Services (6)
            </button>
            {BUSINESS_CONFIG.serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[40px] ${
                  selectedCategory === cat.id
                    ? 'bg-cyber-purple-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-cyber-purple-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.map((category) => {
            const inquiryMessage = `Hello Cybernet Computers, I would like to inquire about your ${category.categoryName} services at Adoor.`;
            const categoryWaUrl = `https://wa.me/91${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(inquiryMessage)}`;

            return (
              <div
                key={category.id}
                className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-soft-sm hover:shadow-soft-lg hover:border-purple-200 transition-all duration-300 overflow-hidden text-left"
              >
                {/* Top Accent Strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-cyber-purple-900 via-cyber-gold-500 to-cyber-blue-600"></div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  
                  {/* Category Header: Custom Service Logo + Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-1 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                      <ServiceBadge type={category.iconType} className="w-14 h-14" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-slate-100 text-slate-700 border border-slate-200">
                      {category.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-extrabold text-slate-900 group-hover:text-cyber-purple-900 transition-colors">
                    {category.categoryName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="my-5 border-t border-slate-100"></div>

                  {/* Service Items List (Strictly non-repeating items from brief) */}
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Included Services &amp; Facilities
                    </p>
                    <ul className="space-y-2.5">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-purple-50 text-cyber-purple-700 flex items-center justify-center font-bold border border-purple-200/60">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={categoryWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-lg transition-colors min-h-[36px]"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Inquire</span>
                    </a>

                    <a
                      href={`tel:${BUSINESS_CONFIG.contact.mobilePrimary}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-cyber-purple-900 transition-colors px-2.5 py-2"
                      title="Call directly"
                    >
                      <Phone className="w-3.5 h-3.5 text-cyber-purple-700" />
                      <span>Direct Call</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for custom/special requests */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyber-purple-950 via-cyber-purple-900 to-cyber-purple-800 text-white shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-display text-lg sm:text-xl font-bold">
              Need assistance with a specific application or bulk printing job?
            </h4>
            <p className="text-xs sm:text-sm text-purple-200">
              Drop by our shop at H.S. Junction, Adoor or reach us directly on WhatsApp &amp; Phone.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${BUSINESS_CONFIG.contact.mobilePrimary}`}
              className="inline-flex items-center gap-2 bg-cyber-gold-500 hover:bg-cyber-gold-400 text-slate-900 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 text-slate-900" />
              <span>Call: {BUSINESS_CONFIG.contact.mobilePrimary}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
