import React, { useState, useEffect } from "react";
import { ChevronLeft, Play, Users, Award, Clock } from "lucide-react";

const HeroStats = [
  { icon: Users, value: "10K+", label: "طالب مسجل" },
  { icon: Award, value: "50+", label: "شهادة معتمدة" },
  { icon: Clock, value: "24/7", label: "دعم فني" }
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          <div className={`text-center lg:text-right space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  Future Engineer
                </span>
                <br />
                <span className="text-gray-700 dark:text-gray-300">
                  مستقبلك الهندسي
                </span>
                <br />
                <span className="text-primary-600 dark:text-primary-400">
                  يبدأ من هنا
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                تعلم الهندسة من الصفر حتى الاحتراف من خلال منصة تفاعلية توفر لك تجربة تعليمية غير مسبوقة مع خبراء في المجال
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-8">
              {HeroStats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">ابدأ رحلتك الآن</span>
                <ChevronLeft className="relative z-10 mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 border-2 border-primary-200 dark:border-primary-800 rounded-2xl hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300">
                <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                شاهد الفيديو التعريفي
              </button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-8">
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">معتمد من وزارة التعليم</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">شهادات عالمية</span>
              </div>
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-purple-400 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Award className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">شهادتك تنتظرك</h3>
                    <p className="text-gray-600 dark:text-gray-400">ابدأ الآن وحقق طموحك</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
