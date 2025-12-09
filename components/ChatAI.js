'use client';

import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';

const ChatAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'مرحباً! أنا مساعدك الذكي لتعلم البرمجة. كيف يمكنني مساعدتك اليوم؟', sender: 'bot' }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = { id: Date.now(), text: message, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    
    // محاكاة رد المساعد بعد ثانية
    setTimeout(() => {
      const responses = [
        'هذا سؤال ممتاز! البرمجة تبدأ بفهم الأساسيات مثل المتغيرات والشروط.',
        'أقترح أن تبدأ بـ JavaScript فهي لغة متعددة الاستخدامات وسهلة التعلم.',
        'لتعلم React، ابدأ بمشاهدة الدروس التفاعلية ثم قم ببناء مشاريع صغيرة.',
        'أفضل طريقة لتعلم البرمجة هي الممارسة المستمرة وبناء المشاريع العملية.',
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const botMessage = { id: Date.now() + 1, text: randomResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-black text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-40 group"
      >
        <div className="relative">
          <MessageCircle size={28} />
          <div className="absolute -top-1 -right-1">
            <Sparkles size={14} className="text-yellow-300" />
          </div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap">
            مساعد الذكاء الاصطناعي
          </div>
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-primary-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-black text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold">مساعد الذكاء الاصطناعي</h3>
                <p className="text-xs opacity-90">متصل ● جاهز للمساعدة</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 max-h-64 overflow-y-auto">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    msg.sender === 'user'
                      ? 'bg-black text-white rounded-br-none'
                      : 'bg-primary-gray-100 text-primary-gray-800 rounded-bl-none'
                  }`}
                >
                  <div className="flex items-start space-x-2 space-x-reverse">
                    <div className={`p-1 rounded-full ${msg.sender === 'user' ? 'bg-white/20' : 'bg-black/10'}`}>
                      {msg.sender === 'user' ? (
                        <User size={14} />
                      ) : (
                        <Bot size={14} />
                      )}
                    </div>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-primary-gray-200 p-4">
            <div className="flex space-x-2 space-x-reverse">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="اكتب سؤالك هنا..."
                className="flex-1 border border-primary-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="bg-black text-white p-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-primary-gray-500 text-center mt-2">
              مساعد ذكي لتعلم البرمجة ● يدعم العربية
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAI;
