"use client";

// import './accordion.css';

interface AccordionItem {
  title: string;
  content: string;
}

const accordionItems: AccordionItem[] = [
  {
    title: "What is this service?",
    content:
      "This service provides comprehensive solutions for your business needs. We offer reliable, scalable, and secure infrastructure with 24/7 support to ensure your operations run smoothly.",
  },
  {
    title: "How do I get started?",
    content:
      "Getting started is simple. Sign up for an account, choose your plan, and follow our quick setup guide. Our onboarding team is available to assist you throughout the process.",
  },
  {
    title: "What is your pricing?",
    content:
      "We offer flexible pricing plans to suit businesses of all sizes. Our pricing is transparent with no hidden fees. Contact our sales team for a custom quote based on your specific requirements.",
  },
];

export default function Accordion() {
  return (
    <div className="mx-auto w-full max-w-2xl py-8">
      <div className="space-y-4">
        {accordionItems.map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-gray-200 shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            <summary className="flex w-full cursor-pointer select-none items-center justify-between bg-gray-50 p-4 transition-colors duration-200 hover:bg-gray-100">
              <span className="font-semibold text-gray-900">{item.title}</span>
              <span className="text-xl text-gray-600 transition-transform duration-200 group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="accordion-content border-t border-gray-200 bg-white">
              <p className="p-4 leading-relaxed text-gray-700">
                {item.content}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
