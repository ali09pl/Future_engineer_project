import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { DatabaseService } from './databaseService.js';
import { v4 as uuidv4 } from 'uuid';

const JWT_SECRET = 'future-engineer-secret-key';

export class AuthService {
  // تسجيل مستخدم جديد
  static async register(userData) {
    try {
      const { fullName, email, password } = userData;
      const users = DatabaseService.getUsers();

      // التحقق من وجود المستخدم
      const existingUser = users.find(user => user.email === email);
      if (existingUser) {
        return { success: false, message: 'البريد الإلكتروني مستخدم بالفعل' };
      }

      // تشفير كلمة المرور
      const hashedPassword = bcrypt.hashSync(password, 10);
      
      // إنشاء مستخدم جديد
      const newUser = {
        id: uuidv4(),
        fullName,
        email,
        password: hashedPassword,
        level: 1,
        points: 0,
        streakDays: 0,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      DatabaseService.saveUsers(users);

      // إنشاء توكن
      const token = jwt.sign({ userId: newUser.id }, JWT_SECRET);
      
      return {
        success: true,
        message: 'تم إنشاء الحساب بنجاح',
        token,
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
      return { success: false, message: 'حدث خطأ أثناء إنشاء الحساب' };
    }
  }

  // تسجيل الدخول
  static async login(email, password) {
    try {
      const users = DatabaseService.getUsers();
      const user = users.find(u => u.email === email);

      if (!user) {
        return { success: false, message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' };
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return { success: false, message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' };
      }

      // إنشاء توكن
      const token = jwt.sign({ userId: user.id }, JWT_SECRET);

      return {
        success: true,
        message: 'تم تسجيل الدخول بنجاح',
        token,
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
      return { success: false, message: 'حدث خطأ أثناء تسجيل الدخول' };
    }
  }

  // التحقق من التوكن
  static verifyToken(token) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return null;
    }
  }

  // جلب بيانات المستخدم
  static getUserById(userId) {
    const users = DatabaseService.getUsers();
    return users.find(user => user.id === userId);
  }
}
