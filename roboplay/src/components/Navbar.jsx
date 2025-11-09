import { useState } from 'react';
import { Menu, X, Bell, LogOut, Settings, User } from 'lucide-react';
import { APP_LOGO, APP_NAME } from '../const';

export default function Navbar({ onMenuToggle, isMobileMenuOpen }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logging out...');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-soft border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-smooth"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{APP_LOGO}</span>
              <span className="font-bold text-xl gradient-text hidden sm:inline">
                {APP_NAME}
              </span>
            </div>
          </div>

          {/* Center Navigation - Desktop Only */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-primary transition-smooth">
              الرئيسية
            </a>
            <a href="/lessons" className="text-gray-700 hover:text-primary transition-smooth">
              الدروس
            </a>
            <a href="/dashboard" className="text-gray-700 hover:text-primary transition-smooth">
              لوحة التحكم
            </a>
          </div>

          {/* Right Side - Notifications and Profile */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-smooth"
              >
                <Bell size={20} className="text-gray-700" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-medium border border-gray-200 animate-slide-in-right">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">الإشعارات</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <div className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-smooth cursor-pointer">
                      <p className="text-sm font-medium text-gray-800">درس جديد متاح</p>
                      <p className="text-xs text-gray-500 mt-1">تم إضافة درس جديد: التعلم الآلي</p>
                    </div>
                    <div className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-smooth cursor-pointer">
                      <p className="text-sm font-medium text-gray-800">تذكير بالدرس</p>
                      <p className="text-xs text-gray-500 mt-1">لديك درس متبقي لإكماله اليوم</p>
                    </div>
                    <div className="p-4 hover:bg-gray-50 transition-smooth cursor-pointer">
                      <p className="text-sm font-medium text-gray-800">إنجاز جديد</p>
                      <p className="text-xs text-gray-500 mt-1">لقد أكملت 5 دروس متتالية!</p>
                    </div>
                  </div>
                  <div className="p-3 border-t border-gray-200 text-center">
                    <button className="text-sm text-primary hover:text-secondary transition-smooth">
                      عرض جميع الإشعارات
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-smooth"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  أ
                </div>
                <span className="hidden sm:inline text-sm text-gray-700">أحمد</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-medium border border-gray-200 animate-slide-in-right">
                  <div className="p-4 border-b border-gray-200">
                    <p className="font-semibold text-gray-800">أحمد محمد</p>
                    <p className="text-xs text-gray-500">ahmed@example.com</p>
                  </div>
                  <div className="py-2">
                    <a
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-smooth"
                    >
                      <User size={18} />
                      <span>الملف الشخصي</span>
                    </a>
                    <a
                      href="/settings"
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-smooth"
                    >
                      <Settings size={18} />
                      <span>الإعدادات</span>
                    </a>
                  </div>
                  <div className="p-2 border-t border-gray-200">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-smooth"
                    >
                      <LogOut size={18} />
                      <span>تسجيل الخروج</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
