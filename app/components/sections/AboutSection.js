'use client';

const AboutSection = () => {
  const skills = [
    { name: 'تطوير الويب', level: 85 },
    { name: 'تصميم واجهات المستخدم', level: 80 },
    { name: 'قواعد البيانات', level: 75 },
    { name: 'التطوير بلغة JavaScript', level: 90 },
    { name: 'React & Next.js', level: 88 },
    { name: 'Tailwind CSS', level: 95 },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              👨‍💻 عن منصة Future Engineer
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
              <p>
                <span className="font-semibold text-black dark:text-white">🎯 المهمة:</span> تمكين العرب من تعلم البرمجة بطريقة عملية ومجانية
              </p>
              <p>
                <span className="font-semibold text-black dark:text-white">🚀 النهج:</span> التركيز على المشاريع العملية وبناء المهارات الحقيقية
              </p>
              <p>
                <span className="font-semibold text-black dark:text-white">💡 المحتوى:</span> دروس مجانية عالية الجودة من الصفر حتى المستوى المتقدم
              </p>
              <p className="pt-4 text-gray-700 dark:text-gray-200">
                Future Engineer هي منصة تعليمية تهدف إلى تقديم محتوى برمجي عالي الجودة للعرب.
                نركز على الجانب العملي والتطبيقي لضمان اكتساب المهارات الحقيقية التي يحتاجها سوق العمل.
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                جميع الدروس مجانية تماماً وستبقى مجانية للأبد.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-2xl">FE</span>
              </div>
              <div className="mr-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Future Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">منصة تعليمية مجانية</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">🛠️ التقنيات التي نعلمها</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-black dark:bg-white rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
