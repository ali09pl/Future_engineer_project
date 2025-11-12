export class CourseService {
  static getAllCourses() {
    return [
      {
        id: 1,
        title: "مقدمة في الذكاء الاصطناعي",
        description: "تعلم أساسيات الذكاء الاصطناعي وتطبيقاته في العالم الحقيقي",
        duration: "120",
        difficulty: "مبتدئ",
        image: "🤖",
        progress: 30,
        enrolled: 1247,
        rating: 4.8,
        reviews: 289,
        instructor: "د. أحمد محمد",
        price: "مجاني",
        language: "العربية",
        lastUpdated: "2024-01-15",
        headerColor: "bg-gradient-to-r from-purple-500 to-pink-500",
        pattern: "🔮",
        features: ["شهادة معتمدة", "مشاريع عملية", "دعم مباشر"],
        lessons: [
          { id: 1, title: "ما هو الذكاء الاصطناعي؟", duration: "15", completed: true },
          { id: 2, title: "تاريخ الذكاء الاصطناعي", duration: "20", completed: true },
          { id: 3, title: "التعلم الآلي vs الذكاء الاصطناعي", duration: "25", completed: false },
          { id: 4, title: "تطبيقات الذكاء الاصطناعي", duration: "30", completed: false },
          { id: 5, title: "مستقبل الذكاء الاصطناعي", duration: "30", completed: false }
        ]
      },
      {
        id: 2,
        title: "تعلم Machine Learning",
        description: "أساسيات تعلم الآلة والخوارزميات مع مشاريع عملية",
        duration: "180",
        difficulty: "متوسط",
        image: "⚡",
        progress: 10,
        enrolled: 892,
        rating: 4.9,
        reviews: 156,
        instructor: "د. سارة الخالد",
        price: "مدفوع",
        language: "العربية",
        lastUpdated: "2024-01-10",
        headerColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
        pattern: "📊",
        features: ["6 مشاريع عملية", "شهادة معتمدة", "تمارين تفاعلية"],
        lessons: [
          { id: 1, title: "مقدمة في التعلم الآلي", duration: "20", completed: true },
          { id: 2, title: "الانحدار الخطي", duration: "30", completed: false },
          { id: 3, title: "التصنيف والخوارزميات", duration: "35", completed: false },
          { id: 4, title: "الشبكات العصبية", duration: "40", completed: false },
          { id: 5, title: "مشروع عملي", duration: "55", completed: false }
        ]
      },
      {
        id: 3,
        title: "برمجة Python للمبتدئين",
        description: "تعلم أساسيات لغة Python للذكاء الاصطناعي والتحليل",
        duration: "150",
        difficulty: "مبتدئ",
        image: "🐍",
        progress: 0,
        enrolled: 2156,
        rating: 4.7,
        reviews: 432,
        instructor: "أ. محمد العلي",
        price: "مجاني",
        language: "العربية",
        lastUpdated: "2024-01-08",
        headerColor: "bg-gradient-to-r from-green-500 to-emerald-500",
        pattern: "🐍",
        features: ["تمارين تفاعلية", "دعم مجتمع", "شهادة إكمال"],
        lessons: [
          { id: 1, title: "تركيب Python", duration: "15", completed: false },
          { id: 2, title: "المتغيرات والأنواع", duration: "20", completed: false },
          { id: 3, title: "الهياكل الشرطية", duration: "25", completed: false },
          { id: 4, title: "الحلقات التكرارية", duration: "30", completed: false },
          { id: 5, title: "الدوال", duration: "35", completed: false }
        ]
      },
      {
        id: 4,
        title: "تحليل البيانات مع Pandas",
        description: "تحليل البيانات باستخدام مكتبة Pandas في Python",
        duration: "90",
        difficulty: "متوسط",
        image: "📈",
        progress: 0,
        enrolled: 743,
        rating: 4.6,
        reviews: 198,
        instructor: "د. فاطمة القاسم",
        price: "مدفوع",
        language: "العربية",
        lastUpdated: "2024-01-12",
        headerColor: "bg-gradient-to-r from-orange-500 to-red-500",
        pattern: "📈",
        features: ["مجموعة بيانات حقيقية", "تحليلات متقدمة", "شهادة معتمدة"],
        lessons: [
          { id: 1, title: "مقدمة في Pandas", duration: "15", completed: false },
          { id: 2, title: "معالجة البيانات", duration: "20", completed: false },
          { id: 3, title: "التجميع والتحليل", duration: "25", completed: false },
          { id: 4, title: "التصور البياني", duration: "30", completed: false }
        ]
      },
      {
        id: 5,
        title: "التعلم العميق Deep Learning",
        description: "احتراف الشبكات العصبية والتعلم العميق",
        duration: "240",
        difficulty: "متقدم",
        image: "🧠",
        progress: 0,
        enrolled: 521,
        rating: 4.9,
        reviews: 134,
        instructor: "د. خالد السعدي",
        price: "مدفوع",
        language: "العربية",
        lastUpdated: "2024-01-05",
        headerColor: "bg-gradient-to-r from-indigo-500 to-purple-500",
        pattern: "🧠",
        features: ["مشاريع بحثية", "شبكات عصبية متقدمة", "شهادة معتمدة"],
        lessons: [
          { id: 1, title: "مقدمة في التعلم العميق", duration: "25", completed: false },
          { id: 2, title: "الشبكات العصبية التلافيفية", duration: "40", completed: false },
          { id: 3, title: "معالجة اللغة الطبيعية", duration: "45", completed: false },
          { id: 4, title: "الرؤية الحاسوبية", duration: "50", completed: false },
          { id: 5, title: "مشروع متقدم", duration: "80", completed: false }
        ]
      },
      {
        id: 6,
        title: "تطوير تطبيقات الويب",
        description: "بناء تطبيقات ويب باستخدام React وNode.js",
        duration: "200",
        difficulty: "متوسط",
        image: "🌐",
        progress: 100,
        enrolled: 1678,
        rating: 4.8,
        reviews: 367,
        instructor: "أ. عبدالله الرشيد",
        price: "مجاني",
        language: "العربية",
        lastUpdated: "2024-01-03",
        headerColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
        pattern: "⚛️",
        features: ["مشروع كامل", "نشر التطبيق", "شهادة معتمدة"],
        lessons: [
          { id: 1, title: "مقدمة في React", duration: "25", completed: true },
          { id: 2, title: "مكونات React", duration: "30", completed: true },
          { id: 3, title: "إدارة الحالة", duration: "35", completed: true },
          { id: 4, title: "خوادم Node.js", duration: "40", completed: true },
          { id: 5, title: "مشروع نهائي", duration: "70", completed: true }
        ]
      },
      {
        id: 7,
        title: "أمن المعلومات والهاكر الأخلاقي",
        description: "تعلم أساسيات الأمن السيبراني والاختراق الأخلاقي",
        duration: "160",
        difficulty: "متوسط",
        image: "🛡️",
        progress: 0,
        enrolled: 934,
        rating: 4.7,
        reviews: 223,
        instructor: "د. نورة الفهد",
        price: "مدفوع",
        language: "العربية",
        lastUpdated: "2024-01-18",
        headerColor: "bg-gradient-to-r from-gray-700 to-gray-900",
        pattern: "🔒",
        features: ["معامل افتراضية", "أدوات حقيقية", "شهادة معتمدة"],
        lessons: [
          { id: 1, title: "مقدمة في الأمن السيبراني", duration: "20", completed: false },
          { id: 2, title: "أساسيات الشبكات", duration: "25", completed: false },
          { id: 3, title: "الاختراق الأخلاقي", duration: "35", completed: false },
          { id: 4, title: "حماية الأنظمة", duration: "40", completed: false },
          { id: 5, title: "مشروع أمني", duration: "40", completed: false }
        ]
      },
      {
        id: 8,
        title: "تعلم تطبيقات الجوال",
        description: "تطوير تطبيقات iOS وAndroid باستخدام Flutter",
        duration: "180",
        difficulty: "متوسط",
        image: "📱",
        progress: 0,
        enrolled: 1123,
        rating: 4.6,
        reviews: 278,
        instructor: "أ. لينا التركي",
        price: "مجاني",
        language: "العربية",
        lastUpdated: "2024-01-20",
        headerColor: "bg-gradient-to-r from-teal-500 to-green-500",
        pattern: "🚀",
        features: ["تطبيقين كاملين", "نشر في المتاجر", "شهادة معتمدة"],
        lessons: [
          { id: 1, title: "مقدمة في Flutter", duration: "20", completed: false },
          { id: 2, title: "واجهة المستخدم", duration: "30", completed: false },
          { id: 3, title: "إدارة الحالة", duration: "35", completed: false },
          { id: 4, title: "الوصول للبيانات", duration: "40", completed: false },
          { id: 5, title: "النشر والتوزيع", duration: "55", completed: false }
        ]
      },
      {
        id: 9,
        title: "الذكاء الاصطناعي التوليدي",
        description: "تعلم أحدث تقنيات الذكاء الاصطناعي التوليدي مثل GPT",
        duration: "95",
        difficulty: "متوسط",
        image: "🎨",
        progress: 0,
        enrolled: 1876,
        rating: 4.9,
        reviews: 445,
        instructor: "د. عمر الشمري",
        price: "مدفوع",
        language: "العربية",
        lastUpdated: "2024-01-22",
        headerColor: "bg-gradient-to-r from-violet-500 to-purple-600",
        pattern: "✨",
        features: ["أحدث التقنيات", "مشاريع إبداعية", "شهادة معتمدة"],
        lessons: [
          { id: 1, title: "مقدمة في الذكاء التوليدي", duration: "15", completed: false },
          { id: 2, title: "نماذج اللغة الكبيرة", duration: "25", completed: false },
          { id: 3, title: "التوليد الإبداعي", duration: "30", completed: false },
          { id: 4, title: "التطبيقات العملية", duration: "25", completed: false }
        ]
      }
    ];
  }

  static getUserStats(userId) {
    return {
      completedLessons: 5,
      totalPoints: 150,
      currentLevel: 2,
      streakDays: 5,
      totalCourses: 9,
      completedCourses: 1,
      enrolledCourses: 3
    };
  }

  static getFeaturedCourses() {
    const allCourses = this.getAllCourses();
    return allCourses.filter(course => course.rating >= 4.8);
  }

  static getPopularCourses() {
    const allCourses = this.getAllCourses();
    return allCourses.sort((a, b) => b.enrolled - a.enrolled).slice(0, 4);
  }
}
