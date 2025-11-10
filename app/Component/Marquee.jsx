
import React from "react";

const caseStudies = [
  { image: "/amolik-logo.png" },
  { image: "/bptp-logo.png" },
  { image: "/omaxe-logo.png" },
  { image: "/rps-logo.png" },
  { image: "/adore-logo.png" },
  { image: "/amolik-logo.png" },
  { image: "/bptp-logo.png" },
  { image: "/omaxe-logo.png" },
  { image: "/rps-logo.png" },
  { image: "/adore-logo.png" },
];

export default function Marquee() {
  const repeated = [...caseStudies, ...caseStudies]; // For seamless marquee

  return (
    <section id="case-studies" className="py-20 overflow-hidden bg-white">
      <div className="mx-auto px-6 md:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-slate-600 font-semibold mb-2 text-lg md:text-4xl">
            Trusted by our beloved clients
          </h3>
          <p className="text-slate-500 text-sm md:text-lg max-w-2xl mx-auto">
            Partnering with industry leaders to deliver exceptional real estate
            experiences
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-14 w-max animate-tech-marquee">
            {repeated.map((item, idx) => (
              <img
                key={idx}
                src={item.image}
                alt={`Client Logo ${idx + 1}`}
                //   className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                className="h-12 w-auto mr-4 ml-4 object-contain opacity-80 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
