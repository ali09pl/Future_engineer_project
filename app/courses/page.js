'use client';

import { 
  Code, Globe, Database, Smartphone, 
  Cloud, Shield, Terminal, Palette,
  Clock, Users, Award, Star
} from 'lucide-react';

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: 'أساسيات البرمجة',
      description: 'ابدأ رحلتك في عالم البرمجة من الصفر',
      level: 'مبتدئ',
      icon: <Code className="text-blue-500" size={24} />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'تطوير الويب المتكامل',
      description: 'تعلم HTML, CSS, JavaScript لبناء مواقع ويب احترافية',
      level: 'متوسط',
      icon: <Globe className="text-green-500" size={24} />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'قواعد البيانات',
      description: 'تعلم SQL, MongoDB لإدارة وتخزين البيانات',
      level: 'متوسط',
      icon: <Database className="text-purple-500" size={24} />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'تطبيقات الجوال',
      description: 'بناء تطبيقات Android و iOS باستخدام React Native',
      level: 'متقدم',
      icon: <Smartphone className="text-red-500" size={24} />,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 5,
      title: 'الحوسبة السحابية',
      description: 'تعلم AWS, Docker, Kubernetes لنشر التطبيقات',
      level: 'متقدم',
      icon: <Cloud className="text-orange-500" size={24} />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 6,
      title: 'أمن المعلومات',
      description: 'مبادئ وأساسيات أمن المعلومات والاختراق الأخلاقي',
      level: 'متوسط',
      icon: <Shield className="text-indigo-500" size={24} />,
      color: 'from-indigo-500 to-indigo-600'
    },
  ];

  const categories = [
    { name: 'البرمجة', icon: '💻' },
    { name: 'تطوير الويب', icon: '🌐' },
    { name: 'قواعد البيانات', icon: '🗄️' },
    { name: 'الجوال', icon: '📱' },
    { name: 'السحابة', icon: '☁️' },
    { name: 'التصميم', icon: '🎨' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
              <span className="text-black font-bold text-2xl">FE</span>
            </div>
            <div className="text-right">
              <h1 className="text-4xl md:text-5xl font-bold">الكورسات التعليمية</h1>
              <p className="text-gray-300 mt-2">اختر مسارك التعليمي وابدأ رحلة التعلم</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن كورس، موضوع، أو مهارة..."
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100">
                بحث
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">التصنيفات</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">جميع الكورسات</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">كورسات قيد التطوير</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-xl">
                      {course.icon}
                    </div>
                    <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                      {course.level}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {course.description}
                  </p>
                  
                  <button className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    قيد التطوير
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Info Message */}
          <div className="mt-20 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">📢 ملاحظة مهمة</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                جميع الكورسات قيد التطوير حالياً وسيتم إطلاقها قريباً.
                يمكنك التسجيل الآن ليصلك إشعار عند إطلاق أي كورس.
              </p>
              <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-medium hover:opacity-90">
                سجل ليصلك الإشعارات
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            مستعد لبدء رحلتك التعليمية؟
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            سجل حسابك الآن واحصل على إشعارات عند إطلاق الكورسات
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100">
              سجل حسابك المجاني
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10">
              تواصل معنا للاستفسار
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
