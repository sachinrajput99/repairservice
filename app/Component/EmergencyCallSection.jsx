// components/EmergencyCallSection.jsx
import React from "react";

const EmergencyCallSection = () => {
  return (
    <section className="emergency_call_area bg-[#176bc5] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left */}
          <div className="left text-center sm:text-left mb-4 sm:mb-0">
            <h4 className="text-white text-lg md:text-3xl font-semibold">
              Need Appliances Service?{" "}
          
            <span className="font-playfair italic ">Call us at</span>

            </h4>
            {/* Optional subtitle */}
            {/* <p className="text-white/90 text-sm mt-1">24 hours, 7 days a week, 365 days a year</p> */}
          </div>

          {/* Right */}
          <div className="right">
            <a
              href="tel:18001030575"
              className="inline-block bg-white font-semibold text-lg md:text-xl px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              1800 103 0575
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCallSection;
