"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// const SERVICE_ID = process.env.;
// const TEMPLATE_ID = process.env.;
// const PUBLIC_KEY = process.env.;



export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null); // null | true | false

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
          subject: "",
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
              placeholder="Enter your Full name"
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
              placeholder="Enter your Phone Number"
              required
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/50"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-primary mb-2"
            >
              Subject *
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 pr-10 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/50 appearance-none"
            >
              <option value="">Select a subject</option>
              <option value="looking to buy">Looking to Buy</option>
              <option value="want to sell">Want to Sell</option>
              <option value="property for rent">Property for Rent</option>
              <option value="free consultation">Free Consultation</option>
              <option value="other">Other</option>
            </select>
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
          className="w-full  bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-accent/50"
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

        <p className="text-sm text-slate-600 text-center">
          By submitting this form, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>
          .
        </p>
      </form>
    </div>
  );
}
