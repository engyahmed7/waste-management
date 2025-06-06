import React from 'react';
import { ArrowDown, Zap, Shield, Clock } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Skip Hire Made
            <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Simple & Fast
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional waste management solutions for your home or business. 
            Book online in minutes with instant pricing and flexible delivery options.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Zap className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Instant Booking</h3>
              <p className="text-slate-300">Book and pay online in under 2 minutes</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Fully Licensed</h3>
              <p className="text-slate-300">All permits and licenses handled for you</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Same Day Delivery</h3>
              <p className="text-slate-300">Skip delivered within hours when available</p>
            </div>
          </div>

          <button
            onClick={onGetStarted}
            className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-12 py-6 rounded-2xl text-xl font-semibold shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
          >
            <span>Get Your Skip Now</span>
            <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
          </button>

          <p className="text-slate-400 mt-6 text-sm">No hidden fees • Instant confirmation • Professional service</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;