import { useState } from 'react';
import { Trophy, Star, Flame, Zap, Target, Award, Lock } from 'lucide-react';
import Layout from '../components/Layout';

export default function Achievements() {
  const [filter, setFilter] = useState('all');

  const achievements = [
    {
      id: 1,
      title: 'البداية',
      description: 'أكمل أول درس',
      icon: '🎯',
      progress: 1,
      total: 1,
      unlocked: true,
      unlockedDate: '2024-01-20',
      rarity: 'common',
    },
    {
      id: 2,
      title: 'المثابر',
      description: 'أكمل 5 دروس متتالية',
      icon: '🔥',
      progress: 5,
      total: 5,
      unlocked: true,
      unlockedDate: '2024-02-10',
      rarity: 'uncommon',
    },
    {
      id: 3,
      title: 'الخبير',
      description: 'أكمل 10 دروس',
      icon: '⭐',
      progress: 7,
      total: 10,
      unlocked: false,
      rarity: 'rare',
    },
    {
      id: 4,
      title: 'المعلم',
      description: 'أكمل دورة كاملة',
      icon: '🏆',
      progress: 0,
      total: 1,
      unlocked: false,
      rarity: 'epic',
    },
    {
      id: 5,
      title: 'السرعة',
      description: 'أكمل درس في أقل من 10 دقائق',
      icon: '⚡',
      progress: 3,
      total: 5,
      unlocked: false,
      rarity: 'rare',
    },
    {
      id: 6,
      title: 'الشغف',
      description: 'تعلم لمدة 100 ساعة',
      icon: '💪',
      progress: 45,
      total: 100,
      unlocked: false,
      rarity: 'legendary',
    },
    {
      id: 7,
      title: 'الاجتماعي',
      description: 'شارك 10 تعليقات',
      icon: '💬',
      progress: 4,
      total: 10,
      unlocked: false,
      rarity: 'uncommon',
    },
    {
      id: 8,
      title: 'المشروع الأول',
      description: 'أكمل أول مشروع عملي',
      icon: '🚀',
      progress: 0,
      total: 1,
      unlocked: false,
      rarity: 'uncommon',
    },
  ];

  const stats = {
    total: achievements.length,
    unlocked: achievements.filter((a) => a.unlocked).length,
    percentage: Math.round((achievements.filter((a) => a.unlocked).length / achievements.length) * 100),
  };

  const rarityColors = {
    common: 'bg-gray-100 border-gray-300',
    uncommon: 'bg-green-100 border-green-300',
    rare: 'bg-blue-100 border-blue-300',
    epic: 'bg-purple-100 border-purple-300',
    legendary: 'bg-yellow-100 border-yellow-300',
  };

  const rarityTextColors = {
    common: 'text-gray-700',
    uncommon: 'text-green-700',
    rare: 'text-blue-700',
    epic: 'text-purple-700',
    legendary: 'text-yellow-700',
  };

  const filteredAchievements =
    filter === 'all'
      ? achievements
      : filter === 'unlocked'
      ? achievements.filter((a) => a.unlocked)
      : achievements.filter((a) => !a.unlocked);

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">الإنجازات</h1>
        <p className="text-gray-600">اكتشف الإنجازات وفتح شارات جديدة</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Total Achievements */}
        <div className="glass-effect rounded-2xl p-6 shadow-medium">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">إجمالي الإنجازات</p>
              <p className="text-3xl font-bold text-gray-800">{stats.total}</p>
            </div>
            <Trophy size={40} className="text-yellow-500 opacity-20" />
          </div>
        </div>

        {/* Unlocked */}
        <div className="glass-effect rounded-2xl p-6 shadow-medium">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">مفتوحة</p>
              <p className="text-3xl font-bold text-primary">{stats.unlocked}</p>
            </div>
            <Star size={40} className="text-primary opacity-20" />
          </div>
        </div>

        {/* Completion */}
        <div className="glass-effect rounded-2xl p-6 shadow-medium">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">نسبة الإكمال</p>
              <p className="text-3xl font-bold text-secondary">{stats.percentage}%</p>
            </div>
            <Flame size={40} className="text-secondary opacity-20" />
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-lg font-semibold transition-smooth ${
            filter === 'all'
              ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-medium'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          الكل ({achievements.length})
        </button>
        <button
          onClick={() => setFilter('unlocked')}
          className={`px-6 py-2 rounded-lg font-semibold transition-smooth ${
            filter === 'unlocked'
              ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-medium'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          مفتوحة ({achievements.filter((a) => a.unlocked).length})
        </button>
        <button
          onClick={() => setFilter('locked')}
          className={`px-6 py-2 rounded-lg font-semibold transition-smooth ${
            filter === 'locked'
              ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-medium'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          مقفلة ({achievements.filter((a) => !a.unlocked).length})
        </button>
      </div>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredAchievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`rounded-2xl p-6 border-2 transition-smooth ${
              achievement.unlocked
                ? `${rarityColors[achievement.rarity]} hover:shadow-medium`
                : 'bg-gray-100 border-gray-300 opacity-60'
            }`}
          >
            {/* Icon */}
            <div className="text-5xl mb-4 text-center">
              {achievement.unlocked ? achievement.icon : <Lock size={40} className="mx-auto text-gray-400" />}
            </div>

            {/* Title and Description */}
            <h3 className={`font-bold text-center mb-2 ${achievement.unlocked ? rarityTextColors[achievement.rarity] : 'text-gray-600'}`}>
              {achievement.title}
            </h3>
            <p className={`text-sm text-center mb-4 ${achievement.unlocked ? rarityTextColors[achievement.rarity] : 'text-gray-500'}`}>
              {achievement.description}
            </p>

            {/* Progress Bar */}
            {!achievement.unlocked && (
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">التقدم</span>
                  <span className="text-gray-600">
                    {achievement.progress}/{achievement.total}
                  </span>
                </div>
                <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
                    style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Unlocked Date or Rarity */}
            {achievement.unlocked ? (
              <div className="text-center">
                <p className="text-xs text-gray-600 mb-2">تم فتحها في</p>
                <p className={`font-semibold ${rarityTextColors[achievement.rarity]}`}>{achievement.unlockedDate}</p>
              </div>
            ) : (
              <div className="text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${rarityColors[achievement.rarity]} ${rarityTextColors[achievement.rarity]}`}>
                  {achievement.rarity === 'common'
                    ? 'عام'
                    : achievement.rarity === 'uncommon'
                    ? 'نادر'
                    : achievement.rarity === 'rare'
                    ? 'نادر جداً'
                    : achievement.rarity === 'epic'
                    ? 'ملحمي'
                    : 'أسطوري'}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Rarity Guide */}
      <div className="glass-effect rounded-2xl p-8 shadow-medium mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">دليل الندرة</h2>
        <div className="grid md:grid-cols-5 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="font-semibold text-gray-800 mb-2">عام</p>
            <p className="text-sm text-gray-600">سهل الحصول عليه</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg">
            <p className="font-semibold text-green-800 mb-2">نادر</p>
            <p className="text-sm text-green-700">يتطلب جهداً معتدلاً</p>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg">
            <p className="font-semibold text-blue-800 mb-2">نادر جداً</p>
            <p className="text-sm text-blue-700">يتطلب جهداً كبيراً</p>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg">
            <p className="font-semibold text-purple-800 mb-2">ملحمي</p>
            <p className="text-sm text-purple-700">يتطلب مهارات متقدمة</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg">
            <p className="font-semibold text-yellow-800 mb-2">أسطوري</p>
            <p className="text-sm text-yellow-700">الأصعب والأندر</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
