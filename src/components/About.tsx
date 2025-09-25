import React from 'react';
import { Shield, Eye, Heart, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.about.description}
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg"
              alt="Al Shahd Group"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t.about.mission.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.about.mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t.about.vision.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.about.vision.description}
            </p>
          </div>

          {/* Values */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t.about.values.title}
            </h3>
            <ul className="space-y-2">
              {t.about.values.items.map((value, index) => (
                <li key={index} className="flex items-center justify-center gap-2 text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;