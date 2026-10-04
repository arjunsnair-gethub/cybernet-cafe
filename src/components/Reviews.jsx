import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { ExternalLink, MessageSquareHeart, CheckCircle } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-cyber-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
          <MessageSquareHeart className="w-3.5 h-3.5" />
          <span>Customer Feedback</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          What Our Customers Say
        </h2>

        {/* Mandated phrase */}
        <p className="mt-3 text-base sm:text-lg text-slate-700 font-medium">
          See what our customers have to say on Google.
        </p>

        {/* Transparent Notice Card */}
        <div className="mt-8 max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-soft-sm text-left">
          <div className="flex items-start gap-4">
            {/* Google G-Icon Logo */}
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center p-2.5 border border-slate-200">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                Google Business Profile &amp; Ratings
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                We believe in genuine, verified feedback from the local Adoor community. Read real visitor experiences, ratings, and questions directly on Google.
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Verified Local Digital Centre in Pathanamthitta</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              {BUSINESS_CONFIG.address.full}
            </span>

            {/* View Google Reviews Button */}
            <a
              href={BUSINESS_CONFIG.links.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cyber-purple-900 hover:bg-cyber-purple-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 min-h-[44px]"
              id="view-google-reviews-btn"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-cyber-gold-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
