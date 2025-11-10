"use client"
import Image from "next/image";

const properties = [
  {
    name: "Washing Machine Repair",
    description:
      "No need to worry—24×7 Customer Service Centre provides expert washing machine repair services in Delhi to get your appliance back up and running smoothly.",
    image: "/washing-machine-service.jpg",
    phone: "18005703132",
  },
  {
    name: "Refrigerator Repair",
    description:
      "A malfunctioning fridge can quickly turn a good day into a frustrating one. But don’t worry—24×7 Customer Service Centre offers expert refrigerator repair services in Delhi to get things back on track.",
    image: "/refrigeratorrepair.jpeg",
    phone: "18005703132",
  },
  {
    name: "Microwave Repair",
    description:
      "If the turntable isn’t spinning or the control panel isn't responding, you're likely dealing with more than just a minor issue. If both are true, you're definitely in the right place for help.",
    image: "/microwave-repair.jpg",
    phone: "18005703132",
  },
   {
    name: "LED TV Repair",
    description:
      "24×7 Customer Service Centre offers reliable and professional LED TV repair services in Delhi to bring your entertainment back to life.",
    image: "/led-tv-repair.jpg",
    phone: "18005703132",
  },
  {
    name: "Air Conditioner Repair",
    description:
      "Does it seem that your air conditioner doesn’t want to cool? Are water leaks, strange noises, or power fluctuations giving you problems? Hire the best professionals today for AC Repair in Delhi.",
    image: "/air-conditioner-repair.jpg",
    phone: "18005703132",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl mt-12 font-bold text-center mb-12">
          Our Best Services
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {properties.map((property, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[260px]">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {property.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-5">
                  <a
                    href={`tel:${property.phone}`}
                    className="block text-center bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
