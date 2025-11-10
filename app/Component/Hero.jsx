// components/HeroSection.jsx
"use client";

import React from "react";


export default function HeroSection() {
  return (
  
<section className="relative mt-[60px] bg-[url('/hero.jpg')] bg-cover bg-top min-h-[90vh] flex flex-col">

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80"></div> */}

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto px-6 md:px-20 w-full ">
          <div className="max-w-2xl flex flex-col gap-8 p-[60px] ">
            <h1 className="text-white md:mb-12 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Quick <br className="sm:hidden" />
        <span className=" font-normal" >      Best Services </span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl mb-6 max-w-xl">
              We provide the best service and repair for all brands of home appliances at your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:18001030575"
                className="bg-[#ca232a]  hover:bg-transparent hover:border hover:border-red-500 text-white px-8 py-4 font-medium transition-colors text-center"
              >
                📞 1800 103 0575
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-gray-100 text-black px-8 py-4 font-medium transition-colors text-center"
              >
                Book a Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
