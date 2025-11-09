import { useState } from 'react';
import { Settings as SettingsIcon, Bell, Lock, Eye, Globe, Moon, Volume2, Save, LogOut } from 'lucide-react';
import Layout from '../components/Layout';

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    privacy: {
      profilePublic: true,
      showProgress: true,
      allowMessages: true,
    },
    display: {
      darkMode: false,
      language: 'ar',
      fontSize: 'medium',
    },
    sound: {
      enabled: true,
      volume: 70,
    },
  });

  const handleToggle = (category, setting) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting],
      },
    }));
  };

  const handleChange = (category, setting, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value,
      },
    }));
  };

  const handleSave = () => {
    // TODO: Save settings to backend
    alert('تم حفظ الإعدادات بنجاح!');
  };

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">الإعدادات</h1>
        <p className="text-gray-600">إدارة تفضيلاتك وخيارات الأمان</p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Notifications Settings */}
        <div className="glass-effect rounded-2xl p-8 shadow-medium">
          <div className="flex items-center gap-3 mb-6">
            <Bell size={24} className="text-primary" />
            <h2 className="text-2xl font-bold text-gray-800">الإشعارات</h2>
          </div>

          <div className="space-y-4">
            {/* Email Notifications */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-smooth">
              <div>
                <p className="font-semibold text-gray-800">إشعارات البريد الإلكتروني</p>
                <p className="text-sm text-gray-600">استقبل التحديثات عبر البريد الإلكتروني</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={() => handleToggle('notifications', 'email')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary peer-focus:ring-opacity-50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            {/* Push Notifications */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-smooth">
              <div>
                <p className="font-semibold text-gray-800">إشعارات المتصفح</p>
                <p className="text-sm text-gray-600">استقبل إشعارات فورية على المتصفح</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.push}
                  onChange={() => handleToggle('notifications', 'push')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary peer-focus:ring-opacity-50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            {/* SMS Notifications */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-smooth">
              <div>
                <p className="font-semibold text-gray-800">رسائل نصية قصيرة</p>
                <p className="text-sm text-gray-600">استقبل تنبيهات عبر الرسائل النصية</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.sms}
                  onChange={() => handleToggle('notifications', 'sms')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary peer-focus:ring-opacity-50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="glass-effect rounded-2xl p-8 shadow-medium">
          <div className="flex items-center gap-3 mb-6">
            <Eye size={24} className="text-secondary" />
            <h2 className="text-2xl font-bold text-gray-800">الخصوصية والأمان</h2>
          </div>

          <div className="space-y-4">
            {/* Public Profile */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-smooth">
              <div>
                <p className="font-semibold text-gray-800">جعل الملف الشخصي عام</p>
                <p className="text-sm text-gray-600">السماح للآخرين برؤية ملفك الشخصي</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.privacy.profilePublic}
                  onChange={() => handleToggle('privacy', 'profilePublic')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-secondary peer-focus:ring-opacity-50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
              </label>
            </div>

            {/* Show Progress */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-smooth">
              <div>
                <p className="font-semibold text-gray-800">عرض التقدم</p>
                <p className="text-sm text-gray-600">السماح برؤية تقدمك في الدروس</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.privacy.showProgress}
                  onChange={() => handleToggle('privacy', 'showProgress')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-secondary peer-focus:ring-opacity-50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
              </label>
            </div>

            {/* Allow Messages */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-smooth">
              <div>
                <p className="font-semibold text-gray-800">السماح برسائل خاصة</p>
                <p className="text-sm text-gray-600">السماح للآخرين بإرسال رسائل إليك</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.privacy.allowMessages}
                  onChange={() => handleToggle('privacy', 'allowMessages')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-secondary peer-focus:ring-opacity-50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className="glass-effect rounded-2xl p-8 shadow-medium">
          <div className="flex items-center gap-3 mb-6">
            <Globe size={24} className="text-accent" />
            <h2 className="text-2xl font-bold text-gray-800">العرض واللغة</h2>
          </div>

          <div className="space-y-4">
            {/* Language */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <label className="block text-sm font-semibold text-gray-800 mb-2">اللغة</label>
              <select
                value={settings.display.language}
                onChange={(e) => handleChange('display', 'language', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>

            {/* Font Size */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <label className="block text-sm font-semibold text-gray-800 mb-2">حجم الخط</label>
              <select
                value={settings.display.fontSize}
                onChange={(e) => handleChange('display', 'fontSize', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="small">صغير</option>
                <option value="medium">متوسط</option>
                <option value="large">كبير</option>
              </select>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-smooth">
              <div className="flex items-center gap-3">
                <Moon size={20} className="text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-800">الوضع الليلي</p>
                  <p className="text-sm text-gray-600">تقليل إجهاد العين</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.display.darkMode}
                  onChange={() => handleToggle('display', 'darkMode')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent peer-focus:ring-opacity-50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Sound Settings */}
        <div className="glass-effect rounded-2xl p-8 shadow-medium">
          <div className="flex items-center gap-3 mb-6">
            <Volume2 size={24} className="text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-800">الصوت</h2>
          </div>

          <div className="space-y-4">
            {/* Sound Toggle */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-smooth">
              <p className="font-semibold text-gray-800">تفعيل الأصوات</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.sound.enabled}
                  onChange={() => handleToggle('sound', 'enabled')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-500 peer-focus:ring-opacity-50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>

            {/* Volume Control */}
            {settings.sound.enabled && (
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <label className="font-semibold text-gray-800">مستوى الصوت</label>
                  <span className="text-sm text-gray-600">{settings.sound.volume}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.sound.volume}
                  onChange={(e) => handleChange('sound', 'volume', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-medium transition-smooth"
          >
            <Save size={20} />
            حفظ الإعدادات
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-100 text-red-600 font-semibold rounded-lg hover:bg-red-200 transition-smooth">
            <LogOut size={20} />
            تسجيل الخروج
          </button>
        </div>
      </div>
    </Layout>
  );
}
