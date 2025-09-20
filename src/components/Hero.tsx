'use client';

import { Phone } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/33667074221', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yassa-red via-yassa-orange to-yassa-brown pt-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
          <img 
            src="/logo-yassanco.jpg" 
            alt="YassaNCo Logo" 
            className="w-32 h-32 sm:w-40 sm:h-40 mb-4 drop-shadow-lg rounded-full object-cover"
          />
          <h1 className="text-6xl sm:text-8xl font-display font-black text-white mb-4 drop-shadow-lg">
            YassaNCo
          </h1>
          <p className="text-xl sm:text-2xl text-yassa-cream font-body font-medium drop-shadow-md">
            Le goût du Sénégal, chez vous !
          </p>
        </div>


        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleWhatsAppClick}
            className="bg-yassa-cream hover:bg-white text-yassa-brown font-display font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
          >
            <Phone className="w-6 h-6" />
            Commander maintenant
          </button>
          
          <a
            href="tel:0667074221"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 border border-white/30"
          >
            06.67.07.42.21
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => {
            const element = document.querySelector('#menu');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </button>
      </div>
    </section>
  );
}
