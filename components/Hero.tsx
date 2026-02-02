
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-yellow-50/50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span>Charting your educational future</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#001A3D] leading-[1.1] mb-6">
              Journey <span className="text-blue-600">Lightyears</span> Beyond Expectations.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Elite education consultancy dedicated to guiding ambitious students toward the world's most prestigious institutions. Your potential is infinite; let's map the path.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#advisor" className="px-8 py-4 bg-[#001A3D] text-white rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center group">
                Try AI Path Finder
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#services" className="px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-xl font-bold text-lg hover:border-blue-300 hover:text-blue-600 transition-all flex items-center justify-center">
                Explore Services
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="Student" />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-900">500+ Offers</p>
                <p className="text-slate-500">From Ivy League & Russell Group</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl animate-float">
              <img src="https://picsum.photos/seed/education/800/1000" className="w-full object-cover aspect-[4/5]" alt="Student Success" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-slate-100">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-bold text-slate-800 text-sm">98% Success Rate</span>
              </div>
              <p className="text-xs text-slate-500">Every student we represent receives at least 3 offers from their top-choice universities.</p>
            </div>
            {/* Geometric accents */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute top-1/2 -right-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
