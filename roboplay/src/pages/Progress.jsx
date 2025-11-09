import { useState } from 'react';
import { TrendingUp, Calendar, BookOpen, Clock, Target, Award } from 'lucide-react';
import Layout from '../components/Layout';

export default function Progress() {
  const [timeRange, setTimeRange] = useState('month');

  const courses = [
    {
      id: 1,
      name: 'أساسيات الروبوتات',
      progress: 75,
      lessons: 12,
      totalLessons: 16,
      hours: 32,
      totalHours: 40,
      status: 'قيد الدراسة',
    },
    {
      id: 2,
      name: 'البرمجة مع Python',
      progress: 100,
      lessons: 20,
      totalLessons: 20,
      hours: 45,
      totalHours: 45,
      status: 'مكتمل',
    },
    {
      id: 3,
      name: 'الذكاء الاصطناعي المتقدم',
      progress: 40,
      lessons: 8,
      totalLessons: 20,
      hours: 18,
      totalHours: 45,
      status: 'قيد الدراسة',
    },
    {
      id: 4,
      name: 'تطبيقات الروبوتات الصناعية',
      progress: 0,
      lessons: 0,
      totalLessons: 15,
      hours: 0,
      totalHours: 35,
      status: 'لم تبدأ',
    },
  ];

  const weeklyStats = [
    { day: 'الاثنين', hours: 2.5, lessons: 1 },
    { day: 'الثلاثاء', hours: 3.0, lessons: 2 },
    { day: 'الأربعاء', hours: 1.5, lessons: 1 },
    { day: 'الخميس', hours: 4.0, lessons: 2 },
    { day: 'الجمعة', hours: 2.0, lessons: 1 },
    { day: 'السبت', hours: 3.5, lessons: 2 },
    { day: 'الأحد', hours: 2.0, lessons: 1 },
  ];

  const totalWeeklyHours = weeklyStats.reduce((sum, stat) => sum + stat.hours, 0);
  const maxHours = Math.max(...weeklyStats.map((s) => s.hours));

  const milestones = [
    { date: '2024-01-20', event: 'أكملت أول درس', type: 'lesson' },
    { date: '2024-02-10', event: 'حققت 10 ساعات تعلم', type: 'hours' },
    { date: '2024-02-25', event: 'أكملت دورة البرمجة', type: 'course' },
    { date: '2024-03-05', event: 'حققت 50 ساعة تعلم', type: 'hours' },
  ];

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">تقدمك في التعلم</h1>
        <p className="text-gray-600">تابع إحصائياتك وتقدمك في الدروس والدورات</p>
      </div>

      {/* Overall Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="glass-effect rounded-2xl p-6 shadow-medium">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">إجمالي الساعات</p>
              <p className="text-3xl font-bold text-primary">95.5</p>
            </div>
            <Clock size={40} className="text-primary opacity-20" />
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6 shadow-medium">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">الدروس المكتملة</p>
              <p className="text-3xl font-bold text-secondary">40</p>
            </div>
            <BookOpen size={40} className="text-secondary opacity-20" />
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6 shadow-medium">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">الدورات المكتملة</p>
              <p className="text-3xl font-bold text-accent">1</p>
            </div>
            <Award size={40} className="text-accent opacity-20" />
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6 shadow-medium">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">متوسط يومي</p>
              <p className="text-3xl font-bold text-yellow-500">2.7 س</p>
            </div>
            <TrendingUp size={40} className="text-yellow-500 opacity-20" />
          </div>
        </div>
      </div>

      {/* Weekly Activity */}
      <div className="glass-effect rounded-2xl p-8 shadow-medium mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">نشاطك الأسبوعي</h2>

        {/* Chart */}
        <div className="mb-8">
          <div className="flex items-end justify-between h-64 gap-2 mb-4">
            {weeklyStats.map((stat, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="relative w-full h-full flex items-end justify-center">
                  <div
                    className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg transition-all hover:shadow-medium"
                    style={{ height: `${(stat.hours / maxHours) * 100}%` }}
                  >
                    <div className="h-full flex items-start justify-center pt-2">
                      <span className="text-white text-xs font-bold">{stat.hours}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3 text-center">{stat.day}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm text-gray-600 mb-1">إجمالي الساعات هذا الأسبوع</p>
              <p className="text-2xl font-bold text-primary">{totalWeeklyHours} ساعة</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">متوسط الساعات يومياً</p>
              <p className="text-2xl font-bold text-secondary">{(totalWeeklyHours / 7).toFixed(1)} ساعة</p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Progress */}
      <div className="glass-effect rounded-2xl p-8 shadow-medium mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">تقدم الدورات</h2>

        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{course.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{course.lessons}/{course.totalLessons} دروس</span>
                    <span>{course.hours}/{course.totalHours} ساعات</span>
                    <span
                      className={`px-3 py-1 rounded-full font-semibold ${
                        course.status === 'مكتمل'
                          ? 'bg-green-100 text-green-700'
                          : course.status === 'قيد الدراسة'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {course.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">التقدم الكلي</span>
                  <span className="text-sm font-bold text-primary">{course.progress}%</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="glass-effect rounded-2xl p-8 shadow-medium">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">محطاتك البارزة</h2>

        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary">
                  <Calendar size={20} className="text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{milestone.event}</p>
                <p className="text-sm text-gray-600">{milestone.date}</p>
              </div>
              <div className="flex-shrink-0">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    milestone.type === 'lesson'
                      ? 'bg-blue-100 text-blue-700'
                      : milestone.type === 'hours'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}
                >
                  {milestone.type === 'lesson'
                    ? 'درس'
                    : milestone.type === 'hours'
                    ? 'ساعات'
                    : 'دورة'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
