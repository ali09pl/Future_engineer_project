import { useState } from 'react';
import { MessageCircle, X, BookOpen, GraduationCap, Languages } from 'lucide-react';

export default function DuoOwl() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const motivationalMessages = [
    "🦉 وقت رائع للتعلم! هل جربت الدرس الجديد اليوم؟",
    "🎯 استمر! كل دقيقة تعلم تقربك من هدفك",
    "🚀 أنت متميز! لقد تعلمت 5 كلمات جديدة هذا الأسبوع",
    "📚 لا تنسى الممارسة اليومية، إنها سر التقدم",
    "💪 أنت قادر على إكمال هذا التحدي، أثق فيك!"
  ];

  const showRandomMessage = () => {
    const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
    setMessage(randomMessage);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isVisible ? (
        <button
          onClick={() => {
            setIsVisible(true);
            showRandomMessage();
          }}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl border border-green-200 w-80 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="relative">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -bottom-1 left-3 w-2 h-1 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="text-white font-semibold">ديو المساعد</span>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white hover:bg-white/20 p-1 rounded"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4 bg-gradient-to-b from-green-50 to-white">
            <div className="flex items-start space-x-3 space-x-reverse">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center relative">
                  <div className="w-12 h-10 bg-green-300 rounded-full"></div>
                  <div className="absolute top-3 flex space-x-4">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-green-200 rounded-2xl rounded-tl-none p-3 shadow-sm flex-1">
                <div className="text-gray-700 text-sm leading-relaxed">
                  {message || "🦉 مرحباً! أنا ديو، سأبقى معك في رحلة التعلم!"}
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-green-50 border-t border-green-200">
            <div className="grid grid-cols-3 gap-2">
              <button 
                onClick={showRandomMessage}
                className="text-xs bg-white border border-green-200 rounded-lg p-2 hover:bg-green-100 transition-colors flex items-center justify-center space-x-1"
              >
                <BookOpen size={12} />
                <span>تشجيع</span>
              </button>
              <button className="text-xs bg-white border border-green-200 rounded-lg p-2 hover:bg-green-100 transition-colors flex items-center justify-center space-x-1">
                <GraduationCap size={12} />
                <span>دروسي</span>
              </button>
              <button className="text-xs bg-white border border-green-200 rounded-lg p-2 hover:bg-green-100 transition-colors flex items-center justify-center space-x-1">
                <Languages size={12} />
                <span>تحدي</span>
              </button>
            </div>
          </div>

          <div className="px-3 pb-3">
            <div className="bg-green-200 rounded-full h-2">
              <div 
                className="bg-green-600 rounded-full h-2 transition-all duration-1000"
                style={{ width: '65%' }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-green-700 mt-1">
              <span>تقدمك اليومي</span>
              <span>65%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
