import React, { useState } from 'react';
import { User, Award, BookOpen, Calendar, Settings, Edit, Download } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const user = {
    name: "مستخدم تجريبي",
    email: "test@example.com",
    level: 2,
    points: 150,
    streakDays: 5,
    joinDate: "2024-01-01",
    completedCourses: 1,
    enrolledCourses: 3,
    completedLessons: 5
  };

  const achievements = [
    { id: 1, name: "المبتدئ", description: "أكمل أول درس", icon: "🎯", earned: true },
    { id: 2, name: "المثابر", description: "5 أيام متتالية", icon: "🔥", earned: true },
    { id: 3, name: "المتعلم", description: "أكمل أول كورس", icon: "📚", earned: true },
    { id: 4, name: "الخبير", description: "وصل للمستوى 5", icon: "🏆", earned: false }
  ];

  const recentActivity = [
    { id: 1, action: "أكمل درس", course: "مقدمة في الذكاء الاصطناعي", time: "منذ ساعتين", points: 10 },
    { id: 2, action: "سجل دخول", course: "", time: "منذ يوم", points: 5 },
    { id: 3, action: "بدأ كورس", course: "تعلم Machine Learning", time: "منذ 3 أيام", points: 5 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 space-x-reverse">
            {/* الصورة الشخصية */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <User size={48} className="text-white" />
              </div>
              <button className="absolute bottom-2 right-2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-600">
                <Edit size={16} className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* المعلومات الشخصية */}
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {user.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{user.email}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto md:mx-0 md:mr-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">{user.level}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">المستوى</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">{user.points}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">النقاط</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">{user.streakDays}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">أيام متتالية</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">{user.completedCourses}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">كورسات مكتملة</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* المحتوى الرئيسي */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex space-x-2 space-x-reverse p-4 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
                {[
                  { id: 'overview', label: 'نظرة عامة', icon: User },
                  { id: 'achievements', label: 'الإنجازات', icon: Award },
                  { id: 'activity', label: 'النشاط', icon: Calendar },
                  { id: 'settings', label: 'الإعدادات', icon: Settings }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <tab.icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">التقدم العام</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl p-6 border border-green-200 dark:border-green-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-green-600 dark:text-green-400 text-sm">الكورسات المكتملة</p>
                              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                                {user.completedCourses} / {user.enrolledCourses}
                              </p>
                            </div>
                            <BookOpen size={24} className="text-green-500" />
                          </div>
                          <div className="mt-4 w-full bg-green-200 dark:bg-green-700 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(user.completedCourses / user.enrolledCourses) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-blue-600 dark:text-blue-400 text-sm">إجمالي النقاط</p>
                              <p className="text-2xl font-bold text-gray-800 dark:text-white">{user.points}</p>
                            </div>
                            <Award size={24} className="text-blue-500" />
                          </div>
                          <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                            تحتاج {500 - user.points} نقطة للوصول للمستوى 3
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">معلومات الحساب</h3>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                              تاريخ الانضمام
                            </label>
                            <p className="text-gray-800 dark:text-white">{user.joinDate}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                              الدروس المكتملة
                            </label>
                            <p className="text-gray-800 dark:text-white">{user.completedLessons}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'achievements' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">الإنجازات</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievements.map(achievement => (
                        <div
                          key={achievement.id}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            achievement.earned
                              ? 'bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-700'
                              : 'bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600 opacity-60'
                          }`}
                        >
                          <div className="flex items-center space-x-4 space-x-reverse">
                            <div className="text-3xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800 dark:text-white">
                                {achievement.name}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {achievement.description}
                              </p>
                            </div>
                            {achievement.earned && (
                              <Award size={20} className="text-yellow-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'activity' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">النشاط الحديث</h3>
                    <div className="space-y-4">
                      {recentActivity.map(activity => (
                        <div
                          key={activity.id}
                          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="flex items-center space-x-4 space-x-reverse">
                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                              <Award size={18} className="text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800 dark:text-white">
                                {activity.action}
                                {activity.course && (
                                  <span className="text-green-600 dark:text-green-400"> في {activity.course}</span>
                                )}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                            </div>
                          </div>
                          <div className="text-green-600 dark:text-green-400 font-semibold">
                            +{activity.points}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">الإعدادات</h3>
                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-4">تفضيلات الإشعارات</h4>
                        <div className="space-y-3">
                          {[
                            { label: "إشعارات البريد الإلكتروني", enabled: true },
                            { label: "إشعارات الدفع", enabled: true },
                            { label: "إشعارات الكورسات الجديدة", enabled: false }
                          ].map((pref, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-gray-700 dark:text-gray-300">{pref.label}</span>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked={pref.enabled} />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-4">تصدير البيانات</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{user.email}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto md:mx-0 md:mr-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">{user.level}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">المستوى</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">{user.points}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">النقاط</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">{user.streakDays}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">أيام متتالية</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">{user.completedCourses}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">كورسات مكتملة</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* المحتوى الرئيسي */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex space-x-2 space-x-reverse p-4 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
                {[
                  { id: 'overview', label: 'نظرة عامة', icon: User },
                  { id: 'achievements', label: 'الإنجازات', icon: Award },
                  { id: 'activity', label: 'النشاط', icon: Calendar },
                  { id: 'settings', label: 'الإعدادات', icon: Settings }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <tab.icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">التقدم العام</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl p-6 border border-green-200 dark:border-green-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-green-600 dark:text-green-400 text-sm">الكورسات المكتملة</p>
                              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                                {user.completedCourses} / {user.enrolledCourses}
                              </p>
                            </div>
                            <BookOpen size={24} className="text-green-500" />
                          </div>
                          <div className="mt-4 w-full bg-green-200 dark:bg-green-700 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(user.completedCourses / user.enrolledCourses) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-blue-600 dark:text-blue-400 text-sm">إجمالي النقاط</p>
                              <p className="text-2xl font-bold text-gray-800 dark:text-white">{user.points}</p>
                            </div>
                            <Award size={24} className="text-blue-500" />
                          </div>
                          <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                            تحتاج {500 - user.points} نقطة للوصول للمستوى 3
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">معلومات الحساب</h3>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                              تاريخ الانضمام
                            </label>
                            <p className="text-gray-800 dark:text-white">{user.joinDate}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                              الدروس المكتملة
                            </label>
                            <p className="text-gray-800 dark:text-white">{user.completedLessons}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'achievements' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">الإنجازات</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievements.map(achievement => (
                        <div
                          key={achievement.id}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            achievement.earned
                              ? 'bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-700'
                              : 'bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600 opacity-60'
                          }`}
                        >
                          <div className="flex items-center space-x-4 space-x-reverse">
                            <div className="text-3xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800 dark:text-white">
                                {achievement.name}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {achievement.description}
                              </p>
                            </div>
                            {achievement.earned && (
                              <Award size={20} className="text-yellow-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'activity' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">النشاط الحديث</h3>
                    <div className="space-y-4">
                      {recentActivity.map(activity => (
                        <div
                          key={activity.id}
                          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="flex items-center space-x-4 space-x-reverse">
                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                              <Award size={18} className="text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800 dark:text-white">
                                {activity.action}
                                {activity.course && (
                                  <span className="text-green-600 dark:text-green-400"> في {activity.course}</span>
                                )}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                            </div>
                          </div>
                          <div className="text-green-600 dark:text-green-400 font-semibold">
                            +{activity.points}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">الإعدادات</h3>
                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-4">تفضيلات الإشعارات</h4>
                        <div className="space-y-3">
                          {[
                            { label: "إشعارات البريد الإلكتروني", enabled: true },
                            { label: "إشعارات الدفع", enabled: true },
                            { label: "إشعارات الكورسات الجديدة", enabled: false }
                          ].map((pref, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-gray-700 dark:text-gray-300">{pref.label}</span>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked={pref.enabled} />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-4">تصدير البيانات</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
