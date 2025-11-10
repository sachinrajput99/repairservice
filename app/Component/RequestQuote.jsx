import Image from "next/image";

export default function RequestQuote() {
  return (
    <section className="bg-[#0a57d1]  relative overflow-visible">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 items-center gap-10 relative z-10">
        
        {/* Left Side: Technician Image (3D effect) */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative w-[420px] h-[500px] translate-y-[-160px]">
            <Image
              src="/appointment.png"
              alt="Technician"
              fill
              className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)] transform scale-105 hover:scale-110 transition-transform duration-500"
            />

            {/* Glow shadow for 3D depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a57d1]/40 via-transparent to-transparent rounded-3xl blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-lg mx-auto relative z-20 translate-y-[0px]">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">
            Request a Quote
          </h3>

          <form className="space-y-5">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Phone & Service Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <select
                className="w-full border border-gray-300 rounded-md p-3 text-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                defaultValue="Washing Machine Repair"
              >
                <option>Washing Machine Repair</option>
                <option>LED TV Repair</option>
                <option>Refrigerator Repair</option>
                <option>AC Repair</option>
                <option>Microwave Repair</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#1cb9c8] hover:bg-[#17a6b3] text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Optional Background Blur Layer for Depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#083da1] opacity-10 z-0"></div>
    </section>
  );
}
