
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIAdvisor from './components/AIAdvisor';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="bg-white py-12 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-extrabold text-[#001A3D] mb-1">150+</p>
                <p className="text-sm font-bold text-slate-500 uppercase">Partner Schools</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[#001A3D] mb-1">$12M+</p>
                <p className="text-sm font-bold text-slate-500 uppercase">Scholarships Won</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[#001A3D] mb-1">98%</p>
                <p className="text-sm font-bold text-slate-500 uppercase">Ivy Acceptances</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[#001A3D] mb-1">24/7</p>
                <p className="text-sm font-bold text-slate-500 uppercase">AI Advisor Online</p>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <AIAdvisor />

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h3 className="text-3xl lg:text-5xl font-extrabold text-[#001A3D] mb-16">Stories of Success</h3>
             <div className="grid md:grid-cols-3 gap-8 text-left">
               {[
                 {
                   name: "Sarah Jenkins",
                   role: "Stanford Class of '27",
                   content: "Lightyears helped me find my unique voice. Their essay workshop wasn't just about grammar; it was about self-discovery.",
                   img: "https://picsum.photos/seed/sarah/100/100"
                 },
                 {
                   name: "David Chen",
                   role: "Oxford - PPE",
                   content: "The AI Path Finder initially suggested schools I hadn't considered. Following their roadmap led me to Oxford.",
                   img: "https://picsum.photos/seed/david/100/100"
                 },
                 {
                   name: "Amara Okoro",
                   role: "MIT - CS",
                   content: "The strategic profile building at Lightyears gave me the edge I needed for highly competitive STEM programs.",
                   img: "https://picsum.photos/seed/amara/100/100"
                 }
               ].map((t, i) => (
                 <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                    <p className="text-slate-600 mb-6 italic leading-relaxed">"{t.content}"</p>
                    <div className="flex items-center space-x-4">
                      <img src={t.img} className="w-12 h-12 rounded-full" alt={t.name} />
                      <div>
                        <p className="font-bold text-slate-900">{t.name}</p>
                        <p className="text-sm text-blue-600 font-semibold">{t.role}</p>
                      </div>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 text-white/5 pointer-events-none">
             <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 100 100">
               <path d="M50 5 L61 35 L95 35 L68 55 L78 85 L50 66 L22 85 L32 55 L5 35 L39 35 Z" />
             </svg>
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-8">Ready to take off?</h2>
            <p className="text-xl text-blue-100 mb-12">Book your free 30-minute initial consultation with our lead advisors today.</p>
            <button className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
              Secure Your Spot Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
