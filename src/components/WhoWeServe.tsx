import React from 'react';
import { Building, Hotel, Factory, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhoWeServe: React.FC = () => {
  const { t } = useLanguage();

  const clients = [
    {
      id: 'restaurants',
      icon: <UtensilsCrossed className="w-12 h-12" />,
      ...t.whoWeServe.clients.restaurants
    },
    {
      id: 'hotels',
      icon: <Hotel className="w-12 h-12" />,
      ...t.whoWeServe.clients.hotels
    },
    {
      id: 'corporates',
      icon: <Building className="w-12 h-12" />,
      ...t.whoWeServe.clients.corporates
    },
    {
      id: 'factories',
      icon: <Factory className="w-12 h-12" />,
      ...t.whoWeServe.clients.factories
    }
  ];

  return (
    <section id="who-we-serve" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.whoWeServe.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.whoWeServe.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="text-center group hover:bg-blue-50 rounded-xl p-8 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-900 rounded-full mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                {client.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {client.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;