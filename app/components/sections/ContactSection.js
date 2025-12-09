'use client';

const ContactSection = () => {
  const contactMethods = [
    {
      platform: 'البريد الإلكتروني',
      info: 'alikhallou037@gmail.com',
      url: 'mailto:alikhallou037@gmail.com',
      icon: '📧'
    },
    {
      platform: 'الهاتف',
      info: 'متوفر للاستفسارات',
      url: 'tel:+21263698959',
      icon: '📱'
    },
    {
      platform: 'الموقع الرسمي',
      info: 'future-engineer-project.vercel.app',
      url: 'https://future-engineer-project.vercel.app',
      icon: '🌐'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
              <span className="text-black font-bold text-2xl">FE</span>
            </div>
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-bold">
                Future<span className="text-white">Engineer</span>
              </h2>
              <p className="text-gray-400">منصة تعليمية مجانية</p>
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            📞 تواصل مع المنصة
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            لديك استفسار أو اقتراح؟ نحن هنا لمساعدتك
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.url}
              target={method.platform === 'البريد الإلكتروني' || method.platform === 'الهاتف' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors border border-gray-700 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{method.platform}</h3>
              <p className="text-gray-300 break-all">{method.info}</p>
              <div className="mt-4 text-sm text-gray-400 group-hover:text-white transition-colors">
                {method.platform === 'البريد الإلكتروني' ? 'إرسال بريد' : 
                 method.platform === 'الهاتف' ? 'اتصال' : 'زيارة الموقع'} →
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">📨 أرسل لنا رسالة</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">الاسم الكامل</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20"
                  placeholder="اكتب اسمك هنا"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">نوع الاستفسار</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20">
                  <option value="">اختر نوع الاستفسار</option>
                  <option value="technical">مشكلة تقنية</option>
                  <option value="content">استفسار عن المحتوى</option>
                  <option value="suggestion">اقتراح</option>
                  <option value="other">أخرى</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">الرسالة</label>
                <textarea 
                  rows="5"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20"
                  placeholder="اكتب رسالتك هنا..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
