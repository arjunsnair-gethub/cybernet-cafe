import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../data/config';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/91${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto">
      
      {/* Friendly Chat Pill Tooltip */}
      {showTooltip && (
        <div className="mb-2 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-soft-lg border border-emerald-100 text-xs text-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-xs text-left">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
          <div>
            <p className="font-bold text-slate-900">Chat with Cybernet</p>
            <p className="text-[11px] text-slate-500">Fast assistance on WhatsApp</p>
          </div>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Close message preview"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Cybernet Computers on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        id="floating-whatsapp-btn"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-50 animate-ping -z-10"></span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
}
