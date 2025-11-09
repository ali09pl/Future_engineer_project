import { useState } from 'react';
import DuoOwl from './components/DuoOwl.jsx';
import LoginForm from './components/auth/LoginForm.jsx';
import SignupForm from './components/auth/SignupForm.jsx';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'login', 'signup'

  const renderContent = () => {
    switch (currentView) {
      case 'login':
        return <LoginForm onSwitchToSignup={() => setCurrentView('signup')} />;
      case 'signup':
        return <SignupForm onSwitchToLogin={() => setCurrentView('login')} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center p-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Future Engineer Project 🚀
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                منصة تعليمية متكاملة للهندسة والذكاء الاصطناعي
              </p>
              <div className="space-x-4 mb-12">
                <button 
                  onClick={() => setCurrentView('login')}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 transform hover:scale-105"
                >
                  ابدأ التعلم
                </button>
                <button 
                  onClick={() => setCurrentView('signup')}
                  className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold border border-gray-300 transition duration-200 transform hover:scale-105"
                >
                  انضم إلينا
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-gray-800 mb-2">تعلم عملي</h3>
                  <p className="text-gray-600 text-sm">مشاريع حقيقية في الذكاء الاصطناعي</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-semibold text-gray-800 mb-2">مسارات سريعة</h3>
                  <p className="text-gray-600 text-sm">تعلم المهارات المطلوبة في السوق</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="text-2xl mb-2">🏆</div>
                  <h3 className="font-semibold text-gray-800 mb-2">شهادات معتمدة</h3>
                  <p className="text-gray-600 text-sm">احصل على شهادات في نهاية كل مسار</p>
                </div>
              </div>
            </div>
            <DuoOwl />
          </div>
        );
    }
  };

  return renderContent();
}

export default App;
