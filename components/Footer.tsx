import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#00153A] text-white pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {/* Left column: Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-sm md:button-text text-white/50 max-w-sm mb-8">
              Transforming educational aspirations into world-class
              achievements. We don't just guide; we light the way.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3156ED] hover:border-[#3156ED] transition-all text-white/60 hover:text-white cursor-pointer"
              >
                <i className="fa-brands fa-x-twitter text-sm"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3156ED] hover:border-[#3156ED] transition-all text-white/60 hover:text-white cursor-pointer"
              >
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3156ED] hover:border-[#3156ED] transition-all text-white/60 hover:text-white cursor-pointer"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3156ED] hover:border-[#3156ED] transition-all text-white/60 hover:text-white cursor-pointer"
              >
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
            </div>
          </div>

          {/* Right column: Contact */}
          <div className="md:justify-self-end flex flex-col items-center md:items-start">
            <h5 className="text-xs md:button-text font-bold uppercase tracking-widest text-white/40 mb-6">
              Contact
            </h5>
            <ul className="space-y-5">
              <li className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 space-y-2 md:space-y-0 text-center md:text-left">
                <div className="md:mt-0.5 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-[#3156ED]">
                  <i className="fa-solid fa-envelope text-sm"></i>
                </div>
                <a
                  href="mailto:info@lightyearsconsultancy.com"
                  className="text-sm md:button-text text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  info@lightyearsconsultancy.com
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 space-y-2 md:space-y-0 text-center md:text-left">
                <div className="md:mt-0.5 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-[#3156ED]">
                  <i className="fa-solid fa-phone text-sm"></i>
                </div>
                <a
                  href="tel:+8801732260262"
                  className="text-sm md:button-text text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  +880 173 226 0262
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 space-y-2 md:space-y-0 text-center md:text-left">
                <div className="md:mt-0.5 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-[#3156ED]">
                  <i className="fa-solid fa-location-dot text-sm"></i>
                </div>
                <p className="text-sm md:button-text text-white/60 max-w-[200px] md:max-w-none">
                  66 Siddeswari Circular Road Dhaka 1217
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <p className="button-text text-white/30 text-center">
            © 2026 Lightyears Educational Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
