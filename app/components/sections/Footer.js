'use client';

const Footer = () => {
  const socialAccounts = [
    {
      platform: 'Instagram',
      username: '_p_h0_',
      url: 'https://www.instagram.com/_p_h0_?igsh=MTJ5bHQ1NWp1NndmaQ==',
      icon: '📷',
    },
    {
      platform: 'GitHub',
      username: 'ali09pl',
      url: 'https://github.com/ali09pl',
      icon: '💻',
    },
    {
      platform: 'Gmail',
      username: 'alikhallou037',
      url: 'mailto:alikhallou037@gmail.com',
      icon: '📧',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">FE</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                Future<span className="text-white">Engineer</span>
              </h3>
              <p className="text-gray-400 text-sm">منصة تعليم البرمجة</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            منصة عربية مجانية لتعليم البرمجة وتطوير الويب بطريقة عملية
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 space-x-reverse mb-8">
          {socialAccounts.map((account, index) => (
            <a
              key={index}
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-2xl"
              title={`${account.platform}`}
            >
              {account.icon}
            </a>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="space-y-2 mb-4">
            <p className="text-gray-500">
              📧 للاستفسارات: 
              <a href="mailto:alikhallou037@gmail.com" className="text-gray-400 hover:text-white mr-1">
                alikhallou037@gmail.com
              </a>
            </p>
          </div>
          
          <p className="text-gray-500">
            © {new Date().getFullYear()} Future Engineer. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            منصة تعليمية مجانية للجميع
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
