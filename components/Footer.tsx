
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#001A3D] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 5 L61 35 L95 35 L68 55 L78 85 L50 66 L22 85 L32 55 L5 35 L39 35 Z" fill="#3b82f6" />
                  <path d="M15 90 Q25 50 45 40 M25 95 Q35 60 48 45 M35 100 Q45 70 51 50" stroke="#facc15" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-3xl font-extrabold tracking-tight">Lightyears</span>
            </div>
            <p className="text-blue-100/60 max-w-sm text-lg leading-relaxed mb-8">
              Transforming educational aspirations into world-class achievements. We don't just guide; we light the way.
            </p>
            <div className="flex space-x-5">
              {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 border border-white/20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-6">Resources</h5>
            <ul className="space-y-4 text-blue-100/60">
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">University Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Scholarship Hub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-6">Contact</h5>
            <ul className="space-y-4 text-blue-100/60">
              <li>info@lightyears.edu</li>
              <li>+1 (555) 888-2025</li>
              <li>100 Innovation Plaza,<br />Palo Alto, CA 94301</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:row-reverse md:flex-row justify-between items-center text-sm text-blue-100/30">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p>© 2024 Lightyears Education Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
