"use client";

import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden shadow-sm ${
        isOpen ? "border-accent shadow-lg" : "border-slate-200 hover:shadow-md"
      }`}
    >
      {/* Button */}
      <button
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-semibold text-lg md:text-xl text-primary pr-4">
          {question}
        </h4>
        <div className="flex-shrink-0">
          {isOpen ? (
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          )}
        </div>
      </button>

      {/* Answer */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {answer && (
          <div className="px-8 pb-6">
            <div className="pt-2 border-t border-slate-100">
              <p className="text-slate-600 leading-relaxed mt-4">{answer}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
