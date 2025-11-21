import Image from "next/image";
import React from "react";

export default function Experience() {
  return (
    <section
      id="about"
      className="mx-auto bg-[#e5ebf3] px-6 md:px-20 py-20 md:py-20 md:pt-26 md:pb-12 space-y-20"
    >
      <div></div>
      {/* Block 1 - Ultimate Luxury */}
      <div className="grid lg:grid-cols-[40%_1fr] gap-12 items-center">
        {/* Image */}
        <div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              // src="  /repairservice.jpg"
              src="/repair.png"
              alt="Luxury property exterior showcasing modern architecture"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[400px] "
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="text-sm text-blue-600 text-center sm:text-left font-semibold uppercase tracking-wide mb-4">
            20 Years Experience
          </div>
          <h2 className="text-2xl text-center md:text-3xl sm:text-left font-semibold mb-6 text-slate-900">
            Home Appliance Repair Services
          </h2>
          <p className="text-md text-slate-500 mb-8 leading-relaxed">
            24x7 Customer Service Centre is backed by skilled technicians and
            service professionals dedicated to delivering high-quality repair
            and maintenance solutions. We understand the vital role home
            appliances play in your daily life. We offer all home appliance
            repair and services within a short period of time. Our technicians
            are well experienced in troubleshooting all appliances like Air
            conditioners, washing machines, Refrigerators, Geysers, Dishwasher,
            Dryer, televisions, Microwave ovens etc. We provide the best &
            genuine service of all spare parts. We also provide skilled
            technicians to install & uninstall all the appliances safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
           
            <a href="tel:+918510070555"
            
                 className="bg-blue-600  text-center text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
            >Call Now</a>

           
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-blue-600">✔</span>
              Highly skilled & experienced engineers
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-blue-600">✔</span>
              Work guaranteed for 2 year
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-blue-600">✔</span>
              Emergency call outs 24/7
            </div>
          </div>
        </div>
      </div>

 
    </section>
  );
}
