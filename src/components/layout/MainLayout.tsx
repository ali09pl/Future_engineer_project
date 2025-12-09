import React,{ ReactNode } from 'react';
import{ Header } from './Header';

interface MainLayoutProps {
children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
return (
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
<Header />
<main className="container mx-auto px-4 py-8">
{children}
</main>
<footer className="bg-gray-800 text-white py-8 mt-12">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 className="text-xl font-bold mb-4">Future Engineer</h3>
<p className="text-gray-300">منصة تجمع المهندسين الموهوبين من حول العالم لنشر المعرفة وبناء المستقبل.</p>
</div>
<div>
<h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
<ul className="space-y-2">
<li><a href="#" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors">عن المنصة</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors">سياسة الخصوصية</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold mb-4">الاتصال</h4>
<p className="text-gray-300">contact@future-engineer.com</p>
<p className="text-gray-300">+966 123 456 789</p>
</div>
</div>
<div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
<p>© {new Date().getFullYear()} Future Engineer. جميع الحقوق محفوظة.</p>
</div>
</div>
</footer>
</div>
);
};
