/**
 * Cybernet Computers - Master Configuration File
 * 
 * Keep all business details, services, contact information,
 * image paths, and external links here in ONE place for easy maintenance.
 */

export const BUSINESS_CONFIG = {
  // Brand Basics
  name: "Cybernet Computers",
  tagline: "Digital Service & Computer Centre",
  establishedYear: 2026,
  
  // Address & Location
  address: {
    line1: "H.S. Junction",
    city: "Adoor",
    district: "Pathanamthitta",
    state: "Kerala",
    full: "H.S. Junction, Adoor, Pathanamthitta, Kerala",
    landmark: "Conveniently situated at H.S. Junction, Adoor",
  },

  // Contact Details
  contact: {
    mobilePrimary: "8589898957",
    mobileSecondary: "9946399607",
    whatsappNumber: "8589898957",
    landline: "04734 221204",
    email: "cybernetadoor@gmail.com",
    formattedMobile: "8589898957 / 9946399607",
  },

  // Opening Hours
  hours: {
    days: "Monday - Saturday",
    timing: "9:00 AM - 7:30 PM",
    fullHours: "Monday-Saturday: 9:00 AM - 7:30 PM",
    sunday: "Holiday",
    statusBadge: "Open Mon-Sat 9:00 AM - 7:30 PM",
  },

  // Official Links
  links: {
    googleMaps: "https://share.google/FFESxKHk2DkLAGZnWk",
    // Can be easily updated when Google Maps review URL is directly available
    googleReviews: "https://share.google/FFESxKHk2DkLAGZnWk",
  },

  // WhatsApp Pre-filled message
  whatsappMessage: "Hello Cybernet Computers, I would like to know more about your services.",

  // Uploaded Real Photographs & Official Logo
  images: {
    // Official Logo (Badge & circular mark)
    logo: "/images/cybernet-logo.png",
    // Official Signboard / Horizontal banner
    signboard: "/images/cybernet-signboard.png",
    // Real Shop Interior with workstations, counter & Jana Seva Kendram notices
    interior: "/images/cybernet-interior.png",
    // Real Shop Exterior / Service Banner
    banner: "/images/cybernet-banner.png",
    // Real Authentic Business Card
    businessCard: "/images/business-card.png",
  },

  // Quick Services Row (Hero / Below-Hero)
  quickServices: [
    {
      id: "internet-online",
      title: "Internet & Online Services",
      desc: "High-speed internet browsing, email, utility bill payments & instant recharges.",
      icon: "Globe",
      badgeColor: "blue",
    },
    {
      id: "printing-xerox",
      title: "Printing & Xerox",
      desc: "High-clarity photostat, crisp black & white and vibrant colour printing.",
      icon: "Printer",
      badgeColor: "purple",
    },
    {
      id: "dtp-typing",
      title: "DTP & Typing",
      desc: "Professional English and Malayalam DTP formatting and document preparation.",
      icon: "FileText",
      badgeColor: "gold",
    },
    {
      id: "scanning-lamination",
      title: "Scanning & Lamination",
      desc: "High-resolution document scanning, durable heat lamination and spiral binding.",
      icon: "Layers",
      badgeColor: "blue",
    },
    {
      id: "gov-registrations",
      title: "Government Registrations",
      desc: "Authorized assistance for PSC, Passport Seva, Pravasi Welfare & online forms.",
      icon: "ShieldCheck",
      badgeColor: "purple",
    },
    {
      id: "project-works",
      title: "Project Works",
      desc: "Academic project documentation, resume typing, CV formatting and spiral binding.",
      icon: "GraduationCap",
      badgeColor: "gold",
    },
  ],

  // Full Six Categories (Strictly no repeated items)
  serviceCategories: [
    {
      id: "internet-digital",
      categoryName: "Internet & Digital",
      shortTitle: "Internet & Online",
      description: "Fast, secure internet connectivity and complete digital transaction assistance.",
      badge: "Digital Hub",
      iconType: "digital",
      items: [
        "Internet Cafe & High-Speed Browsing",
        "Email Sending & Receiving Services",
        "Video / Voice Chatting Facility",
        "Online Services & Web Portals",
        "Online Payment & Utility Bill Services",
        "Mobile Phone Recharge",
      ],
    },
    {
      id: "printing-documents",
      categoryName: "Printing & Documents",
      shortTitle: "Print & Xerox",
      description: "State-of-the-art photocopying, high-dpi prints, and document preservation.",
      badge: "Print Centre",
      iconType: "print",
      items: [
        "Photostat / Xerox (Fast Multi-copy)",
        "B&W High-Speed Document Printing",
        "Vibrant High-Resolution Colour Printing",
        "High-Resolution Scanning",
        "Durable Document Lamination",
        "Spiral Binding for Reports & Notes",
        "CD / DVD Writing & Media Archiving",
        "Fax Facility",
      ],
    },
    {
      id: "government-registration",
      categoryName: "Government & Registration",
      shortTitle: "Govt Portals",
      description: "Guiding citizens and students through official state and national portal applications.",
      badge: "Govt Desk",
      iconType: "gov",
      items: [
        "Kerala PSC One Time Registration & Profile Updates",
        "Kerala Medical Registration Online Support",
        "Kerala Engineering Registration (KEAM / Allotment)",
        "Passport Seva & Passport-related Services",
        "Pravasi Welfare Board Registration",
        "Online Government Applications & Certificates",
      ],
    },
    {
      id: "computer-dtp",
      categoryName: "Computer & DTP",
      shortTitle: "DTP & Computer",
      description: "Expert Malayalam & English typing, layout typesetting, and digital preparation.",
      badge: "DTP Studio",
      iconType: "dtp",
      items: [
        "Malayalam & English Typing Services",
        "Desktop Publishing (DTP) Layouts",
        "Official Document Preparation & Petitions",
        "Photo Services (Passport Size & Corrections)",
        "General Computer Services & Troubleshooting",
      ],
    },
    {
      id: "student-project",
      categoryName: "Student & Project",
      shortTitle: "Student & Projects",
      description: "Specialized assistance for school, college, polytechnic, and degree students.",
      badge: "Student Hub",
      iconType: "student",
      items: [
        "Academic Project Works & Layout Preparation",
        "Project Documentation, Formatting & Printing",
        "Professional Resume & CV Typing",
        "Student Notes & Syllabus Printing",
      ],
    },
    {
      id: "other-digital",
      categoryName: "Other Digital Services",
      shortTitle: "Specialized Services",
      description: "Value-added services tailored to everyday community needs at H.S. Junction.",
      badge: "Community Desk",
      iconType: "other",
      items: [
        "Photo Print Services & Urgent Passport Photos",
        "Direct Fax Sending & Receiving",
        "Computer Horoscope & Planetary Charts (Jathakam / Grahanila)",
        "General Digital & Internet Assistance",
      ],
    },
  ],

  // Why Choose Cybernet Computers (Six Factual, Non-Exaggerated Cards)
  whyChooseUs: [
    {
      title: "Wide Range of Services",
      description: "Internet browsing, xerox, colour printing, DTP, government forms, and project work all handled in one place.",
      icon: "Layers",
    },
    {
      title: "Convenient Location",
      description: "Situated right at H.S. Junction in Adoor, easily accessible from town and surrounding educational hubs.",
      icon: "MapPin",
    },
    {
      title: "Customer Friendly",
      description: "Patient, helpful assistance for elderly visitors, job applicants, and students filling important forms.",
      icon: "Smile",
    },
    {
      title: "Convenient Opening Hours",
      description: "Open continuously Monday through Saturday from 9:00 AM to 7:30 PM for your convenience.",
      icon: "Clock",
    },
    {
      title: "One-Stop Digital Centre",
      description: "Eliminates the need to visit multiple shops for typing, printing, scanning, and official registrations.",
      icon: "CheckCircle2",
    },
    {
      title: "Local & Accessible",
      description: "A trusted local centre serving the Adoor, Pathanamthitta community with transparent service.",
      icon: "Shield",
    },
  ],

  // About Us Text (Mandated wording)
  about: {
    title: "About Cybernet Computers",
    subtitle: "Serving Adoor with Reliable Digital & Computer Solutions",
    description: "Cybernet Computers is a local digital service and computer centre located at H.S. Junction, Adoor, Pathanamthitta. We provide a wide range of internet, online, printing, documentation, registration, DTP, computer and project-related services. Our aim is to make everyday digital and computer-related services simple and convenient for students, individuals and the local community.",
    highlights: [
      "Authentic local establishment at H.S. Junction, Adoor",
      "Both Malayalam & English typing & formatting capabilities",
      "Official Jana Seva Kendram & online registration support",
      "Fast turnaround on high-volume Xerox & printing jobs",
    ],
  },

  // Gallery Photos (Real uploaded photos only, categorized)
  gallery: [
    {
      id: "interior",
      src: "/images/cybernet-interior.png",
      alt: "Cybernet Computers shop interior at H.S. Junction, Adoor",
      title: "Shop Interior & Workstations",
      category: "Interior",
      caption: "Counter desk, computer terminals, and official registration desks at Cybernet Computers, Adoor.",
    },
    {
      id: "banner",
      src: "/images/cybernet-banner.png",
      alt: "Cybernet Computers service banner showcasing Internet Cafe, DTP, and Photostat",
      title: "Official Services Banner",
      category: "Banner",
      caption: "Comprehensive service listing including DTP, high-speed internet, scanning, lamination, and bindings.",
    },
    {
      id: "signboard",
      src: "/images/cybernet-signboard.png",
      alt: "Cybernet Computers storefront signboard logo banner with globe graphic",
      title: "Storefront Signboard Logo",
      category: "Signboard",
      caption: "Official Cybernet Computers signage featuring the brand globe motif and Adoor location.",
    },
    {
      id: "business-card",
      src: "/images/business-card.png",
      alt: "Cybernet Computers official business card and quick service directory",
      title: "Official Business Card",
      category: "Business Card",
      caption: "Contact details, operational hours, and key service categories for Cybernet Computers.",
    },
  ],

  // Navigation Links
  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ],
};
