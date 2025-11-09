import { useState } from 'react';
import { Search, Filter, Play, Clock, BarChart3 } from 'lucide-react';
import Layout from '../components/Layout';
import { SAMPLE_LESSONS } from '../const';

export default function Lessons() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedLesson, setSelectedLesson] = useState(null);

  const filteredLessons = SAMPLE_LESSONS.filter((lesson) => {
    const matchesSearch = lesson.title.includes(searchTerm) || lesson.description.includes(searchTerm);
    const matchesLevel = selectedLevel === 'all' || lesson.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">مكتبة الدروس</h1>
        <p className="text-gray-600">اختر من بين مئات الدروس المصممة بعناية</p>
      </div>

      {/* Search and Filter */}
      <div className="glass-effect rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="ابحث عن درس..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
              />
            </div>
          </div>

          {/* Filter */}
          <div>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
            >
              <option value="all">جميع المستويات</option>
              <option value="مبتدئ">مبتدئ</option>
              <option value="متوسط">متوسط</option>
              <option value="متقدم">متقدم</option>
            </select>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredLessons.map((lesson) => (
          <div
            key={lesson.id}
            onClick={() => setSelectedLesson(lesson)}
            className="glass-effect rounded-xl overflow-hidden hover:shadow-medium transition-smooth group cursor-pointer transform hover:scale-105"
          >
            {/* Image */}
            <div className="h-40 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-125 transition-transform">
                📚
              </div>
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all">
                <Play size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">
                    {lesson.title}
                  </h3>
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
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 font-bold">✓</span>
                  </div>
                )}
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{lesson.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
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

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock size={16} />
                  <span>{lesson.duration}</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-semibold hover:shadow-medium transition-smooth">
                  {lesson.completed ? 'إعادة' : 'ابدأ'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredLessons.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">لم يتم العثور على دروس تطابق بحثك</p>
        </div>
      )}

      {/* Lesson Modal */}
      {selectedLesson && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedLesson(null)}
        >
          <div
            className="glass-effect rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="h-48 bg-gradient-to-br from-primary to-secondary relative">
              <button
                onClick={() => setSelectedLesson(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-smooth"
              >
                ✕
              </button>
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                📚
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">{selectedLesson.title}</h2>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  selectedLesson.level === 'مبتدئ'
                    ? 'bg-green-100 text-green-700'
                    : selectedLesson.level === 'متوسط'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {selectedLesson.level}
                </span>
              </div>

              <p className="text-gray-600 text-lg mb-6">{selectedLesson.description}</p>

              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">التقدم</span>
                  <span className="text-lg font-bold text-primary">{selectedLesson.progress}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                    style={{ width: `${selectedLesson.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Info */}
              <div className="grid md:grid-cols-2 gap-6 mb-8 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Clock size={24} className="text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">المدة الزمنية</p>
                    <p className="font-bold text-gray-800">{selectedLesson.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 size={24} className="text-secondary" />
                  <div>
                    <p className="text-sm text-gray-600">المستوى</p>
                    <p className="font-bold text-gray-800">{selectedLesson.level}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedLesson(null)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-medium transition-smooth flex items-center justify-center gap-2"
                >
                  <Play size={20} />
                  {selectedLesson.completed ? 'إعادة المراجعة' : 'ابدأ الدرس'}
                </button>
                <button
                  onClick={() => setSelectedLesson(null)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-smooth"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
