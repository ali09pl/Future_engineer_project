import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Lessons from './pages/Lessons';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Achievements from './pages/Achievements';
import Progress from './pages/Progress';
import LessonPlayer from './pages/LessonPlayer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simple routing based on URL hash
  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Check URL hash on mount
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash when page changes
  useEffect(() => {
    window.location.hash = currentPage;
  }, [currentPage]);

  // Render pages based on current page
  const renderPage = () => {
    // Public pages (accessible without login)
    if (currentPage === 'home') return <Home onNavigate={handleNavigation} />;
    if (currentPage === 'login') return <Login onNavigate={handleNavigation} />;
    if (currentPage === 'signup') return <Signup onNavigate={handleNavigation} />;

    // Protected pages (require login)
    if (!isLoggedIn) {
      return <Login onNavigate={handleNavigation} />;
    }

    if (currentPage === 'dashboard') return <Dashboard />;
    if (currentPage === 'lessons') return <Lessons />;
    if (currentPage === 'lesson-player') return <LessonPlayer />;
    if (currentPage === 'profile') return <Profile />;
    if (currentPage === 'settings') return <Settings />;
    if (currentPage === 'achievements') return <Achievements />;
    if (currentPage === 'progress') return <Progress />;

    // Default to home
    return <Home onNavigate={handleNavigation} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {renderPage()}
    </div>
  );
}

export default App;
