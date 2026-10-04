import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { Layers, MapPin, Smile, Clock, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const iconMap = {
    Layers: Layers,
    MapPin: MapPin,
    Smile: Smile,
    Clock: Clock,
    CheckCircle2: CheckCircle2,
    Shield: Shield,
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyber-gold-600" />
            <span>Reliable Local Service</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Cybernet Computers?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Committed to providing dependable digital and documentation services for individuals, students, and businesses in Adoor.
          </p>
        </div>

        {/* 6 Factual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BUSINESS_CONFIG.whyChooseUs.map((card, index) => {
            const IconComponent = iconMap[card.icon] || CheckCircle2;

            return (
              <div
                key={card.title}
                className="relative p-6 sm:p-7 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-purple-200 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 text-left group"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-cyber-purple-900 flex items-center justify-center mb-4 group-hover:bg-cyber-purple-900 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Card Title */}
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-cyber-purple-900 transition-colors mb-2">
                  {card.title}
                </h3>

                {/* Short Factual Description (No exaggerated claims) */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>

                {/* Subtle indicator number */}
                <div className="absolute top-5 right-5 text-xs font-mono font-bold text-slate-300">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
