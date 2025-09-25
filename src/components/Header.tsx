import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram, Globe } from 'lucide-react';
import { useLanguage, languages } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = language.code === 'ar' ? languages[1] : languages[0];
    setLanguage(newLang);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center sm:justify-between items-center text-sm gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" onClick={() => scrollToSection('contact')} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language.code === 'ar' ? 'English' : 'العربية'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">{t.hero.title}</h1>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 rtl:space-x-reverse">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 transition-colors font-medium"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 transition-colors font-medium"
              >
                {t.nav.products}
              </button>
              <button
                onClick={() => scrollToSection('who-we-serve')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 transition-colors font-medium"
              >
                {t.nav.whoWeServe}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 transition-colors font-medium"
              >
                {t.nav.gallery}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 transition-colors font-medium"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 transition-colors font-medium text-start"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 transition-colors font-medium text-start"
              >
                {t.nav.products}
              </button>
              <button
                onClick={() => scrollToSection('who-we-serve')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 transition-colors font-medium text-start"
              >
                {t.nav.whoWeServe}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 transition-colors font-medium text-start"
              >
                {t.nav.gallery}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 transition-colors font-medium text-start"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium text-start"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;