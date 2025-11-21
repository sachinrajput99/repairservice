"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";


// const SERVICE_ID ="service_ddgl88i"
// const TEMPLATE_ID ="template_u3id77g"
//  const PUBLIC_KEY ="pUQsTw2PaCAXouHPC"



const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          requirement: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setSuccess(false);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-slate-50 rounded-2xl p-8 lg:p-10">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/50"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/50"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Phone Number *
            </label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/50"
            />
          </div>

          <div>
            <label
              htmlFor="requirement"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Requirement *
            </label>
            <input
              type="text"
              id="requirement"
              required
              value={formData.requirement}   // FIXED HERE
              onChange={handleChange}
              placeholder="Tell us your requirement"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/50"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-primary mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Tell us about your property needs..."
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/50 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-accent/50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success === true && (
          <p className="text-green-500 text-center text-sm">
            ✅ Message sent successfully!
          </p>
        )}
        {success === false && (
          <p className="text-red-500 text-center text-sm">
            ❌ Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
