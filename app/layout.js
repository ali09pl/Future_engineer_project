import './styles/globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Future Engineer | علي خلو - منصة تعليم البرمجة',
  description: 'منصة تعليمية عملية تركز على بناء المشاريع الحقيقية - مؤسسها علي خلو',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
