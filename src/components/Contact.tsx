'use client';

import { Phone, Instagram, Facebook, MapPin } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      handle: "@yassa_n_co",
      url: "https://instagram.com/yassa_n_co",
      icon: <Instagram className="w-6 h-6" />,
      color: "hover:text-pink-500"
    },
    {
      name: "Facebook", 
      handle: "yassanco",
      url: "https://facebook.com/yassanco",
      icon: <Facebook className="w-6 h-6" />,
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-yassa-cream text-yassa-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-black text-yassa-brown mb-4">
            Contact & Réseaux Sociaux
          </h2>
          <div className="w-24 h-1 bg-yassa-red mx-auto mb-6"></div>
          <p className="text-xl font-body text-yassa-brown/80 max-w-2xl mx-auto">
            Restez connectés avec YassaNCo pour ne rien manquer de nos actualités et nouveautés
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-yassa-red">Nous Contacter</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-yassa-brown/20 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-yassa-brown" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-yassa-brown mb-1">Téléphone</h4>
                    <a 
                      href="tel:0667074221"
                      className="text-yassa-red hover:text-yassa-brown transition-colors text-lg font-medium"
                    >
                      06.67.07.42.21
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-yassa-red/20 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-yassa-red" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-yassa-brown mb-1">Zone de service</h4>
                    <p className="font-body text-yassa-brown/70">Yerres et environs</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yassa-lightCream rounded-lg border border-yassa-brown/20">
                <p className="text-sm font-body text-yassa-brown/70">
                  <strong className="text-yassa-red font-display">Horaires d'appel :</strong> Nous sommes disponibles tous les jours pour prendre vos commandes et répondre à vos questions.
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-yassa-red">Suivez-nous</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 bg-yassa-lightCream rounded-lg border border-yassa-brown/10 hover:bg-yassa-cream transition-all duration-300 group ${social.color}`}
                  >
                    <div className="bg-yassa-brown/10 p-3 rounded-full mr-4 group-hover:bg-yassa-brown/20 transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-yassa-brown mb-1">{social.name}</h4>
                      <p className="font-body text-yassa-brown/70 group-hover:text-yassa-brown transition-colors">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yassa-lightCream rounded-lg border border-yassa-brown/20">
                <p className="text-sm font-body text-yassa-brown/70">
                  📸 Découvrez nos dernières créations culinaires et suivez l'actualité de notre foodtruck !
                </p>
              </div>
            </div>

            {/* Quick Order CTA */}
            <div className="bg-yassa-red rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Commande Express
              </h3>
              <p className="text-white/90 font-body mb-6">
                Besoin d'une commande rapide ? Contactez-nous directement !
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/33667074221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-yassa-brown font-display font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="tel:0667074221"
                  className="bg-white/20 backdrop-blur-sm text-white font-display font-semibold py-3 px-6 rounded-full hover:bg-white/30 transition-colors duration-300 text-center border border-white/30"
                >
                  📞 Appeler
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-yassa-brown/20 text-center">
          <p className="text-yassa-brown/60 font-body mb-4">
            © 2024 YassaNCo - Le goût du Sénégal, chez vous !
          </p>
          <div className="flex justify-center space-x-1 text-2xl">
            <span>🇸🇳</span>
            <span>❤️</span>
            <span>🍽️</span>
          </div>
        </div>
      </div>
    </section>
  );
}
