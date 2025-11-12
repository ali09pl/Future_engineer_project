import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Clock, Users, Star, BookOpen, CheckCircle, FileText, Download } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // بيانات الكورس (ستأتي من API لاحقاً)
  const course = {
    id: 1,
    title: "مقدمة في الذكاء الاصطناعي",
    description: "تعلم أساسيات الذكاء الاصطناعي وتطبيقاته في العالم الحقيقي من الصفر حتى الاحتراف",
    longDescription: "هذا الكورس سيساعدك على فهم أساسيات الذكاء الاصطناعي وتطبيقاته العملية. سنغطي المفاهيم الأساسية، التاريخ، والتطبيقات الحديثة في مختلف المجالات.",
    duration: "120",
    difficulty: "مبتدئ",
    image: "🤖",
    progress: 30,
    enrolled: 1247,
    rating: 4.8,
    reviews: 289,
    instructor: {
      name: "د. أحمد محمد",
      bio: "خبير في الذكاء الاصطناعي مع أكثر من 10 سنوات خبرة",
      students: 5000,
      courses: 15
    },
    price: "مجاني",
    language: "العربية",
    lastUpdated: "2024-01-15",
    features: ["شهادة معتمدة", "مشاريع عملية", "دعم مباشر", "تمارين تفاعلية"],
    lessons: [
      { id: 1, title: "ما هو الذكاء الاصطناعي؟", duration: "15", completed: true, type: "فيديو", preview: true },
      { id: 2, title: "تاريخ الذكاء الاصطناعي", duration: "20", completed: true, type: "فيديو", preview: false },
      { id: 3, title: "التعلم الآلي vs الذكاء الاصطناعي", duration: "25", completed: false, type: "فيديو", preview: false },
      { id: 4, title: "تطبيقات الذكاء الاصطناعي", duration: "30", completed: false, type: "فيديو", preview: true },
      { id: 5, title: "مستقبل الذكاء الاصطناعي", duration: "30", completed: false, type: "اختبار", preview: false }
    ],
    requirements: [
      "لا توجد متطلبات مسبقة",
      "حماس للتعلم",
      "اتصال بالإنترنت"
    ],
    whatYouLearn: [
      "فهم أساسيات الذكاء الاصطناعي",
      "التعرف على تطبيقات الذكاء الاصطناعي",
      "مستقبل الذكاء الاصطناعي",
      "كيفية البدء في هذا المجال"
    ]
  };

  const startLesson = (lessonId) => {
    // الانتقال إلى صفحة الدرس
    navigate(`/course/${id}/lesson/${lessonId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center space-x-2 space-x-reverse text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mb-4"
          >
            <ArrowRight className="transform rotate-180" size={20} />
            <span>العودة للوحة التحكم</span>
          </button>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {course.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {course.description}
              </p>
            </div>
            
            <div className="mt-4 lg:mt-0">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200 flex items-center space-x-2 space-x-reverse">
                <Play size={20} />
                <span>استمر في التعلم</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* المحتوى الرئيسي */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex space-x-2 space-x-reverse p-4 border-b border-gray-200 dark:border-gray-700">
                {[
                  { id: 'overview', label: 'نظرة عامة' },
                  { id: 'curriculum', label: 'المحتوى' },
                  { id: 'instructor', label: 'المدرب' },
                  { id: 'reviews', label: 'التقييمات' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">ماذا ستتعلم؟</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.whatYouLearn.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3 space-x-reverse">
                            <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">المتطلبات</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        {course.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">وصف الكورس</h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {course.longDescription}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        محتوى الكورس ({course.lessons.length} دروس)
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {course.duration} دقيقة إجمالاً
                      </span>
                    </div>

                    {course.lessons.map((lesson, index) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <div className="flex items-center space-x-4 space-x-reverse">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            lesson.completed 
                              ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
                              : 'bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-300'
                          }`}>
                            {lesson.completed ? (
                              <CheckCircle size={16} />
                            ) : (
                              <span className="text-sm">{index + 1}</span>
                            )}
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-gray-800 dark:text-white">
                              {lesson.title}
                            </h4>
                            <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500 dark:text-gray-400">
                              <span className="flex items-center space-x-1 space-x-reverse">
                                <Clock size={14} />
                                <span>{lesson.duration} دقيقة</span>
                              </span>
                              <span>{lesson.type}</span>
                              {lesson.preview && (
                                <span className="text-green-600 dark:text-green-400">عينة مجانية</span>
                              )}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => startLesson(lesson.id)}
                          className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-lg text-sm ${
                            lesson.completed
                              ? 'bg-gray-600 text-white hover:bg-gray-700'
                              : 'bg-green-600 text-white hover:bg-green-700'
                          }`}
                        >
                          <Play size={16} />
                          <span>{lesson.completed ? 'إعادة' : 'ابدأ'}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'instructor' && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          {course.instructor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {course.instructor.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{course.instructor.bio}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-2xl font-bold text-gray-800 dark:text-white">
                          {course.instructor.courses}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">كورسات</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-2xl font-bold text-gray-800 dark:text-white">
                          {course.instructor.students.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">طالب</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-2xl font-bold text-gray-800 dark:text-white">
                          4.9
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">تقييم</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2 space-x-reverse mb-2">
                          <span className="text-3xl font-bold text-gray-800 dark:text-white">
                            {course.rating}
                          </span>
                          <div className="flex items-center space-x-1 space-x-reverse">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star
                                key={star}
                                size={20}
                                className={`${
                                  star <= Math.floor(course.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {course.reviews} تقييم
                        </p>
                      </div>
                    </div>

                    {/* تقييمات وهمية */}
                    {[
                      { name: "محمد أحمد", rating: 5, comment: "كورس رائع ومفيد جداً", date: "2024-01-20" },
                      { name: "فاطمة الخالد", rating: 4, comment: "المحتوى جميل ولكن يحتاج المزيد من الأمثلة", date: "2024-01-18" },
                      { name: "خالد السعدي", rating: 5, comment: "أفضل كورس للذكاء الاصطناعي بالعربية", date: "2024-01-15" }
                    ].map((review, index) => (
                      <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3 space-x-reverse">
                            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                            <div>
                              <h4 className="font-semibold text-gray-800 dark:text-white">{review.name}</h4>
                              <div className="flex items-center space-x-1 space-x-reverse">
                                {[1, 2, 3, 4, 5].map(star => (
                                  <Star
                                    key={star}
                                    size={14}
                                    className={`${
                                      star <= review.rating
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300 dark:text-gray-600'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* فيديو الكورس */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center relative">
                <div className="text-6xl">🤖</div>
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-opacity">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Play size={24} className="text-purple-600 ml-1" />
                  </div>
                </button>
              </div>
              
              <div className="p-6">
                <div className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {course.price === 'مجاني' ? 'مجاني' : 'رسوم الاشتراك'}
                </div>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-200 mb-4">
                  {course.progress > 0 ? 'استمر في التعلم' : 'اشترك الآن'}
                </button>
                
                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                  {course.price === 'مجاني' ? 'لا يوجد تفويض للشراء' : 'ضمان استرداد الأموال لمدة 30 يوم'}
                </div>
              </div>
            </div>

            {/* معلومات الكورس */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-4">معلومات الكورس</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">المستوى:</span>
                  <span className="font-medium text-gray-800 dark:text-white">{course.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">المدة:</span>
                  <span className="font-medium text-gray-800 dark:text-white">{course.duration} دقيقة</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">الدروس:</span>
                  <span className="font-medium text-gray-800 dark:text-white">{course.lessons.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">اللغة:</span>
                  <span className="font-medium text-gray-800 dark:text-white">{course.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">التحديث:</span>
                  <span className="font-medium text-gray-800 dark:text-white">{course.lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* الشهادة */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center space-x-3 space-x-reverse mb-3">
                <FileText size={24} className="text-green-500" />
                <h3 className="font-semibold text-gray-800 dark:text-white">شهادة الإكمال</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                احصل على شهادة معتمدة عند إكمال هذا الكورس
              </p>
              <button className="w-full flex items-center justify-center space-x-2 space-x-reverse py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Download size={16} />
                <span>تحميل العينة</span>
              </button>
            </div>
   </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
