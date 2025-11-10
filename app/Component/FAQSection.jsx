import FAQItem from "./FAQItem"

const faqs = [
  {
    question: "How do I schedule a property visit?",
    answer:
      'Simply click any "Book Your Tour" button or call our dedicated hotline. Our property experts will coordinate a personalized tour at your convenience, including evenings and weekends.',
  },
  {
    question: "Are there any hidden charges when buying a property?",
    answer:
      "No, all costs are clearly listed. We ensure full transparency on pricing, including taxes and registration fees.",
  },
  {
    question: "Do you offer properties for rent as well?",
    answer:
      "Yes, we have an extensive portfolio of both rental and purchase properties. From luxury apartments to premium villas, we cater to all housing needs with flexible lease terms.",
  },
  {
    question: "What documents are required to buy a property?",
    answer:
      "Required documents include valid ID proof, address proof, income certificates, bank statements, and PAN card. Our team will guide you through the complete documentation process.",
  },
  {
    question: "Is property verification included?",
    answer:
      "Yes, we provide comprehensive property verification including legal clearance, title verification, and compliance checks to ensure your investment is completely secure.",
  },
];

export default function FAQSection() {
  return (
    <section id="faqs" className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto px-6 md:px-20 max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-primary">
            Frequently Asked Questions
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            This is where all the answers to your questions are.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useState } from "react";

// const faqs = [
//   {
//     question: "How do I schedule a property visit?",
//     answer:
//       'Simply click any "Book Your Tour" button or call our dedicated hotline. Our property experts will coordinate a personalized tour at your convenience, including evenings and weekends.',
//   },
//   {
//     question: "Are there any hidden charges when buying a property?",
//     answer:
//       "No, all costs are clearly listed. We ensure full transparency on pricing, including taxes and registration fees.",
//   },
//   {
//     question: "Do you offer properties for rent as well?",
//     answer:
//       "Yes, we have an extensive portfolio of both rental and purchase properties. From luxury apartments to premium villas, we cater to all housing needs with flexible lease terms.",
//   },
//   {
//     question: "What documents are required to buy a property?",
//     answer:
//       "Required documents include valid ID proof, address proof, income certificates, bank statements, and PAN card. Our team will guide you through the complete documentation process.",
//   },
//   {
//     question: "Is property verification included?",
//     answer:
//       "Yes, we provide comprehensive property verification including legal clearance, title verification, and compliance checks to ensure your investment is completely secure.",
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section id="faqs" className="bg-slate-50 py-16 md:py-20">
//       <div className="mx-auto px-6 md:px-20 max-w-4xl">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h3 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-primary">
//             Frequently Asked Questions
//           </h3>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             This is where all the answers to your questions are.
//           </p>
//         </div>

//         {/* FAQ List */}
//         <div className="space-y-4">
//           {faqs.map((faq, idx) => {
//             const isOpen = openIndex === idx;

//             return (
//               <div
//                 key={idx}
//                 className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden shadow-sm ${
//                   isOpen
//                     ? "border-accent shadow-lg"
//                     : "border-slate-200 hover:shadow-md"
//                 }`}
//               >
//                 <button
//                   className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors"
//                   onClick={() => setOpenIndex(isOpen ? null : idx)}
//                 >
//                   <h4 className="font-semibold text-lg md:text-xl text-primary pr-4">
//                     {faq.question}
//                   </h4>
//                   <div className="flex-shrink-0">
//                     {isOpen ? (
//                       <svg
//                         className="w-6 h-6 text-accent"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M6 18L18 6M6 6l12 12"
//                         ></path>
//                       </svg>
//                     ) : (
//                       <svg
//                         className="w-6 h-6 text-slate-400"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                         ></path>
//                       </svg>
//                     )}
//                   </div>
//                 </button>

//                 {/* Answer */}
//                 <div
//                   className={`transition-all duration-300 ${
//                     isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                   } overflow-hidden`}
//                 >
//                   {faq.answer && (
//                     <div className="px-8 pb-6">
//                       <div className="pt-2 border-t border-slate-100">
//                         <p className="text-slate-600 leading-relaxed mt-4">
//                           {faq.answer}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
