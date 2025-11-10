"use client";
import React from "react";
import Navbar from "../Component/Navbar";
import ContactSection from "../Component/ContactSection";
import Footer from "../Component/Footer";

const page = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#063957] py-24 md:pt-28 md:pb-20">
        <div className="relative z-10 mx-auto px-6 md:px-20 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Need quick and reliable appliance repair service? Contact us for
            same-day doorstep support anywhere in Delhi NCR.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
{/* Contact Info Boxes */}
<section className="bg-slate-50 py-16 md:py-16">
  <div className="mx-auto px-6 md:px-20 max-w-6xl">
    <div className="text-center mb-12">
      
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        We’re available 7 days a week for AC, Washing Machine, Refrigerator,
        Microwave & LED TV repair services.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {/* Phone */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-black mb-3">Call Us</h3>
        <p className="text-slate-600 mb-4">For fast home appliance repair</p>
        <a
          href="tel:18005703132"
          className="text-black font-medium hover:text-gray-700 transition-colors"
        >
          📞 1800-570-3132
        </a>
      </div>

      {/* Email */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-black mb-3">Email</h3>
        <p className="text-slate-600 mb-4">Write to us for support</p>
        <a
          href="mailto:info@customerservice.co.in"
          className="text-black font-medium hover:text-gray-700 transition-colors"
        >
          info@customerservice.co.in
        </a>
      </div>

      {/* Office */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-black mb-3">
          Service Center
        </h3>
        <p className="text-slate-600 mb-4">Visit us</p>
        <p className="text-black font-medium">
          C-29, BPTP Parklands <br /> Sector-85, Faridabad, Haryana
        </p>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </>
  );
};

export default page;
