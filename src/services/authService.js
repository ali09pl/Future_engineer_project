// نظام مصادقة يعمل مع localStorage
export class AuthService {
  // تهيئة المستخدمين إذا لم يكونوا موجودين
  static initializeUsers() {
    if (typeof window === 'undefined') return;
    
    const existingUsers = localStorage.getItem('future_engineer_users');
    if (!existingUsers) {
      const defaultUsers = [
        {
          id: 1,
          fullName: 'مستخدم تجريبي',
          email: 'test@example.com',
          password: '123456',
          level: 2,
          points: 150,
          streakDays: 5
        }
      ];
      localStorage.setItem('future_engineer_users', JSON.stringify(defaultUsers));
    }
  }

  // جلب جميع المستخدمين
  static getUsers() {
    if (typeof window === 'undefined') return [];
    const users = localStorage.getItem('future_engineer_users');
    return users ? JSON.parse(users) : [];
  }

  // حفظ المستخدمين
  static saveUsers(users) {
    if (typeof window === 'undefined') return;
    localStorage.setItem('future_engineer_users', JSON.stringify(users));
  }

  // تسجيل مستخدم جديد
  static async register(userData) {
    try {
      this.initializeUsers();
      const { fullName, email, password } = userData;
      const users = this.getUsers();

      // التحقق من وجود المستخدم
      const existingUser = users.find(user => user.email === email);
      if (existingUser) {
        return { success: false, message: 'البريد الإلكتروني مستخدم بالفعل' };
      }

      // إنشاء مستخدم جديد
      const newUser = {
        id: Date.now(),
        fullName,
        email,
        password,
        level: 1,
        points: 0,
        streakDays: 0,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      this.saveUsers(users);

      // حفظ المستخدم الحالي في الجلسة
      localStorage.setItem('current_user', JSON.stringify(newUser));

      return {
        success: true,
        message: 'تم إنشاء الحساب بنجاح',
        user: {
          id: newUser.id,
          fullName: newUser.fullName,
          email: newUser.email,
          level: newUser.level,
          points: newUser.points,
          streakDays: newUser.streakDays
        }
      };
    } catch (error) {
      console.error('Register error:', error);
      return { success: false, message: 'حدث خطأ أثناء إنشاء الحساب' };
    }
  }

  // تسجيل الدخول
  static async login(email, password) {
    try {
      this.initializeUsers();
      const users = this.getUsers();
      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        return { success: false, message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' };
      }

      // حفظ المستخدم الحالي في الجلسة
      localStorage.setItem('current_user', JSON.stringify(user));

      return {
        success: true,
        message: 'تم تسجيل الدخول بنجاح',
        user: {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          level: user.level,
          points: user.points,
          streakDays: user.streakDays
        }
      };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'حدث خطأ أثناء تسجيل الدخول' };
    }
  }

  // جلب المستخدم الحالي
  static getCurrentUser() {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem('current_user');
    return user ? JSON.parse(user) : null;
  }

  // تسجيل الخروج
  static logout() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('current_user');
  }
}

// تهيئة المستخدمين عند تحميل الملف
if (typeof window !== 'undefined') {
  AuthService.initializeUsers();
}
