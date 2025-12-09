import Link from 'next/link';
import { 
  Facebook, Twitter, Instagram, Youtube, 
  Mail, Phone, MapPin, Send
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="bg-white p-2 rounded-lg">
                <div className="text-black font-bold text-xl">FE</div>
              </div>
              <h2 className="text-2xl font-bold">
                Future<span className="text-white">Engineer</span>
              </h2>
            </div>
            <p className="mb-8 max-w-md text-primary-gray-300">
              منصة تعليمية عربية متكاملة تهدف إلى تمكين المبتدئين من تعلم البرمجة 
              وتطوير مهاراتهم التقنية من خلال دروس تفاعلية ومشاريع عملية.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse text-primary-gray-300">
                <Mail size={18} />
                <span>support@future-engineer.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-primary-gray-300">
                <Phone size={18} />
                <span>+966 55 123 4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                { name: 'الرئيسية', href: '/' },
                { name: 'الدروس', href: '/courses' },
                { name: 'الفيديوهات', href: '/videos' },
                { name: 'المدونة', href: '/blog' },
                { name: 'حول', href: '/about' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">تواصل معنا</h3>
            <div className="flex space-x-4 space-x-reverse mb-8">
              {[
                { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
                { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
                { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
                { icon: <Youtube size={20} />, href: '#', label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-medium mb-4">اشترك في نشرتنا</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-2 rounded-r-lg bg-white/10 border-none text-sm focus:outline-none"
                />
                <button className="bg-white text-black px-4 py-2 rounded-l-lg hover:bg-primary-gray-100 transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-primary-gray-300">
              © 2024 FutureEngineer. جميع الحقوق محفوظة.
            </p>
          </div>
          
          <div className="flex items-center space-x-6 space-x-reverse">
            <Link href="/privacy" className="text-sm text-primary-gray-300 hover:text-white">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="text-sm text-primary-gray-300 hover:text-white">
              الشروط والأحكام
            </Link>
            <Link href="/contact" className="text-sm text-primary-gray-300 hover:text-white">
              اتصل بنا
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
