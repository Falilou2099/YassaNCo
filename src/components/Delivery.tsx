'use client';

import { Clock, MapPin, Truck } from 'lucide-react';

export default function Delivery() {
  const scheduleItems = [
    {
      day: "Mardi",
      location: "Parvis du CEC, Yerres",
      time: "11h - 14h30",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      day: "Dimanche", 
      location: "Rue Pierre Coubertin, Yerres",
      time: "8h - 13h",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <section id="delivery" className="py-20 bg-yassa-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white mb-4">
            Livraison & Foodtruck
          </h2>
          <div className="w-24 h-1 bg-yassa-cream mx-auto mb-6"></div>
          <p className="text-xl font-body text-yassa-cream/90 max-w-2xl mx-auto">
            Retrouvez-nous sur nos emplacements ou commandez pour une livraison
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Delivery Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="bg-yassa-brown/10 p-3 rounded-full mr-4">
                <Truck className="w-8 h-8 text-yassa-brown" />
              </div>
              <h3 className="text-2xl font-display font-bold text-yassa-brown">Livraison</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-yassa-red mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-yassa-brown mb-1">Horaires de livraison</h4>
                  <p className="font-body text-yassa-brown/70">À partir de 14h sur commande</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-white/20">
                <p className="text-yassa-brown font-display font-medium mb-2">Comment commander ?</p>
                <p className="text-yassa-brown/70 font-body text-sm">
                  Appelez-nous ou envoyez un message WhatsApp pour passer votre commande. 
                  Nous vous confirmerons l&apos;heure de livraison.
                </p>
              </div>
            </div>
          </div>

          {/* Foodtruck Schedule */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-yassa-red/10 p-3 rounded-full mr-4">
                <MapPin className="w-8 h-8 text-yassa-red" />
              </div>
              <h3 className="text-2xl font-display font-bold text-yassa-brown">Présence Hebdomadaire</h3>
            </div>
            
            <div className="space-y-6">
              {scheduleItems.map((item, index) => (
                <div key={index} className="border border-yassa-brown/20 rounded-lg p-4 hover:border-yassa-brown hover:bg-white transition-all duration-200">
                  <div className="flex items-start">
                    <div className="bg-yassa-brown/10 p-2 rounded-full mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-display font-bold text-lg text-yassa-red">{item.day}</h4>
                        <span className="text-yassa-brown font-display font-semibold">{item.time}</span>
                      </div>
                      <p className="font-body text-yassa-brown/70">{item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-yassa-brown rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-display font-bold mb-4">
              Questions sur la livraison ?
            </h3>
            <p className="text-white/90 font-body mb-6">
              N'hésitez pas à nous contacter pour plus d'informations sur nos horaires et zones de livraison
            </p>
            <a
              href="https://wa.me/33667074221"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yassa-red hover:bg-yassa-darkBrown text-white font-display font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
