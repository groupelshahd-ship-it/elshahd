import React from 'react';
import { Phone, Mail, Facebook, Instagram, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{t.hero.title}</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 text-blue-100">
              <MapPin className="w-5 h-5" />
              <span>{t.hero.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {t.nav.products}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('who-we-serve')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {t.nav.whoWeServe}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactInfo}</h4>
            <div className="space-y-3">
              <a href="tel:+201234567890" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+20 123 456 7890</span>
              </a>
              <a href="mailto:info@alshahd.com" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@alshahd.com</span>
              </a>
              <a href="https://facebook.com/alshahdgroup" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
                <span>Al Shahd Group</span>
              </a>
              <a href="https://instagram.com/alshahdgroup" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
                <span>@alshahdgroup</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2025 {t.hero.title}. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;