'use client';

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-gray-100/[0.02]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 mb-8">
            <div className="w-20 h-20 bg-black dark:bg-white rounded-2xl flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-3xl">FE</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Future<span className="text-black dark:text-white">Engineer</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            👋 مرحباً بكم في
            <span className="text-black dark:text-white block mt-2">منصة تعليم البرمجة</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            منصة عربية متكاملة لتعلم البرمجة من الصفر إلى الاحتراف
            <br />
            دروس عملية - مشاريع حقيقية - مجتمع داعم
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/register"
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              🎓 ابدأ التعلم مجاناً
            </a>
            
            <a 
              href="#courses"
              className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
            >
              📚 استكشاف الكورسات
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
