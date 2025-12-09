import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  courses: [
    { name: 'الهندسة المدنية', href: '/courses/civil' },
    { name: 'الهندسة المعمارية', href: '/courses/architecture' },
    { name: 'الهندسة الكهربائية', href: '/courses/electrical' },
    { name: 'الهندسة الميكانيكية', href: '/courses/mechanical' },
    { name: 'هندسة البرمجيات', href: '/courses/software' }
  ],
  company: [
    { name: 'من نحن', href: '/about' },
    { name: 'المدربون', href: '/instructors' },
    { name: 'الأسئلة الشائعة', href: '/faq' },
    { name: 'المدونة', href: '/blog' },
    { name: 'تواصل معنا', href: '/contact' }
  ],
  support: [
    { name: 'مركز المساعدة', href: '/help' },
    { name: 'الشروط والأحكام', href: '/terms' },
    { name: 'سياسة الخصوصية', href: '/privacy' },
    { name: 'استرداد الأموال', href: '/refund' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'فيسبوك' },
  { icon: Twitter, href: 'https://twitter.com', label: 'تويتر' },
  { icon: Instagram, href: 'https://instagram.com', label: 'إنستاجرام' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'لينكدإن' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* القسم العلوي */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* الشعار والوصف */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Future Engineer</h3>
                <p className="text-sm text-gray-400">مستقبلك الهندسي</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              منصة تعليمية متخصصة في الهندسة بجميع مجالاتها. نقدم محتوى تعليمي عالي الجودة يُعدّل بواسطة خبراء في المجال لضمان أفضل تجربة تعليمية.
            </p>

            {/* روابط التواصل الاجتماعي */}
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* روابط الدورات */}
          <div>
            <h4 className="text-lg font-semibold mb-4">الدورات</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((l
