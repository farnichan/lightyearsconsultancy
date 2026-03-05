import React from "react";
import heroImg from "../assets/hero.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white"
    >
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
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#00153A] leading-[1.1] mb-6">
              Journey <span className="text-[#3156ED]">Lightyears</span> Beyond
              Expectations.
            </h1>
            <p className="body-text text-[#00153A]/60 mb-8 max-w-lg">
              We are dedicated to guiding ambitious students toward the world's
              best institutions. Your potential is infinite; let's map the path.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+8801732260262"
                className="px-8 py-4 bg-[#00153A] text-white rounded-full button-text hover:bg-[#3156ED] transition-all  flex items-center justify-center group cursor-pointer"
              >
                Book a consultation
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl animate-float">
              <img
                src={heroImg}
                className="w-full h-full object-cover aspect-[4/5]"
                alt="Student Success"
              />
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
