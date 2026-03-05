import React from "react";

const steps = [
  {
    number: "1",
    title: "1:1 Consultation",
    description:
      "We learn about your academic background, goals, and budget. No pressure, just a real conversation.",
  },
  {
    number: "2",
    title: "University Shortlist",
    description:
      "We curate a personalised list of universities that fit your profile, goals, and financial plan.",
  },
  {
    number: "3",
    title: "Application & Documents",
    description:
      "We guide you through SOPs, recommendation letters, transcripts, and every form — step by step.",
  },
  {
    number: "4",
    title: "Visa & Departure",
    description:
      "Once you get your offer, we help with your visa application and pre-departure preparation.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="howitworks" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span>How we help</span>
          </div>
          <h3 className="header-text text-[#00153A] mb-6">
            Four steps to your{" "}
            <span className="text-[#3156ED]">offer letter.</span>
          </h3>
          <p className="body-text text-[#00153A]/60">
            A clear, structured journey — so you always know{" "}
            <br className="hidden md:block" /> what's happening and what's next.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-[#ebebeb] -z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Number Circle */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FCFBF7] border-2 border-[#ebebeb] flex items-center justify-center mb-6 md:mb-8 relative transition-all duration-300 group-hover:border-[#3156ED] group-hover:shadow-[#3156ED]/10 group-hover:bg-[#FFFFFF] active:scale-95">
                  <span className="text-2xl md:text-3xl font-serif text-[#00153A] group-hover:text-[#3156ED] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h4 className="text-lg md:body-text font-bold text-[#00153A] mb-2 group-hover:text-[#3156ED] transition-colors">
                  {step.title}
                </h4>
                <p className="text-[#00153A]/60 text-sm md:button-text max-w-[250px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
