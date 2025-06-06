import React from 'react';
import { Truck, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">SkipHire Pro</h1>
              <p className="text-sm text-slate-500">Professional Waste Solutions</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-slate-600">
              <MapPin className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium">Lowestoft, NR32</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium text-slate-900">0800 123 4567</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;