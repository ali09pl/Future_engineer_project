import { ArrowRight, Play, Users, Award, Zap } from 'lucide-react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-16 animate-fade-in-up">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              تعلم <span className="gradient-text">الروبوتات والذكاء الاصطناعي</span> بطريقة تفاعلية
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              منصة تعليمية شاملة تجمع بين النظرية والتطبيق العملي لتعليم هندسة الذكاء الاصطناعي والروبوتات بطريقة سهلة وممتعة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/lessons"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-medium transition-smooth"
              >
                <Play size={20} />
                ابدأ التعلم الآن
              </a>
              <a
                href="/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-blue-50 transition-smooth"
              >
                <ArrowRight size={20} />
                اشترك مجاناً
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-medium flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-white text-lg font-semibold">منصة تعليمية متقدمة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">لماذا تختار RoboPlay؟</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="glass-effect rounded-xl p-8 hover:shadow-medium transition-smooth group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Play size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">دروس تفاعلية</h3>
            <p className="text-gray-600">
              دروس مصممة بعناية تجمع بين الشرح النظري والتطبيق العملي لضمان فهم أعمق.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-effect rounded-xl p-8 hover:shadow-medium transition-smooth group">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">مجتمع نشط</h3>
            <p className="text-gray-600">
              تواصل مع آلاف المتعلمين والمحترفين، شارك أفكارك واستفد من خبراتهم.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-effect rounded-xl p-8 hover:shadow-medium transition-smooth group">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">شهادات معترف بها</h3>
            <p className="text-gray-600">
              احصل على شهادات معترف بها عند إكمالك للدورات والمسارات التعليمية.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="glass-effect rounded-xl p-8 hover:shadow-medium transition-smooth group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">تعلم بسرعتك</h3>
            <p className="text-gray-600">
              تعلم بالسرعة التي تناسبك، مع إمكانية العودة للدروس في أي وقت.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="glass-effect rounded-xl p-8 hover:shadow-medium transition-smooth group">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Play size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">محتوى محدث</h3>
            <p className="text-gray-600">
              محتوى يتم تحديثه بانتظام ليواكب أحدث التطورات في مجال الذكاء الاصطناعي.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="glass-effect rounded-xl p-8 hover:shadow-medium transition-smooth group">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">دعم الخبراء</h3>
            <p className="text-gray-600">
              احصل على الدعم من خبراء في المجال للإجابة على أسئلتك واستفساراتك.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="glass-effect rounded-xl p-8 text-center">
            <p className="text-4xl font-bold gradient-text mb-2">10K+</p>
            <p className="text-gray-600">متعلم نشط</p>
          </div>
          <div className="glass-effect rounded-xl p-8 text-center">
            <p className="text-4xl font-bold gradient-text mb-2">50+</p>
            <p className="text-gray-600">دورة تعليمية</p>
          </div>
          <div className="glass-effect rounded-xl p-8 text-center">
            <p className="text-4xl font-bold gradient-text mb-2">500+</p>
            <p className="text-gray-600">ساعة محتوى</p>
          </div>
          <div className="glass-effect rounded-xl p-8 text-center">
            <p className="text-4xl font-bold gradient-text mb-2">95%</p>
            <p className="text-gray-600">معدل الرضا</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white shadow-medium">
        <h2 className="text-3xl font-bold mb-4">هل أنت مستعد للبدء؟</h2>
        <p className="text-lg mb-8 opacity-90">
          انضم إلى آلاف المتعلمين الذين يطورون مهاراتهم معنا
        </p>
        <a
          href="/signup"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:shadow-medium transition-smooth"
        >
          <ArrowRight size={20} />
          ابدأ الآن مجاناً
        </a>
      </section>
    </Layout>
  );
}
