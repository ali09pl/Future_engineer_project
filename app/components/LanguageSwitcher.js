'use client';

import { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const LanguageSwitcher = ({ mobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, languages } = useLanguage();

  const currentLang = languages.find(lang => lang.code === language);

  if (mobile) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 space-x-reverse p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          aria-label="تغيير اللغة"
        >
          <Globe size={20} />
          <span className="text-sm">{currentLang?.flag}</span>
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </div>
                {language === lang.code && <Check size={16} className="text-green-500" />}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 space-x-reverse p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="تغيير اللغة"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{currentLang?.name}</span>
        <span>{currentLang?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
              {language === lang.code && <Check size={16} className="text-green-500" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
