import { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export default function RobotMascot() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isVisible ? (
        <button
          onClick={() => setIsVisible(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <Sparkles size={12} className="text-blue-500" />
              </div>
              <span className="text-white font-semibold">المساعد الآلي</span>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white hover:bg-white/20 p-1 rounded"
            >
              <X size={18} />
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-700 text-right">
              🚀 مرحباً! أنا مساعدك في رحلة تعلم الهندسة والذكاء الاصطناعي
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="text-xs bg-blue-50 text-blue-600 rounded-lg p-2 hover:bg-blue-100">
                ابدأ التعلم
              </button>
              <button className="text-xs bg-gray-50 text-gray-600 rounded-lg p-2 hover:bg-gray-100">
                الدروس المتاحة
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
