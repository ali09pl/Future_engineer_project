import { useState, useEffect } from 'react';
import Header from './components/Header';
import DuoOwl from './components/DuoOwl';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import Dashboard from './components/dashboard/Dashboard';
import { AuthService } from './services/authService';
import { TranslationService } from './services/translationService';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // التحقق من وجود مستخدم مسجل
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setCurrentView('dashboard');
    }
    
    // التحقق من الوضع الداكن
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
    
    setLoading(false);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    setCurrentView('home');
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 dark:border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (currentView) {
      case 'login':
        return <LoginForm onSwitchToSignup={() => setCurrentView('signup')} onLogin={handleLogin} />;
      case 'signup':
        return <SignupForm onSwitchToLogin={() => setCurrentView('login')} onLogin={handleLogin} />;
      case 'dashboard':
        return <Dashboard user={user} onLogout={handleLogout} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {TranslationService.t('welcome')} 🚀
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {TranslationService.t('tagline')}
              </p>
              <div className="space-x-4 mb-12">
                <button 
                  onClick={() => setCurrentView('login')}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 transform hover:scale-105"
                >
                  {TranslationService.t('startLearning')}
                </button>
                <button 
                  onClick={() => setCurrentView('signup')}
                  className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-semibold border border-gray-300 dark:border-gray-600 transition duration-200 transform hover:scale-105"
                >
                  {TranslationService.t('joinUs')}
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 card-hover">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {TranslationService.t('practicalLearning')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {TranslationService.t('practicalDesc')}
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 card-hover">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {TranslationService.t('fastTracks')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {TranslationService.t('fastDesc')}
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 card-hover">
                  <div className="text-2xl mb-2">🏆</div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {TranslationService.t('certificates')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {TranslationService.t('certDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <Header 
        user={user} 
        onLogout={handleLogout} 
        currentView={currentView}
        onNavigate={handleNavigate}
      />
      {renderContent()}
      <DuoOwl />
    </div>
  );
}

export default App;
