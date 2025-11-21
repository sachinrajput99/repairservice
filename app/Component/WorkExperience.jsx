"use client";
import { motion } from "framer-motion";
import { Briefcase, Users, Star } from "lucide-react";

export default function WorkExperience() {
  const stats = [
    {
      icon: <Briefcase size={50} />,
      value: "2000+",
      label: "Projects Completed",
    },
    {
      icon: <Users size={50} />,
      value: "99+",
      label: "Expert Workers",
    },
    {
      icon: <Star size={50} />,
      value: "100%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="bg-[#0b1120] py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 text-white">
        <div className="grid md:grid-cols-4 gap-12 items-center">
          {/* Left Section */}
          <div className="md:col-span-1 text-center md:text-left">
            <span className="text-blue-500 font-semibold uppercase tracking-wide">
              Our Statistics
            </span>
            <p className="text-4xl font-bold mt-3 leading-tight text-white">
              Our Work <br /> Experience
            </p>
           
          </div>

          {/* Right Section - Stats */}
          <div className="md:col-span-3 grid sm:grid-cols-3 gap-8 text-center">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 bg-[#1e293b] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(59,130,246,0.3)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex justify-center mb-5 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-4xl font-extrabold text-blue-600 drop-shadow-md">
                  {item.value}
                </h3>
                <p className="mt-2 text-gray-300 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-blue-600/5 pointer-events-none"></div>
    </section>
  );
}
