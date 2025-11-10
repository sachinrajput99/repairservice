"use client";
import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import { PiWindLight, PiWashingMachineBold, PiFridgeLight, PiMicrowaveLight } from "react-icons/pi";

const services = [
  {
    icon: <PiWindLight size={48} className="text-blue-600" />,
    title: "Air Conditioning",
  },
  {
    icon: <PiWashingMachineBold size={48} className="text-blue-600" />,
    title: "Washing Machine",
  },
  {
    icon: <PiFridgeLight size={48} className="text-blue-600" />,
    title: "Refrigerator Repair",
  },
  {
    icon: <PiMicrowaveLight size={48} className="text-blue-600" />,
    title: "Microwave Oven",
  },
];

const ServiceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1120]">
          Your Trusted Partner for Reliable Customer Support Services
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
          At Customer Care Center India, we specialize in delivering fast, efficient,
          and professional customer service support across a wide range of home appliances.
        </p>

        {/* Line */}
        <div className="w-20 h-[2px] bg-blue-500 mx-auto mt-6"></div>

        {/* Service Cards */}
        <div className="grid gap-8 mt-14 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl py-10 px-6 shadow-sm hover:shadow-lg transition cursor-pointer bg-white"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#0b1120] mb-8">
                {service.title}
              </h3>

              {/* Arrow Button */}
              <div className="flex justify-center">
                <button className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition">
                  <FiChevronsRight size={18} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;
