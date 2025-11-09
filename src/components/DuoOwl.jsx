import { useState, useEffect } from 'react';
import { MessageCircle, X, BookOpen, GraduationCap, Languages, Star, Award, Bell } from 'lucide-react';

export default function DuoOwl() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [isMoving, setIsMoving] = useState(false);
  const [streak, setStreak] = useState(3); // عدد الأيام المتتالية

  const motivationalMessages = [
    "🦉 وقت رائع للتعلم! هل جربت الدرس الجديد اليوم؟",
    "🎯 استمر! كل دقيقة تعلم تقربك من هدفك",
    "🚀 أنت متميز! لقد تعلمت 5 مفاهيم جديدة هذا الأسبوع",
    "📚 لا تنسى الممارسة اليومية، إنها سر التقدم",
    "💪 أنت قادر على إكمال هذا التحدي، أثق فيك!",
    "🌟 رائع! لديك ${streak} أيام متتالية في التعلم",
    "🏆 أنت على بعد خطوات من الإنجاز التالي!"
  ];

  const showRandomMessage = () => {
    setIsMoving(true);
    const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
    setMessage(randomMessage.replace('${streak}', streak));
    setTimeout(() => setIsMoving(false), 1000);
  };

  const quickActions = [
    { icon: BookOpen, label: 'دروسي', action: () => showRandomMessage() },
    { icon: GraduationCap, label: 'التحدي', action: () => showRandomMessage() },
    { icon: Languages, label: 'إنجازات', action: () => showRandomMessage() }
  ];

  useEffect(() => {
    // حركة عشوائية للبومة
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsMoving(true);
        setTimeout(() => setIsMoving(false), 500);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isVisible ? (
        <button
          onClick={() => {
            setIsVisible(true);
            showRandomMessage();
          }}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce relative"
        >
          <MessageCircle size={24} />
          {/* إشعار صغير */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">3</span>
          </div>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl border border-green-200 w-80 overflow-hidden">
          {/* الرأس */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="relative">
                <div className={`w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-300 ${isMoving ? 'scale-110' : 'scale-100'}`}>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-blink"></div>
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-blink" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
                <div className="absolute -bottom-1 left-3 w-2 h-1 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <span className="text-white font-semibold">ديو المساعد</span>
                <div className="flex items-center space-x-1 text-yellow-300">
                  <Star size={12} fill="currentColor" />
                  <span className="text-xs">المستوى 2</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-green-700 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <Award size={12} className="ml-1" />
                {streak} أيام
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-white hover:bg-white/20 p-1 rounded"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* الجسد والرسالة */}
          <div className="p-4 bg-gradient-to-b from-green-50 to-white">
            <div className="flex items-start space-x-3 space-x-reverse">
              {/* البومة */}
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 bg-green-400 rounded-full flex items-center justify-center relative transition-all duration-500 ${isMoving ? 'rotate-6' : 'rotate-0'}`}>
                  <div className="w-12 h-10 bg-green-300 rounded-full"></div>
                  {/* العيون الكبيرة */}
                  <div className="absolute top-3 flex space-x-4">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-inner">
                      <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-inner">
                      <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  {/* الأجنحة */}
                  <div className="absolute -left-1 top-4 w-3 h-6 bg-green-500 rounded-full transform -rotate-45"></div>
                  <div className="absolute -right-1 top-4 w-3 h-6 bg-green-500 rounded-full transform rotate-45"></div>
                </div>
              </div>

              {/* فقاعة الكلام */}
              <div className="bg-white border border-green-200 rounded-2xl rounded-tl-none p-3 shadow-sm flex-1">
                <div className="text-gray-700 text-sm leading-relaxed">
                  {message || "🦉 مرحباً! أنا ديو، سأبقى معك في رحلة التعلم!"}
                </div>
                {/* مؤشر الكتابة */}
                <div className="flex space-x-1 mt-2 justify-end">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* الإجراءات السريعة */}
          <div className="p-3 bg-green-50 border-t border-green-200">
            <div className="grid grid-cols-3 gap-2">
              {quickActions.map((action, index) => (
                <button 
                  key={index}
                  onClick={action.action}
                  className="text-xs bg-white border border-green-200 rounded-lg p-2 hover:bg-green-100 transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-1"
                >
                  <action.icon size={12} />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* شريط التقدم والإنجازات */}
          <div className="px-3 pb-3 space-y-2">
            <div>
              <div className="flex justify-between text-xs text-green-700 mb-1">
                <span>تقدمك اليومي</span>
                <span>65%</span>
              </div>
              <div className="bg-green-200 rounded-full h-2">
                <div 
                  className="bg-green-600 rounded-full h-2 transition-all duration-1000"
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">النقاط: 150</span>
              <span className="text-blue-600">الإنجازات: 3/10</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
