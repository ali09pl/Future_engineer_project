import { useState, useEffect } from 'react';
import { MessageCircle, X, BookOpen, GraduationCap, Award, Star } from 'lucide-react';

export default function DuoOwl() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [isBlinking, setIsBlinking] = useState(false);

  const messages = [
    "🦉 أهلًا! أنا ديو، جاهز لمساعدتك في التعلم!",
    "🎯 استمر في التقدم! أنت تقترب من هدفك",
    "🚀 رائع! لقد أكملت 3 دروس هذا الأسبوع",
    "📚 الممارسة المنتظمة هي مفتاح النجاح",
    "💪 أنت تستطيع! ثق بنفسك",
    "🌟 لديك 5 أيام متتالية في التعلم - ممتاز!",
    "🏆 أنت على بعد خطوات من الإنجاز القادم!"
  ];

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  const showMessage = () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMsg);
  };

  // تحديد كلاس العين بناءً على حالة الرمش
  const getEyeClass = () => {
    return isBlinking ? 'h-1' : 'h-4';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isVisible ? (
        <button
          onClick={() => {
            setIsVisible(true);
            showMessage();
          }}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl border border-green-200 w-80 overflow-hidden">
          <div className="bg-green-500 p-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-white">
                <Star size={16} fill="currentColor" />
                <span className="text-sm font-semibold">المستوى 2</span>
              </div>
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
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 bg-green-500 rounded-full relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-white rounded-full"></div>
                  
                  <div className="absolute top-4 left-3 right-3 flex justify-between">
                    <div className="relative">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className={"w-4 bg-black rounded-full transition-all duration-200 " + getEyeClass()}></div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className={"w-4 bg-black rounded-full transition-all duration-200 " + getEyeClass()}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-orange-400 rounded"></div>
                  
                  <div className="absolute top-8 -left-2 w-4 h-6 bg-green-600 rounded-full transform -rotate-45"></div>
                  <div className="absolute top-8 -right-2 w-4 h-6 bg-green-600 rounded-full transform rotate-45"></div>
                </div>
                
                <div className="absolute -bottom-2 left-4 right-4 flex justify-between">
                  <div className="w-3 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-3 h-2 bg-orange-400 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white border border-green-200 rounded-2xl rounded-tl-none p-3 shadow-sm flex-1">
                <div className="text-gray-700 text-sm leading-relaxed">
                  {message || "🦉 أهلًا! أنا ديو، حريص على مساعدتك في رحلة التعلم!"}
                </div>
                <div className="flex space-x-1 mt-2 justify-end">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-green-50 border-t border-green-200">
            <div className="grid grid-cols-3 gap-2">
              <button 
                onClick={showMessage}
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
                <Award size={12} />
                <span>إنجازات</span>
              </button>
            </div>
          </div>

          <div className="px-3 pb-3">
            <div className="flex justify-between text-xs text-green-700 mb-1">
              <span>تقدمك اليومي</span>
              <span>75%</span>
            </div>
            <div className="bg-green-200 rounded-full h-2">
              <div className="bg-green-600 rounded-full h-2 transition-all duration-1000" style={{width: '75%'}}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
