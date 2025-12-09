'use client';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'أساسيات البرمجة',
      description: 'المفاهيم الأساسية للبدء في عالم البرمجة',
      icon: '💻'
    },
    {
      id: 2,
      title: 'تطوير الويب',
      description: 'بناء مواقع وتطبيقات ويب تفاعلية',
      icon: '🌐'
    },
    {
      id: 3,
      title: 'قواعد البيانات',
      description: 'تعلم إدارة وتنظيم البيانات',
      icon: '🗄️'
    },
    {
      id: 4,
      title: 'مشاريع عملية',
      description: 'تطبيق المعرفة في مشاريع حقيقية',
      icon: '🚀'
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📚 المسارات التعليمية
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            محتوى تعليمي يركز على المهارات العملية
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all duration-300 group hover:shadow-xl dark:hover:shadow-2xl"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{course.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {course.description}
                </p>
                <button className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  سيتم إطلاقه قريباً
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
