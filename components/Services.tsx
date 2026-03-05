import React, { useState, useEffect } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

const services = [
  {
    id: "sop",
    title: "SOP & Application Writing",
    description:
      "Your Statement of Purpose is the most personal — and most important — part of your application. We help you find your story and write it in a way that genuinely stands out to admissions committees.",
    image: img3,
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
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    ),
  },
  {
    id: "profile",
    title: "Profile Assessment",
    description:
      "An honest look at where you stand — your strengths, gaps, and which countries and programmes are a realistic fit for you.",
    image: img2,
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
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
  },
  {
    id: "research",
    title: "University Research & Selection",
    description:
      "We go beyond rankings — researching course content, entry requirements, and campus culture to find universities that genuinely suit you.",
    image: img1,
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
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    id: "scholarship",
    title: "Scholarship Matching",
    description:
      "We identify scholarships you're actually eligible for — so you're not leaving money on the table.",
    image: img4,
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
    id: "visa",
    title: "Visa Processing",
    description:
      "We guide you through your student visa application — what's needed, how to prepare it, and what to expect.",
    image: img5,
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
  {
    id: "docs",
    title: "Document Guidance",
    description:
      "From transcripts to recommendation letters — we tell you exactly what you need, how to get it, and how to present it.",
    image: img6,
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="py-32 bg-white overflow-hidden">
      {/* SVG Noise Filter */}
      <svg className="hidden">
        <filter id="grainy">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.08" />
          </feComponentTransfer>
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span>What we offer</span>
          </div>
          <h3 className="header-text text-[#00153A] mb-6">
            Everything you <span className="text-[#3156ED]">need</span>, under
            one roof.
          </h3>
          <p className="text-[#00153A]/60 body-text max-w-2xl mx-auto ">
            Applying abroad is complex. We simplify every step, from finding the
            right match to securing your visa and preparing for departure.
          </p>
        </div>

        {/* Balanced 2-Column Split */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Compact Menu */}
          <div className="flex flex-col space-y-3">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`w-full p-4 rounded-2xl transition-all text-left border flex items-center space-x-4 h-full ${
                  activeTab === index
                    ? "bg-[#FFFFFF] border-[#3156ED] shadow-sm shadow-[#3156ED]/10"
                    : "bg-[#FCFBF7] border-[#ebebeb] hover:bg-white hover:border-[#3156ED]"
                }`}
              >
                <div className="flex-1 min-w-0 px-1">
                  <p className="button-text font-bold text-[#00153A] truncate">
                    {service.title}
                  </p>
                </div>
                {activeTab === index && (
                  <svg
                    className="w-5 h-5 text-[#3156ED]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Right Column: Smaller Carousel Slide */}
          <div className="relative">
            <div className="relative h-[450px] lg:h-full min-h-[450px] rounded-[2.5rem] overflow-hidden  bg-[#001A3D] group cursor-pointer">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === activeTab
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  {/* Background Image Wrapper for Grain effect */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-[10s] ease-linear transform scale-105 group-hover:scale-100"
                    />

                    {/* Grain Layer Overlay */}
                    <div
                      className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay"
                      style={{ filter: "url(#grainy)" }}
                    ></div>

                    {/* Multi-layered Overlays for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A3D] via-[#001A3D]/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                    <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
                      <h4 className="text-xl lg:text-3xl font-bold text-white mb-3">
                        {service.title}
                      </h4>
                      <p className="button-text  text-blue-100/90 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
