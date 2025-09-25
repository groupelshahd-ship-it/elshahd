import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: '1',
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQHEjwdwUqKQ7A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1730199440266?e=2147483647&v=beta&t=Y_KpxuNmVKRkfoemosRlR_fUpuP0VESfacbV856nGzE',
      title: { ar: 'منتجات طازجة', en: 'Fresh Products' },
      category: 'products'
    },
    {
      id: '2',
      image: 'https://media.elbalad.news/2024/10/large/1077/5/693.jpeg',
      title: { ar: 'تعبئة محترفة', en: 'Professional Packaging' },
      category: 'packaging'
    },
    {
      id: '3',
      image: 'https://portal.elsupplier.com/backend/public/storage/products/karimland-155377166110390514_781087685302761_8388461468576208149_n.jpg',
      title: { ar: 'جودة عالية', en: 'High Quality' },
      category: 'products'
    },
    {
      id: '4',
      image: 'https://mediaaws.almasryalyoum.com/news/large/2022/12/25/1985463_0.jpg',
      title: { ar: 'مرافق حديثة', en: 'Modern Facilities' },
      category: 'facilities'
    },
    {
      id: '5',
      image: 'https://www.elaosboa.com/wp-content/uploads/2025/05/elaosboa72015.jpg',
      title: { ar: 'توصيل سريع', en: 'Fast Delivery' },
      category: 'delivery'
    },
    {
      id: '6',
      image: 'https://i1.wp.com/www.light-dark.net/wp-content/uploads/2024/10/2018_4_8_10_47_37_884-435.jpg',
      title: { ar: 'معايير السلامة', en: 'Safety Standards' },
      category: 'facilities'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title.ar}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title.ar}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery item"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;