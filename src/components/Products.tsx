import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Products: React.FC = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 'panee',
      image: 'https://i.imghippo.com/files/SrZ7438Mlg.jpg',
      ...t.products.items.panee
    },
    {
      id: 'shawarma',
      image: 'https://i.imghippo.com/files/SeaH3994LgM.webp',
      ...t.products.items.shawarma
    },
    {
      id: 'skewers',
      image: 'https://mcooker-enm.tomathouse.com/gallery/albums/userpics/40832/P1090516.JPG',
      ...t.products.items.skewers
    },
    {
      id: 'bones',
      image: 'https://quanshuiwetmarket.com/cdn/shop/products/ChickenBone.jpg?v=1617275185',
      ...t.products.items.bones
    },
    {
      id: 'eggs',
      image: 'https://i.imghippo.com/files/GYN1674chE.jpg',
      ...t.products.items.eggs
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.products.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            {t.products.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group max-w-sm w-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;