import React from 'react';

const DuoOwl = () => {
  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div className="relative">
        {/* البومة - مجرد صورة بدون وظيفة */}
        <div className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl">🦉</div>
        </div>
        
        {/* فقاعة كلام صغيرة */}
        <div className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs">
          <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
            هيا نتعلم! 🚀
          </p>
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default DuoOwl;
