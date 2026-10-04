import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { ServiceBadge } from './ServiceBadges';
import { ArrowRight } from 'lucide-react';

export default function QuickServices() {
  const badgeMap = {
    'internet-online': 'digital',
    'printing-xerox': 'print',
    'dtp-typing': 'dtp',
    'scanning-lamination': 'print',
    'gov-registrations': 'gov',
    'project-works': 'student',
  };

  return (
    <section className="py-10 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-cyber-purple-900 text-xs font-bold tracking-wide uppercase mb-2">
              Essential Services
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Popular Quick Services
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Everyday digital essentials delivered with accuracy and speed at H.S. Junction
            </p>
          </div>

          <a 
            href="#services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-cyber-purple-900 hover:text-cyber-purple-700 transition-colors group"
          >
            <span>View All Detailed Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 6 Quick Services Card Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {BUSINESS_CONFIG.quickServices.map((service) => {
            const badgeType = badgeMap[service.id] || 'other';

            return (
              <a
                key={service.id}
                href="#services"
                className="group relative flex flex-col p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-purple-200 hover:shadow-soft-md transition-all duration-300 transform hover:-translate-y-1 text-left"
              >
                {/* Custom Logo Badge for the service */}
                <div className="mb-3.5 flex items-center justify-start group-hover:scale-105 transition-transform duration-300">
                  <ServiceBadge type={badgeType} className="w-11 h-11" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 group-hover:text-cyber-purple-900 transition-colors line-clamp-2 leading-snug">
                  {service.title}
                </h3>

                {/* Brief description */}
                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                  {service.desc}
                </p>

                {/* Bottom link indicator */}
                <div className="mt-auto pt-3 flex items-center gap-1 text-[11px] font-semibold text-cyber-purple-700 opacity-80 group-hover:opacity-100 group-hover:text-cyber-gold-600 transition-colors">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">?</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
