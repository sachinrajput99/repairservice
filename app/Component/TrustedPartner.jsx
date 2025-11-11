"use client";
import React from "react";

const services = [
  {
    img: "/s-1.png",
    title: "Air Conditioning",
  },
  {
    img: "/s-2.png",
    title: "Washing Machine",
  },
  {
    img: "/s-3.png",
    title: "Refrigerator Repair",
  },
  {
    img: "/s-4.png",
    title: "Microwave Oven",
  },
];

export default function TrustedPartner() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Your Trusted Partner for Reliable Customer Support Services
      </h1>

      <p className="text-base sm:text-[16px] md:text-[18px] text-[#797979] mb-12 leading-6 sm:leading-7 md:leading-8 text-left sm:text-left md:text-left font-normal">
        At Customer Care Center India, we specialize in delivering fast, efficient, and professional customer service support across a wide range of products and brands. Whether you&apos;re facing issues with your electronics, home appliances, internet services, or mobile devices — we’re here to help.
       
        We connect you to the right support team, ensuring your complaints and service requests are handled quickly and effectively. Our dedicated professionals work tirelessly to ensure a hassle-free service experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="border shadow-sm rounded-xl p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer bg-white"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />

            <h3 className="mt-4 font-semibold text-gray-800 text-base sm:text-lg text-center">
              {service.title}
            </h3>

            <button className="mt-4 sm:mt-6 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue-50 transition">
              →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
