// قاعدة بيانات محلية باستخدام localStorage
export class DatabaseService {
  static getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  static saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  static getCourses() {
    const courses = localStorage.getItem('courses');
    return courses ? JSON.parse(courses) : this.getDefaultCourses();
  }

  static saveCourses(courses) {
    localStorage.setItem('courses', JSON.stringify(courses));
  }

  static getUserProgress(userId) {
    const progress = localStorage.getItem(`userProgress_${userId}`);
    return progress ? JSON.parse(progress) : [];
  }

  static saveUserProgress(userId, progress) {
    localStorage.setItem(`userProgress_${userId}`, JSON.stringify(progress));
  }

  static getDefaultCourses() {
    return [
      {
        id: 1,
        title: 'مقدمة في الذكاء الاصطناعي',
        description: 'تعلم أساسيات الذكاء الاصطناعي وتطبيقاته',
        category: 'ai',
        difficulty: 'مبتدئ',
        duration: 120,
        image: '🤖',
        lessons: [
          {
            id: 1,
            title: 'ما هو الذكاء الاصطناعي؟',
            content: 'مقدمة شاملة عن الذكاء الاصطناعي',
            duration: 30,
            completed: false
          },
          {
            id: 2,
            title: 'تاريخ الذكاء الاصطناعي',
            content: 'رحلة تطور الذكاء الاصطناعي عبر الزمن',
            duration: 25,
            completed: false
          }
        ]
      },
      {
        id: 2,
        title: 'تعلم Machine Learning',
        description: 'أساسيات تعلم الآلة والخوارزميات',
        category: 'ml',
        difficulty: 'متوسط',
        duration: 180,
        image: '🧠',
        lessons: [
          {
            id: 3,
            title: 'مقدمة في تعلم الآلة',
            content: 'ما هو Machine Learning؟',
            duration: 35,
            completed: false
          },
          {
            id: 4,
            title: 'خوارزميات التصنيف',
            content: 'تعلم خوارزميات التصنيف الأساسية',
            duration: 40,
            completed: false
          }
        ]
      },
      {
        id: 3,
        title: 'برمجة Python للمبتدئين',
        description: 'تعلم لغة Python من الصفر',
        category: 'programming',
        difficulty: 'مبتدئ',
        duration: 150,
        image: '🐍',
        lessons: [
          {
            id: 5,
            title: 'المتغيرات وأنواع البيانات',
            content: 'تعلم أساسيات المتغيرات في Python',
            duration: 20,
            completed: false
          },
          {
            id: 6,
            title: 'الجمل الشرطية',
            content: 'استخدام if, else في Python',
            duration: 25,
            completed: false
          }
        ]
      }
    ];
  }
}
