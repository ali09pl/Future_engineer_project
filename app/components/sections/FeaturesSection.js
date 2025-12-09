'use client';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🎯',
      title: 'تعلم عملي',
      description: 'دروس تطبيقية تركز على بناء مشاريع حقيقية'
    },
    {
      icon: '📈',
      title: 'تقدم مستمر',
      description: 'مسار تعليمي منظم من الصفر حتى الاحتراف'
    },
    {
      icon: '💬',
      title: 'دعم مباشر',
      description: 'تواصل مع المدربين والمتعلمين'
    },
    {
      icon: '🔄',
      title: 'تحديث دائم',
      description: 'محتوًى محدث باستمرار مع آخر التقنيات'
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ✨ مميزات المنصة
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            نهج تعليمي عملي يركز على بناء المشاريع الحقيقية
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
