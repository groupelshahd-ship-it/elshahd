import React, { useState } from 'react';
import { Phone, Mail, Facebook, Instagram, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    contactMethod: '',
    orderType: '',
    quantity: '',
    orderDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
    setFormData({
      name: '',
      contactMethod: '',
      orderType: '',
      quantity: '',
      orderDetails: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t.contact.info.phone}
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{t.contact.info.phone}</p>
                    <a href="tel:+201234567890" className="text-blue-600 hover:text-blue-800">
                      +20 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{t.contact.info.email}</p>
                    <a href="mailto:info@alshahd.com" className="text-blue-600 hover:text-blue-800">
                      info@alshahd.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{t.contact.info.facebook}</p>
                    <a href="https://facebook.com/alshahdgroup" className="text-blue-600 hover:text-blue-800">
                      Al Shahd Group
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{t.contact.info.instagram}</p>
                    <a href="https://instagram.com/alshahdgroup" className="text-blue-600 hover:text-blue-800">
                      @alshahdgroup
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{t.contact.info.address}</p>
                    <p className="text-gray-600">{t.hero.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t.contact.form.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.contactMethod} *
                </label>
                <input
                  type="text"
                  id="contactMethod"
                  name="contactMethod"
                  required
                  value={formData.contactMethod}
                  onChange={handleChange}
                  placeholder={t.contact.form.contactPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="orderType" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.orderType} *
                </label>
                <select
                  id="orderType"
                  name="orderType"
                  required
                  value={formData.orderType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">{t.contact.form.orderPlaceholder}</option>
                  <option value="panee">{t.products.items.panee.name}</option>
                  <option value="shawarma">{t.products.items.shawarma.name}</option>
                  <option value="skewers">{t.products.items.skewers.name}</option>
                  <option value="bones">{t.products.items.bones.name}</option>
                  <option value="eggs">{t.products.items.eggs.name}</option>
                </select>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.quantity} *
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder={t.contact.form.quantityPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="orderDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.orderDetails}
                </label>
                <textarea
                  id="orderDetails"
                  name="orderDetails"
                  rows={4}
                  value={formData.orderDetails}
                  onChange={handleChange}
                  placeholder={t.contact.form.detailsPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;