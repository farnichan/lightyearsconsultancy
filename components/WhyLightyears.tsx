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
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
      title: "Honest, unbiased advice",
      desc: "We don't push you toward universities that pay us commissions. We recommend what's genuinely best for you — even if it's a less obvious choice.",
      footer: "Your goals first. Always.",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FCFBF7] p-8 rounded-[2rem] border border-[#ebebeb] flex flex-col h-full hover:border-[#3156ED] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#FCFBF7] rounded-2xl flex items-center justify-center text-[#3156ED] mb-4 border border-[#ebebeb] group-hover:bg-[#3156ED] group-hover:text-white group-hover:border-[#3156ED] transition-all duration-300">
                {card.icon}
              </div>
              <h4 className="body-text font-bold text-[#00153A] mb-2">
                {card.title}
              </h4>
              <p className="button-text text-[#00153A]/60 flex-grow">
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
