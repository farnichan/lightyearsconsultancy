import React from "react";

const AIAdvisor: React.FC = () => {
  const struggles = [
    {
      title: "Hundreds of universities, no idea where to start",
      desc: "Too many choices without guidance leads to wrong decisions or no decision at all.",
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "SOPs and essays feel impossible",
      desc: "A poorly written Statement of Purpose can cost you a place at your dream school.",
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      title: "Hidden costs and missed scholarships",
      desc: "Most students don't know what funding is available — or how to apply for it.",
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Visa confusion and document stress",
      desc: "One wrong document can delay or derail your entire plan.",
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="advisor" className="py-32 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span>The real struggle</span>
          </div>
          <h2 className="header-text mb-6 text-[#00153A]">
            <span className="whitespace-nowrap">
              Applying abroad is{" "}
              <span className="text-[#3156ED]">overwhelming.</span>
            </span>
          </h2>
          <p className="body-text text-[#00153A]/60">
            But it doesn't have to be! Most students in Dhaka have the grades
            and the ambition — <br className="hidden md:block" /> but the
            process feels like a maze with no map. That's exactly where we come
            in.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          {struggles.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FCFBF7] border border-[#ebebeb] p-6 md:p-8 rounded-3xl flex items-center space-x-6 hover:border-[#3156ED] hover:bg-[#FFFFFF] transition-all cursor-pointer group"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-blue-500 shadow-inner border border-[#ebebeb] group-hover:bg-blue-600 transition-all duration-300 group-hover:text-white group-hover:border-[#3156ED]">
                {item.icon}
              </div>
              <div className="flex-1">
                <h4 className="body-text font-bold text-[#00153A] mb-1">
                  {item.title}
                </h4>
                <p className="text-[#00153A]/60 button-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
