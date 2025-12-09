'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, X, Sun, Moon, User, LogIn, UserPlus,
  BookOpen, Home, Info, Video, FileText, Globe
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  const [language, setLanguage] = useState('ar');

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - FE فقط */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="bg-black dark:bg-white p-3 rounded-lg transition-colors hover:scale-105">
                <div className="text-white dark:text-black font-bold text-xl">FE</div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Future<span className="text-black dark:text-white">Engineer</span>
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            <Link href="/" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <Home size={18} />
              <span>الرئيسية</span>
            </Link>
            <Link href="/courses" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <BookOpen size={18} />
              <span>الكورسات</span>
            </Link>
            <Link href="/videos" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <Video size={18} />
              <span>الفيديوهات</span>
            </Link>
            <Link href="/blog" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <FileText size={18} />
              <span>المدونة</span>
            </Link>
            <Link href="#about" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <Info size={18} />
              <span>عن المنصة</span>
            </Link>
          </div>

          {/* Controls */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Globe size={18} />
                <span>{language === 'ar' ? 'العربية' : 'English'}</span>
              </button>

              {isLanguageOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                      {language === lang.code && (
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="تبديل الوضع الليلي"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Login Button */}
            <Link href="/login" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <LogIn size={18} />
              <span>تسجيل الدخول</span>
            </Link>
            
            {/* Register Button */}
            <Link href="/register" className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 flex items-center space-x-1">
              <UserPlus size={18} />
              <span>حساب جديد</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3 space-x-reverse">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                <Globe size={20} />
              </button>

              {isLanguageOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                      {language === lang.code && (
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="تبديل الوضع الليلي"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white p-2" onClick={() => setIsMenuOpen(false)}>
                <Home size={18} />
                <span>الرئيسية</span>
              </Link>
              <Link href="/courses" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white p-2" onClick={() => setIsMenuOpen(false)}>
                <BookOpen size={18} />
                <span>الكورسات</span>
              </Link>
              <Link href="/videos" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white p-2" onClick={() => setIsMenuOpen(false)}>
                <Video size={18} />
                <span>الفيديوهات</span>
              </Link>
              <Link href="/blog" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white p-2" onClick={() => setIsMenuOpen(false)}>
                <FileText size={18} />
                <span>المدونة</span>
              </Link>
              <Link href="#about" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white p-2" onClick={() => setIsMenuOpen(false)}>
                <Info size={18} />
                <span>عن المنصة</span>
              </Link>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
                <Link href="/login" className="flex items-center justify-center space-x-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                  <LogIn size={18} />
                  <span>تسجيل الدخول</span>
                </Link>
                <Link href="/register" className="flex items-center justify-center space-x-2 bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  <UserPlus size={18} />
                  <span>حساب جديد</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
