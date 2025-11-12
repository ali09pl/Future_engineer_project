import { useState, useEffect } from 'react';
import { Award, BookOpen, TrendingUp, Users, Play, Clock, Star, Filter } from 'lucide-react';
import { CourseService } from '../../services/courseService';
import { TranslationService } from '../../services/translationService';
import DailyChallenges from './DailyChallenges';
import InteractiveLesson from '../learning/InteractiveLesson';

export default function Dashboard({ user, onLogout }) {
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showInteractive, setShowInteractive] = useState(false);

  useEffect(() => {
    loadCourses();
    loadStats();
  }, []);

  const loadCourses = async () => {
    const coursesData = await CourseService.getAllCourses();
    setCourses(coursesData);
  };

  const loadStats = async () => {
    const statsData = await CourseService.getUserStats(user.id);
    setStats(statsData);
  };

  const getSortedCourses = (courses) => {
    const filtered = courses.filter(course => {
      if (activeTab === 'all') return true;
      if (activeTab === 'in-progress') return course.progress > 0 && course.progress < 100;
      if (activeTab === 'completed') return course.progress === 100;
      if (activeTab === 'new') return course.progress === 0;
      return true;
    });

    switch (sortBy) {
      case 'popular':
        return filtered.sort((a, b) => b.enrolled - a.enrolled);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return filtered.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
      case 'duration':
        return filtered.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
      default:
        return filtered;
    }
  };

  const filteredCourses = getSortedCourses(courses);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'مبتدئ': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'متوسط': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'متقدم': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getPriceBadge = (price) => {
    return price === 'مجاني' 
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
  };

  if (showInteractive) {
    return <InteractiveLesson />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header Stats */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {TranslationService.t('welcomeBack')} {user.fullName}! 👋
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {TranslationService.t('continueJourney')}
              </p>
            </div>
            
            <button
              onClick={() => setShowInteractive(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 transform hover:scale-105"
            >
              {TranslationService.t('startInteractiveLesson')} 🚀
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl p-4 border border-green-200 dark:border-green-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 dark:text-green-400 text-sm">
                    {TranslationService.t('points')}
                  </p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">{user.points}</p>
                </div>
                <Award size={24} className="text-green-500" />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">
                    {TranslationService.t('enrolledCourses')}
                  </p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">{stats?.enrolledCourses || 0}</p>
                </div>
                <BookOpen size={24} className="text-blue-500" />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl p-4 border border-purple-200 dark:border-purple-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 dark:text-purple-400 text-sm">
                    {TranslationService.t('streakDays')}
                  </p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">{user.streakDays}</p>
                </div>
                <TrendingUp size={24} className="text-purple-500" />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-xl p-4 border border-orange-200 dark:border-orange-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 dark:text-orange-400 text-sm">
                    {TranslationService.t('completedLessons')}
                  </p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">{stats?.completedLessons || 0}</p>
                </div>
                <Users size={24} className="text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* التحديات اليومية */}
          <div className="xl:col-span-1">
            <DailyChallenges />
          </div>

          {/* الكورسات */}
          <div className="xl:col-span-3">
            {/* Header with Tabs and Sort */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 mb-8">
              <div className="flex space-x-2 space-x-reverse overflow-x-auto">
                {[
                  { id: 'all', label: TranslationService.t('allCourses'), count: courses.length },
                  { id: 'in-progress', label: TranslationService.t('inProgress'), count: courses.filter(c => c.progress > 0 && c.progress < 100).length },
                  { id: 'completed', label: TranslationService.t('completed'), count: courses.filter(c => c.progress === 100).length },
                  { id: 'new', label: TranslationService.t('new'), count: courses.filter(c => c.progress === 0).length }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'bg-green-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      activeTab === tab.id
                        ? 'bg-white text-green-600'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-3 space-x-reverse">
                <Filter size={18} className="text-gray-500" />
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <option value="popular">الأكثر شيوعاً</option>
                  <option value="rating">الأعلى تقييماً</option>
                  <option value="newest">الأحدث</option>
                  <option value="duration">المدة</option>
                </select>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCourses.map(course => (
                <div key={course.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
                  {/* Course Header */}
                  <div className={`p-6 ${course.headerColor} relative overflow-hidden`}>
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                      {course.pattern}
                    </div>
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className="text-4xl">{course.image}</div>
                      <div className="flex space-x-2 space-x-reverse">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(course.difficulty)}`}>
                          {course.difficulty}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriceBadge(course.price)}`}>
                          {course.price}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 relative z-10">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm relative z-10">
                      {course.description}
                    </p>
                  </div>

                  {/* Course Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Clock size={16} />
                        <span>{course.duration} {TranslationService.t('duration')}</span>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <BookOpen size={16} />
                        <span>{course.lessons.length} {TranslationService.t('lessons')}</span>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Users size={16} />
                        <span>{course.enrolled.toLocaleString()} {TranslationService.t('students')}</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    {course.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                          <span>{TranslationService.t('progress')}</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star 
                            key={star} 
                            size={16} 
                            className={`${
                              star <= Math.floor(course.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300 dark:text-gray-600'
                            }`} 
                          />
                        ))}
                        <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
                          ({course.rating})
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {course.reviews} {TranslationService.t('reviews')}
                      </span>
                    </div>
                    
                    {/* Action Button */}
                    <button className={`w-full flex items-center justify-center space-x-2 space-x-reverse py-3 rounded-lg font-semibold transition duration-200 ${
                      course.progress === 0 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : course.progress === 100
                        ? 'bg-gray-600 hover:bg-gray-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}>
                      <Play size={18} />
                      <span>
                        {course.progress === 0 
                          ? TranslationService.t('startLearning')
                          : course.progress === 100 
                          ? TranslationService.t('courseCompleted')
                          : TranslationService.t('continueLearning')
                        }
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                  لا توجد كورسات
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {activeTab === 'in-progress' 
                    ? 'لا توجد كورسات قيد التقدم حالياً'
                    : activeTab === 'completed'
                    ? 'لا توجد كورسات مكتملة بعد'
                    : 'لا توجد كورسات جديدة'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
