export interface Language {
  code: 'ar' | 'en';
  name: string;
  direction: 'rtl' | 'ltr';
}

export interface Product {
  id: string;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  image: string;
}

export interface Client {
  id: string;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  icon: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: { ar: string; en: string };
  category: string;
}

export interface ContactForm {
  name: string;
  contactMethod: string;
  orderType: string;
  quantity: string;
  orderDetails: string;
}