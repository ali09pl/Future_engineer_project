'use client';

import { useState, useEffect } from 'react';

// ترجمات بسيطة للبداية
const translations = {
  ar: {
    home: 'الرئيسية',
    courses: 'الدروس',
    about: 'عن',
    contact: 'تواصل',
  },
  en: {
    home: 'Home',
    courses: 'Courses',
    about: 'About',
    contact: 'Contact',
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'ar';
    setLanguage(savedLanguage);
    document.documentElement.lang = savedLanguage;
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const changeLanguage = (langCode) => {
    setLanguage(langCode);
    localStorage.setItem('language', langCode);
    document.documentElement.lang = langCode;
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
  };

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  return {
    language,
    setLanguage: changeLanguage,
    t: translations[language] || translations.ar,
    languages,
  };
};
