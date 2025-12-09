'use client';

const SocialSection = () => {
  const socialAccounts = [
    {
      platform: 'Instagram',
      username: '_p_h0_',
      url: 'https://www.instagram.com/_p_h0_?igsh=MTJ5bHQ1NWp1NndmaQ==',
      icon: '📷',
      description: 'التحديثات والإعلانات'
    },
    {
      platform: 'GitHub',
      username: 'ali09pl',
      url: 'https://github.com/ali09pl',
      icon: '💻',
      description: 'مستودعات المشاريع'
    },
    {
      platform: 'Gmail',
      username: 'alikhallou037',
      url: 'mailto:alikhallou037@gmail.com',
      icon: '📧',
      description: 'الدعم والاستفسارات'
    },
    {
      platform: 'Website',
      username: 'future-engineer',
      url: 'https://future-engineer-project.vercel.app',
      icon: '🌐',
      description: 'الموقع الرسمي'
    },
  ];

  return (
    <section id="social" className="py-20 bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🌐 تواصل معنا
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            تابعنا على منصات التواصل للحصول على آخر التحديثات
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialAccounts.map((account, index) => (
            <a
              key={index}
              href={account.url}
              target={account.platform === 'Gmail' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 rounded-2xl p-6 transition-colors border border-gray-700 group hover:scale-[1.02] transform transition-transform"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{account.icon}</div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  {account.platform === 'Gmail' ? 'إرسال بريد →' : 'زيارة →'}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{account.platform}</h3>
              <p className="text-gray-400 mb-3">@{account.username}</p>
              <p className="text-gray-300 text-sm">{account.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-full">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold">FE</span>
            </div>
            <div>
              <p className="font-medium">Future Engineer</p>
              <p className="text-sm text-gray-400">منصة تعليم البرمجة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
