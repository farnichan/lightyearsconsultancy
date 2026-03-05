import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AIAdvisor from "./components/AIAdvisor";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import WhyLightyears from "./components/WhyLightyears";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AIAdvisor />
        <HowItWorks />
        <Services />

        <WhyLightyears />

        {/* CTA Section */}
        <section className="py-32 bg-[#3156ED] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            {/* Main Animated Star */}
            <div className="absolute -bottom-32 -right-20 text-white/5">
              <svg
                className="w-[500px] h-[500px] animate-float"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                {/* Natively rounded (2px radius) 5-pointed star path */}
                <path d="M50 5.8c.3 0 .6.5.8 1.4L60.5 34.2c.1.4.5.8 1 .8h32.5c.8 0 1.1 1 .4 1.5L68.5 54.4c-.4.3-.5.8-.4 1.3l10 32.7c.3.8-.6 1.5-1.3 1L50.5 66.8c-.3-.2-.7-.2-1 0L22.8 89.4c-.7.5-1.6-.2-1.3-1l10-32.7c.1-.5 0-1-.4-1.3L5.2 36.5c-.7-.5-.4-1.5.4-1.5h32.5c.5 0 .9-.4 1-.8L49.2 6.9c.2-.9.5-1.4.8-1.4z" />
              </svg>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
            <h2 className="header-text mb-6">Ready to take off?</h2>
            <p className="body-text text-white/60 mb-8">
              Book your 30-minute initial consultation <br />
              with our lead advisors today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+8801732260262"
                className="px-8 py-4 bg-[#00153A] text-white rounded-full button-text  transition-all  flex items-center justify-center group cursor-pointer"
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
