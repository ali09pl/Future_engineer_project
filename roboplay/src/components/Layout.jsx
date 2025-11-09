import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Navbar */}
      <Navbar
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMobileMenuOpen={isSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Content Area */}
        <main className="flex-1 md:ml-0 w-full md:w-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
