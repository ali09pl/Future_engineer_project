import React, { useState, useEffect } from 'react';
import { Target, CheckCircle, Clock, Award, Zap } from 'lucide-react';
import { TranslationService } from '../../services/translationService';

const DailyChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [streak, setStreak] = useState(5);

  useEffect(() => {
    // تحميل التحديات اليومية
    const dailyChallenges = [
      {
        id: 1,
        title: TranslationService.t('completeLesson'),
        description: TranslationService.t('completeLessonDesc'),
        points: 10,
        completed: true,
        type: "lesson",
        icon: "📚"
      },
      {
        id: 2,
        title: TranslationService.t('interactiveExercise'),
        description: TranslationService.t('interactiveExerciseDesc'),
        points: 15,
        completed: false,
        type: "exercise",
        icon: "💻"
      },
      {
        id: 3,
        title: TranslationService.t('getStars'),
        description: TranslationService.t('getStarsDesc'),
        points: 20,
        completed: false,
        type: "stars",
        icon: "⭐"
      },
      {
        id: 4,
        title: TranslationService.t('shareAchievement'),
        description: TranslationService.t('shareAchievementDesc'),
        points: 5,
        completed: false,
        type: "social",
        icon: "📱"
      }
    ];
    setChallenges(dailyChallenges);
  }, []);

  const completeChallenge = (challengeId) => {
    setChallenges(challenges.map(challenge => 
      challenge.id === challengeId 
        ? { ...challenge, completed: true }
        : challenge
    ));
  };

  const totalPoints = challenges.reduce((sum, challenge) => 
    challenge.completed ? sum + challenge.points : sum, 0
  );

  const completedCount = challenges.filter(c => c.completed).length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3 space-x-reverse">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Zap size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {TranslationService.t('dailyChallenges')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {TranslationService.t('completeTasks')}
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="flex items-center space-x-2 space-x-reverse text-yellow-600 dark:text-yellow-400">
            <Target size={20} />
            <span className="font-bold">{completedCount}/{challenges.length}</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{totalPoints} {TranslationService.t('points')}</div>
        </div>
      </div>

      {/* Streak */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 rounded-xl p-4 mb-6 border border-orange-200 dark:border-orange-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="p-2 bg-orange-500 rounded-full">
              <Award size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">
                {TranslationService.t('dayStreak')}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {streak} {TranslationService.t('days')} {TranslationService.t('streakDays')}
              </p>
            </div>
          </div>
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            🔥
          </div>
        </div>
      </div>

      {/* Challenges List */}
      <div className="space-y-4">
        {challenges.map(challenge => (
          <div
            key={challenge.id}
            className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 ${
              challenge.completed
                ? 'bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-700'
                : 'bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-600'
            }`}
          >
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="text-2xl">{challenge.icon}</div>
              <div className="flex-1">
                <h4 className={`font-semibold ${
                  challenge.completed 
                    ? 'text-green-800 dark:text-green-300' 
                    : 'text-gray-800 dark:text-white'
                }`}>
                  {challenge.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {challenge.description}
                </p>
                <div className="flex items-center space-x-4 space-x-reverse mt-2">
                  <div className="flex items-center space-x-1 space-x-reverse text-yellow-600 dark:text-yellow-400">
                    <Award size={14} />
                    <span className="text-sm font-medium">+{challenge.points}</span>
                  </div>
                  {!challenge.completed && (
                    <div className="flex items-center space-x-1 space-x-reverse text-gray-500">
                      <Clock size={14} />
                      <span className="text-sm">
                        {TranslationService.t('remaining')} 12 {TranslationService.t('hours')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {challenge.completed ? (
              <div className="flex items-center space-x-2 space-x-reverse text-green-600 dark:text-green-400">
                <CheckCircle size={24} className="fill-current" />
                <span className="font-semibold">{TranslationService.t('completed')}</span>
              </div>
            ) : (
              <button
                onClick={() => completeChallenge(challenge.id)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-200"
              >
                {TranslationService.t('start')}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span>{TranslationService.t('todayProgress')}</span>
          <span>{Math.round((completedCount / challenges.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(completedCount / challenges.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DailyChallenges;
