import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Download, Share2, ThumbsUp, MessageCircle, Clock, User } from 'lucide-react';
import Layout from '../components/Layout';

export default function LessonPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(80);
  const [liked, setLiked] = useState(false);

  const lesson = {
    id: 1,
    title: 'مقدمة إلى الروبوتات',
    instructor: 'د. محمد أحمد',
    duration: '45:30',
    currentTime: '15:56',
    description: 'في هذا الدرس سنتعلم المبادئ الأساسية للروبوتات وكيفية عملها. سنغطي المكونات الأساسية والمحركات والحساسات.',
    level: 'مبتدئ',
    category: 'الروبوتات',
    views: 2450,
    likes: 342,
    comments: 28,
  };

  const resources = [
    { name: 'ملف الكود', type: 'zip', size: '2.5 MB' },
    { name: 'ملاحظات الدرس', type: 'pdf', size: '1.2 MB' },
    { name: 'مشروع عملي', type: 'folder', size: '5.8 MB' },
  ];

  const comments = [
    {
      id: 1,
      author: 'أحمد علي',
      avatar: 'أ',
      time: 'منذ ساعة',
      text: 'درس رائع جداً! شرح واضح وسهل الفهم.',
      likes: 12,
    },
    {
      id: 2,
      author: 'فاطمة محمود',
      avatar: 'ف',
      time: 'منذ 3 ساعات',
      text: 'هل يمكن توضيح المزيد عن المحركات؟',
      likes: 5,
    },
  ];

  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-8 animate-fade-in-up">
        {/* Video Player Section */}
        <div className="lg:col-span-2">
          {/* Video Player */}
          <div className="glass-effect rounded-2xl overflow-hidden shadow-medium mb-6">
            <div className="relative bg-black aspect-video flex items-center justify-center group">
              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute z-10 w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                {isPlaying ? <Pause size={40} /> : <Play size={40} className="ml-1" />}
              </button>

              {/* Video Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
            </div>

            {/* Player Controls */}
            <div className="bg-gray-900 p-4 space-y-3">
              {/* Progress Bar */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => setProgress(e.target.value)}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{lesson.currentTime}</span>
                  <span>{lesson.duration}</span>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-smooth text-white"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>

                  <div className="flex items-center gap-2 px-2 border-l border-gray-700">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 hover:bg-gray-800 rounded-lg transition-smooth text-white"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => {
                        setVolume(e.target.value);
                        if (isMuted) setIsMuted(false);
                      }}
                      className="w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>

                <button className="p-2 hover:bg-gray-800 rounded-lg transition-smooth text-white">
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Lesson Info */}
          <div className="glass-effect rounded-2xl p-6 shadow-medium mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{lesson.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {lesson.instructor}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {lesson.duration}
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{lesson.level}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6">{lesson.description}</p>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-smooth ${
                  liked
                    ? 'bg-red-100 text-red-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <ThumbsUp size={20} />
                {lesson.likes + (liked ? 1 : 0)}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-smooth">
                <MessageCircle size={20} />
                {lesson.comments}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-smooth">
                <Download size={20} />
                تحميل
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-smooth">
                <Share2 size={20} />
                مشاركة
              </button>
            </div>
          </div>

          {/* Resources */}
          <div className="glass-effect rounded-2xl p-6 shadow-medium mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">الموارد</h2>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-smooth"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{resource.name}</p>
                    <p className="text-sm text-gray-600">{resource.size}</p>
                  </div>
                  <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-smooth">
                    <Download size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="glass-effect rounded-2xl p-6 shadow-medium">
            <h2 className="text-xl font-bold text-gray-800 mb-6">التعليقات</h2>

            {/* Add Comment */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <textarea
                placeholder="أضف تعليقك..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                rows="3"
              />
              <button className="mt-3 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-medium transition-smooth">
                إرسال
              </button>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {comment.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-800">{comment.author}</p>
                        <p className="text-xs text-gray-500">{comment.time}</p>
                      </div>
                      <p className="text-gray-700 mb-2">{comment.text}</p>
                      <button className="text-sm text-primary hover:underline">
                        إعجاب ({comment.likes})
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Progress Card */}
          <div className="glass-effect rounded-2xl p-6 shadow-medium mb-6">
            <h3 className="font-bold text-gray-800 mb-4">تقدم الدرس</h3>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">مكتمل</span>
                <span className="text-sm font-bold text-primary">{progress}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-medium transition-smooth">
              إكمال الدرس
            </button>
          </div>

          {/* Related Lessons */}
          <div className="glass-effect rounded-2xl p-6 shadow-medium">
            <h3 className="font-bold text-gray-800 mb-4">دروس ذات صلة</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-smooth cursor-pointer"
                >
                  <p className="font-semibold text-gray-800 text-sm">الدرس {item}: مقدمة متقدمة</p>
                  <p className="text-xs text-gray-600 mt-1">30:45 دقيقة</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
