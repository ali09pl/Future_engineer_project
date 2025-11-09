import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { SIDEBAR_ITEMS } from '../const';
import * as Icons from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-white shadow-soft border-r border-gray-200 transform transition-transform duration-300 z-40 md:translate-x-0 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button - Mobile Only */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        {/* Sidebar Content */}
        <div className="pt-8 md:pt-4 px-4 space-y-2">
          {SIDEBAR_ITEMS.map((item, index) => {
            const Icon = Icons[item.icon];
            return (
              <div key={index}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-primary transition-smooth group"
                  onClick={onClose}
                >
                  {Icon && <Icon size={20} className="group-hover:text-primary" />}
                  <span className="font-medium">{item.label}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Sidebar Footer - Stats */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-50 to-transparent border-t border-gray-200">
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-xs text-gray-600">الدروس المكتملة</p>
              <p className="text-lg font-bold text-primary">5</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-xs text-gray-600">الساعات المتعلمة</p>
              <p className="text-lg font-bold text-secondary">12.5</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
