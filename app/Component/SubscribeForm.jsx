import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // message for user

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBE_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus("Thank you for subscribing!");
        setEmail("");
      })
      .catch(() => {
        setStatus("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <div>
      <h5 className="font-semibold mb-4 text-lg">Get Exclusive Updates</h5>
      <p className="text-slate-300 text-sm mb-6">
        Be the first to know about new properties, market insights, and
        exclusive deals.
      </p>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 text-slate-900 bg-white border-0 outline-none"
        />
        <button
          type="submit"
          className="w-full py-3 text-center bg-[#f15a24] hover:bg-orange-600 text-white font-semibold"
        >
          Subscribe Now
        </button>
      </form>

      {status && (
        <p
          className={`mt-3 ${
            status.includes("Thank") ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
}
