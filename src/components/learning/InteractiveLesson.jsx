import React, { useState } from 'react';
import { Code, Play, Check, HelpCircle, Lightbulb } from 'lucide-react';

const InteractiveLesson = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [completed, setCompleted] = useState(false);

  const lesson = {
    title: "تعلم كتابة أول كود Python",
    steps: [
      {
        type: "explanation",
        content: "في Python، نستخدم الدالة print() لعرض النصوص على الشاشة.",
        example: "print('مرحبا بالعالم!')"
      },
      {
        type: "interactive",
        content: "اكتب كود لطباعة اسمك على الشاشة",
        hint: "استخدم print() وضع اسمك بين الأقواس",
        solution: "print('اسمك')",
        userInput: "print('')"
      },
      {
        type: "quiz",
        question: "ماذا يطبع الكود التالي: print(2 + 3)",
        options: ["5", "2 + 3", "Error", "23"],
        correctAnswer: 0
      }
    ]
  };

  const currentStepData = lesson.steps[currentStep];

  const checkAnswer = () => {
    if (currentStepData.type === "interactive") {
      if (userCode.trim() === currentStepData.solution) {
        setCompleted(true);
      }
    } else if (currentStepData.type === "quiz") {
      // منطق التحقق من الإجابة
    }
  };

  const nextStep = () => {
    if (currentStep < lesson.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setCompleted(false);
      setUserCode('');
      setShowHint(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                الخطوة {currentStep + 1} من {lesson.steps.length}
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                🐍 Python
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl">💻</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-100 dark:bg-gray-700 px-6 py-2">
        <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / lesson.steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {currentStepData.type === "explanation" && (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <Lightbulb size={24} className="text-blue-500" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">شرح</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {currentStepData.content}
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <Code size={20} className="text-green-400" />
                <h4 className="text-green-400 font-mono font-bold">المثال</h4>
              </div>
              <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                {currentStepData.example}
              </pre>
            </div>
          </div>
        )}

        {currentStepData.type === "interactive" && (
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900 rounded-xl p-6 border border-green-200 dark:border-green-700">
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <Code size={24} className="text-green-500" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">جرب بنفسك</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                {currentStepData.content}
              </p>

              {showHint && (
                <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 space-x-reverse text-yellow-800 dark:text-yellow-200">
                    <HelpCircle size={18} />
                    <span className="font-semibold">تلميح:</span>
                  </div>
                  <p className="text-yellow-700 dark:text-yellow-300 mt-1">
                    {currentStepData.hint}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-green-400 font-mono font-bold">المحرر</h4>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center space-x-2 space-x-reverse text-yellow-400 hover:text-yellow-300"
                >
                  <HelpCircle size={16} />
                  <span>تلميح</span>
                </button>
              </div>
              
              <div className="font-mono text-sm">
                <div className="text-gray-400 mb-2"># اكتب الكود هنا</div>
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  className="w-full bg-gray-800 text-green-400 p-4 rounded-lg font-mono resize-none h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder={currentStepData.userInput}
                />
              </div>

              <div className="mt-4 flex space-x-3 space-x-reverse">
                <button
                  onClick={checkAnswer}
                  disabled={!userCode.trim()}
                  className="flex items-center space-x-2 space-x-reverse bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200 disabled:opacity-50"
                >
                  <Check size={18} />
                  <span>تحقق</span>
                </button>
                
                <button className="flex items-center space-x-2 space-x-reverse bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200">
                  <Play size={18} />
                  <span>تشغيل</span>
                </button>
              </div>
            </div>

            {completed && (
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Check size={24} className="text-white" />
                  <div>
                    <h4 className="text-xl font-bold">أحسنت! 🎉</h4>
                    <p>لقد كتبت الكود بشكل صحيح</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {currentStepData.type === "quiz" && (
          <div className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">سؤال اختباري</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {currentStepData.question}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentStepData.options.map((option, index) => (
                <button
                  key={index}
                  className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl text-right hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors border-2 border-transparent hover:border-green-300 dark:hover:border-green-600"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">{option}</span>
                    <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
          >
            السابق
          </button>

          <div className="flex items-center space-x-3 space-x-reverse">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              +10 نقاط لكل خطوة
            </span>
            <button
              onClick={nextStep}
              disabled={!completed && currentStepData.type === "interactive"}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg font-semibold transition duration-200 disabled:opacity-50"
            >
              {currentStep === lesson.steps.length - 1 ? 'إنهاء' : 'التالي'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveLesson;
