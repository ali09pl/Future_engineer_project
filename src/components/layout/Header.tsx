import React from'react';

export const Header: React.FC = () => {
return (
<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
<div className="container mx-auto px-4 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3 space-x-reverse">
<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
<span className="text-white font-bold text-xl">FE</span>
</div>
<div>
<h1 className="text-2xl font-bold text-gray-800">Future Engineer</h1>
<p className="text-gray-500 text-sm">منصة المهندسين المستقبلية</p>
</div>
</div>

);
};
