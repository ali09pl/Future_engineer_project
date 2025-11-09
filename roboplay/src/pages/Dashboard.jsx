import { BarChart3, TrendingUp, Clock, Flame, Trophy, BookOpen } from 'lucide-react';
import Layout from '../components/Layout';
import { SAMPLE_LESSONS, DEFAULT_USER_STATS } from '../const';

export default function Dashboard() {
  const stats = DEFAULT_USER_STATS;

  return (
    <Layout>
      {/* Welcome Section */}
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">مرحباً بك، أحمد! 👋</h1>
        <p className="text-gray-600">إليك ملخص تقدمك في التعلم</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {/* Lessons Completed */}
        <div className="glass-effect rounded-xl p-6 hover:shadow-medium transition-smooth group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen size={24} className="text-primary" />
            </div>
            <span className="text-2xl font-bold text-primary">{stats.lessonsCompleted}</span>
          </div>
          <p className="text-gray-600 text-sm">الدروس المكتملة</p>
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-secondary w-full"></div>
          </div>
        </div>

        {/* Hours Learned */}
        <div className="glass-effect rounded-xl p-6 hover:shadow-medium transition-smooth group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock size={24} className="text-secondary" />
            </div>
            <span className="text-2xl font-bold text-secondary">{stats.totalHoursLearned}</span>
          </div>
          <p className="text-gray-600 text-sm">ساعات التعلم</p>
          <p className="text-xs text-gray-500 mt-2">هذا الشهر</p>
        </div>

        {/* Current Streak */}
        <div className="glass-effect rounded-xl p-6 hover:shadow-medium transition-smooth group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Flame size={24} className="text-orange-500" />
            </div>
            <span className="text-2xl font-bold text-orange-500">{stats.currentStreak}</span>
          </div>
          <p className="text-gray-600 text-sm">سلسلة التعلم</p>
          <p className="text-xs text-gray-500 mt-2">أيام متتالية</p>
        </div>

        {/* Achievements */}
        <div className="glass-effect rounded-xl p-6 hover:shadow-medium transition-smooth group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Trophy size={24} className="text-yellow-500" />
            </div>
            <span className="text-2xl font-bold text-yellow-500">{stats.achievements}</span>
          </div>
          <p className="text-gray-600 text-sm">الإنجازات</p>
          <p className="text-xs text-gray-500 mt-2">تم فتحها</p>
        </div>
      </div>

      {/* Continue Learning Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">استمر في التعلم</h2>
          <a href="/lessons" className="text-primary hover:text-secondary transition-smooth font-semibold">
            عرض الكل →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SAMPLE_LESSONS.slice(1, 3).map((lesson) => (
            <div
              key={lesson.id}
              className="glass-effect rounded-xl overflow-hidden hover:shadow-medium transition-smooth group cursor-pointer"
            >
              <div className="h-40 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  📚
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{lesson.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-gray-600">التقدم</span>
                      <span className="text-xs font-bold text-primary">{lesson.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                        style={{ width: `${lesson.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-500">{lesson.duration}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-semibold hover:shadow-medium transition-smooth">
                      متابعة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Lessons Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">جميع الدروس</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {SAMPLE_LESSONS.map((lesson) => (
            <div
              key={lesson.id}
              className="glass-effect rounded-xl p-6 hover:shadow-medium transition-smooth group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{lesson.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    lesson.level === 'مبتدئ'
                      ? 'bg-green-100 text-green-700'
                      : lesson.level === 'متوسط'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {lesson.level}
                  </span>
                </div>
                {lesson.completed && (
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700">✓</span>
                  </div>
                )}
              </div>
              <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-gray-600">التقدم</span>
                    <span className="text-xs font-bold text-primary">{lesson.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                      style={{ width: `${lesson.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-500">{lesson.duration}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-semibold hover:shadow-medium transition-smooth">
                    {lesson.completed ? 'إعادة المراجعة' : 'ابدأ'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
