"use client";

import React, { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const sections = [
    { title: "Section 1", content: "This is the content for section 1." },
    { title: "Section 2", content: "This is the content for section 2." },
    { title: "Section 3", content: "This is the content for section 3." },
  ];

  return (
    <div
      style={{
        color: "red",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {sections.map((section, index) => {
        const isActive = activeIndex === index;

        return (
          <div className="accordion-section" key={index}>
            {/* The clickable header */}
            <div
              onClick={() => setActiveIndex(isActive ? null : index)}
              style={{
                background: "#eee",
                color: "#333",
                padding: "10px 20px",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {section.title} {isActive ? "-" : "+"}
            </div>

            {/* The content - only renders if this section is active */}
            {isActive && (
              <div
                style={{
                  padding: "10px 20px",
                  background: "#fff",
                  color: "#333",
                }}
              >
                {section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
