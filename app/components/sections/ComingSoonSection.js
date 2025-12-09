'use client';

const ComingSoonSection = () => {
  const comingSoonFeatures = [
    {
      icon: '📊',
      title: 'لوحة تحكم متكاملة',
      description: 'تتبع تقدمك في التعلم ومشاريعك'
    },
    {
      icon: '🎓',
      title: 'شهادات معتمدة',
      description: 'احصل على شهادات عند إكمال المسارات'
    },
    {
      icon: '💬',
      title: 'مجتمع تفاعلي',
      description: 'ناقش وأطرح أسئلتك مع المبرمجين'
    },
    {
      icon: '📱',
      title: 'تطبيق جوال',
      description: 'تعلم أثناء التنقل من هاتفك'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black dark:from-black dark:to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-lg">FE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              🚀 قريباً على المنصة
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            نحن نعمل على تطوير المزيد من الميزات لتحسين تجربتك التعليمية
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {comingSoonFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-white/30 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-8">
            هل لديك اقتراحات لميزات جديدة؟ شاركنا أفكارك!
          </p>
          <a 
            href="mailto:alikhallou037@gmail.com?subject=اقتراحات لمنصة Future Engineer"
            className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>📩</span>
            <span>أرسل اقتراحك</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
