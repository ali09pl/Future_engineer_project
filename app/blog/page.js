'use client';

import { Calendar, User, Clock, Tag, BookOpen, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع المقالات', count: 24 },
    { id: 'programming', name: 'البرمجة', count: 8 },
    { id: 'web', name: 'تطوير الويب', count: 6 },
    { id: 'mobile', name: 'تطبيقات الجوال', count: 4 },
    { id: 'career', name: 'المسيرة المهنية', count: 3 },
    { id: 'tips', name: 'نصائح', count: 3 },
  ];

  const posts = [
    {
      id: 1,
      title: 'كيف تختار لغة البرمجة المناسبة لبدايتك',
      excerpt: 'دليل شامل لمساعدتك في اختيار أول لغة برمجة تتعلمها بناءً على أهدافك وميولك.',
      author: 'علي خلو',
      date: '15 ديسمبر 2024',
      readTime: '5 دقائق',
      category: 'programming',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w-600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'أهم 10 مهارات لمطور الويب في 2024',
      excerpt: 'تعرف على المهارات الأكثر طلباً في سوق العمل لمطوري الويب هذا العام.',
      author: 'علي خلو',
      date: '10 ديسمبر 2024',
      readTime: '8 دقائق',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w-600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'من الصفر إلى أول وظيفة: قصة نجاح',
      excerpt: 'كيف تحول طالب من الصفر إلى مطور محترف في أقل من سنة.',
      author: 'علي خلو',
      date: '5 ديسمبر 2024',
      readTime: '10 دقائق',
      category: 'career',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w-600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'React vs Vue: أيهما تختار؟',
      excerpt: 'مقارنة شاملة بين إطارَي العمل الأشهر في تطوير واجهات المستخدم.',
      author: 'علي خلو',
      date: '1 ديسمبر 2024',
      readTime: '12 دقائق',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w-600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'أفضل مصادر تعلم البرمجة المجانية',
      excerpt: 'قائمة بأفضل المنصات والدورات المجانية لتعلم البرمجة.',
      author: 'علي خلو',
      date: '25 نوفمبر 2024',
      readTime: '6 دقائق',
      category: 'tips',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w-600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'بناء أول تطبيق جوال باستخدام React Native',
      excerpt: 'دليل عملي خطوة بخطوة لبناء أول تطبيق جوال.',
      author: 'علي خلو',
      date: '20 نوفمبر 2024',
      readTime: '15 دقائق',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w-600&h=400&fit=crop'
    },
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPost = posts[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <span className="text-black font-bold text-2xl">FE</span>
              </div>
              <div className="text-right">
                <h1 className="text-4xl md:text-5xl font-bold">المدونة</h1>
                <p className="text-gray-300 mt-2">مقالات تقنية ومقالات تعليمية في البرمجة</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mt-6">
              اكتشف أحدث المقالات والنصائح في عالم البرمجة وتطوير الويب.
              محتوى عالي الجuality مكتوب خصيصاً للمبرمجين العرب.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-r from-blue-500 to-purple-600">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    مقال مميز
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-black dark:text-white hover:underline">
                  <span>قراءة المقال</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="lg:flex gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4 mb-8 lg:mb-0">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">التصنيفات</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex justify-between items-center px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-black dark:bg-white text-white dark:text-black'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span className="flex items-center">
                        <Tag size={14} className="ml-2" />
                        {category.name}
                      </span>
                      <span className="text-sm opacity-75">{category.count}</span>
                    </button>
                  ))}
                </div>

                {/* Newsletter */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">النشرة البريدية</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    اشترك ليصلك جديد المقالات
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="بريدك الإلكتروني"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent"
                    />
                    <button className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg">
                      اشترك الآن
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:w-3/4">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700"
                  >
                    <div className="h-48 bg-gray-300 dark:bg-gray-700">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {post.excerpt}
                      </p>
                      
                      <button className="flex items-center space-x-2 text-black dark:text-white hover:underline">
                        <BookOpen size={16} />
                        <span>قراءة المقال</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <button className="w-10 h-10 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-lg">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    3
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    ...
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    10
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">المواضيع الشائعة</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'JavaScript', 'React', 'Python', 'Web Development',
              'Programming Tips', 'Career Advice', 'Frontend', 'Backend',
              'Mobile Apps', 'Databases', 'CSS', 'HTML', 'Git'
            ].map((tag, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
