import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickServices from './components/QuickServices';
import ServiceCards from './components/ServiceCards';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-purple-100 selection:text-cyber-purple-900">
      
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Quick Services (Card Row) */}
        <QuickServices />

        {/* 4. Our Services (6 Comprehensive Categories) */}
        <ServiceCards />

        {/* 5. Why Choose Cybernet Computers? (6 Factual Cards) */}
        <WhyChooseUs />

        {/* 6. About Us (Shop photo + Mandated Text) */}
        <About />

        {/* 7. Our Shop / Gallery (With Lightbox & Real Photos) */}
        <Gallery />

        {/* 8. What Our Customers Say (Non-fabricated Google Reviews) */}
        <Reviews />

        {/* 9. Find Us (Location Card & Google Maps Actions) */}
        <Location />

        {/* 10. Contact Us (Phones, Landline, Email, Hours, Actions) */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Button */}
      <FloatingWhatsApp />

    </div>
  );
}
