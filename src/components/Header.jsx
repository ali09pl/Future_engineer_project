import React, { useState } from 'react';
import { Menu, X, Sun, Moon, User, BookOpen, Award, Settings, LogOut, Globe } from 'lucide-react';
import { TranslationService } from '../services/translationService';

const Header = ({ user, onLogout, currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentLang, setCurrentLang] = useState(TranslationService.getLanguage());

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', !darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    onLogout();
    setIsMenuOpen(false);
  };

  const changeLanguage = (lang) => {
    TranslationService.setLanguage(lang);
    setCurrentLang(lang);
    setIsMenuOpen(false);
    // إعادة تحميل الصفحة لتطبيق التغييرات
    window.location.reload();
  };

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* الشعار */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">Future Engineer</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">{TranslationService.t('tagline')}</p>
            </div>
          </div>

          {/* قائمة التنقل للشاشات الكبيرة */}
          {user && (
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              <button 
                onClick={() => onNavigate('dashboard')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentView === 'dashboard' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {TranslationService.t('dashboard')}
              </button>
              <button 
                onClick={() => onNavigate('courses')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentView === 'courses' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {TranslationService.t('courses')}
              </button>
              <button 
                onClick={() => onNavigate('profile')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentView === 'profile' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {TranslationService.t('profile')}
              </button>
            </nav>
          )}

          {/* الجزء الأيمن من الهيدر */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* منتقي اللغة */}
            <div className="relative group">
              <button className="flex items-center space-x-2 space-x-reverse p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                <Globe size={20} />
                <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
              </button>
              
              {/* قائمة اللغات */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full flex items-center space-x-3 space-x-reverse p-3 text-right hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                      currentLang === lang.code ? 'bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300' : ''
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="flex-1">{lang.name}</span>
                    {currentLang === lang.code && (
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* زر الوضع الداكن */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* زر القائمة (الهامبرغر) */}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* القائمة المنزلقة للجوال */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* القائمة */}
          <div className="absolute top-0 left-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl transform transition-transform">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">{TranslationService.t('menu')}</h2>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-2">
              {/* اختيار اللغة في القائمة */}
              <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">اللغة / Language</h3>
                <div className="flex space-x-2">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex-1 p-2 rounded-lg border-2 transition-all ${
                        currentLang === lang.code
                          ? 'border-green-500 bg-green-50 dark:bg-green-900'
                          : 'border-gray-300 dark:border-gray-600 hover:border-green-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-lg">{lang.flag}</div>
                        <div className="text-xs mt-1">{lang.code.toUpperCase()}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {user ? (
                <>
                  <button 
                    onClick={() => { onNavigate('dashboard'); setIsMenuOpen(false); }}
                    className="w-full flex items-center space-x-3 space-x-reverse p-3 rounded-lg text-right hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <User size={20} className="text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300">{TranslationService.t('dashboard')}</span>
                  </button>
                  
                  <button 
                    onClick={() => { onNavigate('courses'); setIsMenuOpen(false); }}
                    className="w-full flex items-center space-x-3 space-x-reverse p-3 rounded-lg text-right hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <BookOpen size={20} className="text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">{TranslationService.t('courses')}</span>
                  </button>
                  
                  <button 
                    onClick={() => { onNavigate('profile'); setIsMenuOpen(false); }}
                    className="w-full flex items-center space-x-3 space-x-reverse p-3 rounded-lg text-right hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Award size={20} className="text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">{TranslationService.t('profile')}</span>
                  </button>
                  
                  <button 
                    onClick={() => { onNavigate('settings'); setIsMenuOpen(false); }}
                    className="w-full flex items-center space-x-3 space-x-reverse p-3 rounded-lg text-right hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Settings size={20} className="text-gray-500" />
                    <span className="text-gray-700 dark:text-gray-300">{TranslationService.t('settings')}</span>
                  </button>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 space-x-reverse p-3 rounded-lg text-right hover:bg-red-50 dark:hover:bg-red-900 transition-colors text-red-600 dark:text-red-400"
                    >
                      <LogOut size={20} />
                      <span>{TranslationService.t('logout')}</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => { onNavigate('login'); setIsMenuOpen(false); }}
                    className="w-full flex items-center space-x-3 space-x-reverse p-3 rounded-lg text-right hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <User size={20} className="text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">{TranslationService.t('login')}</span>
                  </button>
                  
                  <button 
                    onClick={() => { onNavigate('signup'); setIsMenuOpen(false); }}
                    className="w-full flex items-center space-x-3 space-x-reverse p-3 rounded-lg text-right hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <User size={20} className="text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300">{TranslationService.t('signup')}</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
