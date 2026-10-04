import React from 'react';

/**
 * Custom bespoke vector badges/logos for Cybernet Computers service categories.
 * Crafted with crisp geometry, deep purple, golden yellow, and cyber blue tones.
 */

export function PrintingLogo({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="printGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a1154" />
          <stop offset="100%" stopColor="#581c87" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="paperGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
      </defs>
      
      {/* Outer subtle shield container */}
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
      
      {/* Printer Main Chassis */}
      <rect x="12" y="24" width="40" height="22" rx="4" fill="url(#printGrad)" />
      
      {/* Paper Input Tray (Top) */}
      <rect x="18" y="10" width="28" height="15" rx="2" fill="url(#paperGrad)" stroke="#cbd5e1" strokeWidth="1.5" />
      <line x1="22" y1="15" x2="42" y2="15" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="19" x2="36" y2="19" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Paper Output Slot & Dispensing Sheet (Bottom) */}
      <rect x="16" y="38" width="32" height="18" rx="2" fill="url(#paperGrad)" stroke="#e2e8f0" strokeWidth="1.5" />
      
      {/* Printed document lines with color highlight */}
      <line x1="20" y1="43" x2="44" y2="43" stroke="#2a1154" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="47" x2="38" y2="47" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="51" x2="34" y2="51" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />

      {/* Control Panel Status LEDs */}
      <circle cx="46" cy="30" r="2" fill="url(#goldGrad)" />
      <circle cx="41" cy="30" r="1.5" fill="#38bdf8" />
      
      {/* Front output slot line */}
      <rect x="16" y="34" width="32" height="3" rx="1.5" fill="#1b0838" />
    </svg>
  );
}

export function InternetDigitalLogo({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Container card */}
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1.5" />
      
      {/* Central Globe Sphere */}
      <circle cx="32" cy="32" r="16" fill="url(#globeGrad)" />
      
      {/* Globe Latitudes & Longitudes */}
      <ellipse cx="32" cy="32" rx="7" ry="16" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.85" />
      <line x1="16" y1="32" x2="48" y2="32" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.85" />
      <ellipse cx="32" cy="24" rx="13.5" ry="5" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />
      <ellipse cx="32" cy="40" rx="13.5" ry="5" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />

      {/* Orbital Glowing Cyber Ring (Matching brand logo motif) */}
      <ellipse cx="32" cy="32" rx="24" ry="9" stroke="url(#orbitGrad)" strokeWidth="2.5" transform="rotate(-25 32 32)" strokeLinecap="round" />
      
      {/* Orbit Node Satellite */}
      <circle cx="51" cy="23" r="3" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="13" cy="41" r="2.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
    </svg>
  );
}

export function GovtRegistrationLogo({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a1154" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
      </defs>

      {/* Container card */}
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="1.5" />

      {/* Official Government Shield */}
      <path d="M32 10L47 16V29C47 40 39.5 48.5 32 52C24.5 48.5 17 40 17 29V16L32 10Z" fill="url(#shieldGrad)" />
      
      {/* Inner Golden Border */}
      <path d="M32 13.5L44 18.5V28.5C44 37.5 38 44.5 32 47.5C26 44.5 20 37.5 20 28.5V18.5L32 13.5Z" stroke="#fbbf24" strokeWidth="1.5" strokeOpacity="0.9" fill="none" />
      
      {/* Verified Seal Checkmark */}
      <path d="M26 30.5L30.5 35L38.5 25" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Laurel leaves / stars */}
      <circle cx="32" cy="20" r="1.5" fill="#fef3c7" />
    </svg>
  );
}

export function DtpComputerLogo({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dtpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a1154" />
          <stop offset="100%" stopColor="#1e0e45" />
        </linearGradient>
      </defs>

      {/* Container card */}
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#fffbeb" stroke="#fef3c7" strokeWidth="1.5" />

      {/* Computer Screen Frame */}
      <rect x="12" y="12" width="40" height="28" rx="4" fill="url(#dtpGrad)" />
      <rect x="15" y="15" width="34" height="22" rx="2" fill="#ffffff" />
      
      {/* Screen Monitor Stand */}
      <path d="M28 40H36V45H28V40Z" fill="#2a1154" />
      <rect x="22" y="45" width="20" height="3" rx="1.5" fill="#581c87" />

      {/* Malayalam / English Typography Symbols inside monitor */}
      {/* Letter 'A' representing English typography */}
      <text x="21" y="32" fontFamily="sans-serif" fontSize="13" fontWeight="800" fill="#2a1154">A</text>
      
      {/* Malayalam typography glyph hint '?' */}
      <text x="33" y="32" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#d97706">?</text>
      
      {/* Precision DTP Vector Pen Nib Overlay */}
      <circle cx="48" cy="46" r="9" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
      <path d="M48 40L44 47H52L48 40Z" fill="#ffffff" />
      <circle cx="48" cy="48" r="1.5" fill="#2a1154" />
    </svg>
  );
}

export function StudentProjectLogo({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="studentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>

      {/* Container card */}
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

      {/* Academic Mortarboard (Graduation Cap) */}
      <path d="M32 14L14 23L32 32L50 23L32 14Z" fill="#2a1154" />
      <path d="M22 28.5V37C22 41 26.5 44 32 44C37.5 44 42 41 42 37V28.5L32 34L22 28.5Z" fill="#4c1d95" />
      
      {/* Tassel */}
      <path d="M47 24.5V36L44 38" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <circle cx="44" cy="38.5" r="2" fill="#fbbf24" />

      {/* Spiral Project Report File underneath */}
      <rect x="18" y="44" width="28" height="9" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
      {/* Spiral rings */}
      <line x1="22" y1="42" x2="22" y2="46" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="42" x2="26" y2="46" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="42" x2="30" y2="46" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="42" x2="34" y2="46" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="42" x2="38" y2="46" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SpecializedServicesLogo({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="specialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a1154" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      {/* Container card */}
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#faf5ff" stroke="#f3e8ff" strokeWidth="1.5" />

      {/* Camera / Photo & Service Badge */}
      <rect x="14" y="20" width="36" height="28" rx="5" fill="#2a1154" />
      <path d="M23 20L25 15H39L41 20H23Z" fill="#1b0838" />
      
      {/* Lens with Aperture Ring */}
      <circle cx="32" cy="34" r="9" fill="#0ea5e9" stroke="#ffffff" strokeWidth="2" />
      <circle cx="32" cy="34" r="5" fill="#0284c7" />
      <circle cx="34" cy="32" r="1.5" fill="#ffffff" />
      
      {/* Flash / Sparkle */}
      <path d="M46 16L48 11L50 16L55 18L50 20L48 25L46 20L41 18L46 16Z" fill="#fbbf24" />
    </svg>
  );
}

/**
 * Helper to render the appropriate logo component by key
 */
export function ServiceBadge({ type, className = "w-12 h-12" }) {
  switch (type) {
    case 'print':
      return <PrintingLogo className={className} />;
    case 'digital':
      return <InternetDigitalLogo className={className} />;
    case 'gov':
      return <GovtRegistrationLogo className={className} />;
    case 'dtp':
      return <DtpComputerLogo className={className} />;
    case 'student':
      return <StudentProjectLogo className={className} />;
    case 'other':
    default:
      return <SpecializedServicesLogo className={className} />;
  }
}
