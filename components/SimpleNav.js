export default function SimpleNav() {
  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">ع.خ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Future<span className="text-black">Engineer</span>
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">علي خلو</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-6 space-x-reverse">
            <a href="#courses" className="text-gray-600 hover:text-black transition-colors">📚 الدروس</a>
            <a href="#social" className="text-gray-600 hover:text-black transition-colors">🌐 حساباتي</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">📞 تواصل</a>
            <a href="mailto:alikhallou037@gmail.com" className="text-gray-600 hover:text-black transition-colors">📧 البريد</a>
          </div>
          
          <a 
            href="mailto:alikhallou037@gmail.com" 
            className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            راسلني الآن
          </a>
        </div>
      </div>
    </nav>
  )
}
