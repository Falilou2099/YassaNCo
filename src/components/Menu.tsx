'use client';

import { Utensils, Coffee, Gift, Star } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  image?: string;
  icon?: React.ReactNode;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  icon?: React.ReactNode;
}

export default function Menu() {
  const menuSections: MenuSection[] = [
    {
      title: "Menus Complets",
      icon: <Gift className="w-6 h-6" />,
      items: [
        { 
          name: "Menu Yassa au Poulet", 
          price: "12€", 
          description: "2 pastels + Plat Yassa + 1 boisson au choix",
          image: "🍗",
          icon: <Star className="w-4 h-4 text-yassa-red" />
        },
        { 
          name: "Menu Thiebou Dieune", 
          price: "13€", 
          description: "2 pastels + Plat riz + 1 boisson au choix",
          image: "🐟",
          icon: <Star className="w-4 h-4 text-yassa-red" />
        },
        { 
          name: "Menu Mafé à la Viande", 
          price: "12€", 
          description: "2 pastels + Plat mafé + 1 boisson au choix",
          image: "🥘",
          icon: <Star className="w-4 h-4 text-yassa-red" />
        },
        { 
          name: "Menu Thiebou Guinar", 
          price: "12€", 
          description: "2 pastels + Plat Thieb + 1 boisson au choix",
          image: "🍚",
          icon: <Star className="w-4 h-4 text-yassa-red" />
        },
      ]
    },
    {
      title: "Plats à l'Unité",
      icon: <Utensils className="w-6 h-6" />,
      items: [
        { 
          name: "Yassa au poulet", 
          price: "10€", 
          description: "Poulet mariné aux oignons et citron",
          image: "🍗"
        },
        { 
          name: "Mafé à la viande", 
          price: "10€", 
          description: "Ragoût de viande à la pâte d'arachide",
          image: "🥘"
        },
        { 
          name: "Thiebou Guinar", 
          price: "10€", 
          description: "Riz au poulet, légumes et épices",
          image: "🍚"
        },
        { 
          name: "Thiebou Dieune", 
          price: "11€", 
          description: "Riz au poisson, légumes sénégalais",
          image: "🐟"
        },
      ]
    },
    {
      title: "Pastels",
      icon: <Utensils className="w-6 h-6" />,
      items: [
        { name: "Box S", price: "9€", description: "5 pièces", image: "📦" },
        { name: "Box M", price: "25€", description: "10 pièces", image: "📦" },
        { name: "Box XL", price: "30€", description: "30 pièces", image: "📦" },
        { name: "Box XXL", price: "à partir de 40€", description: "40 pièces", image: "📦" },
        { name: "Pièce à l'unité", price: "1€", description: "Pastel individuel", image: "🥟" },
      ]
    },
    {
      title: "Boissons",
      icon: <Coffee className="w-6 h-6" />,
      items: [
        { 
          name: "Jus de Bissap", 
          price: "5€", 
          description: "Boisson traditionnelle à l'hibiscus",
          image: "🧃"
        },
        { 
          name: "Jus de Gingembre", 
          price: "5€", 
          description: "Boisson rafraîchissante au gingembre",
          image: "🧃"
        },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-yassa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-black text-yassa-brown mb-4">
            La Carte
          </h2>
          <div className="w-24 h-1 bg-yassa-red mx-auto mb-6"></div>
          <p className="text-xl font-body text-yassa-brown/80 max-w-2xl mx-auto">
            Découvrez nos spécialités sénégalaises authentiques, préparées avec amour et des ingrédients frais
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-2xl shadow-lg p-8 border border-yassa-brown/10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6 border-b border-yassa-brown pb-3">
                <div className="bg-yassa-brown/10 p-2 rounded-full mr-3 text-yassa-brown">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-yassa-brown">
                  {section.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group hover:bg-yassa-cream/30 p-4 rounded-lg transition-all duration-200 hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      {/* Image/Emoji */}
                      <div className="text-3xl flex-shrink-0">
                        {item.image}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-display font-semibold text-yassa-brown group-hover:text-yassa-red transition-colors">
                              {item.name}
                            </h4>
                            {item.icon}
                          </div>
                          <span className="text-xl font-display font-bold text-yassa-red ml-4 flex-shrink-0">
                            {item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-yassa-brown/70 font-body text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border border-yassa-brown/20 shadow-lg">
            <h3 className="text-2xl font-display font-bold text-yassa-brown mb-4">
              Envie de commander ?
            </h3>
            <p className="text-yassa-brown/70 font-body mb-6">
              Contactez-nous pour passer votre commande ou pour plus d'informations
            </p>
            <a
              href="https://wa.me/33667074221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-yassa-red hover:bg-yassa-darkBrown text-white font-display font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
