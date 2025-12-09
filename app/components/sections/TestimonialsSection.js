'use client';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'محمد أحمد',
      content: 'المنصة ساعدتني في بناء أساس قوي في البرمجة',
      project: 'مشروع متجر إلكتروني',
      avatar: 'M'
    },
    {
      name: 'فاطمة علي',
      content: 'المحتوى واضح والتمارين عملية جداً',
      project: 'تطبيق لإدارة المهام',
      avatar: 'ف'
    },
    {
      name: 'خالد السعودي',
      content: 'الدعم المباشر من علي كان مميزاً وساعدني في تجاوز العقبات',
      project: 'موقع شخصي',
      avatar: 'خ'
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            💬 آراء المتعلمين
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            تجارب حقيقية من متعلمين استفادوا من المحتوى
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl text-gray-300 dark:text-gray-600 mb-4">"</div>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black font-bold text-xl">
                  {testimonial.avatar}
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
