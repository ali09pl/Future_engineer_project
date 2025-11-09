import { DatabaseService } from './databaseService.js';

export class CourseService {
  // جلب جميع الكورسات
  static async getAllCourses() {
    return DatabaseService.getCourses();
  }

  // جلب كورس مع دروسه
  static async getCourseWithLessons(courseId) {
    const courses = DatabaseService.getCourses();
    return courses.find(course => course.id === parseInt(courseId));
  }

  // تحديث تقدم المستخدم
  static async updateUserProgress(userId, lessonId, score = 10) {
    try {
      const progress = DatabaseService.getUserProgress(userId);
      
      // التحقق إذا كان الدرس مكتملاً بالفعل
      const existingProgress = progress.find(p => p.lessonId === lessonId);
      if (!existingProgress) {
        progress.push({
          id: Date.now(),
          userId,
          lessonId,
          completed: true,
          score,
          completedAt: new Date().toISOString()
        });

        DatabaseService.saveUserProgress(userId, progress);

        // تحديث نقاط المستخدم
        const users = DatabaseService.getUsers();
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
          users[userIndex].points += score;
          // زيادة المستوى كل 100 نقطة
          if (users[userIndex].points >= users[userIndex].level * 100) {
            users[userIndex].level += 1;
          }
          DatabaseService.saveUsers(users);
        }

        return { success: true, pointsEarned: score, user: users[userIndex] };
      }

      return { success: false, message: 'الدرس مكتمل بالفعل' };
    } catch (error) {
      return { success: false, message: 'حدث خطأ أثناء تحديث التقدم' };
    }
  }

  // جلب تقدم المستخدم
  static async getUserProgress(userId) {
    return DatabaseService.getUserProgress(userId);
  }

  // جلب إحصائيات المستخدم
  static async getUserStats(userId) {
    const progress = DatabaseService.getUserProgress(userId);
    const users = DatabaseService.getUsers();
    const user = users.find(u => u.id === userId);

    const completedLessons = progress.length;
    const totalPoints = user?.points || 0;
    const currentLevel = user?.level || 1;

    return {
      completedLessons,
      totalPoints,
      currentLevel,
      nextLevelPoints: currentLevel * 100 - totalPoints
    };
  }
}
