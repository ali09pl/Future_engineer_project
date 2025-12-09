'use client';

import { Play, Clock, Eye, ThumbsUp, Download, Share2 } from 'lucide-react';
import { useState } from 'react';

const VideosPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'tutorials', name: 'دروس تعليمية' },
    { id: 'projects', name: 'مشاريع عملية' },
    { id: 'tips', name: 'نصائح وتلميحات' },
  ];

  const videos = [
    {
      id: 1,
      title: 'كيف تبدأ في البرمجة من الصفر',
      description: 'دليل كامل للمبتدئين لبدء رحلتهم في البرمجة',
      duration: '15:30',
      category: 'tutorials'
    },
    {
      id: 2,
      title: 'بناء موقع تجارة إلكترونية كامل',
      description: 'مشروع عملي لبناء موقع متجر إلكتروني',
      duration: '45:20',
      category: 'projects'
    },
    {
      id: 3,
      title: 'أهم 10 أخطاء يرتكبها المبتدئون',
      description: 'نصائح لتجنب الأخطاء الشائعة في البرمجة',
      duration: '22:15',
      category: 'tips'
    },
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
              <span className="text-black font-bold text-2xl">FE</span>
            </div>
            <div className="text-right">
              <h1 className="text-4xl md:text-5xl font-bold">مكتبة الفيديوهات</h1>
              <p className="text-gray-300 mt-2">تعلم بالمشاهدة والتطبيق العملي</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Message */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🎥 قريباً</h3>
            <p className="text-gray-700 dark:text-gray-300">
              مكتبة الفيديوهات قيد التطوير حالياً. سنقوم بإضافة فيديوهات تعليمية عالية الجودة قريباً.
              سجل حسابك ليصلك إشعار عند إضافة أي فيديو جديد.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">أنواع الفيديوهات القادمة:</h3>
          <div className="flex space-x-2 space-x-reverse overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Videos */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 opacity-75"
              >
                {/* Video Placeholder */}
                <div className="h-48 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">⏳</div>
                      <div className="text-gray-600 dark:text-gray-400">قيد الإنتاج</div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {video.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {video.description}
                  </p>

                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium cursor-not-allowed" disabled>
                    قيد الإعداد
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            هل تريد مقترحات لفيديوهات؟
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            أخبرنا عن المواضيع التي تريد أن نغطيها في الفيديوهات القادمة
          </p>
          <a 
            href="mailto:alikhallou037@gmail.com?subject=اقتراح فيديوهات لمنصة Future Engineer"
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100"
          >
            📨 أرسل اقتراحك
          </a>
        </div>
      </section>
    </div>
  );
};

export default VideosPage;
