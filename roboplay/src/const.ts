// Application Constants
export const APP_NAME = 'RoboPlay';
export const APP_TITLE = 'RoboPlay - منصة تعليمية تفاعلية';
export const APP_DESCRIPTION = 'منصة تعليمية متكاملة لتعليم هندسة الذكاء الاصطناعي والروبوتات';
export const APP_LOGO = '🤖';

// Colors
export const COLORS = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  accent: '#EC4899',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  dark: '#1F2937',
  light: '#F3F4F6',
};

// Navigation Items
export const NAV_ITEMS = [
  { label: 'الرئيسية', href: '/', icon: 'Home' },
  { label: 'الدروس', href: '/lessons', icon: 'BookOpen' },
  { label: 'لوحة التحكم', href: '/dashboard', icon: 'BarChart3' },
  { label: 'الملف الشخصي', href: '/profile', icon: 'User' },
];

// Sidebar Menu Items
export const SIDEBAR_ITEMS = [
  { label: 'لوحة التحكم', href: '/dashboard', icon: 'BarChart3' },
  { label: 'الدروس', href: '/lessons', icon: 'BookOpen' },
  { label: 'التقدم', href: '/progress', icon: 'TrendingUp' },
  { label: 'الإنجازات', href: '/achievements', icon: 'Trophy' },
  { label: 'الإعدادات', href: '/settings', icon: 'Settings' },
];

// Sample Lessons Data
export const SAMPLE_LESSONS = [
  {
    id: 1,
    title: 'مقدمة إلى الروبوتات',
    description: 'تعرف على أساسيات الروبوتات والذكاء الاصطناعي',
    duration: '45 دقيقة',
    level: 'مبتدئ',
    progress: 100,
    completed: true,
  },
  {
    id: 2,
    title: 'البرمجة الأساسية',
    description: 'تعلم أساسيات البرمجة باستخدام Python',
    duration: '60 دقيقة',
    level: 'مبتدئ',
    progress: 65,
    completed: false,
  },
  {
    id: 3,
    title: 'الحساسات والمحركات',
    description: 'فهم كيفية عمل الحساسات والمحركات في الروبوتات',
    duration: '50 دقيقة',
    level: 'متوسط',
    progress: 30,
    completed: false,
  },
  {
    id: 4,
    title: 'التعلم الآلي الأساسي',
    description: 'مقدمة إلى خوارزميات التعلم الآلي',
    duration: '75 دقيقة',
    level: 'متقدم',
    progress: 0,
    completed: false,
  },
];

// User Stats
export const DEFAULT_USER_STATS = {
  lessonsCompleted: 1,
  lessonsInProgress: 2,
  totalHoursLearned: 2.75,
  currentStreak: 5,
  achievements: 3,
};
