import React from "react";

const WhyLightyears: React.FC = () => {
  const cards = [
    {
      icon: (
        <svg
          className="w-8 h-8 md:w-9 md:h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3.6 9h16.8 M3.6 15h16.8 M12 3c-2.4 2.4-3.75 5.6-3.75 9s1.35 6.6 3.75 9M12 3c2.4 2.4 3.75 5.6 3.75 9s-1.35 6.6-3.75 9"
          />
        </svg>
      ),
      title: "Your dream destination",
      desc: "Whether it's the UK, US, Australia, Malaysia, Finland or anywhere in between — we guide applications across the globe.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 md:w-9 md:h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "One-on-one attention",
      desc: "You're never just a file number. Every student works directly with a consultant from day one. You get real attention and solid advice.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 md:w-9 md:h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Always reachable",
      desc: "Our phone-lines are never busy. Call, text or visit us directly. We respond fast because your deadlines matter.",
    },
  ];

  return (
    <section className="py-32 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span>Why us</span>
          </div>
          <h3 className="header-text text-[#00153A] mb-6 ">
            Your journey gets our full{" "}
            <span className="text-[#3156ED]">attention.</span>
          </h3>
          <p className="body-text text-[#00153A]/60  max-w-2xl mx-auto">
            Big agencies handle thousands of students. We're focused on giving
            each student a plan tailored to fit them specifically.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FCFBF7] p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-[#ebebeb] flex flex-col h-full hover:border-[#3156ED] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FCFBF7] rounded-xl md:rounded-2xl flex items-center justify-center text-[#3156ED] mb-4 border border-[#ebebeb] group-hover:bg-[#3156ED] group-hover:text-white group-hover:border-[#3156ED] transition-all duration-300">
                {card.icon}
              </div>
              <h4 className="text-lg md:body-text font-bold text-[#00153A] mb-2">
                {card.title}
              </h4>
              <p className="text-sm md:button-text text-[#00153A]/60 flex-grow">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLightyears;
