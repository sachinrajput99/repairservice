import Image from "next/image";
import { FaBuilding, FaHandshake } from "react-icons/fa"; // 👈 imported icons

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f9fafb] py-24">
      <div className="container mx-auto px-4 grid lg:grid-cols-2  items-center">
        {/* Left Content */}
        <div>
          <span className="text-blue-600 font-medium block mb-3">Why choose us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug text-gray-900">
            With over 25 years experience, our technicians are highly experienced in
            repairing Home Appliances
          </h2>

          {/* Expert Technicians */}
          <div className="flex items-start mb-6">
            <div className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-full flex-shrink-0">
              <FaBuilding className="text-2xl" /> {/* 👈 Blue Icon */}
            </div>
            <div className="ml-5">
              <h4 className="text-xl font-semibold mb-2">Expert Technicians</h4>
              <p className="text-gray-500 leading-relaxed">
                Our team consists of experienced and certified technicians who are
                well-versed in repairing a wide range of home appliances, from
                refrigerators and washing machines to microwaves and air conditioners.
              </p>
            </div>
          </div>

          {/* Prompt Service */}
          <div className="flex items-start">
            <div className="bg-[#1cb9c8] text-white w-14 h-14 flex items-center justify-center rounded-full flex-shrink-0">
              <FaHandshake className="text-2xl" /> {/* 👈 Green Icon */}
            </div>
            <div className="ml-5">
              <h4 className="text-xl font-semibold mb-2">Prompt Service</h4>
              <p className="text-gray-500 leading-relaxed">
                We value your time, and our prompt service ensures that we address your
                appliance issues swiftly. Our technicians are equipped to provide
                on-the-spot diagnostics and solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[85%]">
            <div className="rounded-full overflow-hidden border-[10px] border-blue-600">
              <Image
                src="/choose-2.jpg"
                alt="Technician repairing AC"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-6 right-[-30px] bg-blue-600 text-white rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-lg">
              <h3 className="text-3xl font-bold">100%</h3>
              <span className="text-sm mt-1">Service warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
