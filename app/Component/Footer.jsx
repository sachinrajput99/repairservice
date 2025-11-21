import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120]  text-white">
      <div className="container mx-auto px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-slate-300 text-sm mb-2">
              📞 <span className="text-white font-medium">+91-8510070555</span>
            </p>
            <p className="text-slate-300 text-sm mb-2">
              📧 <span className="text-white font-medium">atfservicecen@gmail.com</span>
            </p>
            
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>Washing Machine Repair</li>
              <li>Refrigerator Repair</li>
              <li>Microwave Repair</li>
              <li>LED TV Repair</li>
              <li>Air Conditioner Repair</li>
            </ul>
          </div>

          {/* Business Relationship */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Relationship</h3>
            <p className="text-slate-300 text-sm mb-2">
              <strong>Our Company Name:</strong> ATF Service Center
            </p>
            <p className="text-slate-300 text-sm mb-2">
              <strong>Owner Name:</strong> PARTH ADLAKHA 
            </p>
            <p className="text-slate-300 text-sm mb-4">
              GST:{" "} 06EXFPA7894Q1ZM
              <Link
                href="https://24x7customerssuppots.co.in/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
             
              </Link>
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              This website is collecting data for <strong>ATF Service Center</strong>.  
              ATF Service Center is owned and operated by <strong> PARTH ADLAKHA </strong>,  
              the sole proprietor of this business.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-slate-400 text-sm">
          <p>© 2025 ATF Service Center. All rights reserved.</p>
          {/* <p>
            Designed & Managed by{" "}
            <span className="text-blue-500 font-medium">24x7 Customer Service Centre</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
