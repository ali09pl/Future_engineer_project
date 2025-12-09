'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, X, BookOpen, Video, User, 
  LogIn, Search, Home, GraduationCap,
  ChevronDown
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-primary-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="bg-black p-2 rounded-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary-gray-900">
                  Future<span className="text-black">Engineer</span>
                </h1>
                <p className="text-xs text-primary-gray-500">منصة تعليمية</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            <Link
              href="/"
              className="flex items-center space-x-1 space-x-reverse text-primary-gray-700 hover:text-black transition-colors"
            >
              <Home size={18} />
              <span>الرئيسية</span>
            </Link>
            
            <div className="relative group">
              <Link
                href="/courses"
                className="flex items-center space-x-1 space-x-reverse text-primary-gray-700 hover:text-black transition-colors py-2"
              >
                <BookOpen size={18} />
                <span>الدروس</span>
                <ChevronDown size={16} className="mr-1" />
              </Link>
              
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-primary-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/courses/basics"
                  className="block px-4 py-3 text-primary-gray-700 hover:bg-primary-gray-50 hover:text-black transition-colors"
                >
                  أساسيات البرمجة
                </Link>
                <Link
                  href="/courses/web"
                  className="block px-4 py-3 text-primary-gray-700 hover:bg-primary-gray-50 hover:text-black transition-colors"
                >
                  تطوير الويب
                </Link>
                <Link
                  href="/courses/mobile"
                  className="block px-4 py-3 text-primary-gray-700 hover:bg-primary-gray-50 hover:text-black transition-colors"
                >
                  تطبيقات الجوال
                </Link>
              </div>
            </div>
            
            <Link
              href="/videos"
              className="flex items-center space-x-1 space-x-reverse text-primary-gray-700 hover:text-black transition-colors"
            >
              <Video size={18} />
              <span>الفيديوهات</span>
            </Link>
            
            <Link
              href="/about"
              className="flex items-center space-x-1 space-x-reverse text-primary-gray-700 hover:text-black transition-colors"
            >
              <User size={18} />
              <span>حول</span>
            </Link>
          </div>

          {/* Search and Auth */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن دروس..."
                className="pr-10 pl-4 py-2 border border-primary-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-64 text-sm"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-gray-400" size={18} />
            </div>
            
            <div className="flex items-center space-x-3 space-x-reverse">
              <Link
                href="/login"
                className="text-primary-gray-700 hover:text-black transition-colors text-sm font-medium"
              >
                تسجيل الدخول
              </Link>
              <Link
                href="/register"
                className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-gray-900 transition-colors shadow-sm hover:shadow"
              >
                اشترك مجاناً
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-gray-100 bg-white">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="flex items-center space-x-3 space-x-reverse text-primary-gray-700 hover:text-black hover:bg-primary-gray-50 p-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={18} />
                <span>الرئيسية</span>
              </Link>
              
              <div>
                <Link
                  href="/courses"
                  className="flex items-center justify-between text-primary-gray-700 hover:text-black hover:bg-primary-gray-50 p-3 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <BookOpen size={18} />
                    <span>الدروس</span>
                  </div>
                  <ChevronDown size={16} />
                </Link>
                
                <div className="mr-8 space-y-1">
                  <Link
                    href="/courses/basics"
                    className="block text-primary-gray-600 hover:text-black hover:bg-primary-gray-50 p-3 rounded-lg text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    • أساسيات البرمجة
                  </Link>
                  <Link
                    href="/courses/web"
                    className="block text-primary-gray-600 hover:text-black hover:bg-primary-gray-50 p-3 rounded-lg text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    • تطوير الويب
                  </Link>
                  <Link
                    href="/courses/mobile"
                    className="block text-primary-gray-600 hover:text-black hover:bg-primary-gray-50 p-3 rounded-lg text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    • تطبيقات الجوال
                  </Link>
                </div>
              </div>
              
              <Link
                href="/videos"
                className="flex items-center space-x-3 space-x-reverse text-primary-gray-700 hover:text-black hover:bg-primary-gray-50 p-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Video size={18} />
                <span>الفيديوهات</span>
              </Link>
              
              <Link
                href="/about"
                className="flex items-center space-x-3 space-x-reverse text-primary-gray-700 hover:text-black hover:bg-primary-gray-50 p-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} />
                <span>حول</span>
              </Link>
              
              <div className="pt-4 mt-4 border-t border-primary-gray-100">
                <div className="px-3 mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="ابحث عن دروس..."
                      className="w-full pr-10 pl-4 py-2.5 border border-primary-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-gray-400" size={18} />
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3 px-3">
                  <Link
                    href="/login"
                    className="text-center py-2.5 text-black border-2 border-black rounded-full font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    تسجيل الدخول
                  </Link>
                  <Link
                    href="/register"
                    className="text-center py-2.5 bg-black text-white rounded-full font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    اشترك مجاناً
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
