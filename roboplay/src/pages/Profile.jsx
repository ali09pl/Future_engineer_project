import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit2, Save, X, Trophy, BookOpen, Clock } from 'lucide-react';
import Layout from '../components/Layout';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'أحمد محمد',
    email: 'ahmed@example.com',
    phone: '+966501234567',
    location: 'الرياض، السعودية',
    bio: 'مهتم بتعلم الروبوتات والذكاء الاصطناعي',
    joinDate: '2024-01-15',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Save to backend
  };

  const achievements = [
    { id: 1, title: 'البداية', description: 'أكمل أول درس', icon: '🎯', unlocked: true },
    { id: 2, title: 'المثابر', description: 'أكمل 5 دروس متتالية', icon: '🔥', unlocked: true },
    { id: 3, title: 'الخبير', description: 'أكمل 10 دروس', icon: '⭐', unlocked: false },
    { id: 4, title: 'المعلم', description: 'أكمل دورة كاملة', icon: '🏆', unlocked: false },
  ];

  return (
    <Layout>
      {/* Header Section */}
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">الملف الشخصي</h1>
        <p className="text-gray-600">إدارة معلومات حسابك والإحصائيات</p>
      </div>

      {/* Profile Card */}
      <div className="glass-effect rounded-2xl p-8 mb-8 shadow-medium">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold">
              أ
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{formData.fullName}</h2>
              <p className="text-gray-600">متعلم نشط</p>
              <p className="text-sm text-gray-500 mt-2">انضم في {formData.joinDate}</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-medium transition-smooth"
          >
            {isEditing ? (
              <>
                <X size={20} />
                إلغاء
              </>
            ) : (
              <>
                <Edit2 size={20} />
                تعديل
              </>
            )}
          </button>
        </div>

        {/* Bio */}
        {!isEditing ? (
          <p className="text-gray-700 mb-6">{formData.bio}</p>
        ) : (
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
            rows="3"
          />
        )}

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="text-center">
            <BookOpen size={24} className="mx-auto text-primary mb-2" />
            <p className="text-2xl font-bold text-gray-800">12</p>
            <p className="text-sm text-gray-600">دروس مكتملة</p>
          </div>
          <div className="text-center">
            <Clock size={24} className="mx-auto text-secondary mb-2" />
            <p className="text-2xl font-bold text-gray-800">45.5</p>
            <p className="text-sm text-gray-600">ساعات التعلم</p>
          </div>
          <div className="text-center">
            <Trophy size={24} className="mx-auto text-yellow-500 mb-2" />
            <p className="text-2xl font-bold text-gray-800">8</p>
            <p className="text-sm text-gray-600">إنجازات</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">معلومات التواصل</h3>
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-primary" />
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              ) : (
                <div>
                  <p className="text-sm text-gray-600">البريد الإلكتروني</p>
                  <p className="text-gray-800">{formData.email}</p>
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-secondary" />
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              ) : (
                <div>
                  <p className="text-sm text-gray-600">رقم الهاتف</p>
                  <p className="text-gray-800">{formData.phone}</p>
                </div>
              )}
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-accent" />
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              ) : (
                <div>
                  <p className="text-sm text-gray-600">الموقع</p>
                  <p className="text-gray-800">{formData.location}</p>
                </div>
              )}
            </div>
          </div>

          {isEditing && (
            <button
              onClick={handleSave}
              className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-medium transition-smooth"
            >
              <Save size={20} />
              حفظ التغييرات
            </button>
          )}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">الإنجازات</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`rounded-xl p-6 text-center transition-smooth ${
                achievement.unlocked
                  ? 'glass-effect shadow-medium'
                  : 'bg-gray-100 opacity-50'
              }`}
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
              {achievement.unlocked && (
                <div className="mt-3 text-xs font-semibold text-green-600">✓ تم فتحها</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Learning Statistics */}
      <div className="glass-effect rounded-2xl p-8 shadow-medium">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">إحصائيات التعلم</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Completion Rate */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">معدل الإكمال</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">الدروس الأساسية</span>
                  <span className="text-sm font-bold text-primary">75%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary w-3/4"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">الدروس المتقدمة</span>
                  <span className="text-sm font-bold text-secondary">40%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-secondary to-accent w-2/5"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">المشاريع</span>
                  <span className="text-sm font-bold text-accent">60%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent to-primary w-3/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">النشاط الأخير</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-primary">
                <p className="text-sm font-semibold text-gray-800">أكملت درس "البرمجة الأساسية"</p>
                <p className="text-xs text-gray-500">منذ يومين</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-secondary">
                <p className="text-sm font-semibold text-gray-800">بدأت درس "الحساسات والمحركات"</p>
                <p className="text-xs text-gray-500">منذ 3 أيام</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-accent">
                <p className="text-sm font-semibold text-gray-800">حققت إنجاز "المثابر"</p>
                <p className="text-xs text-gray-500">منذ أسبوع</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
